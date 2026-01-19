import { useEffect, useRef } from 'react';
import { useProgress } from './useProgress';

export function useLesson(lessonId: string, lessonTitle: string) {
  const { progress, addCompletedLesson, addActivity, addPoints } = useProgress('thailand');
  const hasMarkedComplete = useRef(false);

  useEffect(() => {
    // Проверяем, не пройден ли уже урок и не был ли он отмечен в этой сессии
    if (progress && !progress.completed_lessons.includes(lessonId) && !hasMarkedComplete.current) {
      hasMarkedComplete.current = true;
      
      // Отмечаем урок как пройденный
      addCompletedLesson(lessonId);
      
      // Добавляем баллы
      addPoints(10);
      
      // Добавляем активность
      addActivity('lesson', lessonTitle, 10);
    }
  }, [lessonId, lessonTitle, progress, addCompletedLesson, addActivity, addPoints]);

  return {
    isCompleted: progress?.completed_lessons.includes(lessonId) || false
  };
}
