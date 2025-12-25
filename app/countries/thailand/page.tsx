'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Award, Brain, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ThailandMenu() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [progress, setProgress] = useState({ questions: { correct: 0, total: 0 }, lessons: 0, exams: { passed: 0, total: 0 } });

  const updateProgress = () => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      const examCount = parseInt(localStorage.getItem('thailand_exam_count') || '0');
      const examPassed = parseInt(localStorage.getItem('thailand_exam_passed') || '0');
      
      // Статистика ответов в тренажере
      const correctAnswers = parseInt(localStorage.getItem('thailand_trainer_correct') || '0');
      const totalAnswers = parseInt(localStorage.getItem('thailand_trainer_total') || '0');
      
      setProgress({
        questions: { correct: correctAnswers, total: totalAnswers }, // Правильные/всего ответов
        lessons: completedLessons.length, // Пройденные уроки
        exams: { passed: examPassed, total: examCount } // Пройдено/всего экзаменов
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isRegistered = localStorage.getItem('isRegistered');
      if (!isRegistered) {
        router.push('/');
        return;
      }
      const name = localStorage.getItem('userName');
      if (name) setUserName(name);

      updateProgress();
      
      // Обновляем прогресс при изменении данных
      const interval = setInterval(updateProgress, 1000);
      return () => clearInterval(interval);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 antialiased">
      {/* Header */}
      <header className="bg-white/85 backdrop-blur-xl fixed w-full top-0 z-50 border-b border-slate-200 dark:border-slate-800 transition-all duration-300">
        <div className="container mx-auto px-4 h-14 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/countries" className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
              <ArrowLeft className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20">
                {/* Tranio Spiral Logo */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4ZM12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8Z" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm leading-none tracking-tight text-slate-900 dark:text-white">Tranio Academy</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">🇹🇭 Таиланд</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {userName && (
              <div className="hidden md:block text-xs text-slate-600 dark:text-slate-400">
                Привет, <span className="font-semibold text-slate-900 dark:text-white">{userName}</span>!
              </div>
            )}
            <Link href="/profile" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition-all text-xs">
              <User className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Профиль</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-20 pb-6">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-3">
            <span className="text-2xl">🇹🇭</span>
            <span className="text-[10px] font-semibold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Таиланд</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-slate-900 dark:text-white leading-tight">
            Недвижимость в <span className="text-blue-600 dark:text-blue-500">Таиланде</span>
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Изучайте рынок недвижимости, проходите экзамены и практикуйтесь с интерактивным тренажёром
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 max-w-5xl mx-auto">
          <Link
            href="/countries/thailand/trainer"
            className="group relative flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-blue-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-blue-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
            <div className="absolute top-3 right-3 px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[9px] font-bold rounded-md uppercase tracking-wider">
              Основное
            </div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Тренажёр знаний</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Интерактивная практика с вопросами и геймификацией
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/theory"
            className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-emerald-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-emerald-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Теория</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                8 структурированных уроков по всем аспектам недвижимости
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/exam"
            className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-amber-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-amber-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Экзамен</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Проверьте свои знания и получите сертификат брокера
              </p>
            </div>
          </Link>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Brain className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Ответы</h3>
            </div>
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {progress.questions.correct} / {progress.questions.total}
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Правильных ответов</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Уроки</h3>
            </div>
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">{progress.lessons} из 8</div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Просмотрено</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-1.5 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200">Экзамены</h3>
            </div>
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-1">
              {progress.exams.passed} / {progress.exams.total}
            </div>
            <p className="text-[10px] text-slate-500 dark:text-slate-400">Пройдено / Сдано</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            © 2023 Tranio Academy. Все права защищены.
          </p>
          <div className="flex gap-3">
            <a className="text-xs text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#">Поддержка</a>
            <a className="text-xs text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}