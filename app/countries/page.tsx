'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import AppShell from '@/components/AppShell';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CountriesPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
      setUserName(name);
    }
  }, [user]);

  const countries = [
    {
      id: 'thailand',
      name: 'Таиланд',
      flag: '🇹🇭',
      cities: ['Пхукет', 'Паттайя', 'Самуи'],
      lessons: 8,
      available: true,
    },
    {
      id: 'uae',
      name: 'ОАЭ',
      flag: '🇦🇪',
      cities: ['Дубай', 'Абу-Даби', 'Шарджа'],
      lessons: 0,
      available: false,
    },
    {
      id: 'cyprus',
      name: 'Кипр',
      flag: '🇨🇾',
      cities: ['Лимассол', 'Пафос', 'Ларнака'],
      lessons: 0,
      available: false,
    },
    {
      id: 'greece',
      name: 'Греция',
      flag: '🇬🇷',
      cities: ['Афины', 'Салоники', 'Крит'],
      lessons: 0,
      available: false,
    },
    {
      id: 'indonesia',
      name: 'Индонезия',
      flag: '🇮🇩',
      cities: ['Бали', 'Джакарта', 'Ломбок'],
      lessons: 0,
      available: false,
    },
    {
      id: 'cambodia',
      name: 'Камбоджа',
      flag: '🇰🇭',
      cities: ['Пномпень', 'Сием Рип', 'Сиануквиль'],
      lessons: 0,
      available: false,
    },
  ];

  return (
    <ProtectedRoute>
      <AppShell userName={userName} subtitle="Выбери страну">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          {/* Header Section */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">Доступные программы</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight text-slate-900">
              Выберите страну <span className="text-blue-600">для изучения</span>
            </h1>

            <p className="text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Погружайтесь в особенности рынков недвижимости разных стран с помощью наших интерактивных курсов и тестов.
            </p>
          </div>

          {/* Course Banner */}
          <div className="max-w-5xl mx-auto mb-10">
            <Link
              href="/course"
              className="block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm mb-4 text-sm font-bold">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                    </svg>
                    НОВЫЙ КУРС
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">Зарубежная недвижимость</h2>
                  <p className="text-white/90 text-base sm:text-lg mb-4">
                    Полный курс по инвестированию: 38 шагов, 3 модуля, практические материалы
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      <span>38 шагов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>8-10 часов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                      <span>3 модуля</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-xl">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Countries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {countries.map((country) => (
              <div
                key={country.id}
                className={`group relative flex flex-col h-full bg-white border rounded-2xl p-5 transition-all duration-300 overflow-hidden ${
                  country.available
                    ? 'border-slate-200/80 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer'
                    : 'border-slate-200/60 hover:border-slate-300 hover:shadow-md opacity-80 hover:opacity-100'
                }`}
                onClick={() => country.available && router.push(`/countries/${country.id}`)}
              >
                {country.available && (
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-400/0 rounded-full blur-3xl group-hover:bg-blue-400/8 transition-all duration-500"></div>
                )}

                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`text-5xl transition-transform duration-500 ${country.available ? 'group-hover:scale-110' : ''}`}>
                    {country.flag}
                  </div>
                  {country.available ? (
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full text-slate-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                  )}
                </div>

                <div className="mb-4 relative z-10">
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    country.available
                      ? 'text-slate-900 group-hover:text-blue-600'
                      : 'text-slate-600'
                  }`}>
                    {country.name}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {country.cities.map((city) => (
                      <span
                        key={city}
                        className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-md"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  {country.available ? (
                    <>
                      <div className="flex items-center gap-2 text-blue-600">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-sm font-semibold">{country.lessons} уроков</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-400">
                        Скоро
                      </span>
                      <div className="w-9 h-9 rounded-full border border-slate-200 text-slate-300 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
