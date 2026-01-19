'use client';
import React, { useState } from 'react';
import { MapPin, Home, TrendingUp, Users, Building2, DollarSign, Info, Waves, Mountain, School } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';

export default function LocationsLesson() {
  useLesson('locations', 'Урок 1: Районы и локации');
  
  const [selectedIsland, setSelectedIsland] = useState('phuket');
  const [selectedLocation, setSelectedLocation] = useState('bangtao');
  const [selectedSamuiArea, setSelectedSamuiArea] = useState('bophut');

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
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 1</span>
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
      <div className="bg-blue-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <MapPin className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-blue-100 font-medium mb-1">Урок 1 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Районы и локации Таиланда</h1>
              <p className="text-sm sm:text-base text-blue-100 mt-1">Обзор районов Пхукета, Паттайи, Самуи</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        {/* Intro */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">О Пхукете</h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-2">
                <p>Пхукет — крупнейший остров Таиланда, флагман восстановления туризма после пандемии. В 2025 году десятки прямых рейсов из РФ, ЕС, Китая, Южной Кореи, Ближнего Востока.</p>
                <p className="text-sm">
                  <span className="font-semibold text-blue-600">~15 млн туристов/год</span> посещают Пхукет. 
                  <span className="font-semibold text-blue-600"> ~70% недвижимости</span> принадлежит иностранцам.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 mt-4">
            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-blue-600">50 км</div>
              <div className="text-[10px] sm:text-xs text-blue-600 mt-1">север-юг</div>
            </div>
            <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-emerald-600">20 км</div>
              <div className="text-[10px] sm:text-xs text-emerald-600 mt-1">запад-восток</div>
            </div>
            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg sm:rounded-xl text-center">
              <div className="text-lg sm:text-2xl font-bold text-amber-600">≤1 час</div>
              <div className="text-[10px] sm:text-xs text-amber-600 mt-1">до любой точки</div>
            </div>
          </div>
        </div>

        {/* Island Selection */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Выберите остров</h2>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedIsland('phuket')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedIsland === 'phuket'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🏝️ Пхукет
              </button>
              <button
                onClick={() => setSelectedIsland('samui')}
                className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all ${
                  selectedIsland === 'samui'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🌴 Самуи
              </button>
            </div>

            {selectedIsland === 'phuket' && (
              <div className="space-y-4">
                <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                  <h3 className="font-bold text-cyan-900 mb-3">Быстрый выбор локации</h3>
                  <div className="space-y-2 text-sm text-cyan-800">
                    <div>• <span className="font-semibold">Патонг:</span> максимальная ночная жизнь</div>
                    <div>• <span className="font-semibold">Карон, Ката:</span> семейный отдых + доступ к ночной жизни</div>
                    <div>• <span className="font-semibold">Най Харн:</span> экспатская атмосфера юга</div>
                    <div>• <span className="font-semibold">Лагуна:</span> люксовые романтические каникулы, гольф, премиум-сервис</div>
                    <div>• <span className="font-semibold">Камала, Сурин:</span> семейный отдых и/или люкс на вилле с видами</div>
                    <div>• <span className="font-semibold">Север Пхукета:</span> спокойный пляжный релакс, меньше людей</div>
                    <div>• <span className="font-semibold">Чалонг, Кату, Вичит:</span> быстро до любой точки, инфраструктура для жизни</div>
                  </div>
                </div>
              </div>
            )}

            {selectedIsland === 'samui' && (
              <div className="space-y-3">
                <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                  <div className="font-bold text-teal-900 mb-2">Север/Восток</div>
                  <div className="text-sm text-teal-700">Экспат-локации: школы, больницы. Северо-восток — туристический центр.</div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <div className="font-bold text-emerald-900 mb-2">Запад</div>
                  <div className="text-sm text-emerald-700">Адм. центр, местные жители, порт, госбольница.</div>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="font-bold text-green-900 mb-2">Юг</div>
                  <div className="text-sm text-green-700">Уединение и «дикие» пляжи.</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Phuket Locations Detailed */}
        {selectedIsland === 'phuket' && (
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
              <div className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-purple-800" />
                <h2 className="text-xl font-bold text-purple-800">Детальный обзор районов Пхукета</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2 mb-5">
                <button
                  onClick={() => setSelectedLocation('bangtao')}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    selectedLocation === 'bangtao'
                      ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  Банг Тао / Лагуна
                </button>
                <button
                  onClick={() => setSelectedLocation('surin')}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    selectedLocation === 'surin'
                      ? 'bg-gradient-to-r from-pink-200 to-rose-200 text-pink-800 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  Сурин
                </button>
                <button
                  onClick={() => setSelectedLocation('naiharn')}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    selectedLocation === 'naiharn'
                      ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  Най Харн / Раваи
                </button>
                <button
                  onClick={() => setSelectedLocation('panwa')}
                  className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                    selectedLocation === 'panwa'
                      ? 'bg-gradient-to-r from-teal-200 to-emerald-200 text-teal-800 shadow-md'
                      : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  Панва / Вичит
                </button>
              </div>

              {selectedLocation === 'bangtao' && (
                <div className="space-y-4">
                  <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Waves className="w-5 h-5 text-purple-700" />
                      <h3 className="font-bold text-purple-900">Профиль</h3>
                    </div>
                    <div className="text-sm text-purple-800 space-y-2">
                      <p>Один из самых востребованных районов: длинный пляж (~8 км), сосны-казуарины, клубы/отели.</p>
                      <p>В глубине — закрытые поселки вилл. Люкс соседствует с обычной тайской жизнью.</p>
                    </div>
                  </div>

                  <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-pink-700" />
                      <h3 className="font-bold text-pink-900">Laguna Phuket</h3>
                    </div>
                    <div className="text-sm text-pink-800 space-y-2">
                      <p>Интегрированный курорт ~30 лет. Гольф, отели, виллы в едином мастер-плане (Banyan Tree, Angsana).</p>
                      <p>Собственные автобусы/паромы, ухоженная территория, низкий трафик.</p>
                    </div>
                  </div>

                  <div className="p-5 bg-violet-50 rounded-xl border border-violet-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-violet-700" />
                      <h3 className="font-bold text-violet-900">Кому подходит</h3>
                    </div>
                    <div className="text-sm text-violet-800">
                      Универсально: от отпуска 2 недели до ПМЖ. Европейский уровень, школы/ТЦ/сервис.
                    </div>
                  </div>

                  <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-blue-700" />
                      <h3 className="font-bold text-blue-900">Цены</h3>
                    </div>
                    <div className="text-sm text-blue-800 space-y-1">
                      <div>• Апарты от <span className="font-bold">~$4 000/м²</span></div>
                      <div>• Виллы от <span className="font-bold">~$2 500/м²</span> (в Лагуне дороже)</div>
                      <div>• Поселки вилл в Лайан: от <span className="font-bold">~$1 800/м²</span></div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-100 rounded-xl border border-green-300">
                    <div className="font-bold text-green-900 mb-2">✅ Вывод</div>
                    <div className="text-sm text-green-800">
                      «Европейский» стандарт, сильная ликвидность, комфорт для жизни и инвестиций.
                    </div>
                  </div>
                </div>
              )}

              {selectedLocation === 'surin' && (
                <div className="space-y-4">
                  <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Mountain className="w-5 h-5 text-pink-700" />
                      <h3 className="font-bold text-pink-900">Профиль</h3>
                    </div>
                    <div className="text-sm text-pink-800 space-y-2">
                      <p>Между Банг Тао и Камалой. Подходит для туризма, зимовки, курортного ПМЖ.</p>
                      <p>За дорогой — склон с роскошными виллами с видами на море: «первоклассная» локация 20+ лет.</p>
                    </div>
                  </div>

                  <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-rose-700" />
                      <h3 className="font-bold text-rose-900">Кому подходит</h3>
                    </div>
                    <div className="text-sm text-rose-800">
                      Любители видов и серфинга; обеспеченные владельцы вилл; семьи, ищущие спокойный лайфстайл.
                    </div>
                  </div>

                  <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-amber-700" />
                      <h3 className="font-bold text-amber-900">Цены</h3>
                    </div>
                    <div className="text-sm text-amber-800 space-y-1">
                      <div>• Виллы часто от <span className="font-bold">$1 млн+</span> (видовые особенно)</div>
                      <div>• Доступный сегмент на стыке Сурин–Банг Тао: ~<span className="font-bold">$150 000</span> за 35–40 м²</div>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <div className="flex gap-2 text-sm">
                      <span>ℹ️</span>
                      <div className="text-yellow-800">
                        15 мая 2025: власти Таланга зачистили пляж от незаконных построек, вернув природный облик.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {selectedLocation === 'naiharn' && (
                <div className="space-y-4">
                  <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Waves className="w-5 h-5 text-blue-700" />
                      <h3 className="font-bold text-blue-900">Профиль</h3>
                    </div>
                    <div className="text-sm text-blue-800 space-y-2">
                      <p>Один из лучших пляжей юга. Рядом отели The Nai Harn, Wyndham Grand, Sansuri.</p>
                      <p>Главная артерия — Saiyuan Road: кафе, магазины, прачечные, спа, салоны.</p>
                    </div>
                  </div>

                  <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-cyan-700" />
                      <h3 className="font-bold text-cyan-900">Кому подходит</h3>
                    </div>
                    <div className="text-sm text-cyan-800">
                      Любители одного из лучших пляжей Пхукета; широкий выбор жилья: от отелей до апартов и вилл.
                    </div>
                  </div>

                  <div className="p-5 bg-sky-50 rounded-xl border border-sky-200">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-sky-700" />
                      <h3 className="font-bold text-sky-900">Цены</h3>
                    </div>
                    <div className="text-sm text-sky-800 space-y-1">
                      <div>• Виллы у пляжа: от <span className="font-bold">~$300 000</span> за 2-сп.</div>
                      <div>• Кондо на ранней стадии: от <span className="font-bold">$100 000</span> за студию/1-сп.</div>
                      <div>• Ближе к сдаче: ~<span className="font-bold">$150 000</span></div>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-100 rounded-xl border border-amber-300">
                    <div className="font-bold text-amber-900 mb-2">⚠️ Дефицит земли</div>
                    <div className="text-sm text-amber-800">
                      Пхукет — остров, много заповедников и сельхозземель + ограничения по высотности. Предложение жилья ограничено.
                    </div>
                  </div>
                </div>
              )}

              {selectedLocation === 'panwa' && (
                <div className="space-y-4">
                  <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Waves className="w-5 h-5 text-teal-700" />
                      <h3 className="font-bold text-teal-900">Профиль</h3>
                    </div>
                    <div className="text-sm text-teal-800 space-y-2">
                      <p>Мыс Панва — часть района Вичит. Идеален для уединённого отдыха «на месте».</p>
                      <p>Отели со своими мини-пляжами. Икона — Sri Panwa, также Pullman, Anantara ($500+/ночь).</p>
                    </div>
                  </div>

                  <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5 text-emerald-700" />
                      <h3 className="font-bold text-emerald-900">Кому подходит</h3>
                    </div>
                    <div className="text-sm text-emerald-800">
                      Те, кто ищет приватность, «тайский люкс» без толп; яхтсмены.
                    </div>
                  </div>

                  <div className="p-5 bg-green-50 rounded-xl border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign className="w-5 h-5 text-green-700" />
                      <h3 className="font-bold text-green-900">Цены</h3>
                    </div>
                    <div className="text-sm text-green-800 space-y-1">
                      <div>• Апарты в кондо: ~<span className="font-bold">$120 000</span> за ~35 м²</div>
                      <div>• Первая линия — виллы <span className="font-bold">$2 млн+</span></div>
                    </div>
                  </div>

                  <div className="p-4 bg-blue-100 rounded-xl border border-blue-300">
                    <div className="font-bold text-blue-900 mb-2">🌿 Особенность</div>
                    <div className="text-sm text-blue-800">
                      Бухта Ао-Йон — «секретный» купабельный пляж круглый год; мало инфраструктуры.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Samui Areas */}
        {selectedIsland === 'samui' && (
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-emerald-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-200 to-teal-200 px-6 py-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-emerald-800" />
                <h2 className="text-xl font-bold text-emerald-800">Районы Самуи</h2>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-2 gap-2 mb-5">
                {['bophut', 'maenam', 'maret', 'talingnham'].map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedSamuiArea(area)}
                    className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                      selectedSamuiArea === area
                        ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {area === 'bophut' && 'Бо Пхут'}
                    {area === 'maenam' && 'Маенам'}
                    {area === 'maret' && 'Марет'}
                    {area === 'talingnham' && 'Талинг Нгам'}
                  </button>
                ))}
              </div>

              {selectedSamuiArea === 'bophut' && (
                <div className="space-y-3">
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="font-bold text-emerald-900 mb-2">🏖️ Туристический центр</div>
                    <div className="text-sm text-emerald-800">
                      Аэропорт, пирсы, Большой Будда, Wat Plai Laem. Госпитали и клиники высокого уровня.
                    </div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                    <div className="flex items-center gap-2 mb-2">
                      <School className="w-4 h-4 text-teal-700" />
                      <div className="font-bold text-teal-900">Школы</div>
                    </div>
                    <div className="text-sm text-teal-800">ISS и PBISS (British)</div>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                    <div className="font-bold text-cyan-900 mb-2">💰 Инвестиции</div>
                    <div className="text-sm text-cyan-800">
                      Акцент на краткосрочную аренду, люксовая аудитория, топ-инфраструктура.
                    </div>
                  </div>
                </div>
              )}

              {selectedSamuiArea === 'maenam' && (
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="font-bold text-green-900 mb-2">🏖️ Пляжи и уединение</div>
                    <div className="text-sm text-green-800">
                      Пляжи Маенам и Банг По; отели 5* (Four Seasons). Тихие широкие пляжи, зелень.
                    </div>
                  </div>
                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-2 mb-2">
                      <School className="w-4 h-4 text-emerald-700" />
                      <div className="font-bold text-emerald-900">Школы</div>
                    </div>
                    <div className="text-sm text-emerald-800">Oonrak Bilingual School</div>
                  </div>
                  <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
                    <div className="font-bold text-teal-900 mb-2">👨‍👩‍👧 Кому подходит</div>
                    <div className="text-sm text-teal-800">
                      Семейные покупатели, тихие арендаторы. Комфорт + уединение вдали от туристических толп.
                    </div>
                  </div>
                </div>
              )}

              {selectedSamuiArea === 'maret' && (
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="font-bold text-blue-900 mb-2">📸 Живописность</div>
                    <div className="text-sm text-blue-800">
                      Живописные лагуны, валуны, пальмы — фотомагниты. Viewpoint &quot;Overlapping Stone&quot;.
                    </div>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-xl border border-cyan-200">
                    <div className="flex items-center gap-2 mb-2">
                      <School className="w-4 h-4 text-cyan-700" />
                      <div className="font-bold text-cyan-900">Школы</div>
                    </div>
                    <div className="text-sm text-cyan-800">Lamai International School (LIS), Windfield (WIS)</div>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-xl border border-sky-200">
                    <div className="font-bold text-sky-900 mb-2">🌴 Для экспатов</div>
                    <div className="text-sm text-sky-800">
                      Баланс природы и инфраструктуры. Рынки, океанариум, тигриная ферма.
                    </div>
                  </div>
                </div>
              )}

              {selectedSamuiArea === 'talingnham' && (
                <div className="space-y-3">
                  <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                    <div className="font-bold text-purple-900 mb-2">🌅 Ultra-privacy</div>
                    <div className="text-sm text-purple-800">
                      Самый &quot;нетуристический&quot;: горные джунгли, дикие пляжи, буддийские храмы, 5* резорты.
                    </div>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-xl border border-pink-200">
                    <div className="font-bold text-pink-900 mb-2">🧘 Wellness-люкс</div>
                    <div className="text-sm text-pink-800">
                      Для уединённого премиум-отдыха, wellness. Sunset-виды, элитные резорты.
                    </div>
                  </div>
                  <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                    <div className="font-bold text-rose-900 mb-2">🏝️ Локация</div>
                    <div className="text-sm text-rose-800">
                      Юго-запад острова. Кокосовые плантации, пляж Панг Ка.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Price Overview */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-orange-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-200 to-amber-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-orange-800" />
              <h2 className="text-xl font-bold text-orange-800">Цены и форматы (Пхукет, 2025)</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-sm text-orange-600 mb-2">Апартаменты</div>
                <div className="text-2xl font-bold text-orange-800">от $4 000/м²</div>
                <div className="text-xs text-orange-600 mt-2">при pre-sale скидка до ~30%</div>
              </div>
              <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                <div className="text-sm text-amber-600 mb-2">Виллы</div>
                <div className="text-2xl font-bold text-amber-800">от $2 000/м²</div>
                <div className="text-xs text-amber-600 mt-2">площади обычно от ~250 м²</div>
              </div>
            </div>

            <div className="p-5 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="font-bold text-yellow-900 mb-3">Ориентиры по апартаментам:</div>
              <div className="space-y-2 text-sm text-yellow-800">
                <div>• Студии 30-35 м²: ~<span className="font-bold">$120 000</span></div>
                <div>• Гарантированная доходность: <span className="font-bold">7-12% годовых</span> (по программам девелопера)</div>
                <div>• Самые ликвидные форматы: студии и 1-сп. 30-35 м²</div>
              </div>
            </div>

            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <div className="font-bold text-green-900 mb-3">Ориентиры по виллам:</div>
              <div className="space-y-2 text-sm text-green-800">
                <div>• Дом в поселке: от <span className="font-bold">~$500 000</span></div>
                <div>• Вилла у моря: от <span className="font-bold">~$1 млн</span></div>
                <div>• Разброс м² внутри одного девелопера: ×1.5-2 между проектами</div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <div className="font-bold text-blue-900 mb-3">📈 Драйверы роста:</div>
              <div className="space-y-2 text-sm text-blue-800">
                <div>• Возврат китайских инвесторов после локдаунов</div>
                <div>• Интернациональный пул девелоперов (Бангкок, Австралия, Европа)</div>
                <div>• Потенциал турпотока (Китай + новый спрос из других стран)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Elite Districts */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Элитные районы (Пхукет)</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-purple-100 rounded-xl border border-purple-300">
              <div className="font-bold text-purple-900 mb-2">🏆 Аксиома рынка: статус = вид из окна</div>
              <div className="text-sm text-purple-800">
                Море и панорамы — главный фактор элитности недвижимости.
              </div>
            </div>

            <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
              <div className="font-bold text-pink-900 mb-3">🏔️ Виллы на склонах:</div>
              <div className="space-y-1 text-sm text-pink-800">
                <div>• Южная часть Сурина</div>
                <div>• &quot;Миля миллионеров&quot; в Камале</div>
                <div>• Часть Ката/Карон</div>
                <div>• Мыс севернее Банг Тао</div>
                <div>• Холмы у Най-Янга</div>
              </div>
              <div className="text-xs text-pink-700 mt-3">⚠️ Новых видовых участков мало — люкс создала природа</div>
            </div>

            <div className="p-5 bg-violet-50 rounded-xl border border-violet-200">
              <div className="font-bold text-violet-900 mb-3">🏘️ Мастер-план комплексы:</div>
              <div className="space-y-1 text-sm text-violet-800">
                <div>• Виллы у гольф-полей в Кату/Таланге</div>
                <div>• Яхтенные гавани (Royal Phuket Marina)</div>
                <div>• Грамотная локация + дизайн + поддержание стандарта</div>
              </div>
            </div>

            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <div className="font-bold text-blue-900 mb-3">🌅 Восточное побережье:</div>
              <div className="text-sm text-blue-800">
                Мыс Панва/мыс Яму: &quot;рассветные&quot; виды, приватность и уединение.
              </div>
            </div>
          </div>
        </div>

        {/* Practical Notes */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-200 to-slate-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Info className="w-6 h-6 text-gray-800" />
              <h2 className="text-xl font-bold text-gray-800">Практические заметки</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-3">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">🏠</div>
                <div className="text-sm text-blue-800">
                  <span className="font-bold">Для жизни/ПМЖ:</span> смотрим юг/восток/внутренние районы — ближе к школам, клиникам, ТЦ, коворкингам.
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">🏖️</div>
                <div className="text-sm text-purple-800">
                  <span className="font-bold">Для отдыха:</span> западные пляжи по степени тишины: север → тише; Патонг → максимум nightlife.
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">💰</div>
                <div className="text-sm text-green-800">
                  <span className="font-bold">Для инвестиций:</span> Банг Тао/Лагуна, Сурин (виды), Най Харн (массовый спрос), стыковые зоны.
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">⚠️</div>
                <div className="text-sm text-amber-800">
                  <span className="font-bold">Вторичка:</span> продавцы часто иностранцы из &quot;недружественных&quot; стран — учесть платёжные нюансы.
                </div>
              </div>
            </div>

            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">📋</div>
                <div className="text-sm text-rose-800">
                  <span className="font-bold">Земля/строительство:</span> островной дефицит, заповедники, высотные лимиты, эко-сертификация. Проверять Due Diligence!
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-xl border border-yellow-200">
              <div className="flex items-start gap-2">
                <div className="text-lg">💡</div>
                <div className="text-sm text-yellow-800">
                  <span className="font-bold">На старте стройки:</span> можно брать с дисконтом до ~30%, но делай Due Diligence девелопера и проекта!
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <button className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 text-slate-400 font-semibold cursor-not-allowed text-sm sm:text-base">
            ← Предыдущий урок
          </button>
          <Link href="/countries/thailand/theory/buying-process" className="flex-1">
            <button className="w-full py-3 px-4 sm:px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
              Следующий урок →
            </button>
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