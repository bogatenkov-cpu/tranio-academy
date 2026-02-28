'use client';
import React from 'react';
import { Wrench } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';
import { AppHeader, AppFooter } from '@/components/AppShell';

export default function LessonPage() {
  useLesson('property-maintenance', 'Урок 8: Содержание недвижимости');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand/theory" subtitle="Урок" />

      <div className="bg-teal-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <Wrench className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium mb-1">Урок 8 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Содержание недвижимости</h1>
              <p className="text-sm sm:text-base text-teal-100 mt-1">Коммунальные услуги, управление, обслуживание и ремонт</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Ежемесячные расходы</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-teal-50 border border-teal-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">CAM fee (Common Area Maintenance)</span>
                <span className="text-lg sm:text-xl font-bold text-teal-600">40-80 ฿/м²</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Управление, охрана, бассейн, фитнес, сад</p>
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Электричество</span>
                <span className="text-lg sm:text-xl font-bold text-blue-600">7-9 ฿/кВт⋅ч (наценка кондо), гос. тариф 4-5 ฿/кВт⋅ч</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">В среднем 2,000-5,000 ฿/месяц с кондиционером</p>
            </div>

            <div className="p-3 sm:p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Вода</span>
                <span className="text-lg sm:text-xl font-bold text-cyan-600">18-25 ฿/м³</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">В среднем 200-500 ฿/месяц</p>
            </div>

            <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Интернет</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-600">600-1,200 ฿</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Высокоскоростной интернет, кабельное ТВ</p>
            </div>

            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Sinking Fund</span>
                <span className="text-lg sm:text-xl font-bold text-amber-600">300-800 ฿/м²</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Разовый взнос при покупке на капитальный ремонт: лифты, фасад, бассейн</p>
            </div>
          </div>

          <div className="mt-4 p-3 sm:p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-xs sm:text-sm text-orange-800">⚡ <span className="font-semibold">Сезонность электричества:</span> в апреле счёт может быть в 2 раза выше декабрьского — кондиционер работает постоянно при 35-40°C</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Управление арендой</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Управляющая компания</h4>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                <div>• <span className="font-semibold">Комиссия:</span> 10-20% от арендной платы</div>
                <div>• <span className="font-semibold">Услуги:</span> поиск арендаторов, уборка, ремонт, отчеты</div>
                <div>• <span className="font-semibold">Преимущества:</span> высокая загрузка, профессиональный сервис</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-pink-50 border border-pink-100 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Самостоятельное управление</h4>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                <div>• <span className="font-semibold">Комиссия:</span> 0% (только ваше время)</div>
                <div>• <span className="font-semibold">Сложности:</span> нужно быть на месте, решать проблемы</div>
                <div>• <span className="font-semibold">Рекомендуется:</span> если живете в Таиланде постоянно</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Типичные расходы на содержание</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">💡</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Студия 30м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">4,000-8,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-orange-50 border border-orange-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏢</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">1-комн 50м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">6,000-12,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-red-50 border border-red-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏠</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">2-комн 80м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">8,000-15,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-rose-50 border border-rose-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏡</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Вилла 200м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">15,000-30,000 ฿/месяц</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Советы по содержанию</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>✅ <span className="font-semibold">Выбирайте комплекс с хорошим управлением:</span> проверяйте отзывы</div>
            <div>✅ <span className="font-semibold">Закладывайте 10-15% от дохода:</span> на непредвиденные расходы</div>
            <div>✅ <span className="font-semibold">Наймите управляющую компанию:</span> если не живете в Таиланде</div>
            <div>✅ <span className="font-semibold">Регулярное обслуживание:</span> кондиционеры, сантехника</div>
            <div>⚖️ <span className="font-semibold">Смена УК:</span> собственники могут проголосовать за смену управляющей компании (Condominium Act, большинство голосов)</div>
            <div>⚠️ <span className="font-semibold">Налоговый нюанс:</span> сдача квартиры в аренду лишает льготы по налогу для собственного жилья (owner-occupied exemption)</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/thailand-taxes" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            К списку уроков
          </Link>
        </div>

      </main>

      <AppFooter />
    </div>
  );
}
