'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CountriesPage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isRegistered = localStorage.getItem('isRegistered');
      if (!isRegistered) {
        router.push('/');
        return;
      }
      const name = localStorage.getItem('userName');
      if (name) setUserName(name);
    }
  }, [router]);

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
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-600/20 group-hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-1">Тренажер знаний</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-5">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-sm font-semibold text-slate-700">{userName || 'Пользователь'}</span>
              <span className="text-xs text-slate-500">Брокер</span>
            </div>
            <Link href="/profile" className="relative group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-32 pb-20">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Доступные программы</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
            Выберите страну <span className="text-blue-600">для изучения</span>
          </h1>
          
          <p className="text-lg text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Погружайтесь в особенности рынков недвижимости разных стран с помощью наших интерактивных курсов и тестов.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`group relative flex flex-col h-full bg-white border rounded-2xl p-6 transition-all duration-300 overflow-hidden ${
                country.available
                  ? 'border-slate-200 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 ring-1 ring-transparent hover:ring-blue-500/20 cursor-pointer'
                  : 'border-slate-200 hover:border-slate-300 hover:shadow-lg'
              }`}
              onClick={() => country.available && router.push(`/countries/${country.id}`)}
            >
              {/* Background Glow Effect */}
              {country.available && (
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
              )}
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className={`text-6xl transition-all duration-500 ${country.available ? 'group-hover:scale-110' : 'opacity-70 group-hover:opacity-100'}`}>
                  {country.flag}
                </div>
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  country.available 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-300'
                }`}>
                  {country.available ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mb-6 relative z-10">
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  country.available 
                    ? 'text-slate-900 group-hover:text-blue-600' 
                    : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {country.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {country.cities.map((city) => (
                    <span
                      key={city}
                      className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between relative z-10">
                {country.available ? (
                  <>
                    <div className="flex items-center gap-2 text-blue-600">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      <span className="text-sm font-semibold">{country.lessons} уроков</span>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
                      Скоро
                    </span>
                    <div className="w-10 h-10 rounded-full border border-slate-200 text-slate-300 flex items-center justify-center group-hover:border-slate-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-slate-200 bg-white transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2024 Tranio Academy. Все права защищены.
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
