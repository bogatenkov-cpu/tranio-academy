'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Award, Brain, ArrowLeft } from 'lucide-react';
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
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link href="/countries" className="p-2 hover:bg-slate-100 rounded-xl transition-all">
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </Link>
            <Link href="/countries" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5 C30 5, 5 20, 5 40 C5 55, 15 65, 25 70 C15 75, 10 85, 15 95" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 15 C35 15, 15 25, 15 42 C15 52, 22 60, 30 65" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 25 C40 25, 25 32, 25 45 C25 52, 30 58, 38 62" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="8" fill="#1e40af"/>
                  <path d="M50 95 C70 95, 95 80, 95 60 C95 45, 85 35, 75 30 C85 25, 90 15, 85 5" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 85 C65 85, 85 75, 85 58 C85 48, 78 40, 70 35" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 75 C60 75, 75 68, 75 55 C75 48, 70 42, 62 38" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
                <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-1">🇹🇭 Таиланд</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center gap-5">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-slate-700">{userName || 'Пользователь'}</span>
              <span className="text-xs text-slate-500">Брокер</span>
            </div>
            <Link href="/profile" className="relative group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
            <span className="text-3xl">🇹🇭</span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Таиланд</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900 leading-tight">
            Недвижимость в <span className="text-blue-600">Таиланде</span>
          </h1>
          <p className="text-base text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Изучайте рынок недвижимости, проходите экзамены и практикуйтесь с интерактивным тренажёром
          </p>
        </div>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
          <Link
            href="/countries/thailand/trainer"
            className="group relative flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-blue-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
            <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
              Основное
            </div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-4 bg-blue-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Тренажёр знаний</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Интерактивная практика с вопросами и геймификацией
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/theory"
            className="group flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-emerald-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-emerald-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-4 bg-emerald-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Теория</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                8 структурированных уроков по всем аспектам недвижимости
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/exam"
            className="group flex flex-col bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-500/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden ring-1 ring-transparent hover:ring-amber-500/20"
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all"></div>
            <div className="flex flex-col items-center text-center relative z-10">
              <div className="p-4 bg-amber-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">Экзамен</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Проверьте свои знания и получите сертификат брокера
              </p>
            </div>
          </Link>
        </div>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Ответы</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {progress.questions.correct} / {progress.questions.total}
            </div>
            <p className="text-xs text-slate-500">Правильных ответов</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-emerald-50 rounded-lg">
                <BookOpen className="w-5 h-5 text-emerald-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Уроки</h3>
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">{progress.lessons} из 8</div>
            <p className="text-xs text-slate-500">Просмотрено</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Award className="w-5 h-5 text-amber-600" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">Экзамены</h3>
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-2">
              {progress.exams.passed} / {progress.exams.total}
            </div>
            <p className="text-xs text-slate-500">Пройдено / Сдано</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4 border-t border-slate-200 bg-white transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2025 Tranio Academy. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Поддержка</a>
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}