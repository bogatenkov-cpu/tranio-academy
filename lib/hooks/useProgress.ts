import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';

interface ProgressData {
  points: number;
  streak: number;
  max_streak: number;
  exam_count: number;
  exam_average: number;
  completed_lessons: string[];
  studied_cards: string[];
}

export function useProgress(country: string = 'thailand') {
  const { user } = useAuth();
  const supabase = createClient();
  const [progress, setProgress] = useState<ProgressData>({
    points: 0,
    streak: 0,
    max_streak: 0,
    exam_count: 0,
    exam_average: 0,
    completed_lessons: [],
    studied_cards: [],
  });
  const [loading, setLoading] = useState(true);

  const loadProgress = useCallback(async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('country', country)
        .single();

      if (error) {
        // Если записи нет, создаем новую
        if (error.code === 'PGRST116') {
          await (supabase.from('user_progress') as any).insert({
            user_id: user.id,
            country: country,
            points: 0,
            streak: 0,
            max_streak: 0,
            exam_count: 0,
            exam_average: 0,
            completed_lessons: [],
            studied_cards: [],
          });
          setProgress({
            points: 0,
            streak: 0,
            max_streak: 0,
            exam_count: 0,
            exam_average: 0,
            completed_lessons: [],
            studied_cards: [],
          });
        }
      } else if (data) {
        const typedData = data as any;
        setProgress({
          points: typedData.points || 0,
          streak: typedData.streak || 0,
          max_streak: typedData.max_streak || 0,
          exam_count: typedData.exam_count || 0,
          exam_average: Number(typedData.exam_average) || 0,
          completed_lessons: typedData.completed_lessons || [],
          studied_cards: typedData.studied_cards || [],
        });
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    } finally {
      setLoading(false);
    }
  }, [user, country, supabase]);

  useEffect(() => {
    if (user) {
      loadProgress();
    }
  }, [user, loadProgress]);

  const updateProgress = useCallback(async (updates: Partial<ProgressData>) => {
    if (!user) return;

    try {
      setProgress(prev => ({ ...prev, ...updates }));

      await (supabase
        .from('user_progress') as any)
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id)
        .eq('country', country);
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  }, [user, country, supabase]);

  const addPoints = useCallback(async (points: number) => {
    if (!user) return;
    
    setProgress(prev => {
      const newPoints = prev.points + points;
      (supabase
        .from('user_progress') as any)
        .update({ points: newPoints, updated_at: new Date().toISOString() })
        .eq('user_id', user.id)
        .eq('country', country);
      return { ...prev, points: newPoints };
    });
  }, [user, country, supabase]);

  const updateStreak = useCallback(async (isCorrect: boolean) => {
    if (!user) return;
    
    setProgress(prev => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;
      const newMaxStreak = isCorrect ? Math.max(newStreak, prev.max_streak) : prev.max_streak;
      
      (supabase
        .from('user_progress') as any)
        .update({ 
          streak: newStreak, 
          max_streak: newMaxStreak,
          updated_at: new Date().toISOString() 
        })
        .eq('user_id', user.id)
        .eq('country', country);
      
      return { ...prev, streak: newStreak, max_streak: newMaxStreak };
    });
  }, [user, country, supabase]);

  const addCompletedLesson = useCallback(async (lessonId: string) => {
    if (!user) return;
    
    setProgress(prev => {
      if (prev.completed_lessons.includes(lessonId)) return prev;
      
      const newLessons = [...prev.completed_lessons, lessonId];
      
      (supabase
        .from('user_progress') as any)
        .update({ 
          completed_lessons: newLessons,
          updated_at: new Date().toISOString() 
        })
        .eq('user_id', user.id)
        .eq('country', country);
      
      return { ...prev, completed_lessons: newLessons };
    });
  }, [user, country, supabase]);

  const addStudiedCard = useCallback(async (cardId: string) => {
    if (!user) return;
    
    setProgress(prev => {
      if (prev.studied_cards.includes(cardId)) return prev;
      
      const newCards = [...prev.studied_cards, cardId];
      
      (supabase
        .from('user_progress') as any)
        .update({ 
          studied_cards: newCards,
          updated_at: new Date().toISOString() 
        })
        .eq('user_id', user.id)
        .eq('country', country);
      
      return { ...prev, studied_cards: newCards };
    });
  }, [user, country, supabase]);

  const updateExamStats = useCallback(async (score: number, total: number) => {
    if (!user) return;
    
    const percentage = Math.round((score / total) * 100);
    
    setProgress(prev => {
      const newExamCount = prev.exam_count + 1;
      const newAverage = Math.round(
        ((prev.exam_average * prev.exam_count) + percentage) / newExamCount
      );

      (supabase
        .from('user_progress') as any)
        .update({
          exam_count: newExamCount,
          exam_average: newAverage,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', user.id)
        .eq('country', country);

      return { ...prev, exam_count: newExamCount, exam_average: newAverage };
    });

    // Сохраняем результат экзамена
    await (supabase.from('exam_results') as any).insert({
      user_id: user.id,
      country: country,
      score: score,
      total: total,
      percentage: percentage,
    });
  }, [user, country, supabase]);

  const addActivity = useCallback(async (type: string, title: string, points: number) => {
    if (!user) return;

    try {
      await (supabase.from('activities') as any).insert({
        user_id: user.id,
        country: country,
        type: type,
        title: title,
        points: points,
      });
    } catch (error) {
      console.error('Error adding activity:', error);
    }
  }, [user, country, supabase]);

  return {
    progress,
    loading,
    updateProgress,
    addPoints,
    updateStreak,
    addCompletedLesson,
    addStudiedCard,
    updateExamStats,
    addActivity,
    reload: loadProgress,
  };
}
