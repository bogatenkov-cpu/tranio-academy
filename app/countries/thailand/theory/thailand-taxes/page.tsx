'use client';
import React from 'react';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';
import { AppHeader, AppFooter } from '@/components/AppShell';

export default function LessonPage() {
  useLesson('thailand-taxes', 'Урок 5: Налоги в Таиланде');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <AppHeader backHref="/countries/thailand/theory" subtitle="Урок" />

      <div className="bg-violet-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-violet-100 font-medium mb-1">Урок 7 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Налоги на недвижимость</h1>
              <p className="text-sm sm:text-base text-violet-100 mt-1">Все виды налогов для иностранных покупателей и владельцев</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги при покупке</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-violet-50 border border-violet-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Transfer Fee</span>
                <span className="text-lg sm:text-xl font-bold text-violet-600">2%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Налог на переход права собственности, оплачивается обеими сторонами</p>
            </div>

            <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Stamp Duty</span>
                <span className="text-lg sm:text-xl font-bold text-purple-600">0.5%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Гербовый сбор (только если SBT не применяется)</p>
            </div>

            <div className="p-3 sm:p-4 bg-pink-50 border border-pink-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Specific Business Tax (SBT)</span>
                <span className="text-lg sm:text-xl font-bold text-pink-600">3.3%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Если недвижимость в собственности менее 5 лет</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги при владении</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Land & Building Tax</span>
                <span className="text-lg sm:text-xl font-bold text-blue-600">0.02-0.3%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 mb-2">Ежегодный налог с 2020 года, зависит от использования</p>
              <div className="text-xs text-blue-800 space-y-1">
                <div>• Жильё не для собственного проживания: 0.02% (до 50M THB)</div>
                <div>• Своё кондо (с tabien ban): освобождение до 10M THB</div>
                <div>• Свой дом + земля: освобождение до 50M THB</div>
                <div>• Неиспользуемая земля: 0.3% базовая, +0.3% каждые 3 года, максимум 3%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги на доход от аренды</h2>
          <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-900 text-sm sm:text-base">Rental Income Tax</span>
              <span className="text-lg sm:text-xl font-bold text-amber-600">0-35%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">Прогрессивная шкала налога на доход от аренды</p>
            <div className="text-xs text-amber-800 space-y-1">
              <div>• До 150 000 ฿: <span className="font-semibold">0% (освобождено)</span></div>
              <div>• 150 001–300 000 ฿: 5%</div>
              <div>• 300 001–500 000 ฿: 10%</div>
              <div>• 500 001–750 000 ฿: 15%</div>
              <div>• 750 001–1 000 000 ฿: 20%</div>
              <div>• 1 000 001–2 000 000 ฿: 25%</div>
              <div>• 2 000 001–5 000 000 ฿: 30%</div>
              <div>• Более 5 000 000 ฿: 35%</div>
            </div>
            <div className="mt-3 text-xs text-amber-900 bg-amber-100 border border-amber-200 rounded-lg p-3 space-y-1">
              <div className="font-semibold">Для нерезидентов:</div>
              <div>• Фиксированная ставка 15% WHT (Withholding Tax) на арендный доход</div>
              <div>• Управляющая компания удерживает 5% WHT при выплате</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Другие важные налоги и сроки</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>• <span className="font-semibold">Срок уплаты:</span> ежегодный налог — до 30 апреля</div>
            <div>• <span className="font-semibold">Налог на наследство:</span> первые 100M THB освобождены; 5% для потомков, 10% для остальных</div>
            <div>• <span className="font-semibold">Налог на дарение:</span> до 20M THB освобождено для потомков</div>
            <div>• <span className="font-semibold">Порог НДС (VAT):</span> 1.8M THB оборота</div>
            <div>• <span className="font-semibold">С 2024 года:</span> мировой доход облагается налогом для резидентов (180+ дней/год) при ввозе в Таиланд</div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Советы по налогам</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>✅ <span className="font-semibold">Freehold vs Leasehold:</span> у leasehold ниже налоги при покупке</div>
            <div>✅ <span className="font-semibold">Проверяйте срок владения:</span> после 5 лет нет SBT</div>
            <div>✅ <span className="font-semibold">Нанимайте бухгалтера:</span> для декларирования дохода от аренды</div>
            <div>✅ <span className="font-semibold">Договаривайтесь с продавцом:</span> кто платит Transfer Fee</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/prices" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory/property-maintenance" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            Следующий урок →
          </Link>
        </div>

      </main>

      <AppFooter />
    </div>
  );
}
