'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, BookOpen, Award, Brain, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ThailandMenu() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [progress, setProgress] = useState({ questions: { correct: 0, total: 0 }, lessons: 0, exams: { passed: 0, total: 0 } });

  const updateProgress = () => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      const examCount = parseInt(localStorage.getItem('thailand_exam_count') || '0');
      const examPassed = parseInt(localStorage.getItem('thailand_exam_passed') || '0');
      
      // Статистика ответов в тренажере
      const correctAnswers = parseInt(localStorage.getItem('thailand_trainer_correct') || '0');
      const totalAnswers = parseInt(localStorage.getItem('thailand_trainer_total') || '0');
      
      setProgress({
        questions: { correct: correctAnswers, total: totalAnswers }, // Правильные/всего ответов
        lessons: completedLessons.length, // Пройденные уроки
        exams: { passed: examPassed, total: examCount } // Пройдено/всего экзаменов
      });
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isRegistered = localStorage.getItem('isRegistered');
      if (!isRegistered) {
        router.push('/');
        return;
      }
      const name = localStorage.getItem('userName');
      if (name) setUserName(name);

      updateProgress();
      
      // Обновляем прогресс при изменении данных
      const interval = setInterval(updateProgress, 1000);
      return () => clearInterval(interval);
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/countries" className="p-2 hover:bg-gray-100 rounded-xl transition-all">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                  <Home className="w-6 h-6 text-purple-700" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Tranio Academy</div>
                  <div className="text-xs text-gray-500">🇹🇭 Таиланд</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {userName && (
                <div className="hidden md:block text-sm text-gray-600">
                  Привет, <span className="font-semibold">{userName}</span>!
                </div>
              )}
             <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium hover:shadow-md transition-all">
              <User className="w-4 h-4" />
              {userName || 'Профиль'}
            </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🇹🇭</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Недвижимость в Таиланде
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Изучайте рынок недвижимости, проходите экзамены и практикуйтесь с интерактивным тренажёром
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/countries/thailand/trainer"
            className="group relative bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="absolute top-4 right-4 px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
              ОСНОВНОЕ
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Тренажёр знаний</h3>
              <p className="text-gray-600 mb-4">
                Интерактивная практика с карточками, вопросами и геймификацией
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/theory"
            className="group bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <BookOpen className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Теория</h3>
              <p className="text-gray-600 mb-4">
                8 структурированных уроков по всем аспектам недвижимости
              </p>
            </div>
          </Link>

          <Link
            href="/countries/thailand/exam"
            className="group bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border-2 border-rose-200 hover:border-rose-400 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-6 bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-12 h-12 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Экзамен</h3>
              <p className="text-gray-600 mb-4">
                Проверьте свои знания и получите сертификат брокера
              </p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-800">Ответы</h3>
            </div>
            <div className="text-3xl font-bold text-purple-700 mb-2">
              {progress.questions.correct} / {progress.questions.total}
            </div>
            <p className="text-sm text-gray-600">Правильных ответов</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-800">Уроки</h3>
            </div>
            <div className="text-3xl font-bold text-blue-700 mb-2">{progress.lessons} из 8</div>
            <p className="text-sm text-gray-600">Просмотрено</p>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-rose-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Award className="w-5 h-5 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-800">Экзамены</h3>
            </div>
            <div className="text-3xl font-bold text-rose-700 mb-2">
              {progress.exams.passed} / {progress.exams.total}
            </div>
            <p className="text-sm text-gray-600">Пройдено / Сдано</p>
          </div>
        </div>
      </div>
    </div>
  );
}