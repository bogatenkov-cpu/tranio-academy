'use client';
import React, { useState, useEffect } from 'react';
import { Home, TrendingUp, DollarSign, Calculator, BarChart, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedStrategy, setSelectedStrategy] = useState('rental');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('investment-roi')) {
        completedLessons.push('investment-roi');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 3: Доходность и инвестиции',
          date: new Date().toISOString(),
          points: 10,
          country: '🇹🇭'
        });
        localStorage.setItem('thailand_activities', JSON.stringify(activities.slice(0, 20)));
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/countries/thailand/theory" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                <Home className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Tranio Academy</div>
                <div className="text-xs text-gray-500">Урок 3: Доходность и инвестиции</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/countries/thailand/theory" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-all">
                <BookOpen className="w-4 h-4" />
                К урокам
              </Link>
              <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium hover:shadow-md transition-all">
                <User className="w-4 h-4" />
                Профиль
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <TrendingUp className="w-10 h-10 text-amber-600" />
            </div>
            <div>
              <div className="text-sm text-amber-700 font-medium mb-1">Урок 3 • Теория</div>
              <h1 className="text-3xl font-bold text-amber-900">Доходность и инвестиции в недвижимость Таиланда</h1>
              <p className="text-amber-800 mt-1">Как рассчитать ROI, окупаемость и доходность от аренды</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Почему инвестируют в Таиланд?</h2>
              <p className="text-gray-600 leading-relaxed">
                Недвижимость в Таиланде привлекает инвесторов <span className="font-semibold text-amber-700">высокой доходностью от аренды</span>, 
                <span className="font-semibold text-amber-700"> стабильным ростом цен</span> и 
                <span className="font-semibold text-amber-700"> развитой туристической инфраструктурой</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-amber-800">5-8%</div>
              <div className="text-xs text-amber-600 mt-1">годовая доходность</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-orange-800">10-15 лет</div>
              <div className="text-xs text-orange-600 mt-1">окупаемость</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-yellow-800">3-5%</div>
              <div className="text-xs text-yellow-600 mt-1">рост цен в год</div>
            </div>
          </div>
        </div>

        {/* Investment Strategies */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <BarChart className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Стратегии инвестирования</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedStrategy('rental')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedStrategy === 'rental'
                    ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                📈 Арендная доходность
              </button>
              <button
                onClick={() => setSelectedStrategy('capital')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedStrategy === 'capital'
                    ? 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                💰 Прирост капитала
              </button>
            </div>

            {selectedStrategy === 'rental' && (
              <div className="space-y-4">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Краткосрочная аренда (Airbnb, Booking)</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>• <span className="font-semibold">Доходность:</span> 6-10% годовых</div>
                    <div>• <span className="font-semibold">Плюсы:</span> высокая доходность, гибкость</div>
                    <div>• <span className="font-semibold">Минусы:</span> требуется управление, сезонность</div>
                    <div>• <span className="font-semibold">Локации:</span> Пхукет, Паттайя, Самуи</div>
                  </div>
                </div>

                <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                  <h3 className="font-bold text-cyan-900 mb-3">Долгосрочная аренда</h3>
                  <div className="space-y-2 text-sm text-cyan-800">
                    <div>• <span className="font-semibold">Доходность:</span> 4-6% годовых</div>
                    <div>• <span className="font-semibold">Плюсы:</span> стабильный доход, меньше хлопот</div>
                    <div>• <span className="font-semibold">Минусы:</span> ниже доходность</div>
                    <div>• <span className="font-semibold">Локации:</span> Бангкок, курортные города</div>
                  </div>
                </div>
              </div>
            )}

            {selectedStrategy === 'capital' && (
              <div className="space-y-4">
                <div className="p-5 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Рост стоимости недвижимости</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div>• <span className="font-semibold">Средний рост:</span> 3-5% в год</div>
                    <div>• <span className="font-semibold">Факторы роста:</span> развитие инфраструктуры, туризм</div>
                    <div>• <span className="font-semibold">Срок:</span> долгосрочная перспектива (5-10 лет)</div>
                    <div>• <span className="font-semibold">Локации:</span> развивающиеся районы Пхукета, Бангкока</div>
                  </div>
                </div>

                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 mb-3">Премиум-сегмент</h3>
                  <div className="space-y-2 text-sm text-emerald-800">
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
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Расчёт ROI (окупаемость)</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h3 className="font-bold text-purple-900 mb-3">Формула ROI</h3>
              <div className="bg-white rounded-lg p-4 mb-3 border-2 border-purple-300">
                <div className="text-center text-lg font-bold text-purple-800">
                  ROI = (Годовой доход - Расходы) / Стоимость недвижимости × 100%
                </div>
              </div>
              <div className="text-sm text-purple-800 space-y-1">
                <div>• <span className="font-semibold">Годовой доход:</span> арендная плата × 12 месяцев</div>
                <div>• <span className="font-semibold">Расходы:</span> налоги, управление, обслуживание</div>
                <div>• <span className="font-semibold">Стоимость:</span> цена покупки + затраты на оформление</div>
              </div>
            </div>

            <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
              <h3 className="font-bold text-pink-900 mb-3">Пример расчёта</h3>
              <div className="space-y-3 text-sm text-pink-800">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>Стоимость кондоминиума:</span>
                  <span className="font-bold">5 000 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>Аренда в месяц:</span>
                  <span className="font-bold">25 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>Годовой доход:</span>
                  <span className="font-bold">300 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span>Расходы (10%):</span>
                  <span className="font-bold">-30 000 ฿</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg font-bold text-lg">
                  <span>Чистая прибыль:</span>
                  <span>270 000 ฿</span>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg border-2 border-yellow-300 text-center">
                  <div className="text-xs text-yellow-700 mb-1">ROI</div>
                  <div className="text-3xl font-bold text-yellow-900">5.4%</div>
                  <div className="text-xs text-yellow-700 mt-1">годовых</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Factors Affecting ROI */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-200 to-emerald-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-800" />
              <h2 className="text-xl font-bold text-green-800">Факторы, влияющие на доходность</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">📍</div>
                <h4 className="font-bold text-gray-800 mb-2">Локация</h4>
                <p className="text-sm text-gray-600">Близость к пляжу, центру, инфраструктуре увеличивает доходность</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-2xl mb-2">🏖️</div>
                <h4 className="font-bold text-gray-800 mb-2">Тип объекта</h4>
                <p className="text-sm text-gray-600">Кондоминиумы с видом на море стоят дороже и приносят больше</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                <div className="text-2xl mb-2">📅</div>
                <h4 className="font-bold text-gray-800 mb-2">Сезонность</h4>
                <p className="text-sm text-gray-600">Высокий сезон (ноябрь-март) даёт до 50% годового дохода</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl mb-2">🛠️</div>
                <h4 className="font-bold text-gray-800 mb-2">Управление</h4>
                <p className="text-sm text-gray-600">Профессиональное управление увеличивает загрузку и доходность</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Советы для инвесторов</h2>
              <div className="space-y-2 text-gray-600">
                <div>✅ <span className="font-semibold">Изучите рынок:</span> проанализируйте цены аренды в выбранной локации</div>
                <div>✅ <span className="font-semibold">Учитывайте расходы:</span> налоги, управление, обслуживание (10-15% от дохода)</div>
                <div>✅ <span className="font-semibold">Долгосрочная перспектива:</span> инвестируйте минимум на 5-10 лет</div>
                <div>✅ <span className="font-semibold">Диверсификация:</span> рассмотрите несколько объектов в разных локациях</div>
                <div>✅ <span className="font-semibold">Профессиональное управление:</span> наймите управляющую компанию для максимизации дохода</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/buying-process"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-amber-200 text-amber-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/life-in-thailand"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}
