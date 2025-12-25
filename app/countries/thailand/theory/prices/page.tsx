'use client';
import React, { useState, useEffect } from 'react';
import { Home, DollarSign, TrendingUp, MapPin, Building, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedRegion, setSelectedRegion] = useState('phuket');
  const [selectedType, setSelectedType] = useState('condo');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('prices')) {
        completedLessons.push('prices');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 6: Цены на недвижимость',
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
                <div className="text-xs text-gray-500">Урок 6: Цены на недвижимость</div>
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
      <div className="bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <DollarSign className="w-10 h-10 text-emerald-600" />
            </div>
            <div>
              <div className="text-sm text-emerald-700 font-medium mb-1">Урок 6 • Теория</div>
              <h1 className="text-3xl font-bold text-emerald-900">Цены на недвижимость в Таиланде</h1>
              <p className="text-emerald-800 mt-1">Стоимость по районам, типам жилья и факторы влияния</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-emerald-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Факторы, влияющие на цену</h2>
              <p className="text-gray-600 leading-relaxed">
                Цены на недвижимость в Таиланде зависят от <span className="font-semibold text-emerald-700">локации</span>, 
                <span className="font-semibold text-emerald-700"> типа объекта</span>, 
                <span className="font-semibold text-emerald-700"> близости к пляжу</span> и 
                <span className="font-semibold text-emerald-700"> инфраструктуры</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-emerald-800">2-5 млн</div>
              <div className="text-xs text-emerald-600 mt-1">бат (эконом)</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-teal-800">5-15 млн</div>
              <div className="text-xs text-teal-600 mt-1">бат (средний)</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-800">15+ млн</div>
              <div className="text-xs text-cyan-600 mt-1">бат (премиум)</div>
            </div>
          </div>
        </div>

        {/* Prices by Region */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Цены по регионам</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedRegion('phuket')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedRegion === 'phuket'
                    ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏝️ Пхукет
              </button>
              <button
                onClick={() => setSelectedRegion('pattaya')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedRegion === 'pattaya'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏖️ Паттайя
              </button>
              <button
                onClick={() => setSelectedRegion('bangkok')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedRegion === 'bangkok'
                    ? 'bg-gradient-to-r from-orange-200 to-red-200 text-orange-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏙️ Бангкок
              </button>
            </div>

            {selectedRegion === 'phuket' && (
              <div className="space-y-3">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Пхукет</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>• <span className="font-semibold">Кондоминиумы:</span> 3-8 млн ฿ (1 спальня), 8-20 млн ฿ (2-3 спальни)</div>
                    <div>• <span className="font-semibold">Виллы:</span> 15-50 млн ฿ (стандарт), 50+ млн ฿ (люкс)</div>
                    <div>• <span className="font-semibold">Премиум (Лагуна):</span> от 20 млн ฿</div>
                    <div>• <span className="font-semibold">Фактор:</span> близость к пляжу +30-50% к цене</div>
                  </div>
                </div>
              </div>
            )}

            {selectedRegion === 'pattaya' && (
              <div className="space-y-3">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">Паттайя</h3>
                  <div className="space-y-2 text-sm text-purple-800">
                    <div>• <span className="font-semibold">Кондоминиумы:</span> 2-6 млн ฿ (1 спальня), 6-15 млн ฿ (2-3 спальни)</div>
                    <div>• <span className="font-semibold">Виллы:</span> 10-40 млн ฿</div>
                    <div>• <span className="font-semibold">Пляжные:</span> +20-40% к базовой цене</div>
                  </div>
                </div>
              </div>
            )}

            {selectedRegion === 'bangkok' && (
              <div className="space-y-3">
                <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Бангкок</h3>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div>• <span className="font-semibold">Кондоминиумы:</span> 3-10 млн ฿ (1 спальня), 10-30 млн ฿ (2-3 спальни)</div>
                    <div>• <span className="font-semibold">Пентхаусы:</span> от 30 млн ฿</div>
                    <div>• <span className="font-semibold">Центр (Sukhumvit):</span> +30-50% к цене</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Prices by Type */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Building className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Цены по типам недвижимости</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedType('condo')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedType === 'condo'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏢 Кондоминиум
              </button>
              <button
                onClick={() => setSelectedType('villa')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedType === 'villa'
                    ? 'bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏡 Вилла
              </button>
            </div>

            {selectedType === 'condo' && (
              <div className="space-y-3">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">Кондоминиумы</h3>
                  <div className="space-y-2 text-sm text-purple-800">
                    <div>• <span className="font-semibold">Студия:</span> 2-4 млн ฿</div>
                    <div>• <span className="font-semibold">1 спальня:</span> 3-8 млн ฿</div>
                    <div>• <span className="font-semibold">2 спальни:</span> 6-15 млн ฿</div>
                    <div>• <span className="font-semibold">3 спальни:</span> 10-25 млн ฿</div>
                    <div>• <span className="font-semibold">Пентхаус:</span> от 30 млн ฿</div>
                  </div>
                </div>
              </div>
            )}

            {selectedType === 'villa' && (
              <div className="space-y-3">
                <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                  <h3 className="font-bold text-amber-900 mb-3">Виллы</h3>
                  <div className="space-y-2 text-sm text-amber-800">
                    <div>• <span className="font-semibold">Стандарт (3-4 спальни):</span> 15-40 млн ฿</div>
                    <div>• <span className="font-semibold">Люкс (5+ спален):</span> 40-100+ млн ฿</div>
                    <div>• <span className="font-semibold">С бассейном:</span> +5-10 млн ฿</div>
                    <div>• <span className="font-semibold">Пляжные:</span> +30-50% к цене</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Price Factors */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-200 to-emerald-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-800" />
              <h2 className="text-xl font-bold text-green-800">Факторы, влияющие на цену</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <div className="text-2xl mb-2">📍</div>
                <h4 className="font-bold text-gray-800 mb-2">Локация</h4>
                <p className="text-sm text-gray-600">Близость к пляжу, центру, инфраструктуре увеличивает цену на 20-50%</p>
              </div>
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <div className="text-2xl mb-2">🏖️</div>
                <h4 className="font-bold text-gray-800 mb-2">Вид на море</h4>
                <p className="text-sm text-gray-600">Вид на море добавляет 30-70% к стоимости объекта</p>
              </div>
              <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                <div className="text-2xl mb-2">🏊</div>
                <h4 className="font-bold text-gray-800 mb-2">Инфраструктура</h4>
                <p className="text-sm text-gray-600">Бассейн, спортзал, охрана увеличивают цену на 10-20%</p>
              </div>
              <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                <div className="text-2xl mb-2">📅</div>
                <h4 className="font-bold text-gray-800 mb-2">Состояние</h4>
                <p className="text-sm text-gray-600">Новостройка дороже вторички на 15-30%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Советы при покупке</h2>
              <div className="space-y-2 text-gray-600">
                <div>✅ <span className="font-semibold">Изучите рынок:</span> сравните цены в разных районах</div>
                <div>✅ <span className="font-semibold">Учитывайте дополнительные расходы:</span> налоги, оформление (2-5% от стоимости)</div>
                <div>✅ <span className="font-semibold">Проверьте документы:</span> убедитесь в чистоте сделки</div>
                <div>✅ <span className="font-semibold">Инвестируйте в перспективные районы:</span> развивающиеся локации могут вырасти в цене</div>
                <div>✅ <span className="font-semibold">Консультации:</span> обратитесь к профессиональным агентам</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/residence-citizenship"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-emerald-200 text-emerald-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/thailand-taxes"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-900 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}
