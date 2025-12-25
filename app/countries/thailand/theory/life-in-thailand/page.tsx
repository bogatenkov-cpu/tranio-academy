'use client';
import React, { useState, useEffect } from 'react';
import { Home, Cloud, Sun, Droplets, Wind, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedRegion, setSelectedRegion] = useState('central');
  const [selectedSeason, setSelectedSeason] = useState('cool');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('life-in-thailand')) {
        completedLessons.push('life-in-thailand');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 4: Жизнь в Таиланде',
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
                <div className="text-xs text-gray-500">Урок 4: Жизнь в Таиланде</div>
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
      <div className="bg-gradient-to-r from-sky-200 via-blue-200 to-cyan-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <Sun className="w-10 h-10 text-sky-600" />
            </div>
            <div>
              <div className="text-sm text-sky-700 font-medium mb-1">Урок 4 • Теория</div>
              <h1 className="text-3xl font-bold text-sky-900">Климат и погода в Таиланде</h1>
              <p className="text-sky-800 mt-1">Климат, сезоны, температура и особенности жизни</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-sky-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Климат Таиланда</h2>
              <p className="text-gray-600 leading-relaxed">
                В Таиланде <span className="font-semibold text-sky-700">тропический</span> (на севере) и 
                <span className="font-semibold text-sky-700"> тропический муссонный</span> (на юге) климат. 
                Погода значительно варьируется в зависимости от региона и времени года.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-sky-800">32°C</div>
              <div className="text-xs text-sky-600 mt-1">средняя температура</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-800">28°C</div>
              <div className="text-xs text-blue-600 mt-1">температура воды</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-cyan-100 to-sky-100 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-800">6-8</div>
              <div className="text-xs text-cyan-600 mt-1">месяцев влажный сезон</div>
            </div>
          </div>
        </div>

        {/* Seasons */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Сезоны в Таиланде</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedSeason('cool')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedSeason === 'cool'
                    ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                ❄️ Прохладный
              </button>
              <button
                onClick={() => setSelectedSeason('hot')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedSeason === 'hot'
                    ? 'bg-gradient-to-r from-orange-200 to-red-200 text-orange-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                ☀️ Жаркий
              </button>
              <button
                onClick={() => setSelectedSeason('rainy')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedSeason === 'rainy'
                    ? 'bg-gradient-to-r from-teal-200 to-cyan-200 text-teal-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🌧️ Дождливый
              </button>
            </div>

            {selectedSeason === 'cool' && (
              <div className="space-y-3">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Сухой прохладный сезон (ноябрь - февраль)</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>• <span className="font-semibold">Температура:</span> +20°C до +27°C</div>
                    <div>• <span className="font-semibold">Погода:</span> солнечно, сухо, комфортно</div>
                    <div>• <span className="font-semibold">Лучшее время:</span> для отдыха и путешествий</div>
                    <div>• <span className="font-semibold">Регионы:</span> север, северо-восток, центр</div>
                  </div>
                </div>
              </div>
            )}

            {selectedSeason === 'hot' && (
              <div className="space-y-3">
                <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-3">Жаркий сезон (март - май)</h3>
                  <div className="space-y-2 text-sm text-orange-800">
                    <div>• <span className="font-semibold">Температура:</span> +35°C до +40°C</div>
                    <div>• <span className="font-semibold">Погода:</span> очень жарко, сухо</div>
                    <div>• <span className="font-semibold">Особенности:</span> самый жаркий период года</div>
                    <div>• <span className="font-semibold">Совет:</span> избегайте длительного пребывания на солнце</div>
                  </div>
                </div>
              </div>
            )}

            {selectedSeason === 'rainy' && (
              <div className="space-y-3">
                <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
                  <h3 className="font-bold text-teal-900 mb-3">Влажный сезон / сезон дождей (май - октябрь)</h3>
                  <div className="space-y-2 text-sm text-teal-800">
                    <div>• <span className="font-semibold">Осадки:</span> сильные тропические ливни</div>
                    <div>• <span className="font-semibold">Когда идут дожди:</span> ночью или рано утром (15-30 минут)</div>
                    <div>• <span className="font-semibold">После дождя:</span> проясняется, солнечная погода</div>
                    <div>• <span className="font-semibold">Регионы:</span> центр, восточное побережье (август-октябрь)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Regions */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Wind className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Климат по регионам</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedRegion('central')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedRegion === 'central'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏙️ Центр
              </button>
              <button
                onClick={() => setSelectedRegion('south')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedRegion === 'south'
                    ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏝️ Юг
              </button>
            </div>

            {selectedRegion === 'central' && (
              <div className="space-y-4">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">Центральная часть (Бангкок, Паттайя)</h3>
                  <div className="space-y-2 text-sm text-purple-800">
                    <div>• <span className="font-semibold">Три сезона:</span> влажный, сухой прохладный, жаркий</div>
                    <div>• <span className="font-semibold">Средняя температура:</span> 32°C (воздух), 28°C (вода)</div>
                    <div>• <span className="font-semibold">Сезон дождей:</span> конец мая - конец октября</div>
                    <div>• <span className="font-semibold">Осадки:</span> более 1000 мм в год</div>
                  </div>
                </div>
              </div>
            )}

            {selectedRegion === 'south' && (
              <div className="space-y-4">
                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 mb-3">Юг (Пхукет, Самуи, Паттайя)</h3>
                  <div className="space-y-2 text-sm text-emerald-800">
                    <div>• <span className="font-semibold">Два сезона:</span> сухой (ноябрь-апрель), влажный (май-октябрь)</div>
                    <div>• <span className="font-semibold">Пхукет:</span> бархатный сезон - сентябрь, октябрь, ноябрь</div>
                    <div>• <span className="font-semibold">Паттайя:</span> бархатный сезон - сентябрь, октябрь</div>
                    <div>• <span className="font-semibold">Самуи:</span> бархатный сезон - июль, август, сентябрь</div>
                    <div>• <span className="font-semibold">Температура:</span> 24-33°C (воздух), 28-29°C (вода)</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Temperature Table */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-cyan-100 overflow-hidden">
          <div className="bg-gradient-to-r from-cyan-200 to-blue-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Droplets className="w-6 h-6 text-cyan-800" />
              <h2 className="text-xl font-bold text-cyan-800">Средняя температура по регионам</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-cyan-50">
                    <th className="px-4 py-3 text-left text-sm font-bold text-cyan-900">Регион</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-cyan-900">Воздух, °C</th>
                    <th className="px-4 py-3 text-center text-sm font-bold text-cyan-900">Вода, °C</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-cyan-100">
                  <tr className="hover:bg-cyan-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">Бангкок</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">32</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">28</td>
                  </tr>
                  <tr className="hover:bg-cyan-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">Паттайя</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">33</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">28</td>
                  </tr>
                  <tr className="hover:bg-cyan-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">Пхукет</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">24-31</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">28-29</td>
                  </tr>
                  <tr className="hover:bg-cyan-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">Самуи</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">32-33</td>
                    <td className="px-4 py-3 text-center text-sm text-gray-700">28</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Tips for Living */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Советы для жизни в Таиланде</h2>
              <div className="space-y-2 text-gray-600">
                <div>🌡️ <span className="font-semibold">Акклиматизация:</span> к тропической жаре может потребоваться несколько дней</div>
                <div>👕 <span className="font-semibold">Одежда:</span> на севере в конце сухого сезона возьмите тёплую одежду (большая разница дневных и ночных температур)</div>
                <div>🦟 <span className="font-semibold">Насекомые:</span> много комаров (активны на рассвете и в сумерках), используйте репелленты</div>
                <div>☂️ <span className="font-semibold">Дожди:</span> в сезон дождей ливни обычно идут ночью или утром, после них солнечная погода</div>
                <div>🌴 <span className="font-semibold">Отдых:</span> в Таиланде можно отдыхать почти круглый год, выбирайте регион по сезону</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/investment-roi"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-sky-200 text-sky-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/residence-citizenship"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-sky-200 to-blue-200 text-sky-900 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}
