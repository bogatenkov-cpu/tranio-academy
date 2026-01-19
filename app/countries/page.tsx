'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2 } from 'lucide-react';

export default function CountriesPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      // Получаем имя из метаданных пользователя
      const name = user.user_metadata?.name || user.email?.split('@')[0] || 'Пользователь';
      setUserName(name);
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

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
            <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 C30 5, 5 20, 5 40 C5 55, 15 65, 25 70 C15 75, 10 85, 15 95" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 15 C35 15, 15 25, 15 42 C15 52, 22 60, 30 65" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 25 C40 25, 25 32, 25 45 C25 52, 30 58, 38 62" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="8" fill="#1e40af"/>
                <path d="M50 95 C70 95, 95 80, 95 60 C95 45, 85 35, 75 30 C85 25, 90 15, 85 5" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 85 C65 85, 85 75, 85 58 C85 48, 78 40, 70 35" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 75 C60 75, 75 68, 75 55 C75 48, 70 42, 62 38" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
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
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8">
        {/* Header Section */}
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">Доступные программы</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-2 tracking-tight text-slate-900 leading-tight">
            Выберите страну <span className="text-blue-600">для изучения</span>
          </h1>
          
          <p className="text-sm text-slate-500 font-light max-w-2xl mx-auto leading-relaxed">
            Погружайтесь в особенности рынков недвижимости разных стран с помощью наших интерактивных курсов и тестов.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {countries.map((country) => (
            <div
              key={country.id}
              className={`group relative flex flex-col h-full bg-white border rounded-xl p-4 transition-all duration-300 overflow-hidden ${
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
              <div className="flex items-start justify-between mb-4 relative z-10">
                <div className={`text-5xl transition-all duration-500 ${country.available ? 'group-hover:scale-110' : 'opacity-70 group-hover:opacity-100'}`}>
                  {country.flag}
                </div>
                <div className={`flex items-center justify-center w-7 h-7 rounded-full ${
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
              <div className="mb-4 relative z-10">
                <h3 className={`text-lg font-bold mb-1.5 transition-colors ${
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
              <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between relative z-10">
                {country.available ? (
                  <>
                    <div className="flex items-center gap-2 text-blue-600">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                      </span>
                      <span className="text-sm font-semibold">{country.lessons} уроков</span>
                    </div>
                    <button className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-500">
                      Скоро
                    </span>
                    <div className="w-9 h-9 rounded-full border border-slate-200 text-slate-300 flex items-center justify-center group-hover:border-slate-300 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
