'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { migrateLocalStorageToSupabase, clearLocalStorageAfterMigration, shouldMigrate } from '@/lib/utils/migrateLocalStorage';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function MigrationHandler() {
  const { user } = useAuth();
  const [migrating, setMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (user && shouldMigrate()) {
      handleMigration();
    }
  }, [user]);

  const handleMigration = async () => {
    if (!user) return;

    setMigrating(true);
    const result = await migrateLocalStorageToSupabase(user.id);

    if (result.success) {
      clearLocalStorageAfterMigration();
      setMigrationStatus('success');
      setTimeout(() => {
        setMigrating(false);
      }, 2000);
    } else {
      setMigrationStatus('error');
      setTimeout(() => {
        setMigrating(false);
      }, 3000);
    }
  };

  if (!migrating) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl">
        {migrationStatus === 'idle' && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <Loader2 className="w-6 h-6 text-blue-600 animate-spin" />
              <h3 className="text-lg font-bold text-slate-900">Миграция данных</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Переносим ваш прогресс в облако. Это займет несколько секунд...
            </p>
          </>
        )}

        {migrationStatus === 'success' && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-slate-900">Готово!</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Ваш прогресс успешно перенесен. Теперь вы можете продолжать обучение с любого устройства!
            </p>
          </>
        )}

        {migrationStatus === 'error' && (
          <>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h3 className="text-lg font-bold text-slate-900">Ошибка</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Не удалось перенести данные. Пожалуйста, попробуйте позже или обратитесь в поддержку.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
