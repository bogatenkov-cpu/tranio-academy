'use client';
import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';
import { AppHeader, AppFooter } from '@/components/AppShell';

export default function LessonPage() {
  useLesson('prices', 'Урок 4: Стоимость недвижимости');
  
  const [selectedLocation, setSelectedLocation] = useState('phuket');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand/theory" subtitle="Урок" />

      <div className="bg-rose-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <DollarSign className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-rose-100 font-medium mb-1">Урок 6 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Цены на недвижимость</h1>
              <p className="text-sm sm:text-base text-rose-100 mt-1">Стоимость по районам, типам жилья и факторы влияния на цену</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Средние цены 2025</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="p-3 sm:p-4 bg-rose-50 border border-rose-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-rose-600">$2,500/м²</div>
              <div className="text-[10px] sm:text-xs text-rose-600 mt-1">Пхукет средняя</div>
            </div>
            <div className="p-3 sm:p-4 bg-pink-50 border border-pink-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-pink-600">$3,500/м²</div>
              <div className="text-[10px] sm:text-xs text-pink-600 mt-1">У моря</div>
            </div>
            <div className="p-3 sm:p-4 bg-red-50 border border-red-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-red-600">$1,500/м²</div>
              <div className="text-[10px] sm:text-xs text-red-600 mt-1">Паттайя</div>
            </div>
            <div className="p-3 sm:p-4 bg-orange-50 border border-orange-100 rounded-lg text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">$2,000/м²</div>
              <div className="text-[10px] sm:text-xs text-orange-600 mt-1">Самуи</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Цены по локациям</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 mb-5">
              <button onClick={() => setSelectedLocation('phuket')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedLocation === 'phuket' ? 'bg-rose-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                🏝️ Пхукет
              </button>
              <button onClick={() => setSelectedLocation('pattaya')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedLocation === 'pattaya' ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                🌊 Паттайя
              </button>
              <button onClick={() => setSelectedLocation('samui')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedLocation === 'samui' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                🌴 Самуи
              </button>
            </div>

            {selectedLocation === 'phuket' && (
              <div className="space-y-3">
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg">
                  <h4 className="font-bold text-rose-900 mb-2 text-sm sm:text-base">Пхукет</h4>
                  <div className="text-xs sm:text-sm text-rose-800 space-y-1">
                    <div>• Студия: $80,000-120,000</div>
                    <div>• 1-комн: $120,000-180,000</div>
                    <div>• 2-комн: $180,000-300,000</div>
                    <div>• Вилла: $350,000+</div>
                  </div>
                </div>
              </div>
            )}

            {selectedLocation === 'pattaya' && (
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                  <h4 className="font-bold text-blue-900 mb-2 text-sm sm:text-base">Паттайя</h4>
                  <div className="text-xs sm:text-sm text-blue-800 space-y-1">
                    <div>• Студия: $50,000-80,000</div>
                    <div>• 1-комн: $80,000-120,000</div>
                    <div>• 2-комн: $120,000-200,000</div>
                    <div>• Вилла: $250,000+</div>
                  </div>
                </div>
              </div>
            )}

            {selectedLocation === 'samui' && (
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
                  <h4 className="font-bold text-emerald-900 mb-2 text-sm sm:text-base">Самуи</h4>
                  <div className="text-xs sm:text-sm text-emerald-800 space-y-1">
                    <div>• Студия: $70,000-100,000</div>
                    <div>• 1-комн: $100,000-150,000</div>
                    <div>• 2-комн: $150,000-250,000</div>
                    <div>• Вилла: $300,000+</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Факторы, влияющие на цену</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>• <span className="font-semibold">Расстояние до моря:</span> чем ближе, тем дороже (+30-50%)</div>
            <div>• <span className="font-semibold">Инфраструктура:</span> близость к ТЦ, больницам, школам</div>
            <div>• <span className="font-semibold">Вид из окна:</span> вид на море +20-40%</div>
            <div>• <span className="font-semibold">Этаж:</span> высокие этажи дороже на 5-10%</div>
            <div>• <span className="font-semibold">Комплекс:</span> премиум-комплексы +30-50%</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/residence-citizenship" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory/thailand-taxes" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            Следующий урок →
          </Link>
        </div>

      </main>

      <AppFooter />
    </div>
  );
}
