'use client';
import React, { useState, useEffect } from 'react';
import { Home, ShoppingCart, FileText, DollarSign, Shield, MapPin, User, BookOpen, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BuyingProcessLesson() {
  const [selectedPurpose, setSelectedPurpose] = useState('residence');
  const [selectedOwnership, setSelectedOwnership] = useState('freehold');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('buying-process')) {
        completedLessons.push('buying-process');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 2: Процедура покупки',
          date: new Date().toISOString(),
          points: 10,
          country: '🇹🇭'
        });
        localStorage.setItem('thailand_activities', JSON.stringify(activities.slice(0, 20)));
      }
    }
  }, []);

  const priceRanges = [
    { type: 'Кондо-студия', price: '100-150 тыс. $', description: 'Меблирована, готова к аренде', icon: '🏢' },
    { type: 'У моря', price: '180-250 тыс. $', description: 'Близко к пляжу', icon: '🏖️' },
    { type: 'Вилла с бассейном', price: 'от 350 тыс. $', description: 'Частная территория', icon: '🏡' },
    { type: 'Beachfront', price: '1-2 млн $+', description: 'У самой воды', icon: '🌊' }
  ];

  const buyingSteps = [
    { step: 1, title: 'Выбор объекта и бюджета', description: 'Определение целей и финансовых возможностей' },
    { step: 2, title: 'Договор бронирования', description: 'Reservation Agreement (100-200 тыс. батов)' },
    { step: 3, title: 'Основной договор', description: 'Купля-продажа или долгосрочная аренда' },
    { step: 4, title: 'Due Diligence', description: 'Проверка объекта юристом (~550$)' },
    { step: 5, title: 'Оплата и регистрация', description: 'В Земельном департаменте Таиланда' }
  ];

  const purposes = [
    { id: 'residence', title: 'ПМЖ / долгое пребывание', description: 'Юг/восток Пхукета, школы, клиники', icon: '🏠' },
    { id: 'vacation', title: 'Отдых', description: 'Тихие локации, современные комплексы', icon: '🏖️' },
    { id: 'investment', title: 'Инвестиции', description: 'Сервисные апартаменты, управляемые комплексы', icon: '📈' }
  ];

  const taxes = [
    { name: 'Transfer fee', rate: '2%', type: 'freehold', description: 'Налог на переход права собственности' },
    { name: 'Lease registration', rate: '1%', type: 'leasehold', description: 'Регистрация лизхолда' },
    { name: 'Stamp duty', rate: '0,5% / 0,1%', type: 'both', description: 'Гербовый сбор' },
    { name: 'Specific Business Tax', rate: '3,3%', type: 'condition', description: 'Если во владении < 5 лет' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/countries/thailand/theory" className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                <ChevronRight className="w-5 h-5 text-gray-600 rotate-180" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                  <Home className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Tranio Academy</div>
                  <div className="text-xs text-gray-500">Урок 2: Процедура покупки</div>
                </div>
              </div>
            </div>
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
      <div className="bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <div className="text-4xl">📝</div>
            </div>
            <div>
              <div className="text-sm text-emerald-600 font-medium mb-1">Урок 2 • Теория</div>
              <h1 className="text-3xl font-bold text-emerald-800">Процедура покупки недвижимости</h1>
              <p className="text-emerald-600 mt-1">Пошаговый гид по покупке недвижимости в Таиланде</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">

        {/* What You Need */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-green-100">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Что нужно иностранцу</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Для покупки недвижимости в Таиланде достаточно <span className="font-semibold text-green-700">заграничного паспорта</span>.
                Остальные документы и взаимодействие с ведомствами ведут застройщик, агент или юрист.
              </p>
            </div>
          </div>
        </div>

        {/* Buying Steps */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Этапы сделки</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {buyingSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget & Prices */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Бюджет и ориентиры цен (2025)</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {priceRanges.map((item, idx) => (
                <div key={idx} className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.type}</h4>
                      <div className="text-lg font-bold text-purple-700">{item.price}</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purpose Selection */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-orange-800" />
              <h2 className="text-xl font-bold text-orange-800">Цель покупки → выбор локации</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => setSelectedPurpose(purpose.id)}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    selectedPurpose === purpose.id
                      ? 'bg-gradient-to-r from-orange-200 to-amber-200 text-orange-800 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  {purpose.icon} {purpose.title}
                </button>
              ))}
            </div>

            {purposes.map((purpose) => (
              selectedPurpose === purpose.id && (
                <div key={purpose.id} className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <h4 className="font-bold text-orange-800 mb-2">{purpose.title}</h4>
                  <p className="text-orange-700">{purpose.description}</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Ownership Types */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-indigo-100 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-200 to-purple-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-indigo-800" />
              <h2 className="text-xl font-bold text-indigo-800">Формы владения</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedOwnership('freehold')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedOwnership === 'freehold'
                    ? 'bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                Freehold
              </button>
              <button
                onClick={() => setSelectedOwnership('leasehold')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedOwnership === 'leasehold'
                    ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                Leasehold
              </button>
            </div>

            {selectedOwnership === 'freehold' && (
              <div className="space-y-3">
                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                  <h4 className="font-bold text-indigo-800 mb-2">Freehold (Собственность)</h4>
                  <div className="text-sm text-indigo-700 space-y-1">
                    <div>✅ Иностранец может владеть помещением/зданием (квартира в кондо)</div>
                    <div>❌ Нельзя владеть землёй</div>
                    <div>📊 Квота в кондо: до 49% для иностранцев</div>
                    <div>💰 Цена выше на ~10%</div>
                  </div>
                </div>
              </div>
            )}

            {selectedOwnership === 'leasehold' && (
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h4 className="font-bold text-emerald-800 mb-2">Leasehold (Долгосрочная аренда)</h4>
                  <div className="text-sm text-emerald-700 space-y-1">
                    <div>📅 Аренда на 30 лет с правом двукратного продления</div>
                    <div>💰 Цена на ~10% ниже → выше доходность</div>
                    <div>📄 Ниже налоги, проще декларирование</div>
                    <div>🔄 Можно продать, подарить, сдавать, завещать</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Taxes & Fees */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-red-100 overflow-hidden">
          <div className="bg-gradient-to-r from-red-200 to-rose-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-red-800" />
              <h2 className="text-xl font-bold text-red-800">Налоги и сборы</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-3">
            {taxes.map((tax, idx) => (
              <div key={idx} className="p-4 bg-red-50 rounded-xl border border-red-200">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-gray-800">{tax.name}</div>
                  <div className="text-xl font-bold text-red-700">{tax.rate}</div>
                </div>
                <div className="text-sm text-gray-600">{tax.description}</div>
                {tax.type !== 'both' && tax.type !== 'condition' && (
                  <div className="text-xs text-red-600 mt-1">Применяется для: {tax.type}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border border-amber-100">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-3xl">💡</div>
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-3">Важные советы</h2>
              <div className="space-y-3 text-amber-800">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <strong>Для безопасности:</strong> выбирайте первичный рынок у проверенных застройщиков
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <strong>На вторичке:</strong> обязательно делайте Due Diligence у локального юриста
                </div>
                <div className="p-3 bg-amber-50 rounded-lg">
                  <strong>Платежи из РФ:</strong> учитывайте ограничения при переводах на вторичном рынке
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/locations"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-purple-200 text-purple-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/investment-roi"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}