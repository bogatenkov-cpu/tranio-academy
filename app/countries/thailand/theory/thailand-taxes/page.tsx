'use client';
import React, { useState } from 'react';
import { Home, ShoppingCart, TrendingUp, Calendar, Gift, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function ThailandTaxesLesson() {
  const [activeOwnership, setActiveOwnership] = useState('freehold');
  const [selectedProperty, setSelectedProperty] = useState('villa');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                <Home className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Тренажёр Брокера</div>
                <div className="text-xs text-gray-500">Урок 6: Налоги в Таиланде</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/theory" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-all">
                <BookOpen className="w-4 h-4" />
                К урокам
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium hover:shadow-md transition-all">
                <User className="w-4 h-4" />
                Профиль
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <div className="text-4xl">🏠</div>
            </div>
            <div>
              <div className="text-sm text-purple-600 font-medium mb-1">Урок 6 • Теория</div>
              <h1 className="text-3xl font-bold text-purple-800">Налоги на недвижимость в Таиланде</h1>
              <p className="text-purple-600 mt-1">Полный гид для иностранных покупателей</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-purple-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Что влияет на налоги?</h2>
              <p className="text-gray-600 leading-relaxed">
                Налоги зависят от <span className="font-semibold text-purple-700">формы владения</span>, 
                <span className="font-semibold text-purple-700"> налогового статуса</span> и 
                <span className="font-semibold text-purple-700"> срока владения</span> объектом.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <div className="text-xs font-medium text-purple-600 mb-1">Форма 1</div>
              <div className="font-bold text-purple-800">Freehold</div>
              <div className="text-xs text-purple-600 mt-1">Собственность</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-pink-100 to-rose-100 rounded-xl">
              <div className="text-xs font-medium text-pink-600 mb-1">Форма 2</div>
              <div className="font-bold text-pink-800">Leasehold</div>
              <div className="text-xs text-pink-600 mt-1">Долгосрочная аренда</div>
            </div>
          </div>
        </div>

        {/* Section 1: Purchase Taxes */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-pink-100 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-200 to-rose-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-rose-800" />
              <h2 className="text-xl font-bold text-rose-800">1. Налоги при покупке</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setActiveOwnership('freehold')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  activeOwnership === 'freehold'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                Freehold
              </button>
              <button
                onClick={() => setActiveOwnership('leasehold')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  activeOwnership === 'leasehold'
                    ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                Leasehold
              </button>
            </div>

            {activeOwnership === 'freehold' && (
              <div className="space-y-3">
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Transfer fee</div>
                    <div className="text-2xl font-bold text-purple-700">2%</div>
                  </div>
                  <div className="text-sm text-gray-600">Налог на переход права собственности</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: покупатель или продавец</div>
                </div>

                <div className="p-4 bg-violet-50 rounded-xl border border-violet-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Stamp duty</div>
                    <div className="text-2xl font-bold text-violet-700">0,5%</div>
                  </div>
                  <div className="text-sm text-gray-600">Гербовый сбор (или отсутствует)</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: продавец</div>
                </div>

                <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Specific business tax</div>
                    <div className="text-2xl font-bold text-rose-700">3,3%</div>
                  </div>
                  <div className="text-sm text-gray-600">Бизнес-налог</div>
                  <div className="text-xs text-amber-700 mt-1">⚠️ Только если владение менее 5 лет</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: продавец</div>
                </div>

                <div className="p-4 bg-sky-50 rounded-xl border border-sky-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Withholding tax</div>
                    <div className="text-2xl font-bold text-sky-700">1-35%</div>
                  </div>
                  <div className="text-sm text-gray-600">Налог у источника (зависит от статуса)</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: продавец</div>
                </div>
              </div>
            )}

            {activeOwnership === 'leasehold' && (
              <div className="space-y-3">
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Lease registration fee</div>
                    <div className="text-2xl font-bold text-emerald-700">1%</div>
                  </div>
                  <div className="text-sm text-gray-600">Регистрация аренды</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: покупатель или продавец</div>
                </div>

                <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold text-gray-800">Stamp duty</div>
                    <div className="text-2xl font-bold text-teal-700">0,1%</div>
                  </div>
                  <div className="text-sm text-gray-600">Гербовый сбор</div>
                  <div className="text-xs text-gray-500 mt-1">Платит: продавец</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Section 2: Withholding Tax */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">2. Withholding Tax подробнее</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-blue-50 rounded-xl border border-blue-200 text-center">
                <div className="text-sm text-blue-600 mb-2">Юридические лица</div>
                <div className="text-3xl font-bold text-blue-800">1%</div>
                <div className="text-xs text-blue-600 mt-2">от кадастра или договора</div>
              </div>
              <div className="p-5 bg-purple-50 rounded-xl border border-purple-200 text-center">
                <div className="text-sm text-purple-600 mb-2">Физические лица</div>
                <div className="text-3xl font-bold text-purple-800">5-35%</div>
                <div className="text-xs text-purple-600 mt-2">прогрессивная шкала</div>
              </div>
            </div>

            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-2 mb-3">
                <div className="text-2xl">💰</div>
                <div className="font-bold text-amber-800">Пример расчёта для физлица</div>
              </div>
              <div className="text-sm text-amber-800 space-y-1 pl-8">
                <div>Кондо: <span className="font-semibold">5 млн ฿</span>, владение: <span className="font-semibold">2 года</span></div>
                <div>→ Вычет 84% = налоговая база 800к ฿</div>
                <div>→ 800к ÷ 2 года = 400к в год</div>
                <div>→ 5% на 300к + 10% на 100к = 25к</div>
                <div className="font-bold pt-1">✅ Итого: 50 000 ฿</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Annual Tax */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-200 to-emerald-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-green-800" />
              <h2 className="text-xl font-bold text-green-800">3. Ежегодный налог</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-5">
            <div className="p-5 bg-green-100 rounded-xl border border-green-300">
              <div className="font-bold text-green-900 mb-2">🎯 Главное: прописка освобождает от налога!</div>
              <div className="text-sm text-green-800 space-y-1">
                <div>• Вилла до 50 млн ฿ → налог 0%</div>
                <div>• Квартира до 10 млн ฿ → налог 0%</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-600 mb-2">Если НЕ прописаны или второй объект:</div>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setSelectedProperty('villa')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    selectedProperty === 'villa'
                      ? 'bg-gradient-to-r from-amber-200 to-orange-200 text-amber-900 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  🏡 Вилла
                </button>
                <button
                  onClick={() => setSelectedProperty('apartment')}
                  className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                    selectedProperty === 'apartment'
                      ? 'bg-gradient-to-r from-cyan-200 to-blue-200 text-cyan-900 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  🏢 Квартира
                </button>
              </div>

              <div className="space-y-2">
                {selectedProperty === 'villa' ? (
                  <>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">0-25 млн ฿</span>
                      <span className="text-xl font-bold text-purple-700">0,03%</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">25-50 млн ฿</span>
                      <span className="text-xl font-bold text-purple-700">0,05%</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">50+ млн ฿</span>
                      <span className="text-xl font-bold text-purple-700">0,1%</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">0-40 млн ฿</span>
                      <span className="text-xl font-bold text-cyan-700">0,02%</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">40-65 млн ฿</span>
                      <span className="text-xl font-bold text-cyan-700">0,03%</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">65-90 млн ฿</span>
                      <span className="text-xl font-bold text-cyan-700">0,05%</span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 flex justify-between items-center">
                      <span className="text-gray-700">90+ млн ฿</span>
                      <span className="text-xl font-bold text-cyan-700">0,1%</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex gap-2 text-sm">
                <span>💡</span>
                <div className="text-yellow-800">
                  <span className="font-semibold">Совет:</span> Используйте жёлтую книгу (house registration) для прописки
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Inheritance & Gift */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6 text-rose-800" />
              <h2 className="text-xl font-bold text-rose-800">4. Наследство и дарение</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-green-50 rounded-xl border border-green-200 text-center">
                <div className="text-sm text-green-600 mb-2">Наследство</div>
                <div className="text-2xl font-bold text-green-800">до 100 млн ฿</div>
                <div className="text-xs text-green-600 mt-2">освобождено</div>
              </div>
              <div className="p-5 bg-pink-50 rounded-xl border border-pink-200 text-center">
                <div className="text-sm text-pink-600 mb-2">Супруги</div>
                <div className="text-2xl font-bold text-pink-800">0% ❤️</div>
                <div className="text-xs text-pink-600 mt-2">всегда</div>
              </div>
            </div>

            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <div className="font-bold text-purple-800 mb-3">Сверх 100 млн ฿:</div>
              <div className="space-y-2 text-sm text-purple-700">
                <div className="flex justify-between">
                  <span>👨‍👩‍👧 Родители / Дети</span>
                  <span className="font-bold">5%</span>
                </div>
                <div className="flex justify-between">
                  <span>👥 Остальные родственники</span>
                  <span className="font-bold">10%</span>
                </div>
              </div>
            </div>

            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <div className="font-bold text-amber-800 mb-2">Дарение: 5%</div>
              <div className="text-sm text-amber-700 space-y-1">
                <div>✅ Освобождено до 20 млн ฿ (супруги, дети, родители)</div>
                <div>✅ Освобождено до 10 млн ฿ (остальные)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/theory/prices"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-purple-200 text-purple-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/theory/property-maintenance"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}