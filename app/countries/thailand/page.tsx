'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Award, Brain, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useProgress } from '@/lib/hooks/useProgress';
import AppShell from '@/components/AppShell';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ThailandMenu() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { progress: userProgress, loading: progressLoading } = useProgress('thailand');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
      setUserName(name);
    }
  }, [user]);

  if (authLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const progress = {
    questions: { correct: userProgress.points / 10, total: userProgress.studied_cards.length },
    lessons: userProgress.completed_lessons.length,
    exams: { passed: userProgress.exam_count > 0 && userProgress.exam_average >= 70 ? userProgress.exam_count : 0, total: userProgress.exam_count }
  };

  return (
    <ProtectedRoute>
      <AppShell userName={userName} backHref="/countries" subtitle="Таиланд">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Page Heading */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <span className="text-2xl">🇹🇭</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Таиланд</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 tracking-tight text-slate-900">
              Недвижимость в <span className="text-blue-600">Таиланде</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Изучайте рынок недвижимости, проходите экзамены и практикуйтесь с интерактивным тренажёром
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 max-w-5xl mx-auto">
            <Link
              href="/countries/thailand/trainer"
              className="group relative flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-400/0 rounded-full blur-3xl group-hover:bg-blue-400/8 transition-all duration-500"></div>
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">
                Основное
              </div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="p-4 bg-blue-50 rounded-2xl mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Brain className="w-9 h-9 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Тренажёр знаний</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Интерактивная практика с вопросами и геймификацией
                </p>
              </div>
            </Link>

            <Link
              href="/countries/thailand/theory"
              className="group relative flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-emerald-400/40 hover:shadow-xl hover:shadow-emerald-500/8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-400/0 rounded-full blur-3xl group-hover:bg-emerald-400/8 transition-all duration-500"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="p-4 bg-emerald-50 rounded-2xl mb-5 group-hover:scale-105 transition-transform duration-300">
                  <BookOpen className="w-9 h-9 text-emerald-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Теория</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  8 структурированных уроков по всем аспектам недвижимости
                </p>
              </div>
            </Link>

            <Link
              href="/countries/thailand/exam"
              className="group relative flex flex-col bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/8 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-400/0 rounded-full blur-3xl group-hover:bg-amber-400/8 transition-all duration-500"></div>
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="p-4 bg-amber-50 rounded-2xl mb-5 group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-9 h-9 text-amber-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">Экзамен</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Проверьте свои знания и получите сертификат брокера
                </p>
              </div>
            </Link>
          </div>

          {/* Progress Stats */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 px-1">Ваш прогресс</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-blue-50 rounded-xl">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-700">Ответы</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  {progress.questions.correct} <span className="text-lg text-slate-300 font-medium">/ {progress.questions.total}</span>
                </div>
                <p className="text-xs text-slate-400">Правильных ответов</p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-emerald-50 rounded-xl">
                    <BookOpen className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-700">Уроки</h3>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-1">
                  {progress.lessons} <span className="text-lg text-slate-300 font-medium">из 8</span>
                </div>
                <p className="text-xs text-slate-400">Просмотрено</p>
              </div>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 bg-amber-50 rounded-xl">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-700">Экзамены</h3>
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-1">
                  {progress.exams.passed} <span className="text-lg text-slate-300 font-medium">/ {progress.exams.total}</span>
                </div>
                <p className="text-xs text-slate-400">Пройдено / Сдано</p>
              </div>
            </div>
          </div>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
