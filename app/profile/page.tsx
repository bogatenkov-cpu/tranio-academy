'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, ArrowLeft, BookOpen, Brain, Trophy, Calendar, TrendingUp, Settings, Clock, Flame, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [studiedCardsCount, setStudiedCardsCount] = useState(0);

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

  const [userStats, setUserStats] = useState({
    totalPoints: 0,
    maxPoints: 150,
    examAverage: 0,
    examCount: 0,
    streak: 0,
    maxStreak: 0,
    rank: 2,
    totalUsers: 15,
    studyDays: 0,
    joinDate: '2025-01-01'
  });

  const [countries, setCountries] = useState([
    { name: 'Таиланд', flag: '🇹🇭', points: 0, maxPoints: 150, lessons: 0, total: 8 },
    { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0 },
    { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0 }
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const thailandPoints = parseInt(localStorage.getItem('thailand_points') || '0');
      const thailandStreak = parseInt(localStorage.getItem('thailand_streak') || '0');
      const studiedCards = JSON.parse(localStorage.getItem('thailand_studied_cards') || '[]');
      setStudiedCardsCount(studiedCards.length);
      
      const examCount = parseInt(localStorage.getItem('thailand_exam_count') || '0');
      const examAverage = parseFloat(localStorage.getItem('thailand_exam_average') || '0');
      
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      
      interface ActivityDate {
        date: string;
      }
      const activities: ActivityDate[] = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
      const uniqueDates = new Set(activities.map((a: ActivityDate) => new Date(a.date).toDateString()));
      const studyDays = uniqueDates.size || 0;
      
      setUserStats({
        totalPoints: thailandPoints,
        maxPoints: 150,
        examAverage: examAverage,
        examCount: examCount,
        streak: thailandStreak,
        maxStreak: Math.max(thailandStreak, parseInt(localStorage.getItem('thailand_max_streak') || '0')),
        rank: 2,
        totalUsers: 15,
        studyDays: studyDays,
        joinDate: localStorage.getItem('userJoinDate') || '2025-01-01'
      });

      setCountries([
        { 
          name: 'Таиланд', 
          flag: '🇹🇭', 
          points: thailandPoints, 
          maxPoints: 150, 
          lessons: completedLessons.length, 
          total: 8 
        },
        { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0 },
        { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0 }
      ]);
    }
  }, []);

  interface Activity {
    type: string;
    title: string;
    date: string;
    points: number;
    country: string;
  }

  const [recentActivity, setRecentActivity] = useState<Activity[]>([
    { type: 'trainer', title: 'Начните обучение', date: new Date().toISOString(), points: 0, country: '🇹🇭' }
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const activities: Activity[] = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
      if (activities.length > 0) {
        setRecentActivity(activities.slice(0, 5));
      }
    }
  }, []);

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
    if (position === 2) return 'text-slate-600 bg-slate-100';
    if (position === 3) return 'text-orange-600 bg-orange-100';
    return 'text-blue-600 bg-blue-100';
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-3 sm:px-6 h-14 sm:h-16 md:h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/countries" className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-all">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </Link>
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
              <div className="w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <span className="font-bold text-sm sm:text-base md:text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 md:mt-1">Профиль</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-50 text-purple-700 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm border border-purple-200">
            <User className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Профиль</span>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-20 sm:py-24 md:py-32 max-w-6xl">
        {/* Profile Header */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 bg-purple-50 rounded-xl sm:rounded-2xl border border-purple-100">
              <User className="w-12 h-12 sm:w-16 sm:h-16 text-purple-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{userName}</h1>
              <p className="text-slate-600 mb-3 sm:mb-4 text-sm sm:text-base">{userEmail}</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  Регистрация: {new Date(userStats.joinDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  Дней: {userStats.studyDays}
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                  Стрик: {userStats.streak} подряд
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">{userStats.totalPoints}</div>
              <div className="text-xs sm:text-sm text-slate-600">баллов</div>
              <div className="text-[10px] sm:text-xs text-slate-500 mt-1">
                {studiedCardsCount} вопросов
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-2 sm:p-3 bg-purple-50 rounded-lg sm:rounded-xl">
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">Баллы</h3>
                <p className="text-[10px] sm:text-xs text-slate-600">Тренажер</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-0.5 sm:mb-1">{userStats.totalPoints}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">баллов</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-2 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">Экзамены</h3>
                <p className="text-[10px] sm:text-xs text-slate-600">Средний</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-0.5 sm:mb-1">
              {userStats.examCount > 0 ? `${userStats.examAverage}%` : '—'}
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">{userStats.examCount} сдано</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className="p-2 sm:p-3 bg-orange-50 rounded-lg sm:rounded-xl">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">Стрик</h3>
                <p className="text-[10px] sm:text-xs text-slate-600">Правильных</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-0.5 sm:mb-1">{userStats.streak}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">макс. {userStats.maxStreak}</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-3 sm:p-4 md:p-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${getRankColor(userStats.rank)}`}>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm md:text-base">Рейтинг</h3>
                <p className="text-[10px] sm:text-xs text-slate-600">Место</p>
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-yellow-600 mb-0.5 sm:mb-1">#{userStats.rank}</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-500">из {userStats.totalUsers}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Countries */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Прогресс по странам</h2>
            <div className="space-y-3 sm:space-y-4">
              {countries.map((country, index) => (
                <div key={index} className="p-3 sm:p-4 bg-slate-50 border border-slate-100 rounded-lg sm:rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="text-xl sm:text-2xl">{country.flag}</div>
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm sm:text-base">{country.name}</h4>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {country.lessons}/{country.total} уроков
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600 text-sm sm:text-base">{country.points}</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">баллов</div>
                    </div>
                  </div>
                  {country.maxPoints > 0 ? (
                    <Link
                      href={`/countries/thailand`}
                      className="block w-full py-2 px-3 bg-blue-50 text-blue-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-100 transition-all text-center"
                    >
                      Продолжить
                    </Link>
                  ) : (
                    <div className="w-full py-2 px-3 bg-slate-100 text-slate-500 rounded-lg text-xs sm:text-sm font-medium text-center">
                      Скоро
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Топ участников</h2>
            <div className="space-y-2 sm:space-y-3">
              {topUsers.map((user, index) => (
                <div 
                  key={index} 
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${user.name === userName ? 'bg-purple-50 border-2 border-purple-200' : 'bg-slate-50 border border-slate-100'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${getRankColor(user.position)}`}>
                        {user.position}
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm sm:text-base">
                        {user.name === userName ? 'Вы' : user.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600 text-sm sm:text-base">{user.points}</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">баллов</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Последняя активность</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-50 border border-slate-100 rounded-lg sm:rounded-xl">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900 text-sm sm:text-base truncate">{activity.title}</h4>
                    <span className="text-base sm:text-lg flex-shrink-0">{activity.country}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">{new Date(activity.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  {activity.points > 0 ? (
                    <>
                      <div className="font-bold text-purple-600 text-sm sm:text-base">+{activity.points}</div>
                      <div className="text-[10px] sm:text-xs text-slate-500">баллов</div>
                    </>
                  ) : (
                    <div className="text-xs sm:text-sm text-slate-500">изучено</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Быстрые действия</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <Link
              href="/countries"
              className="py-2.5 sm:py-3 px-4 bg-blue-50 text-blue-700 rounded-lg sm:rounded-xl font-semibold hover:bg-blue-100 transition-all text-center text-sm sm:text-base"
            >
              Выбрать страну
            </Link>
            <button 
              onClick={() => {
                if (confirm('Вы уверены, что хотите сбросить весь прогресс? Это действие нельзя отменить.')) {
                  localStorage.removeItem('thailand_points');
                  localStorage.removeItem('thailand_streak');
                  localStorage.removeItem('thailand_max_streak');
                  localStorage.removeItem('thailand_studied_cards');
                  localStorage.removeItem('thailand_exam_results');
                  localStorage.removeItem('thailand_exam_count');
                  localStorage.removeItem('thailand_exam_average');
                  localStorage.removeItem('thailand_exam_passed');
                  localStorage.removeItem('thailand_trainer_correct');
                  localStorage.removeItem('thailand_trainer_total');
                  localStorage.removeItem('thailand_activities');
                  localStorage.removeItem('thailand_completed_lessons');
                  window.location.reload();
                }
              }}
              className="py-2.5 sm:py-3 px-4 bg-red-50 text-red-700 rounded-lg sm:rounded-xl font-semibold hover:bg-red-100 transition-all text-sm sm:text-base"
            >
              Сбросить прогресс
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-4 border-t border-slate-200 bg-white transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2025 Tranio Academy. Все права защищены.</p>
          <div className="flex gap-4">
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Поддержка</a>
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
