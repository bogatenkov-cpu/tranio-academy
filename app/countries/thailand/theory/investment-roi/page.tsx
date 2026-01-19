'use client';
import React, { useState } from 'react';
import { Home, TrendingUp, DollarSign, Calculator, BarChart, Info } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';

export default function LessonPage() {
  useLesson('investment-roi', 'Урок 3: Доходность и инвестиции');
  
  const [selectedStrategy, setSelectedStrategy] = useState('rental');

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      {/* Header */}
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
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 3</span>
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

      {/* Lesson Header */}
      <div className="bg-amber-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-amber-100 font-medium mb-1">Урок 3 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Доходность и инвестиции</h1>
              <p className="text-sm sm:text-base text-amber-100 mt-1">Как рассчитать ROI, окупаемость и доходность от аренды</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        {/* Intro */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Почему инвестируют в Таиланд?</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Недвижимость в Таиланде привлекает инвесторов <span className="font-semibold text-amber-600">высокой доходностью от аренды</span>, 
                <span className="font-semibold text-amber-600"> стабильным ростом цен</span> и 
                <span className="font-semibold text-amber-600"> развитой туристической инфраструктурой</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-amber-600">5-8%</div>
              <div className="text-[10px] sm:text-xs text-amber-600 mt-1">годовая доходность</div>
            </div>
            <div className="p-3 sm:p-4 bg-orange-50 border border-orange-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-orange-600">10-15 лет</div>
              <div className="text-[10px] sm:text-xs text-orange-600 mt-1">окупаемость</div>
            </div>
            <div className="p-3 sm:p-4 bg-yellow-50 border border-yellow-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-yellow-600">3-5%</div>
              <div className="text-[10px] sm:text-xs text-yellow-600 mt-1">рост цен в год</div>
            </div>
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Стратегии инвестирования</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedStrategy('rental')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedStrategy === 'rental'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📈 Арендная доходность
              </button>
              <button
                onClick={() => setSelectedStrategy('capital')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedStrategy === 'capital'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                💰 Прирост капитала
              </button>
            </div>

            {selectedStrategy === 'rental' && (
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-5 bg-amber-50 border border-amber-100 rounded-lg sm:rounded-xl">
                  <h3 className="font-bold text-amber-900 mb-3 text-sm sm:text-base">Краткосрочная аренда (Airbnb, Booking)</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-amber-800">
                    <div>• <span className="font-semibold">Доходность:</span> 6-10% годовых</div>
                    <div>• <span className="font-semibold">Плюсы:</span> высокая доходность, гибкость</div>
                    <div>• <span className="font-semibold">Минусы:</span> требуется управление, сезонность</div>
                    <div>• <span className="font-semibold">Локации:</span> Пхукет, Паттайя, Самуи</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-cyan-50 border border-cyan-100 rounded-lg sm:rounded-xl">
                  <h3 className="font-bold text-cyan-900 mb-3 text-sm sm:text-base">Долгосрочная аренда</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-cyan-800">
                    <div>• <span className="font-semibold">Доходность:</span> 4-6% годовых</div>
                    <div>• <span className="font-semibold">Плюсы:</span> стабильный доход, меньше хлопот</div>
                    <div>• <span className="font-semibold">Минусы:</span> ниже доходность</div>
                    <div>• <span className="font-semibold">Локации:</span> Бангкок, курортные города</div>
                  </div>
                </div>
              </div>
            )}

            {selectedStrategy === 'capital' && (
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 sm:p-5 bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl">
                  <h3 className="font-bold text-emerald-900 mb-3 text-sm sm:text-base">Рост стоимости недвижимости</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-emerald-800">
                    <div>• <span className="font-semibold">Средний рост:</span> 3-5% в год</div>
                    <div>• <span className="font-semibold">Факторы роста:</span> развитие инфраструктуры, туризм</div>
                    <div>• <span className="font-semibold">Срок:</span> долгосрочная перспектива (5-10 лет)</div>
                    <div>• <span className="font-semibold">Локации:</span> развивающиеся районы Пхукета, Бангкока</div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-teal-50 border border-teal-100 rounded-lg sm:rounded-xl">
                  <h3 className="font-bold text-teal-900 mb-3 text-sm sm:text-base">Премиум-сегмент</h3>
                  <div className="space-y-2 text-xs sm:text-sm text-teal-800">
                    <div>• <span className="font-semibold">Рост:</span> до 7-10% в год</div>
                    <div>• <span className="font-semibold">Тип:</span> виллы, пентхаусы, элитные кондоминиумы</div>
                    <div>• <span className="font-semibold">Локации:</span> Лагуна Пхукет, элитные районы Бангкока</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ROI Calculation */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Расчёт ROI (окупаемость)</h2>
          </div>
          
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            <div className="p-4 sm:p-5 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
              <h3 className="font-bold text-purple-900 mb-3 text-sm sm:text-base">Формула ROI</h3>
              <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 border-2 border-purple-300">
                <div className="text-center text-sm sm:text-lg font-bold text-purple-800">
                  ROI = (Годовой доход - Расходы) / Стоимость недвижимости × 100%
                </div>
              </div>
              <div className="text-xs sm:text-sm text-purple-800 space-y-1">
                <div>• <span className="font-semibold">Годовой доход:</span> арендная плата × 12 месяцев</div>
                <div>• <span className="font-semibold">Расходы:</span> налоги, управление, обслуживание</div>
                <div>• <span className="font-semibold">Стоимость:</span> цена покупки + затраты на оформление</div>
              </div>
            </div>

            <div className="p-4 sm:p-5 bg-pink-50 border border-pink-100 rounded-lg sm:rounded-xl">
              <h3 className="font-bold text-pink-900 mb-3 text-sm sm:text-base">Пример расчёта</h3>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-pink-800">
                <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                  <span>Стоимость кондоминиума:</span>
                  <span className="font-bold">5 000 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                  <span>Аренда в месяц:</span>
                  <span className="font-bold">25 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                  <span>Годовой доход:</span>
                  <span className="font-bold">300 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-white rounded-lg">
                  <span>Расходы (10%):</span>
                  <span className="font-bold">-30 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-2 sm:p-3 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg font-bold text-sm sm:text-lg">
                  <span>Чистая прибыль:</span>
                  <span>270 000 ฿</span>
                </div>
                <div className="p-3 sm:p-4 bg-yellow-100 rounded-lg border-2 border-yellow-300 text-center">
                  <div className="text-xs text-yellow-700 mb-1">ROI</div>
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-900">5.4%</div>
                  <div className="text-xs text-yellow-700 mt-1">годовых</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factors Affecting ROI */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Факторы, влияющие на доходность</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl">
                <div className="text-xl sm:text-2xl mb-2">📍</div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Локация</h4>
                <p className="text-xs sm:text-sm text-slate-600">Близость к пляжу, центру, инфраструктуре увеличивает доходность</p>
              </div>
              <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg sm:rounded-xl">
                <div className="text-xl sm:text-2xl mb-2">🏖️</div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Тип объекта</h4>
                <p className="text-xs sm:text-sm text-slate-600">Кондоминиумы с видом на море стоят дороже и приносят больше</p>
              </div>
              <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg sm:rounded-xl">
                <div className="text-xl sm:text-2xl mb-2">📅</div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Сезонность</h4>
                <p className="text-xs sm:text-sm text-slate-600">Высокий сезон (ноябрь-март) даёт до 50% годового дохода</p>
              </div>
              <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
                <div className="text-xl sm:text-2xl mb-2">🛠️</div>
                <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Управление</h4>
                <p className="text-xs sm:text-sm text-slate-600">Профессиональное управление увеличивает загрузку и доходность</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Советы для инвесторов</h2>
              <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div>✅ <span className="font-semibold">Изучите рынок:</span> проанализируйте цены аренды в выбранной локации</div>
                <div>✅ <span className="font-semibold">Учитывайте расходы:</span> налоги, управление, обслуживание (10-15% от дохода)</div>
                <div>✅ <span className="font-semibold">Долгосрочная перспектива:</span> инвестируйте минимум на 5-10 лет</div>
                <div>✅ <span className="font-semibold">Диверсификация:</span> рассмотрите несколько объектов в разных локациях</div>
                <div>✅ <span className="font-semibold">Профессиональное управление:</span> наймите управляющую компанию для максимизации дохода</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/buying-process"
            className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/life-in-thailand"
            className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-all text-sm sm:text-base text-center"
          >
            Следующий урок →
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
