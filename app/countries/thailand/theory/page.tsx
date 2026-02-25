'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, ChevronRight, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import AppShell from '@/components/AppShell';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function TheoryPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
      setUserName(name);
    }
  }, [user]);

  const theoryLessons = [
    {
      id: 'locations',
      title: 'Районы и локации',
      description: 'Обзор районов Пхукета, Паттайи, Самуи: инфраструктура и особенности',
      duration: '25 мин',
      status: 'available',
      progress: 0,
      icon: '🗺️'
    },
    {
      id: 'buying-process',
      title: 'Процедура покупки недвижимости',
      description: 'Пошаговая инструкция: от выбора объекта до получения документов',
      duration: '20 мин',
      status: 'available',
      progress: 0,
      icon: '📝'
    },
    {
      id: 'investment-roi',
      title: 'Доходность и инвестиции',
      description: 'Как рассчитать ROI, окупаемость и доходность от аренды',
      duration: '18 мин',
      status: 'available',
      progress: 0,
      icon: '💰'
    },
    {
      id: 'life-in-thailand',
      title: 'Жизнь в Таиланде',
      description: 'Климат, культура, инфраструктура и особенности жизни',
      duration: '15 мин',
      status: 'available',
      progress: 0,
      icon: '🌴'
    },
    {
      id: 'residence-citizenship',
      title: 'ВНЖ и гражданство',
      description: 'Визы, вид на жительство и процесс получения гражданства',
      duration: '22 мин',
      status: 'available',
      progress: 0,
      icon: '🛂'
    },
    {
      id: 'prices',
      title: 'Цены на недвижимость',
      description: 'Стоимость по районам, типам жилья и факторы влияния на цену',
      duration: '16 мин',
      status: 'available',
      progress: 0,
      icon: '💵'
    },
    {
      id: 'thailand-taxes',
      title: 'Налоги на недвижимость',
      description: 'Все виды налогов для иностранных покупателей и владельцев',
      duration: '15 мин',
      status: 'available',
      progress: 0,
      icon: '🏠'
    },
    {
      id: 'property-maintenance',
      title: 'Содержание недвижимости',
      description: 'Коммунальные услуги, управление, обслуживание и ремонт',
      duration: '14 мин',
      status: 'available',
      progress: 0,
      icon: '🔧'
    }
  ];

  return (
    <ProtectedRoute>
      <AppShell userName={userName} backHref="/countries/thailand" subtitle="Теория">
        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-4xl">
          {/* Page Heading */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-emerald-50 rounded-xl">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Обучение</span>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Теория</h1>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              Структурированные уроки по недвижимости в Таиланде
            </p>
          </div>

          {/* Lesson count */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-slate-800">Все уроки ({theoryLessons.length})</h2>
            <span className="text-xs text-slate-400">Изучайте последовательно</span>
          </div>

          {/* Lesson Cards */}
          <div className="space-y-3">
            {theoryLessons.map((lesson, index) => (
              <Link
                key={lesson.id}
                href={`/countries/thailand/theory/${lesson.id}`}
                className="group block bg-white border border-slate-200/80 rounded-2xl hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl sm:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{lesson.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full uppercase tracking-wider">
                          Урок {index + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors">{lesson.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 line-clamp-1">{lesson.description}</p>
                      <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-400">
                        <Clock className="w-3.5 h-3.5" />
                        {lesson.duration}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-9 h-9 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/countries/thailand"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться в главное меню
            </Link>
          </div>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
