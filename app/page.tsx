'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Home, ArrowRight, Settings } from 'lucide-react';

export default function WelcomePage() {
  const router = useRouter();

  const goToCountries = () => {
    // Временно устанавливаем тестовые данные
    if (typeof window !== 'undefined') {
      localStorage.setItem('userName', 'Тестовый пользователь');
      localStorage.setItem('userEmail', 'test@tranio.com');
      localStorage.setItem('isRegistered', 'true');
    }
    router.push('/countries');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl mb-4">
            <Home className="w-16 h-16 text-purple-700" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Tranio Academy</h1>
          <p className="text-lg text-gray-600">Обучающая платформа для брокеров</p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-2xl p-8 border-2 border-purple-100">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-xl text-sm font-medium mb-4">
              <Settings className="w-4 h-4" />
              Режим разработки
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Быстрый вход</h2>
            <p className="text-gray-600">Переход без регистрации для тестирования</p>
          </div>

          <button
            onClick={goToCountries}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
          >
            Перейти к выбору страны
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-sm text-gray-600">
              <div className="font-medium mb-2">Тестовые данные:</div>
              <div>Имя: Тестовый пользователь</div>
              <div>Email: test@tranio.com</div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            В продакшене здесь будет форма регистрации
          </p>
        </div>
      </div>
    </div>
  );
}