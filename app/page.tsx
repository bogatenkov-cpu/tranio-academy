'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff, Loader2, CheckCircle } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  const { user, loading, signUp, signIn, signInWithGoogle, resetPassword } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Перенаправляем авторизованных пользователей
  useEffect(() => {
    if (!loading && user) {
      router.push('/countries');
    }
  }, [user, loading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    if (isForgotPassword) {
      // Восстановление пароля
      if (!email) {
        setError('Введите email');
        setIsSubmitting(false);
        return;
      }

      const { error } = await resetPassword(email);
      
      if (error) {
        setError('Ошибка: ' + (error.message || 'Не удалось отправить письмо'));
      } else {
        setSuccess('Письмо для восстановления пароля отправлено! Проверьте почту.');
        setTimeout(() => {
          setIsForgotPassword(false);
          setSuccess('');
        }, 3000);
      }
    } else if (isLogin) {
      // Вход
      if (!email || !password) {
        setError('Заполните все поля');
        setIsSubmitting(false);
        return;
      }

      const { error } = await signIn(email, password);
      
      if (error) {
        setError('Неверный email или пароль');
      } else {
        router.push('/countries');
      }
    } else {
      // Регистрация
      if (!name || !email || !password) {
        setError('Заполните все поля');
        setIsSubmitting(false);
        return;
      }

      if (password.length < 6) {
        setError('Пароль должен быть минимум 6 символов');
        setIsSubmitting(false);
        return;
      }

      const { error } = await signUp(email, password, name);
      
      if (error) {
        if (error.message?.includes('already registered')) {
          setError('Этот email уже зарегистрирован');
        } else {
          setError('Ошибка регистрации: ' + (error.message || 'Попробуйте позже'));
        }
      } else {
        setSuccess('Регистрация успешна! Проверьте почту для подтверждения.');
        setTimeout(() => {
          setIsLogin(true);
          setSuccess('');
        }, 2000);
      }
    }

    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 5 C30 5, 5 20, 5 40 C5 55, 15 65, 25 70 C15 75, 10 85, 15 95" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 15 C35 15, 15 25, 15 42 C15 52, 22 60, 30 65" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 25 C40 25, 25 32, 25 45 C25 52, 30 58, 38 62" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <circle cx="50" cy="50" r="8" fill="#1e40af"/>
                <path d="M50 95 C70 95, 95 80, 95 60 C95 45, 85 35, 75 30 C85 25, 90 15, 85 5" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 85 C65 85, 85 75, 85 58 C85 48, 78 40, 70 35" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                <path d="M50 75 C60 75, 75 68, 75 55 C75 48, 70 42, 62 38" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
              <span className="text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-1">Тренажер знаний</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4">
            <span className="text-sm text-slate-500">Онлайн обучение</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 pt-24 pb-8 flex items-center justify-center">
        <div className="max-w-6xl w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Hero */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider">Начните обучение</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-slate-900 leading-tight">
                Эксперт зарубежной <span className="text-blue-600">недвижимости</span>
              </h1>
              
              <p className="text-base text-slate-500 font-light mb-6 leading-relaxed">
                Комплексная платформа для изучения рынков недвижимости в разных странах. 
                Интерактивные уроки, тесты и практические материалы.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>8 уроков</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Тренажер</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Экзамены</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Сертификаты</span>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Form */}
            <div className="w-full">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    {isForgotPassword ? 'Восстановление пароля' : isLogin ? 'Вход в аккаунт' : 'Регистрация'}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {isForgotPassword 
                      ? 'Введите email для восстановления' 
                      : isLogin 
                        ? 'Войдите, чтобы продолжить обучение' 
                        : 'Создайте аккаунт для начала обучения'
                    }
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <p className="text-sm text-green-700">{success}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  {!isLogin && !isForgotPassword && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Ваше имя
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Иван Петров"
                          className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ivan@example.com"
                        className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {!isForgotPassword && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Пароль
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full pl-10 pr-12 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-900 placeholder:text-slate-400"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                  )}

                  {isLogin && !isForgotPassword && (
                    <div className="text-right">
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        Забыли пароль?
                      </button>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <span>
                          {isForgotPassword 
                            ? 'Отправить письмо' 
                            : isLogin 
                              ? 'Войти' 
                              : 'Зарегистрироваться'
                          }
                        </span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {!isForgotPassword && (
                    <>
                      <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 bg-white text-slate-500">или</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={async () => {
                          setError('');
                          const { error } = await signInWithGoogle();
                          if (error) {
                            setError('Ошибка входа через Google: ' + error.message);
                          }
                        }}
                        className="w-full px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all duration-300 border-2 border-slate-200 hover:border-slate-300 flex items-center justify-center gap-3"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span>Войти через Google</span>
                      </button>
                    </>
                  )}

                  <div className="text-center pt-2">
                    {isForgotPassword ? (
                      <button
                        type="button"
                        onClick={() => {
                          setIsForgotPassword(false);
                          setError('');
                          setSuccess('');
                        }}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        ← Вернуться к входу
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setIsLogin(!isLogin);
                          setError('');
                          setSuccess('');
                        }}
                        className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
                      >
                        {isLogin ? 'Нет аккаунта? Зарегистрироваться' : 'Уже есть аккаунт? Войти'}
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-xs text-slate-500 mt-0.5">Уроков</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-xs text-slate-500 mt-0.5">Вопросов</div>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-blue-600">1</div>
                  <div className="text-xs text-slate-500 mt-0.5">Страна</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-4 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2025 Tranio Academy. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Поддержка</a>
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
