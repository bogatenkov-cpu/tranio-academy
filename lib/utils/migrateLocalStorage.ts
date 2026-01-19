import { createClient } from '@/lib/supabase/client';

export async function migrateLocalStorageToSupabase(userId: string) {
  const supabase = createClient();

  try {
    // Проверяем, есть ли данные в localStorage
    const hasLocalData = localStorage.getItem('thailand_points') !== null;
    
    if (!hasLocalData) {
      console.log('No local data to migrate');
      return { success: true, message: 'No data to migrate' };
    }

    // Собираем данные из localStorage
    const thailandPoints = parseInt(localStorage.getItem('thailand_points') || '0');
    const thailandStreak = parseInt(localStorage.getItem('thailand_streak') || '0');
    const thailandMaxStreak = parseInt(localStorage.getItem('thailand_max_streak') || '0');
    const studiedCards = JSON.parse(localStorage.getItem('thailand_studied_cards') || '[]');
    const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
    const examCount = parseInt(localStorage.getItem('thailand_exam_count') || '0');
    const examAverage = parseFloat(localStorage.getItem('thailand_exam_average') || '0');

    // Мигрируем прогресс
    const { error: progressError } = await (supabase
      .from('user_progress') as any)
      .upsert({
        user_id: userId,
        country: 'thailand',
        points: thailandPoints,
        streak: thailandStreak,
        max_streak: thailandMaxStreak,
        exam_count: examCount,
        exam_average: examAverage,
        completed_lessons: completedLessons,
        studied_cards: studiedCards,
      }, { 
        onConflict: 'user_id,country' 
      });

    if (progressError) {
      console.error('Error migrating progress:', progressError);
      return { success: false, error: progressError };
    }

    // Мигрируем активности
    const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
    if (activities.length > 0) {
      const activitiesData = activities.map((activity: any) => ({
        user_id: userId,
        country: 'thailand',
        type: activity.type,
        title: activity.title,
        points: activity.points,
        created_at: activity.date,
      }));

      const { error: activitiesError } = await (supabase
        .from('activities') as any)
        .insert(activitiesData);

      if (activitiesError) {
        console.error('Error migrating activities:', activitiesError);
      }
    }

    // Мигрируем результаты экзаменов
    const examResults = JSON.parse(localStorage.getItem('thailand_exam_results') || '[]');
    if (examResults.length > 0) {
      const examData = examResults.map((exam: any) => ({
        user_id: userId,
        country: 'thailand',
        score: exam.score,
        total: exam.total,
        percentage: exam.percentage,
        created_at: exam.date,
      }));

      const { error: examsError } = await (supabase
        .from('exam_results') as any)
        .insert(examData);

      if (examsError) {
        console.error('Error migrating exam results:', examsError);
      }
    }

    // Помечаем, что миграция завершена
    localStorage.setItem('migration_completed', 'true');
    localStorage.setItem('migration_date', new Date().toISOString());

    console.log('Migration completed successfully');
    return { success: true, message: 'Data migrated successfully' };

  } catch (error) {
    console.error('Migration error:', error);
    return { success: false, error };
  }
}

export function clearLocalStorageAfterMigration() {
  // Очищаем старые данные после успешной миграции
  const keysToRemove = [
    'thailand_points',
    'thailand_streak',
    'thailand_max_streak',
    'thailand_studied_cards',
    'thailand_completed_lessons',
    'thailand_exam_count',
    'thailand_exam_average',
    'thailand_exam_passed',
    'thailand_trainer_correct',
    'thailand_trainer_total',
    'thailand_activities',
    'thailand_exam_results',
    'isRegistered',
    'userName',
    'userEmail',
    'userJoinDate',
  ];

  keysToRemove.forEach(key => localStorage.removeItem(key));
  console.log('Local storage cleared after migration');
}

export function shouldMigrate(): boolean {
  // Проверяем, нужна ли миграция
  const migrationCompleted = localStorage.getItem('migration_completed');
  const hasLocalData = localStorage.getItem('thailand_points') !== null;
  
  return !migrationCompleted && hasLocalData;
}
