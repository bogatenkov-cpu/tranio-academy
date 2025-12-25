'use client';
import React, { useState, useEffect } from 'react';
import { Home, Sun } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedSeason, setSelectedSeason] = useState('cool');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('life-in-thailand')) {
        completedLessons.push('life-in-thailand');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 4: Жизнь в Таиланде',
          date: new Date().toISOString(),
          points: 10,
          country: '🇹🇭'
        });
        localStorage.setItem('thailand_activities', JSON.stringify(activities.slice(0, 20)));
      }
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-3 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/countries/thailand/theory" className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-all">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
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
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 4</span>
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

      <div className="bg-cyan-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <Sun className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-cyan-100 font-medium mb-1">Урок 4 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Жизнь в Таиланде</h1>
              <p className="text-sm sm:text-base text-cyan-100 mt-1">Климат, культура, инфраструктура и особенности жизни</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Климат Таиланда</h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            В Таиланде тропический муссонный климат. Погода значительно варьируется в зависимости от региона и времени года.
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-3 sm:p-4 bg-cyan-50 border border-cyan-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-cyan-600">32°C</div>
              <div className="text-[10px] sm:text-xs text-cyan-600 mt-1">средняя температура</div>
            </div>
            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">28°C</div>
              <div className="text-[10px] sm:text-xs text-blue-600 mt-1">температура воды</div>
            </div>
            <div className="p-3 sm:p-4 bg-teal-50 border border-teal-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-teal-600">6-8</div>
              <div className="text-[10px] sm:text-xs text-teal-600 mt-1">месяцев влажный сезон</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Сезоны в Таиланде</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 mb-5">
              <button onClick={() => setSelectedSeason('cool')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedSeason === 'cool' ? 'bg-cyan-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                ❄️ Прохладный
              </button>
              <button onClick={() => setSelectedSeason('hot')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedSeason === 'hot' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                ☀️ Жаркий
              </button>
              <button onClick={() => setSelectedSeason('rainy')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedSeason === 'rainy' ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                🌧️ Дождливый
              </button>
            </div>

            {selectedSeason === 'cool' && (
              <div className="p-4 sm:p-5 bg-cyan-50 border border-cyan-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-cyan-900 mb-3 text-sm sm:text-base">Прохладный сезон (ноябрь-февраль)</h3>
                <div className="space-y-2 text-xs sm:text-sm text-cyan-800">
                  <div>• <span className="font-semibold">Температура:</span> 25-30°C</div>
                  <div>• <span className="font-semibold">Погода:</span> сухая, солнечная, комфортная</div>
                  <div>• <span className="font-semibold">Особенности:</span> высокий туристический сезон, больше людей, выше цены</div>
                </div>
              </div>
            )}

            {selectedSeason === 'hot' && (
              <div className="p-4 sm:p-5 bg-orange-50 border border-orange-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-orange-900 mb-3 text-sm sm:text-base">Жаркий сезон (март-май)</h3>
                <div className="space-y-2 text-xs sm:text-sm text-orange-800">
                  <div>• <span className="font-semibold">Температура:</span> 32-38°C</div>
                  <div>• <span className="font-semibold">Погода:</span> очень жарко, влажно, редкие дожди</div>
                  <div>• <span className="font-semibold">Особенности:</span> низкий сезон, меньше туристов, скидки</div>
                </div>
              </div>
            )}

            {selectedSeason === 'rainy' && (
              <div className="p-4 sm:p-5 bg-teal-50 border border-teal-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-teal-900 mb-3 text-sm sm:text-base">Дождливый сезон (июнь-октябрь)</h3>
                <div className="space-y-2 text-xs sm:text-sm text-teal-800">
                  <div>• <span className="font-semibold">Температура:</span> 28-32°C</div>
                  <div>• <span className="font-semibold">Погода:</span> тепло, частые короткие ливни</div>
                  <div>• <span className="font-semibold">Особенности:</span> низкий сезон, зелено, свежо, низкие цены</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Инфраструктура</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏥</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Медицина</h4>
              <p className="text-xs sm:text-sm text-slate-600">Высокое качество частных клиник, медицинский туризм развит</p>
            </div>
            <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏫</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Образование</h4>
              <p className="text-xs sm:text-sm text-slate-600">Международные школы, британская и американская системы</p>
            </div>
            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🛒</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Магазины</h4>
              <p className="text-xs sm:text-sm text-slate-600">Современные ТЦ, рынки, импортные продукты доступны</p>
            </div>
            <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🚗</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Транспорт</h4>
              <p className="text-xs sm:text-sm text-slate-600">Такси, тук-туки, аренда байков и авто, хорошие дороги</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/investment-roi" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory/residence-citizenship" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            Следующий урок →
          </Link>
        </div>

      </main>

      <footer className="mt-auto py-4 border-t border-slate-200 bg-white transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2025 Tranio Academy. Все права защищены.</p>
          <div className="flex gap-4">
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Поддержка</a>
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
