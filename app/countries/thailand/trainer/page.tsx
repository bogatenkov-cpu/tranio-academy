'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Brain, RotateCcw, CheckCircle, XCircle, Trophy, ChevronRight, Zap, TrendingUp, Loader2, CheckSquare } from 'lucide-react';
import Link from 'next/link';
import { AppHeader, AppFooter } from '@/components/AppShell';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/lib/hooks/useProgress';
import { allQuestions, type Question } from '@/lib/data/thailand-questions';

interface ShuffledQuestion extends Omit<Question, 'correctAnswers'> {
  correctAnswers: number[];
  isMultiSelect: boolean;
}

export default function TrainerPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { progress: userProgress, loading: progressLoading, addPoints, updateStreak, addStudiedCard, addActivity } = useProgress('thailand');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Set<number>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [selectedCategory] = useState<string>('all');
  const [studyMode] = useState<'all' | 'new' | 'review'>('all');
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [sessionQuestions, setSessionQuestions] = useState<ShuffledQuestion[]>([]);
  const [studiedQuestions, setStudiedQuestions] = useState<Set<string>>(new Set());
  const [streak, setStreak] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
      return;
    }
    
  }, [user, authLoading, router]);

  useEffect(() => {
    if (!progressLoading && userProgress) {
      setStudiedQuestions(new Set(userProgress.studied_cards));
      setStreak(userProgress.streak);
    }
  }, [userProgress, progressLoading]);

  const loadQuestions = useCallback(() => {
    let filtered = [...allQuestions];

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(q => q.category === selectedCategory);
    }

    const studiedSet = new Set(studiedQuestions);

    if (studyMode === 'new') {
      filtered = filtered.filter(q => !studiedSet.has(q.id));
    } else if (studyMode === 'review') {
      filtered = filtered.filter(q => studiedSet.has(q.id));
    }

    const shuffled: ShuffledQuestion[] = filtered
      .sort(() => Math.random() - 0.5)
      .map(q => {
        const isMulti = q.correctAnswers.length > 1;
        const optionsWithIndices = q.options.map((option, index) => ({ option, index }));
        const shuffledPairs = optionsWithIndices.sort(() => Math.random() - 0.5);
        const shuffledOptions = shuffledPairs.map(p => p.option);
        const newCorrectAnswers = q.correctAnswers.map(
          origIdx => shuffledPairs.findIndex(p => p.index === origIdx)
        );

        return {
          ...q,
          options: shuffledOptions,
          correctAnswers: newCorrectAnswers,
          isMultiSelect: isMulti,
        };
      });

    setSessionQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Set());
    setIsSubmitted(false);
    setShowExplanation(false);
    setIsCorrectAnswer(false);
    setScore({ correct: 0, total: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, studyMode]);

  useEffect(() => {
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, studyMode]);

  const currentQuestion = sessionQuestions[currentQuestionIndex];

  const handleAnswerToggle = (answerIndex: number) => {
    if (isSubmitted || isAnimating) return;

    const question = currentQuestion;
    if (!question) return;

    if (question.isMultiSelect) {
      setSelectedAnswers(prev => {
        const next = new Set(prev);
        if (next.has(answerIndex)) {
          next.delete(answerIndex);
        } else {
          next.add(answerIndex);
        }
        return next;
      });
    } else {
      setSelectedAnswers(new Set([answerIndex]));
      submitAnswer(new Set([answerIndex]), question);
    }
  };

  const submitAnswer = (answers: Set<number>, question: ShuffledQuestion) => {
    if (isSubmitted) return;

    const selectedSet = answers;
    const correctSet = new Set(question.correctAnswers);
    const isCorrect =
      selectedSet.size === correctSet.size &&
      [...selectedSet].every(a => correctSet.has(a));

    setIsAnimating(true);
    setIsCorrectAnswer(isCorrect);
    setIsSubmitted(true);

    setTimeout(() => {
      setShowExplanation(true);
      setIsAnimating(false);
    }, 300);

    const categoryName = categories.find(c => c.id === question.category)?.name || 'Общие';

    if (isCorrect) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      setStreak(prev => prev + 1);
      updateStreak(true);
      addPoints(2);
      addActivity('trainer', `Тренажёр: ${categoryName}`, 2);
    } else {
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
      setStreak(0);
      updateStreak(false);
      addActivity('trainer', `Тренажёр: ${categoryName} (ошибка)`, 0);
    }

    if (question) {
      const newStudied = new Set(studiedQuestions);
      newStudied.add(question.id);
      setStudiedQuestions(newStudied);
    }
  };

  const handleMultiSubmit = () => {
    if (!currentQuestion || selectedAnswers.size === 0 || isSubmitted) return;
    submitAnswer(selectedAnswers, currentQuestion);
  };

  const handleNext = () => {
    if (currentQuestion) {
      addStudiedCard(currentQuestion.id);
    }

    setIsAnimating(true);
    setTimeout(() => {
      if (currentQuestionIndex < sessionQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedAnswers(new Set());
        setIsSubmitted(false);
        setShowExplanation(false);
        setIsCorrectAnswer(false);
      } else {
        loadQuestions();
      }
      setIsAnimating(false);
    }, 200);
  };

  const categories = [
    { id: 'all', name: 'Все категории', icon: '📚', color: 'from-slate-500 to-slate-600' },
    { id: 'locations', name: 'Локации', icon: '🗺️', color: 'from-blue-500 to-cyan-500' },
    { id: 'buying', name: 'Покупка', icon: '📝', color: 'from-purple-500 to-pink-500' },
    { id: 'investment', name: 'Инвестиции', icon: '📈', color: 'from-rose-500 to-pink-500' },
    { id: 'life', name: 'Жизнь в Таиланде', icon: '🌴', color: 'from-teal-500 to-green-500' },
    { id: 'visa', name: 'ВНЖ и гражданство', icon: '🛂', color: 'from-indigo-500 to-blue-500' },
    { id: 'prices', name: 'Цены', icon: '💵', color: 'from-amber-500 to-orange-500' },
    { id: 'taxes', name: 'Налоги', icon: '💰', color: 'from-emerald-500 to-teal-500' },
    { id: 'maintenance', name: 'Содержание', icon: '🔧', color: 'from-blue-500 to-cyan-500' },
  ];

  const getDifficultyText = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'Легко';
      case 'medium': return 'Средне';
      case 'hard': return 'Сложно';
      default: return '';
    }
  };

  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!currentQuestion && sessionQuestions.length === 0) {
    return (
      <div className="bg-slate-50 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-md bg-white border border-slate-200 rounded-2xl shadow-lg p-8">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Brain className="w-10 h-10 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Нет вопросов для изучения</h3>
          <p className="text-slate-600 mb-6">Попробуйте изменить фильтры или выбрать другую категорию</p>
          <button
            onClick={loadQuestions}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Загрузить все вопросы
          </button>
        </div>
      </div>
    );
  }

  const progress = sessionQuestions.length > 0
    ? ((currentQuestionIndex + 1) / sessionQuestions.length) * 100
    : 0;

  const currentCategory = categories.find(c => c.id === currentQuestion?.category);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand" subtitle="Тренажёр" />

      <main className="flex-grow container mx-auto px-3 sm:px-4 pt-16 sm:pt-20 pb-6 sm:pb-8">
        <div className="max-w-4xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <div className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-slate-600">Прогресс</span>
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">{Math.round(progress)}%</div>
            <div className="mt-2 sm:mt-3 w-full bg-slate-200 rounded-full h-1.5 sm:h-2">
              <div
                className="bg-blue-600 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-slate-600">Точность</span>
              <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">
              {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
            </div>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-500">
              {score.correct} / {score.total}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-sm">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <span className="text-xs sm:text-sm font-medium text-slate-600">Вопрос</span>
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
            </div>
            <div className="text-lg sm:text-2xl font-bold text-slate-900">
              {currentQuestionIndex + 1} / {sessionQuestions.length}
            </div>
            <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs text-slate-500">
              Осталось {sessionQuestions.length - currentQuestionIndex - 1}
            </div>
          </div>
        </div>

        {/* Question Card */}
        {currentQuestion && (
          <div className={`bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${isAnimating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'}`}>
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <span className="text-lg sm:text-xl">{currentCategory?.icon}</span>
                  </div>
                  <div>
                    <div className="text-slate-900 text-xs sm:text-sm font-semibold">{currentCategory?.name}</div>
                    <span className={`text-[10px] sm:text-xs font-medium ${
                      currentQuestion.difficulty === 'easy' ? 'text-green-600' :
                      currentQuestion.difficulty === 'medium' ? 'text-amber-600' :
                      'text-red-600'
                    }`}>
                      {getDifficultyText(currentQuestion.difficulty)}
                    </span>
                  </div>
                </div>
                {currentQuestion.isMultiSelect && (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <CheckSquare className="w-3.5 h-3.5 text-indigo-600" />
                    <span className="text-[10px] sm:text-xs font-semibold text-indigo-600">Несколько ответов</span>
                  </div>
                )}
              </div>
            </div>

            {/* Question */}
            <div className="px-4 sm:px-6 py-5 sm:py-8">
              <h2 className="text-base sm:text-xl font-bold text-slate-900 mb-5 sm:mb-8 leading-relaxed">
                {currentQuestion.question}
              </h2>

              {/* Answer Options */}
              <div className="space-y-2 sm:space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers.has(index);
                  const isCorrect = currentQuestion.correctAnswers.includes(index);
                  const showResult = showExplanation;

                  let buttonClass = "w-full text-left px-3 sm:px-5 py-3 sm:py-4 rounded-xl border-2 transition-all text-xs sm:text-sm font-medium relative ";

                  if (showResult) {
                    if (isCorrect) {
                      buttonClass += "bg-green-50 border-green-400 text-green-900 ring-2 ring-green-400/20";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "bg-red-50 border-red-400 text-red-900";
                    } else {
                      buttonClass += "bg-slate-50 border-slate-200 text-slate-500";
                    }
                  } else if (isSelected) {
                    buttonClass += "bg-blue-50 border-blue-400 text-blue-900 ring-2 ring-blue-400/20";
                  } else {
                    buttonClass += "bg-white border-slate-200 text-slate-900 hover:border-blue-400 hover:bg-blue-50 cursor-pointer";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerToggle(index)}
                      disabled={isSubmitted}
                      className={buttonClass}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 ${
                          showResult && isCorrect
                            ? 'bg-green-500 text-white'
                            : showResult && isSelected && !isCorrect
                            ? 'bg-red-500 text-white'
                            : isSelected && !showResult
                            ? 'bg-blue-500 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {currentQuestion.isMultiSelect && !showResult ? (
                            isSelected ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <span className="w-4 h-4 border-2 border-slate-300 rounded" />
                            )
                          ) : (
                            String.fromCharCode(65 + index)
                          )}
                        </div>
                        <span className="flex-1">{option}</span>
                        {showResult && isCorrect && (
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Confirm button for multi-select */}
              {currentQuestion.isMultiSelect && !isSubmitted && (
                <button
                  onClick={handleMultiSubmit}
                  disabled={selectedAnswers.size === 0}
                  className={`mt-4 sm:mt-6 w-full px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                    selectedAnswers.size > 0
                      ? 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <CheckSquare className="w-5 h-5" />
                  Подтвердить ответ ({selectedAnswers.size} выбрано)
                </button>
              )}

              {/* Explanation */}
              {showExplanation && (
                <div className={`mt-4 sm:mt-6 p-3 sm:p-5 rounded-xl border ${
                  isCorrectAnswer
                    ? 'bg-green-50 border-green-200'
                    : 'bg-amber-50 border-amber-200'
                }`}>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${
                      isCorrectAnswer ? 'bg-green-500' : 'bg-amber-500'
                    }`}>
                      {isCorrectAnswer ? (
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      ) : (
                        <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm sm:text-base font-bold mb-1 sm:mb-2 ${
                        isCorrectAnswer ? 'text-green-900' : 'text-amber-900'
                      }`}>
                        {isCorrectAnswer ? '✓ Правильно!' : '✗ Неправильно'}
                      </p>
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Next Button */}
            {showExplanation && (
              <div className="px-4 sm:px-6 py-4 sm:py-5 bg-slate-50 border-t border-slate-200">
                {currentQuestionIndex < sessionQuestions.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm sm:text-base hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    Следующий вопрос
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-4">
                      <Trophy className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Сессия завершена!</h3>
                    <p className="text-slate-600 mb-1">Вы ответили на {score.total} вопросов</p>
                    <p className="text-lg font-semibold text-blue-600 mb-6">
                      Правильно: {score.correct} из {score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        onClick={loadQuestions}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                      >
                        <RotateCcw className="w-5 h-5" />
                        Продолжить обучение
                      </button>
                      <Link
                        href="/countries/thailand"
                        className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                      >
                        Вернуться в меню
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        </div>
      </main>

      <AppFooter />
    </div>
  );
}
