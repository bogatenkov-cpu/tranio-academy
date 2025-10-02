'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, BookOpen, User, ChevronRight, Clock, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TheoryPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isRegistered = localStorage.getItem('isRegistered');
      if (!isRegistered) {
        router.push('/');
        return;
      }
      const name = localStorage.getItem('userName');
      if (name) setUserName(name);
    }
  }, [router]);

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/countries/thailand" className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                  <Home className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Tranio Academy</div>
                  <div className="text-xs text-gray-500">🇹🇭 Таиланд • Теория</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {userName && (
                <div className="hidden md:block text-sm text-gray-600">
                  <span className="font-semibold">{userName}</span>
                </div>
              )}
              <Link href="/countries/thailand/theory" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-all">
                <BookOpen className="w-4 h-4" />
                Теория
              </Link>
              <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium hover:shadow-md transition-all">
  <User className="w-4 h-4" />
  Профиль
</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-blue-200 via-cyan-200 to-teal-200">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <BookOpen className="w-10 h-10 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-blue-800 mb-2">Теория</h1>
              <p className="text-blue-600 text-lg">Структурированные уроки по недвижимости в Таиланде</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Все уроки ({theoryLessons.length})</h2>
          <p className="text-gray-600">Изучайте материалы последовательно для лучшего результата</p>
        </div>

        <div className="space-y-4">
          {theoryLessons.map((lesson, index) => (
            <div
              key={lesson.id}
              className="group bg-white/80 backdrop-blur rounded-2xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="text-5xl">{lesson.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                          Урок {index + 1}
                        </span>
                        <div className="flex items-center gap-1 text-green-600 text-xs">
                          <CheckCircle className="w-4 h-4" />
                          <span>Доступен</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{lesson.title}</h3>
                      <p className="text-gray-600 mb-4">{lesson.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {lesson.duration}
                        </div>
                        {lesson.progress > 0 && (
                          <div className="flex items-center gap-1 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Прогресс: {lesson.progress}%
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/countries/thailand/theory/${lesson.id}`}
                    className="px-6 py-3 bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 rounded-xl font-semibold hover:shadow-md transition-all flex items-center gap-2 group-hover:scale-105"
                  >
                    Начать урок
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/countries/thailand"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur border-2 border-purple-200 text-purple-700 rounded-xl font-semibold hover:border-purple-400 hover:shadow-md transition-all"
          >
            ← Вернуться в главное меню
          </Link>
        </div>
      </div>
    </div>
  );
}