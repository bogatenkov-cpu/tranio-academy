'use client';
import React, { useState, useEffect } from 'react';
import { Home, Wrench, Zap, Droplets, Shield, Calculator, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedExpense, setSelectedExpense] = useState('utilities');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('property-maintenance')) {
        completedLessons.push('property-maintenance');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 8: Содержание недвижимости',
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
                <div className="text-xs text-gray-500">Урок 8: Содержание недвижимости</div>
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
      <div className="bg-gradient-to-r from-slate-200 via-gray-200 to-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <Wrench className="w-10 h-10 text-slate-600" />
            </div>
            <div>
              <div className="text-sm text-slate-700 font-medium mb-1">Урок 8 • Теория</div>
              <h1 className="text-3xl font-bold text-slate-900">Содержание недвижимости в Таиланде</h1>
              <p className="text-slate-800 mt-1">Коммунальные услуги, управление, обслуживание и ремонт</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-slate-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-slate-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Расходы на содержание</h2>
              <p className="text-gray-600 leading-relaxed">
                Владение недвижимостью в Таиланде сопряжено с определёнными расходами: 
                <span className="font-semibold text-slate-700"> коммунальные платежи</span>, 
                <span className="font-semibold text-slate-700"> налоги</span>, 
                <span className="font-semibold text-slate-700"> обслуживание</span> и 
                <span className="font-semibold text-slate-700"> страхование</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-slate-800">2-5 тыс</div>
              <div className="text-xs text-slate-600 mt-1">бат/месяц (коммуналка)</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-gray-100 to-zinc-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-gray-800">40-70</div>
              <div className="text-xs text-gray-600 mt-1">бат/м² (обслуживание)</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-zinc-100 to-slate-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-zinc-800">0,02-0,1%</div>
              <div className="text-xs text-zinc-600 mt-1">налог на недвижимость</div>
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Основные расходы</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedExpense('utilities')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedExpense === 'utilities'
                    ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                💡 Коммуналка
              </button>
              <button
                onClick={() => setSelectedExpense('maintenance')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedExpense === 'maintenance'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🛠️ Обслуживание
              </button>
              <button
                onClick={() => setSelectedExpense('taxes')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedExpense === 'taxes'
                    ? 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                📋 Налоги
              </button>
            </div>

            {selectedExpense === 'utilities' && (
              <div className="space-y-3">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-blue-900">Электричество</h3>
                  </div>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>• <span className="font-semibold">Стоимость:</span> 1 500 - 5 000 ฿/месяц</div>
                    <div>• <span className="font-semibold">Зависит от:</span> потребления, региона</div>
                    <div>• <span className="font-semibold">Тарифы:</span> прогрессивная шкала</div>
                  </div>
                </div>

                <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-bold text-cyan-900">Вода</h3>
                  </div>
                  <div className="space-y-2 text-sm text-cyan-800">
                    <div>• <span className="font-semibold">Стоимость:</span> 200 - 500 ฿/месяц</div>
                    <div>• <span className="font-semibold">Обычно:</span> недорогая</div>
                    <div>• <span className="font-semibold">Зависит от:</span> потребления</div>
                  </div>
                </div>

                <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
                  <h3 className="font-bold text-indigo-900 mb-3">Интернет и ТВ</h3>
                  <div className="space-y-2 text-sm text-indigo-800">
                    <div>• <span className="font-semibold">Интернет:</span> 500 - 1 200 ฿/месяц</div>
                    <div>• <span className="font-semibold">ТВ:</span> 300 - 800 ฿/месяц</div>
                    <div>• <span className="font-semibold">Зависит от:</span> провайдера и пакета</div>
                  </div>
                </div>
              </div>
            )}

            {selectedExpense === 'maintenance' && (
              <div className="space-y-3">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">Плата за обслуживание (Maintenance Fee)</h3>
                  <div className="space-y-2 text-sm text-purple-800">
                    <div>• <span className="font-semibold">Кондоминиумы:</span> 40 - 70 ฿/м² в месяц</div>
                    <div>• <span className="font-semibold">Виллы с охраной:</span> 4 000 - 10 000 ฿/месяц</div>
                    <div>• <span className="font-semibold">Включает:</span> содержание общих зон, инфраструктуры, охрану</div>
                    <div>• <span className="font-semibold">Зависит от:</span> площади, уровня комплекса</div>
                  </div>
                </div>

                <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
                  <h3 className="font-bold text-pink-900 mb-3">Ремонт и обслуживание</h3>
                  <div className="space-y-2 text-sm text-pink-800">
                    <div>• <span className="font-semibold">Текущий ремонт:</span> покраска, замена оборудования</div>
                    <div>• <span className="font-semibold">Рекомендуется:</span> откладывать 1-2% от стоимости в год</div>
                    <div>• <span className="font-semibold">После аренды:</span> может потребоваться дополнительный ремонт</div>
                  </div>
                </div>
              </div>
            )}

            {selectedExpense === 'taxes' && (
              <div className="space-y-3">
                <div className="p-5 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Налог на недвижимость</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div>• <span className="font-semibold">Ставка:</span> 0,02% - 0,1% от кадастровой стоимости</div>
                    <div>• <span className="font-semibold">Для жилой (с пропиской):</span> 0% (вилла до 50 млн, квартира до 10 млн)</div>
                    <div>• <span className="font-semibold">Для сдаваемой в аренду:</span> ставка выше</div>
                    <div>• <span className="font-semibold">Зависит от:</span> типа недвижимости, использования</div>
                  </div>
                </div>

                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 mb-3">Налог на доход от аренды</h3>
                  <div className="space-y-2 text-sm text-emerald-800">
                    <div>• <span className="font-semibold">Применяется:</span> если недвижимость сдаётся в аренду</div>
                    <div>• <span className="font-semibold">Ставка:</span> прогрессивная шкала</div>
                    <div>• <span className="font-semibold">Расходы:</span> можно вычесть из налогооблагаемой базы</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Insurance */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-amber-100 overflow-hidden">
          <div className="bg-gradient-to-r from-amber-200 to-orange-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-amber-800" />
              <h2 className="text-xl font-bold text-amber-800">Страхование недвижимости</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h3 className="font-bold text-amber-900 mb-3">Рекомендуется оформить</h3>
              <div className="space-y-2 text-sm text-amber-800">
                <div>• <span className="font-semibold">Покрытие:</span> пожар, наводнение, кража, другие риски</div>
                <div>• <span className="font-semibold">Стоимость:</span> 5 000 - 15 000 ฿/год</div>
                <div>• <span className="font-semibold">Зависит от:</span> страховой суммы и покрытия</div>
                <div>• <span className="font-semibold">Важно:</span> защита от непредвиденных ситуаций</div>
              </div>
            </div>
          </div>
        </div>

        {/* Property Management */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-rose-800" />
              <h2 className="text-xl font-bold text-rose-800">Управление недвижимостью</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-3">Услуги управляющих компаний</h3>
              <div className="space-y-2 text-sm text-rose-800">
                <div>• <span className="font-semibold">Поиск арендаторов:</span> маркетинг, показы, проверка</div>
                <div>• <span className="font-semibold">Обслуживание:</span> ремонт, уборка, коммунальные платежи</div>
                <div>• <span className="font-semibold">Решение вопросов:</span> взаимодействие с арендаторами</div>
                <div>• <span className="font-semibold">Комиссия:</span> обычно 10-15% от арендной платы</div>
                <div>• <span className="font-semibold">Плюсы:</span> экономия времени, профессиональное управление</div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Costs Example */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-teal-100 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-teal-800" />
              <h2 className="text-xl font-bold text-teal-800">Пример расчёта расходов</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h3 className="font-bold text-teal-900 mb-3">Кондоминиум 50 м²</h3>
              <div className="space-y-2 text-sm text-teal-800">
                <div className="flex justify-between">
                  <span>Коммунальные услуги:</span>
                  <span className="font-bold">2 500 ฿/мес</span>
                </div>
                <div className="flex justify-between">
                  <span>Обслуживание (50 м² × 50 ฿):</span>
                  <span className="font-bold">2 500 ฿/мес</span>
                </div>
                <div className="flex justify-between">
                  <span>Интернет и ТВ:</span>
                  <span className="font-bold">1 000 ฿/мес</span>
                </div>
                <div className="flex justify-between border-t-2 border-teal-300 pt-2 font-bold text-lg">
                  <span>Итого в месяц:</span>
                  <span>6 000 ฿</span>
                </div>
                <div className="flex justify-between text-xs text-teal-600 mt-2">
                  <span>+ Налог на недвижимость (ежегодно):</span>
                  <span>зависит от стоимости</span>
                </div>
                <div className="flex justify-between text-xs text-teal-600">
                  <span>+ Страхование (ежегодно):</span>
                  <span>5 000 - 15 000 ฿</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Советы по управлению</h2>
              <div className="space-y-2 text-gray-600">
                <div>✅ <span className="font-semibold">Планируйте бюджет:</span> учитывайте все расходы заранее</div>
                <div>✅ <span className="font-semibold">Регулярное обслуживание:</span> предотвращает крупные расходы</div>
                <div>✅ <span className="font-semibold">Своевременная оплата:</span> избегайте штрафов и пени</div>
                <div>✅ <span className="font-semibold">Управляющая компания:</span> рассмотрите для сдаваемой недвижимости</div>
                <div>✅ <span className="font-semibold">Страхование:</span> защита от непредвиденных ситуаций</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/thailand-taxes"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-slate-200 text-slate-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
        </div>

      </div>
    </div>
  );
}
