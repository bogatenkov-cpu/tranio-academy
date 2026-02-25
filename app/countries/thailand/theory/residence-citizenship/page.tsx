'use client';
import React, { useState } from 'react';
import { IdCard } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';
import { AppHeader, AppFooter } from '@/components/AppShell';

export default function LessonPage() {
  useLesson('residence-citizenship', 'Урок 6: Виза и резидентство');
  
  const [selectedVisaType, setSelectedVisaType] = useState('tourist');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand/theory" subtitle="Урок" />

      <div className="bg-indigo-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <IdCard className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-indigo-100 font-medium mb-1">Урок 5 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">ВНЖ и гражданство</h1>
              <p className="text-sm sm:text-base text-indigo-100 mt-1">Визы, вид на жительство и процесс получения гражданства</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Визы для иностранцев</h2>
          <p className="text-sm sm:text-base text-slate-700 mb-4">
            Таиланд предлагает различные типы виз для туристов, бизнесменов и пенсионеров. Россияне могут находиться без визы до 30 дней.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Типы виз</h2>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-2 mb-5">
              <button onClick={() => setSelectedVisaType('tourist')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedVisaType === 'tourist' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                ✈️ Туристическая
              </button>
              <button onClick={() => setSelectedVisaType('retirement')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedVisaType === 'retirement' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                🏖️ Пенсионная
              </button>
              <button onClick={() => setSelectedVisaType('elite')} className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${selectedVisaType === 'elite' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                👑 Elite
              </button>
            </div>

            {selectedVisaType === 'tourist' && (
              <div className="p-4 sm:p-5 bg-indigo-50 border border-indigo-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-indigo-900 mb-3 text-sm sm:text-base">Туристическая виза</h3>
                <div className="space-y-2 text-xs sm:text-sm text-indigo-800">
                  <div>• <span className="font-semibold">Срок:</span> до 60 дней, продление до 90 дней</div>
                  <div>• <span className="font-semibold">Требования:</span> обратный билет, бронь отеля</div>
                  <div>• <span className="font-semibold">Стоимость:</span> $40</div>
                </div>
              </div>
            )}

            {selectedVisaType === 'retirement' && (
              <div className="p-4 sm:p-5 bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-emerald-900 mb-3 text-sm sm:text-base">Пенсионная виза (O-A)</h3>
                <div className="space-y-2 text-xs sm:text-sm text-emerald-800">
                  <div>• <span className="font-semibold">Срок:</span> 1 год, продление ежегодно</div>
                  <div>• <span className="font-semibold">Требования:</span> возраст 50+, депозит 800,000 ฿ или доход 65,000 ฿/мес</div>
                  <div>• <span className="font-semibold">Особенности:</span> можно жить постоянно, выезды 90 дней</div>
                </div>
              </div>
            )}

            {selectedVisaType === 'elite' && (
              <div className="p-4 sm:p-5 bg-amber-50 border border-amber-100 rounded-lg sm:rounded-xl">
                <h3 className="font-bold text-amber-900 mb-3 text-sm sm:text-base">Thailand Elite Visa</h3>
                <div className="space-y-2 text-xs sm:text-sm text-amber-800">
                  <div>• <span className="font-semibold">Срок:</span> 5, 10 или 20 лет</div>
                  <div>• <span className="font-semibold">Стоимость:</span> от $15,000 (5 лет)</div>
                  <div>• <span className="font-semibold">Преимущества:</span> упрощенный въезд, лимузин, golf membership</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Гражданство</h2>
          <p className="text-sm sm:text-base text-slate-700 mb-3">
            Получение гражданства Таиланда возможно, но процесс длительный и сложный:
          </p>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>• Проживание в Таиланде минимум 10 лет</div>
            <div>• Знание тайского языка</div>
            <div>• Наличие работы или бизнеса</div>
            <div>• Уплата налогов</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/life-in-thailand" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory/prices" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            Следующий урок →
          </Link>
        </div>

      </main>

      <AppFooter />
    </div>
  );
}
