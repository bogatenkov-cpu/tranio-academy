'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Award, CheckCircle, Trophy, RotateCcw, Clock, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { AppHeader, AppFooter } from '@/components/AppShell';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/lib/hooks/useProgress';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

interface ExamResult {
  date: string;
  score: number;
  total: number;
  percentage: number;
}

export default function ExamPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { updateExamStats, addActivity, addPoints, loading: progressLoading } = useProgress('thailand');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamFinished, setIsExamFinished] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 минут в секундах
  const [score, setScore] = useState(0);

  // Вопросы для экзамена
  const examQuestions: Question[] = [
    {
      id: 'q1',
      question: 'Может ли иностранец купить землю в Таиланде на 100%?',
      options: [
        'Да, без ограничений',
        'Нет, только через компанию',
        'Да, но только в определенных районах',
        'Нет, только кондоминиум на 100%'
      ],
      correctAnswer: 3,
      explanation: 'Иностранец может купить кондоминиум (квартиру) на 100%, но не может напрямую владеть землей. Землю можно купить только через тайскую компанию.',
      category: 'buying'
    },
    {
      id: 'q2',
      question: 'Какой налог платит покупатель при покупке недвижимости в Таиланде?',
      options: [
        '1% от стоимости',
        '2% от стоимости (Transfer Fee)',
        '3% от стоимости',
        'Налог не взимается'
      ],
      correctAnswer: 1,
      explanation: 'Налог на передачу права собственности (Transfer Fee) составляет 2% от оценочной стоимости недвижимости.',
      category: 'taxes'
    },
    {
      id: 'q3',
      question: 'Какой район Пхукета считается самым престижным для инвестиций?',
      options: [
        'Патонг',
        'Банг Тао',
        'Ката',
        'Карон'
      ],
      correctAnswer: 1,
      explanation: 'Банг Тао (Bang Tao) - элитный район с виллами, курортами и высоким потенциалом роста.',
      category: 'locations'
    },
    {
      id: 'q4',
      question: 'Какая средняя доходность от аренды недвижимости в Таиланде?',
      options: [
        '2-3% годовых',
        '5-8% годовых',
        '10-12% годовых',
        '15-20% годовых'
      ],
      correctAnswer: 1,
      explanation: 'Средняя доходность от аренды составляет 5-8% годовых в зависимости от типа объекта и локации.',
      category: 'investment'
    },
    {
      id: 'q5',
      question: 'Дает ли покупка недвижимости в Таиланде право на вид на жительство?',
      options: [
        'Да, автоматически',
        'Нет, но можно получить визу Elite при покупке от 10 млн бат',
        'Да, при покупке от 5 млн бат',
        'Нет, никогда'
      ],
      correctAnswer: 1,
      explanation: 'Покупка недвижимости сама по себе не дает ВНЖ, но при покупке от 10 млн бат можно получить визу Thailand Elite.',
      category: 'visa'
    },
    {
      id: 'q6',
      question: 'Сколько времени занимает процесс покупки недвижимости в Таиланде?',
      options: [
        '7-14 дней',
        '30-60 дней',
        '3-6 месяцев',
        'Более 6 месяцев'
      ],
      correctAnswer: 1,
      explanation: 'Обычно процесс занимает 30-60 дней от подписания договора до регистрации права собственности.',
      category: 'buying'
    },
    {
      id: 'q7',
      question: 'Какой налог на доход от аренды недвижимости в Таиланде?',
      options: [
        'Фиксированный 5%',
        'От 5% до 35% в зависимости от суммы',
        '10% от дохода',
        'Налог не взимается'
      ],
      correctAnswer: 1,
      explanation: 'Подоходный налог на аренду составляет от 5% до 35% в зависимости от суммы дохода.',
      category: 'taxes'
    },
    {
      id: 'q8',
      question: 'Где на Пхукете лучшие инвестиционные возможности?',
      options: [
        'Патонг - самый популярный',
        'Камала - развивающийся район',
        'Ката - для отдыха',
        'Все районы одинаковы'
      ],
      correctAnswer: 1,
      explanation: 'Камала (Kamala) - развивающийся район с хорошим потенциалом роста и инвестиционными возможностями.',
      category: 'locations'
    },
    {
      id: 'q9',
      question: 'Какая средняя цена за кв.м в Пхукете?',
      options: [
        'От $500 до $1,000',
        'От $1,500 до $5,000',
        'От $5,000 до $10,000',
        'Более $10,000'
      ],
      correctAnswer: 1,
      explanation: 'Средняя цена за кв.м в Пхукете составляет от $1,500 до $5,000 в зависимости от района и типа объекта.',
      category: 'prices'
    },
    {
      id: 'q10',
      question: 'Какой район Самуи подходит для семей с детьми?',
      options: [
        'Чавенг - самый активный',
        'Бопхут - спокойный с инфраструктурой',
        'Ламай - для молодежи',
        'Мэнам - удаленный'
      ],
      correctAnswer: 1,
      explanation: 'Бопхут (Bophut) - спокойный район с хорошей инфраструктурой, школами и подходит для семей.',
      category: 'locations'
    },
    {
      id: 'q11',
      question: 'Нужно ли платить налог на имущество ежегодно в Таиланде?',
      options: [
        'Нет, налог не взимается',
        'Да, от 0.02% до 0.1% от стоимости',
        'Да, фиксированный 1%',
        'Только для коммерческой недвижимости'
      ],
      correctAnswer: 1,
      explanation: 'Налог на землю и здания (Land and Building Tax) составляет от 0.02% до 0.1% от оценочной стоимости.',
      category: 'taxes'
    },
    {
      id: 'q12',
      question: 'Как рассчитать ROI для недвижимости в Таиланде?',
      options: [
        'ROI = Стоимость / Годовой доход',
        'ROI = (Годовой доход от аренды / Стоимость покупки) × 100%',
        'ROI = Годовой доход × 10',
        'ROI не применим для недвижимости'
      ],
      correctAnswer: 1,
      explanation: 'ROI (Return on Investment) = (Годовой доход от аренды / Стоимость покупки) × 100%.',
      category: 'investment'
    },
    {
      id: 'q13',
      question: 'Какие документы обязательны для покупки кондоминиума иностранцем?',
      options: [
        'Только паспорт',
        'Паспорт и справка о переводе средств из-за границы',
        'Паспорт, справка о средствах и документы на объект',
        'Никаких документов не требуется'
      ],
      correctAnswer: 2,
      explanation: 'Нужны: паспорт, справка о переводе средств из-за границы (FET - Foreign Exchange Transaction) и документы на объект.',
      category: 'buying'
    },
    {
      id: 'q14',
      question: 'Где самые низкие цены на недвижимость в Таиланде?',
      options: [
        'Пхукет',
        'Паттайя и Самуи',
        'Бангкок',
        'Все цены одинаковы'
      ],
      correctAnswer: 1,
      explanation: 'В Паттайе и на Самуи цены ниже - от $800 до $2,500 за кв.м, в то время как на Пхукете выше.',
      category: 'prices'
    },
    {
      id: 'q15',
      question: 'Какой минимальный срок владения недвижимостью для получения визы Elite?',
      options: [
        'Нет минимального срока',
        '1 год',
        '3 года',
        '5 лет'
      ],
      correctAnswer: 0,
      explanation: 'Для получения визы Thailand Elite при покупке недвижимости от 10 млн бат нет минимального срока владения.',
      category: 'visa'
    }
  ];

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
    }
  }, [user, authLoading, router]);

  const finishExam = useCallback(async () => {
    let correct = 0;
    examQuestions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setIsExamFinished(true);
    
    // Сохраняем результат в Supabase
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const bonusPoints = percentage >= 80 ? 50 : 0;
    
    await updateExamStats(correct, examQuestions.length);
    await addActivity('exam', `Экзамен: ${percentage}% (${correct}/${examQuestions.length})`, bonusPoints);
    
    if (bonusPoints > 0) {
      await addPoints(bonusPoints);
    }
  }, [answers, examQuestions, updateExamStats, addActivity, addPoints]);

  useEffect(() => {
    if (isExamStarted && !isExamFinished && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isExamStarted, isExamFinished, timeRemaining, finishExam]);

  const startExam = () => {
    setIsExamStarted(true);
    setAnswers(new Array(examQuestions.length).fill(-1));
    setTimeRemaining(1800);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < examQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] !== -1 ? answers[currentQuestionIndex + 1] : null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] !== -1 ? answers[currentQuestionIndex - 1] : null);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = examQuestions[currentQuestionIndex];
  const progress = isExamStarted ? ((currentQuestionIndex + 1) / examQuestions.length) * 100 : 0;
  const answeredCount = answers.filter(a => a !== -1).length;

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

  if (!isExamStarted) {
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
        <AppHeader backHref="/countries/thailand" subtitle="Экзамен" />

        {/* Main */}
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-50 rounded-2xl mb-6">
                <Award className="w-12 h-12 text-amber-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-3">Экзамен по недвижимости в Таиланде</h1>
              <p className="text-base text-slate-600 mb-8">
                Проверьте свои знания и получите сертификат брокера
              </p>

              <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Информация об экзамене:</h2>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span><strong>{examQuestions.length} вопросов</strong> по всем темам</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span><strong>30 минут</strong> на прохождение</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-5 h-5 text-amber-600" />
                    </div>
                    <span>Для получения сертификата нужно набрать <strong>80% и более</strong></span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                      <RotateCcw className="w-5 h-5 text-purple-600" />
                    </div>
                    <span>Можно пересдавать неограниченное количество раз</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={startExam}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg shadow-blue-500/30"
              >
                Начать экзамен
              </button>
            </div>
          </div>
        </main>

        <AppFooter />
      </div>
    );
  }

  if (isExamFinished) {
    const percentage = Math.round((score / examQuestions.length) * 100);
    const passed = percentage >= 80;

    return (
      <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
        <AppHeader backHref="/countries/thailand" subtitle="Результаты" />

        {/* Main */}
        <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 text-center">
              {passed ? (
                <>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 rounded-2xl mb-4">
                    <Trophy className="w-12 h-12 text-green-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-green-600 mb-3">Поздравляем!</h1>
                  <p className="text-lg text-slate-600 mb-8">Вы успешно прошли экзамен</p>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-50 rounded-2xl mb-4">
                    <Award className="w-12 h-12 text-orange-600" />
                  </div>
                  <h1 className="text-3xl font-bold text-orange-600 mb-3">Продолжайте учиться</h1>
                  <p className="text-lg text-slate-600 mb-8">Для сертификата нужно набрать 80%</p>
                </>
              )}

              <div className="bg-slate-50 rounded-xl p-8 mb-8">
                <div className={`text-6xl font-bold mb-2 ${passed ? 'text-green-600' : 'text-orange-600'}`}>
                  {percentage}%
                </div>
                <p className="text-slate-600 mb-6">
                  Правильных ответов: <strong>{score}</strong> из {examQuestions.length}
                </p>
                <div className="w-full bg-slate-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full transition-all ${
                      passed ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>

              {passed && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                  <Trophy className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Сертификат брокера</h3>
                  <p className="text-amber-800">Вы получили сертификат специалиста по недвижимости в Таиланде!</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    setIsExamStarted(false);
                    setIsExamFinished(false);
                    setCurrentQuestionIndex(0);
                    setAnswers(new Array(examQuestions.length).fill(-1));
                    setScore(0);
                  }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Пересдать экзамен
                </button>
                <Link
                  href="/countries/thailand"
                  className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
                >
                  Вернуться в меню
                </Link>
              </div>
            </div>
          </div>
        </main>

        <AppFooter />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand" subtitle="Экзамен" />

      {/* Main */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-end gap-4 mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-700 rounded-xl">
              <Clock className="w-5 h-5" />
              <span className="font-bold">{formatTime(timeRemaining)}</span>
            </div>
            <div className="hidden sm:block text-sm font-medium text-slate-600">
              {currentQuestionIndex + 1} / {examQuestions.length}
            </div>
          </div>
          {/* Progress */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-slate-700">
                Отвечено: {answeredCount} / {examQuestions.length}
              </span>
              <span className="text-sm font-medium text-slate-700">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-8 mb-6">
            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                Вопрос {currentQuestionIndex + 1}
              </span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-8">{currentQuestion.question}</h2>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        selectedAnswer === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-slate-700">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Назад
            </button>

            <div className="text-sm text-slate-600 text-center">
              {answeredCount === examQuestions.length ? (
                <span className="text-green-600 font-semibold">✓ Все отвечены</span>
              ) : (
                <span className="hidden sm:inline">Осталось: {examQuestions.length - answeredCount}</span>
              )}
            </div>

            {currentQuestionIndex === examQuestions.length - 1 ? (
              <button
                onClick={finishExam}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Завершить
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Далее →
              </button>
            )}
          </div>
        </div>
      </main>

      <AppFooter />
    </div>
  );
}

