'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Home, Lock, CheckCircle } from 'lucide-react';

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
      status: 'available',
      description: 'Пхукет, Паттайя, Самуи',
      lessonsCount: 8
    },
    {
      id: 'uae',
      name: 'ОАЭ',
      flag: '🇦🇪',
      status: 'coming-soon',
      description: 'Дубай, Абу-Даби, Шарджа',
      lessonsCount: 0
    },
    {
      id: 'cyprus',
      name: 'Кипр',
      flag: '🇨🇾',
      status: 'coming-soon',
      description: 'Лимассол, Пафос, Ларнака',
      lessonsCount: 0
    },
    {
      id: 'greece',
      name: 'Греция',
      flag: '🇬🇷',
      status: 'coming-soon',
      description: 'Афины, Салоники, Крит',
      lessonsCount: 0
    },
    {
      id: 'indonesia',
      name: 'Индонезия',
      flag: '🇮🇩',
      status: 'coming-soon',
      description: 'Бали, Джакарта, Ломбок',
      lessonsCount: 0
    },
    {
      id: 'cambodia',
      name: 'Камбоджа',
      flag: '🇰🇭',
      status: 'coming-soon',
      description: 'Пномпень, Сием Рип, Сиануквиль',
      lessonsCount: 0
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                <Home className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Tranio Academy</div>
                <div className="text-xs text-gray-500">Выбор страны</div>
              </div>
            </div>
            {userName && (
  <Link href="/profile" className="text-sm text-gray-600 hover:text-gray-800 transition-all">
    Привет, <span className="font-semibold">{userName}</span>!
  </Link>
)}
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Выберите страну для изучения
          </h1>
          <p className="text-lg text-gray-600">
            Начните обучение с доступных программ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => {
            if (country.status === 'available') {
              return (
                <Link
                  key={country.id}
                  href={`/countries/${country.id}`}
                  className="group block bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-2xl hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4">{country.flag}</div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800">{country.name}</h3>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-gray-600 mb-4">{country.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-xl text-sm font-semibold">
                      {country.lessonsCount} уроков
                    </div>
                  </div>
                </Link>
              );
            } else {
              return (
                <div
                  key={country.id}
                  className="block bg-gray-50 backdrop-blur rounded-3xl shadow-lg p-8 border-2 border-gray-200 opacity-60"
                >
                  <div className="text-center">
                    <div className="text-7xl mb-4 grayscale">{country.flag}</div>
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <h3 className="text-2xl font-bold text-gray-600">{country.name}</h3>
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <p className="text-gray-500 mb-4">{country.description}</p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-500 rounded-xl text-sm font-semibold">
                      Скоро
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}