'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Home, User, ArrowLeft, BookOpen, Brain, Trophy, Calendar, TrendingUp, Settings, Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isRegistered = localStorage.getItem('isRegistered');
      if (!isRegistered) {
        router.push('/');
        return;
      }
      const name = localStorage.getItem('userName');
      const email = localStorage.getItem('userEmail');
      if (name) setUserName(name);
      if (email) setUserEmail(email);
    }
  }, [router]);

  // Упрощенная статистика на основе баллов
  const userStats = {
    totalPoints: 25,          // общие баллы из тренажера
    maxPoints: 150,           // максимум баллов (всего вопросов)
    examAverage: 0,           // средний балл по экзаменам (пока не сдавал)
    examCount: 0,             // количество сданных экзаменов
    streak: 3,                // стрик дней подряд
    maxStreak: 5,             // максимальный стрик
    rank: 2,                  // место в рейтинге
    totalUsers: 15,           // всего участников
    studyDays: 3,
    joinDate: '2025-01-01'
  };

  const countries = [
    { name: 'Таиланд', flag: '🇹🇭', points: 25, maxPoints: 150, lessons: 1, total: 8 },
    { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0 },
    { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0 }
  ];

  const recentActivity = [
    { type: 'trainer', title: 'Карточки: Налоги', date: '2025-01-01', points: 15, country: '🇹🇭' },
    { type: 'trainer', title: 'Карточки: Районы', date: '2025-01-01', points: 10, country: '🇹🇭' },
    { type: 'lesson', title: 'Урок: Налоги на недвижимость', date: '2024-12-30', points: 0, country: '🇹🇭' }
  ];

  const topUsers = [
    { name: 'Алексей К.', points: 340, position: 1 },
    { name: userName, points: userStats.totalPoints, position: userStats.rank },
    { name: 'Мария В.', points: 18, position: 3 },
    { name: 'Игорь С.', points: 12, position: 4 },
    { name: 'Анна Д.', points: 8, position: 5 }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="w-4 h-4" />;
      case 'trainer': return <Brain className="w-4 h-4" />;
      case 'exam': return <Trophy className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getRankColor = (position: number) => {
    if (position === 1) return 'text-yellow-600 bg-yellow-100';
    if (position === 2) return 'text-gray-600 bg-gray-100';
    if (position === 3) return 'text-orange-600 bg-orange-100';
    return 'text-blue-600 bg-blue-100';
  };

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
                  <div className="text-xs text-gray-500">Личный кабинет</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium">
              <User className="w-4 h-4" />
              Профиль
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Profile Header */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border border-purple-100 mb-8">
          <div className="flex items-start gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
              <User className="w-16 h-16 text-purple-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{userName}</h1>
              <p className="text-gray-600 mb-4">{userEmail}</p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Регистрация: {new Date(userStats.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Дней обучения: {userStats.studyDays}
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Стрик: {userStats.streak} дней
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-purple-700 mb-1">{userStats.totalPoints}</div>
              <div className="text-sm text-gray-600">баллов из {userStats.maxPoints}</div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.round((userStats.totalPoints / userStats.maxPoints) * 100)}% прогресс
              </div>
            </div>
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Баллы</h3>
                <p className="text-sm text-gray-600">Тренажер</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-purple-700 mb-1">{userStats.totalPoints}</div>
            <div className="text-sm text-gray-500">из {userStats.maxPoints}</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Trophy className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Экзамены</h3>
                <p className="text-sm text-gray-600">Средний балл</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-700 mb-1">
              {userStats.examCount > 0 ? `${userStats.examAverage}%` : '—'}
            </div>
            <div className="text-sm text-gray-500">{userStats.examCount} сдано</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Стрик</h3>
                <p className="text-sm text-gray-600">Дней подряд</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-orange-700 mb-1">{userStats.streak}</div>
            <div className="text-sm text-gray-500">макс. {userStats.maxStreak}</div>
          </div>

          <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-yellow-100">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-3 rounded-xl ${getRankColor(userStats.rank)}`}>
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Рейтинг</h3>
                <p className="text-sm text-gray-600">Место</p>
              </div>
            </div>
            <div className="text-3xl font-bold text-yellow-700 mb-1">#{userStats.rank}</div>
            <div className="text-sm text-gray-500">из {userStats.totalUsers}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Countries Progress */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Прогресс по странам</h2>
            <div className="space-y-4">
              {countries.map((country, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{country.flag}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{country.name}</h4>
                        <p className="text-sm text-gray-600">
                          {country.lessons}/{country.total} уроков
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-700">{country.points}</div>
                      <div className="text-xs text-gray-500">баллов</div>
                    </div>
                  </div>
                  {country.maxPoints > 0 ? (
                    <Link
                      href={`/countries/${country.name.toLowerCase()}`}
                      className="block w-full py-2 px-3 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-all text-center"
                    >
                      Продолжить
                    </Link>
                  ) : (
                    <div className="w-full py-2 px-3 bg-gray-200 text-gray-500 rounded-lg text-sm font-medium text-center">
                      Скоро
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Топ участников</h2>
            <div className="space-y-3">
              {topUsers.map((user, index) => (
                <div 
                  key={index} 
                  className={`p-4 rounded-xl ${user.name === userName ? 'bg-purple-50 border-2 border-purple-200' : 'bg-gray-50'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankColor(user.position)}`}>
                        {user.position}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {user.name === userName ? 'Вы' : user.name}
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-700">{user.points}</div>
                      <div className="text-xs text-gray-500">баллов</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-8 border border-purple-100 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-gray-600" />
            <h2 className="text-2xl font-bold text-gray-800">Последняя активность</h2>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{activity.title}</h4>
                    <span className="text-lg">{activity.country}</span>
                  </div>
                  <p className="text-sm text-gray-600">{new Date(activity.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  {activity.points > 0 ? (
                    <>
                      <div className="font-bold text-purple-700">+{activity.points}</div>
                      <div className="text-xs text-gray-500">баллов</div>
                    </>
                  ) : (
                    <div className="text-sm text-gray-500">изучено</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 border border-purple-100">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-800">Быстрые действия</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/countries"
              className="py-3 px-4 bg-blue-100 text-blue-700 rounded-xl font-medium hover:bg-blue-200 transition-all text-center"
            >
              Выбрать страну
            </Link>
            <button className="py-3 px-4 bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-all">
              Сбросить прогресс
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}