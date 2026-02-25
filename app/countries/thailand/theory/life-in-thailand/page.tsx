'use client';
import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';
import { AppHeader, AppFooter } from '@/components/AppShell';

export default function LessonPage() {
  useLesson('life-in-thailand', 'Урок 7: Жизнь в Таиланде');
  
  const [selectedSeason, setSelectedSeason] = useState('cool');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand/theory" subtitle="Урок" />

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

      <AppFooter />
    </div>
  );
}
