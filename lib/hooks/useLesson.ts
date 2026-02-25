import { useEffect, useRef } from 'react';
import { useProgress } from './useProgress';

export function useLesson(lessonId: string, lessonTitle: string) {
  const { progress, loading, addCompletedLesson, addActivity, addPoints } = useProgress('thailand');
  const hasMarkedComplete = useRef(false);

  useEffect(() => {
    if (loading) return;
    if (hasMarkedComplete.current) return;
    if (progress.completed_lessons.includes(lessonId)) return;

    hasMarkedComplete.current = true;

    const markComplete = async () => {
      await addCompletedLesson(lessonId);
      await addPoints(10);
      await addActivity('lesson', lessonTitle, 10);
    };

    markComplete();
  }, [lessonId, lessonTitle, progress, loading, addCompletedLesson, addActivity, addPoints]);

  return {
    isCompleted: progress?.completed_lessons.includes(lessonId) || false
  };
}
