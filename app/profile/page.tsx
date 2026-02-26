'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, BookOpen, Brain, Trophy, Calendar, TrendingUp, Settings, Clock, Flame, Star, LogOut, Loader2, Users, Sparkles } from 'lucide-react';
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

  const [courseStats, setCourseStats] = useState({ stepsCompleted: 0, totalSteps: 37, modulesStarted: 0 });

  const [countries, setCountries] = useState([
    { name: 'Таиланд', flag: '🇹🇭', points: 0, maxPoints: 150, lessons: 0, total: 8, href: '/countries/thailand' },
    { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0, href: '' },
    { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0, href: '' }
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
            total: 8,
            href: '/countries/thailand',
          },
          { name: 'ОАЭ', flag: '🇦🇪', points: 0, maxPoints: 0, lessons: 0, total: 0, href: '' },
          { name: 'Кипр', flag: '🇨🇾', points: 0, maxPoints: 0, lessons: 0, total: 0, href: '' }
        ]);
      }

      // Load course progress
      const { data: courseProgress } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('country', 'course')
        .single();

      if (courseProgress) {
        const cp = courseProgress as any;
        const stepsCompleted = cp.studied_cards?.length || 0;
        const modulesStarted = cp.completed_lessons?.length || 0;
        setCourseStats({ stepsCompleted, totalSteps: 37, modulesStarted });
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

  const coursePct = Math.round((courseStats.stepsCompleted / courseStats.totalSteps) * 100);

  return (
    <AppShell backHref="/countries" subtitle="Профиль" showProfile={false} userName={userName}>
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-10 max-w-4xl">

        {/* === PROFILE HEADER === */}
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-lg sm:text-xl font-bold shrink-0 shadow-lg shadow-indigo-200">
              {initials || <User className="w-6 h-6" />}
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-slate-900">{userName}</h1>
              <p className="text-xs sm:text-sm text-slate-400">{userEmail}</p>
            </div>
          </div>
          <button 
            onClick={handleSignOut}
            className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
            title="Выйти"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        {/* === MAIN STATS ROW === */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-8 sm:mb-10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">{userStats.totalPoints}</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">баллов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">{studiedCardsCount}</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">вопросов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800">{userStats.examCount > 0 ? `${userStats.examAverage}%` : '—'}</div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">экзамен</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
              <span className="text-2xl sm:text-3xl font-extrabold text-orange-600">{userStats.streak}</span>
            </div>
            <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">стрик</div>
          </div>
        </div>

        {/* === COURSE PROGRESS === */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4.5 h-4.5 text-indigo-500" />
              <h2 className="font-bold text-slate-900">Интерактивный курс</h2>
            </div>
            <span className="text-sm font-bold text-indigo-600">{coursePct}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500" style={{ width: `${coursePct}%` }} />
          </div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
            <span>{courseStats.stepsCompleted} из {courseStats.totalSteps} шагов</span>
            <span>{courseStats.modulesStarted} из 3 кейсов начато</span>
          </div>
          <Link
            href="/course"
            className="block w-full py-2.5 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-colors text-center"
          >
            {courseStats.stepsCompleted > 0 ? 'Продолжить курс →' : 'Начать курс →'}
          </Link>
        </div>

        {/* === TRAINER PROGRESS === */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <Brain className="w-4.5 h-4.5 text-violet-500" />
              <h2 className="font-bold text-slate-900">Тренажёр</h2>
            </div>
          </div>
          <div className="space-y-2.5">
            {countries.map((country, index) => {
              const pct = country.maxPoints > 0 ? Math.round((country.points / country.maxPoints) * 100) : 0;
              return (
                <div key={index} className="flex items-center gap-3 group">
                  <span className="text-xl shrink-0">{country.flag}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{country.name}</span>
                      {country.maxPoints > 0 ? (
                        <span className="text-xs text-slate-400">{country.lessons}/{country.total} уроков · {country.points} б.</span>
                      ) : (
                        <span className="text-xs text-slate-300">скоро</span>
                      )}
                    </div>
                    {country.maxPoints > 0 ? (
                      <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                      </div>
                    ) : (
                      <div className="w-full h-1.5 bg-slate-100 rounded-full" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href="/countries"
            className="block w-full py-2.5 mt-4 bg-violet-50 text-violet-700 rounded-xl text-sm font-semibold hover:bg-violet-100 transition-colors text-center"
          >
            Перейти к тренажёру →
          </Link>
        </div>

        {/* === LEADERBOARD === */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5 mb-4">
            <Trophy className="w-4.5 h-4.5 text-amber-500" />
            <h2 className="font-bold text-slate-900">Рейтинг</h2>
          </div>
          {leaderboard.length === 0 ? (
            <p className="text-sm text-slate-400 text-center py-4">Загрузка...</p>
          ) : (
            <div className="space-y-1.5">
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 py-2.5 px-3 rounded-xl transition-all ${
                    entry.isMe ? 'bg-indigo-50 border border-indigo-100' : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`w-6 text-center text-xs font-bold ${
                    entry.position === 1 ? 'text-amber-500' : entry.position === 2 ? 'text-slate-400' : entry.position === 3 ? 'text-orange-400' : 'text-slate-300'
                  }`}>
                    {entry.position}
                  </span>
                  <span className={`flex-1 text-sm font-medium truncate ${entry.isMe ? 'text-indigo-700' : 'text-slate-700'}`}>
                    {entry.isMe ? `${entry.name} (вы)` : entry.name}
                  </span>
                  <span className={`text-sm font-bold tabular-nums ${entry.isMe ? 'text-indigo-600' : 'text-slate-500'}`}>
                    {entry.points} б.
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* === ACTIVITY === */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2.5 mb-4">
            <TrendingUp className="w-4.5 h-4.5 text-slate-400" />
            <h2 className="font-bold text-slate-900">Активность</h2>
          </div>
          <div className="space-y-1">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center gap-3 py-2.5 px-1 rounded-lg hover:bg-slate-50 transition-colors">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${getActivityColor(activity.type)}`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-700 truncate">{activity.title}</p>
                  <p className="text-[10px] text-slate-400">{new Date(activity.created_at).toLocaleDateString()}</p>
                </div>
                {activity.points > 0 && (
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                    +{activity.points}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </AppShell>
  );
}
