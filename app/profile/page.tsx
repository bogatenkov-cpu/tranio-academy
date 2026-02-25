'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, BookOpen, Brain, Trophy, Calendar, TrendingUp, Settings, Clock, Flame, Star, LogOut, Loader2, Users } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import AppShell from '@/components/AppShell';

interface Activity {
  id: string;
  type: string;
  title: string;
  created_at: string;
  points: number;
  country: string;
}

interface UserProgress {
  points: number;
  streak: number;
  max_streak: number;
  exam_count: number;
  exam_average: number;
  completed_lessons: string[];
  studied_cards: string[];
}

interface Profile {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

interface LeaderboardEntry {
  name: string;
  points: number;
  position: number;
  isMe: boolean;
}

export default function ProfilePage() {
  const router = useRouter();
  const { user, loading: authLoading, signOut } = useAuth();
  const supabase = createClient();
  
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [studiedCardsCount, setStudiedCardsCount] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  const [userStats, setUserStats] = useState({
    totalPoints: 0,
    maxPoints: 150,
    examAverage: 0,
    examCount: 0,
    streak: 0,
    maxStreak: 0,
    rank: 0,
    totalUsers: 0,
    studyDays: 0,
    joinDate: '2026-01-01'
  });

  const [countries, setCountries] = useState([
    { name: 'Таиланд', flag: '🇹🇭', points: 0, maxPoints: 150, lessons: 0, total: 8 },
    { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0 },
    { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0 }
  ]);

  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    if (!user) return;

    try {
      setLoading(true);

      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (profile) {
        setUserName((profile as Profile).name);
        setUserEmail((profile as Profile).email);
        setUserStats(prev => ({
          ...prev,
          joinDate: (profile as Profile).created_at
        }));
      }

      const { data: progress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('country', 'thailand')
        .single();

      if (progress) {
        const typedProgress = progress as UserProgress;
        setStudiedCardsCount(typedProgress.studied_cards?.length || 0);
        
        setUserStats(prev => ({
          ...prev,
          totalPoints: typedProgress.points || 0,
          examAverage: Number(typedProgress.exam_average) || 0,
          examCount: typedProgress.exam_count || 0,
          streak: typedProgress.streak || 0,
          maxStreak: typedProgress.max_streak || 0,
        }));

        setCountries([
          { 
            name: 'Таиланд', 
            flag: '🇹🇭', 
            points: typedProgress.points || 0, 
            maxPoints: 150, 
            lessons: typedProgress.completed_lessons?.length || 0, 
            total: 8 
          },
          { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0 },
          { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0 }
        ]);
      }

      const { data: activities } = await supabase
        .from('activities')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      if (activities && activities.length > 0) {
        setRecentActivity(activities.map((a: any) => ({
          id: a.id,
          type: a.type,
          title: a.title,
          created_at: a.created_at,
          points: a.points,
          country: a.country
        })));

        const uniqueDates = new Set(
          activities.map((a: any) => new Date(a.created_at).toDateString())
        );
        setUserStats(prev => ({
          ...prev,
          studyDays: uniqueDates.size
        }));
      } else {
        setRecentActivity([
          { 
            id: '1',
            type: 'trainer', 
            title: 'Начните обучение', 
            created_at: new Date().toISOString(), 
            points: 0, 
            country: '🇹🇭' 
          }
        ]);
      }

      // Load real leaderboard via RPC (falls back to just current user)
      try {
        const { data: lb } = await (supabase.rpc as any)('get_leaderboard', { limit_count: 10 });
        if (lb && Array.isArray(lb) && lb.length > 0) {
          const entries: LeaderboardEntry[] = (lb as any[]).map((entry: any, idx: number) => ({
            name: entry.name || 'Пользователь',
            points: entry.points || 0,
            position: idx + 1,
            isMe: entry.user_id === user.id,
          }));
          setLeaderboard(entries);
          const myEntry = entries.find(e => e.isMe);
          if (myEntry) {
            setUserStats(prev => ({ ...prev, rank: myEntry.position, totalUsers: entries.length }));
          }
        } else {
          setLeaderboard([{
            name: profile ? (profile as Profile).name : 'Вы',
            points: (progress as any)?.points || 0,
            position: 1,
            isMe: true,
          }]);
          setUserStats(prev => ({ ...prev, rank: 1, totalUsers: 1 }));
        }
      } catch {
        setLeaderboard([{
          name: profile ? (profile as Profile).name : 'Вы',
          points: (progress as any)?.points || 0,
          position: 1,
          isMe: true,
        }]);
        setUserStats(prev => ({ ...prev, rank: 1, totalUsers: 1 }));
      }

    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    if (confirm('Вы уверены, что хотите выйти?')) {
      await signOut();
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'lesson': return <BookOpen className="w-4 h-4" />;
      case 'trainer': return <Brain className="w-4 h-4" />;
      case 'exam': return <Trophy className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'bg-emerald-50 text-emerald-600';
      case 'trainer': return 'bg-violet-50 text-violet-600';
      case 'exam': return 'bg-amber-50 text-amber-600';
      default: return 'bg-blue-50 text-blue-600';
    }
  };

  const getRankColor = (position: number) => {
    if (position === 1) return 'text-yellow-700 bg-gradient-to-br from-yellow-100 to-amber-100';
    if (position === 2) return 'text-slate-600 bg-gradient-to-br from-slate-100 to-slate-200';
    if (position === 3) return 'text-orange-700 bg-gradient-to-br from-orange-100 to-amber-50';
    return 'text-blue-600 bg-blue-50';
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  const initials = userName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <AppShell backHref="/countries" subtitle="Профиль" showProfile={false} userName={userName}>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-5xl">

        {/* Profile Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="h-24 sm:h-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)]" />
          </div>
          <div className="px-5 sm:px-8 pb-6 sm:pb-8 -mt-10 sm:-mt-12 relative">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-lg ring-4 ring-white">
                {initials || <User className="w-10 h-10 sm:w-12 sm:h-12" />}
              </div>
              <div className="flex-1 pt-1 sm:pt-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">{userName}</h1>
                <p className="text-slate-500 mb-3 text-sm sm:text-base">{userEmail}</p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {new Date(userStats.joinDate).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {userStats.studyDays} дн. обучения
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-orange-400" />
                    {userStats.streak} подряд
                  </span>
                </div>
              </div>
              <div className="sm:text-right sm:pt-3 flex sm:flex-col items-baseline sm:items-end gap-2 sm:gap-0">
                <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent leading-tight">
                  {userStats.totalPoints}
                </div>
                <div className="text-sm text-slate-500">баллов</div>
                <div className="hidden sm:block text-xs text-slate-400 mt-1">{studiedCardsCount} вопросов изучено</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {[
            { icon: Brain, label: 'Баллы', sub: 'Тренажер', value: userStats.totalPoints, unit: 'баллов', color: 'from-violet-500 to-purple-600', bg: 'bg-violet-50' },
            { icon: Trophy, label: 'Экзамены', sub: 'Средний балл', value: userStats.examCount > 0 ? `${userStats.examAverage}%` : '—', unit: `${userStats.examCount} сдано`, color: 'from-blue-500 to-cyan-600', bg: 'bg-blue-50' },
            { icon: Flame, label: 'Стрик', sub: 'Правильных', value: userStats.streak, unit: `макс. ${userStats.maxStreak}`, color: 'from-orange-500 to-red-500', bg: 'bg-orange-50' },
            { icon: Star, label: 'Рейтинг', sub: 'Место', value: userStats.totalUsers > 0 ? `#${userStats.rank}` : '—', unit: userStats.totalUsers > 0 ? `из ${userStats.totalUsers}` : 'нет данных', color: 'from-amber-500 to-yellow-500', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 sm:p-5 hover:shadow-md hover:border-slate-300 transition-all group">
              <div className="flex items-center gap-2.5 mb-3">
                <div className={`p-2 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${stat.color} bg-clip-text`} style={{ color: 'inherit' }} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-xs sm:text-sm leading-tight">{stat.label}</h3>
                  <p className="text-[10px] sm:text-xs text-slate-400">{stat.sub}</p>
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-0.5 group-hover:text-indigo-600 transition-colors">{stat.value}</div>
              <div className="text-[10px] sm:text-xs text-slate-400">{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* Two-column: Countries + Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">

          {/* Countries Progress */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-7">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-5">Прогресс по странам</h2>
            <div className="space-y-3">
              {countries.map((country, index) => {
                const pct = country.maxPoints > 0 ? Math.round((country.points / country.maxPoints) * 100) : 0;
                return (
                  <div key={index} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{country.flag}</span>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm sm:text-base leading-tight">{country.name}</h4>
                          <p className="text-xs text-slate-500">{country.lessons} из {country.total} уроков</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-indigo-600 text-sm">{country.points}</div>
                        <div className="text-[10px] text-slate-400">баллов</div>
                      </div>
                    </div>
                    {country.maxPoints > 0 && (
                      <div className="w-full h-1.5 bg-slate-200 rounded-full mb-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    )}
                    {country.maxPoints > 0 ? (
                      <Link
                        href="/countries/thailand"
                        className="block w-full py-2 px-3 bg-indigo-50 text-indigo-700 rounded-lg text-xs sm:text-sm font-semibold hover:bg-indigo-100 transition-colors text-center"
                      >
                        Продолжить
                      </Link>
                    ) : (
                      <div className="w-full py-2 px-3 bg-slate-100 text-slate-400 rounded-lg text-xs sm:text-sm font-medium text-center">
                        Скоро
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <Users className="w-5 h-5 text-slate-400" />
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Топ участников</h2>
            </div>
            {leaderboard.length === 0 ? (
              <p className="text-sm text-slate-400 text-center py-6">Загрузка...</p>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl transition-all ${
                      entry.isMe
                        ? 'bg-indigo-50/70 border border-indigo-200 shadow-sm'
                        : 'border border-transparent hover:bg-slate-50 hover:border-slate-100'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getRankColor(entry.position)}`}>
                      {entry.position}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-sm font-semibold truncate block ${entry.isMe ? 'text-indigo-700' : 'text-slate-800'}`}>
                        {entry.isMe ? `${entry.name} (вы)` : entry.name}
                      </span>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`text-sm font-bold ${entry.isMe ? 'text-indigo-600' : 'text-slate-700'}`}>{entry.points}</span>
                      <span className="text-xs text-slate-400 ml-1">б.</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-7 mb-6 sm:mb-8">
          <div className="flex items-center gap-2.5 mb-5">
            <TrendingUp className="w-5 h-5 text-slate-400" />
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Последняя активность</h2>
          </div>
          <div className="space-y-1">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className={`p-2 rounded-lg shrink-0 ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-slate-800 text-sm truncate">{activity.title}</h4>
                    <span className="text-base shrink-0">{activity.country}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">{new Date(activity.created_at).toLocaleDateString()}</p>
                </div>
                <div className="text-right shrink-0">
                  {activity.points > 0 ? (
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                      +{activity.points}
                    </span>
                  ) : (
                    <span className="text-xs text-slate-400">изучено</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-7">
          <div className="flex items-center gap-2.5 mb-4">
            <Settings className="w-5 h-5 text-slate-400" />
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">Быстрые действия</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/countries"
              className="py-3 px-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-200 transition-all text-center text-sm sm:text-base"
            >
              Выбрать страну
            </Link>
            <button 
              onClick={handleSignOut}
              className="py-3 px-5 bg-white border border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-50 hover:border-red-300 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
