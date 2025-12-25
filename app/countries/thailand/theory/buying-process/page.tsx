'use client';
import React, { useState, useEffect } from 'react';
import { ShoppingCart, FileText, DollarSign, Shield, MapPin, Home } from 'lucide-react';
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
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 2</span>
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
      <div className="bg-purple-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <div className="text-3xl sm:text-4xl">📝</div>
            </div>
            <div>
              <div className="text-xs sm:text-sm text-purple-100 font-medium mb-1">Урок 2 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Процедура покупки недвижимости</h1>
              <p className="text-sm sm:text-base text-purple-100 mt-1">Пошаговый гид по покупке недвижимости в Таиланде</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">

        {/* What You Need */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">Что нужно иностранцу</h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Для покупки недвижимости в Таиланде достаточно <span className="font-semibold text-purple-600">заграничного паспорта</span>.
                Остальные документы и взаимодействие с ведомствами ведут застройщик, агент или юрист.
              </p>
            </div>
          </div>
        </div>

        {/* Buying Steps */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Этапы сделки</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="space-y-3 sm:space-y-4">
              {buyingSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1 text-sm sm:text-base">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget & Prices */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Бюджет и ориентиры цен (2025)</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {priceRanges.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="text-xl sm:text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">{item.type}</h4>
                      <div className="text-base sm:text-lg font-bold text-purple-600">{item.price}</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Purpose Selection */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Цель покупки → выбор локации</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-2 mb-5">
              {purposes.map((purpose) => (
                <button
                  key={purpose.id}
                  onClick={() => setSelectedPurpose(purpose.id)}
                  className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                    selectedPurpose === purpose.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {purpose.icon} {purpose.title}
                </button>
              ))}
            </div>

            {purposes.map((purpose) => (
              selectedPurpose === purpose.id && (
                <div key={purpose.id} className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
                  <h4 className="font-bold text-purple-600 mb-2 text-sm sm:text-base">{purpose.title}</h4>
                  <p className="text-slate-700 text-xs sm:text-sm">{purpose.description}</p>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Ownership Types */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Формы владения</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedOwnership('freehold')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedOwnership === 'freehold'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Freehold
              </button>
              <button
                onClick={() => setSelectedOwnership('leasehold')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedOwnership === 'leasehold'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Leasehold
              </button>
            </div>

            {selectedOwnership === 'freehold' && (
              <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg sm:rounded-xl">
                <h4 className="font-bold text-purple-600 mb-2 text-sm sm:text-base">Freehold (Собственность)</h4>
                <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                  <div>✅ Иностранец может владеть помещением/зданием (квартира в кондо)</div>
                  <div>❌ Нельзя владеть землёй</div>
                  <div>📊 Квота в кондо: до 49% для иностранцев</div>
                  <div>💰 Цена выше на ~10%</div>
                </div>
              </div>
            )}

            {selectedOwnership === 'leasehold' && (
              <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl">
                <h4 className="font-bold text-emerald-600 mb-2 text-sm sm:text-base">Leasehold (Долгосрочная аренда)</h4>
                <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                  <div>📅 Аренда на 30 лет с правом двукратного продления</div>
                  <div>💰 Цена на ~10% ниже → выше доходность</div>
                  <div>📄 Ниже налоги, проще декларирование</div>
                  <div>🔄 Можно продать, подарить, сдавать, завещать</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Taxes & Fees */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Налоги и сборы</h2>
          </div>
          
          <div className="p-4 sm:p-6 space-y-3">
            {taxes.map((tax, idx) => (
              <div key={idx} className="p-3 sm:p-4 bg-rose-50 border border-rose-100 rounded-lg sm:rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold text-slate-900 text-sm sm:text-base">{tax.name}</div>
                  <div className="text-lg sm:text-xl font-bold text-rose-600">{tax.rate}</div>
                </div>
                <div className="text-xs sm:text-sm text-slate-600">{tax.description}</div>
                {tax.type !== 'both' && tax.type !== 'condition' && (
                  <div className="text-xs text-rose-600 mt-1">Применяется для: {tax.type}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Important Tips */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <div className="text-2xl sm:text-3xl">💡</div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-amber-600 mb-3">Важные советы</h2>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-amber-800">
                <div className="p-2 sm:p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <strong>Для безопасности:</strong> выбирайте первичный рынок у проверенных застройщиков
                </div>
                <div className="p-2 sm:p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <strong>На вторичке:</strong> обязательно делайте Due Diligence у локального юриста
                </div>
                <div className="p-2 sm:p-3 bg-amber-50 border border-amber-100 rounded-lg">
                  <strong>Платежи из РФ:</strong> учитывайте ограничения при переводах на вторичном рынке
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/locations"
            className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/investment-roi"
            className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all text-sm sm:text-base text-center"
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
