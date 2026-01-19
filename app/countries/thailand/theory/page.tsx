'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, ChevronRight, Clock, CheckCircle, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function TheoryPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
      setUserName(name);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-3 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/countries/thailand" className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-all">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </Link>
            <Link href="/countries" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
              <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-9 sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5 C30 5, 5 20, 5 40 C5 55, 15 65, 25 70 C15 75, 10 85, 15 95" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 15 C35 15, 15 25, 15 42 C15 52, 22 60, 30 65" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 25 C40 25, 25 32, 25 45 C25 52, 30 58, 38 62" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="8" fill="#1e40af"/>
                  <path d="M50 95 C70 95, 95 80, 95 60 C95 45, 85 35, 75 30 C85 25, 90 15, 85 5" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 85 C65 85, 85 75, 85 58 C85 48, 78 40, 70 35" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 75 C60 75, 75 68, 75 55 C75 48, 70 42, 62 38" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Теория</span>
              </div>
            </Link>
          </div>
          <Link href="/profile" className="relative group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </Link>
        </div>
      </header>

      {/* Page Header */}
      <div className="bg-emerald-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">Теория</h1>
              <p className="text-sm sm:text-lg text-emerald-100">Структурированные уроки по недвижимости в Таиланде</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Все уроки ({theoryLessons.length})</h2>
          <p className="text-sm sm:text-base text-slate-600">Изучайте материалы последовательно для лучшего результата</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {theoryLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="group bg-white border border-slate-200 rounded-xl sm:rounded-2xl hover:border-emerald-400 hover:shadow-lg transition-all"
            >
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex items-start gap-3 sm:gap-4 flex-1 w-full">
                    <div className="text-3xl sm:text-5xl flex-shrink-0">{lesson.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                          Урок {index + 1}
                        </span>
                        <div className="flex items-center gap-1 text-green-600 text-xs">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>Доступен</span>
                        </div>
                      </div>
                      <h3 className="text-base sm:text-xl font-bold text-slate-900 mb-1 sm:mb-2">{lesson.title}</h3>
                      <p className="text-xs sm:text-base text-slate-600 mb-3 sm:mb-4 line-clamp-2">{lesson.description}</p>
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                          {lesson.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/countries/thailand/theory/${lesson.id}`}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl font-semibold hover:shadow-md transition-all flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
                  >
                    Начать урок
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:mt-8">
          <Link
            href="/countries/thailand"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-100 text-slate-700 rounded-lg sm:rounded-xl font-semibold hover:bg-slate-200 transition-all text-sm sm:text-base"
          >
            ← Вернуться в главное меню
          </Link>
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
