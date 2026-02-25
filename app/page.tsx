'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Mail, Lock, User, ArrowRight, Eye, EyeOff, Loader2, CheckCircle, 
  Lightbulb, GraduationCap, Flame, Sparkles, Zap, Target, 
  BookOpen, Building2, TrendingUp, Shield, ChevronRight
} from 'lucide-react';

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

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

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
        setTimeout(() => { setIsForgotPassword(false); setSuccess(''); }, 3000);
      }
    } else if (isLogin) {
      if (!email || !password) {
        setError('Заполните все поля');
        setIsSubmitting(false);
        return;
      }
      const { error } = await signIn(email, password);
      if (error) {
        if (error.message?.includes('Email not confirmed')) {
          setError('Email не подтвержден. Проверьте почту и перейдите по ссылке подтверждения.');
        } else if (error.message?.includes('Invalid login credentials')) {
          setError('Неверный email или пароль');
        } else {
          setError('Ошибка входа: ' + (error.message || 'Попробуйте позже'));
        }
      } else {
        router.push('/countries');
      }
    } else {
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
        setTimeout(() => { setIsLogin(true); setSuccess(''); }, 2000);
      }
    }
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col font-sans antialiased text-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight">RE <span className="text-blue-400">Academy</span></h1>
              <p className="text-[9px] text-slate-600 font-semibold tracking-[0.15em] uppercase">by Tranio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => { setIsLogin(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block"
            >
              Вход
            </button>
            <button 
              onClick={() => { setIsLogin(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-sm font-medium px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
            >
              Регистрация
            </button>
          </div>
        </div>
      </header>

      {/* Hero + Auth */}
      <main className="pt-24 sm:pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-slate-400 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Образовательная платформа Tranio
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-6">
                Инвестиции в<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">зарубежную недвижимость</span>
                <br/>на практике
              </h1>
              
              <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
                Три реальных кейса из практики Tranio. Анализируйте проекты, считайте доходность и принимайте инвестиционные решения — как настоящий аналитик.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-white">38</div>
                  <div className="text-xs text-slate-500 mt-0.5">интерактивных шагов</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-white">3</div>
                  <div className="text-xs text-slate-500 mt-0.5">реальных кейса</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-xs text-slate-500 mt-0.5">вопросов тренажёра</div>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Без воды</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Реальные цифры</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>На любом устройстве</span>
                </div>
              </div>
            </div>

            {/* Auth Form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto">
              <div className="bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-white mb-1.5">
                    {isForgotPassword ? 'Восстановление' : isLogin ? 'Войти в аккаунт' : 'Создать аккаунт'}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {isForgotPassword ? 'Введите email для сброса пароля' : isLogin ? 'Продолжите обучение' : 'Начните обучение прямо сейчас'}
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl flex items-start gap-2">
                    <Lock size={14} className="mt-0.5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                {success && (
                  <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl flex items-start gap-2">
                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0" />
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {!isLogin && !isForgotPassword && (
                    <div>
                      <label className="text-xs font-medium text-slate-500 mb-1.5 block">Имя</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                        <input
                          type="text" value={name} onChange={(e) => setName(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none text-sm"
                          placeholder="Ваше имя"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="text-xs font-medium text-slate-500 mb-1.5 block">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                      <input
                        type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none text-sm"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  {!isForgotPassword && (
                    <div>
                      <div className="flex justify-between mb-1.5">
                        <label className="text-xs font-medium text-slate-500">Пароль</label>
                        {isLogin && (
                          <button type="button" onClick={() => { setIsForgotPassword(true); setError(''); setSuccess(''); }}
                            className="text-xs text-blue-400 hover:text-blue-300 font-medium">
                            Забыли?
                          </button>
                        )}
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-600" size={16} />
                        <input
                          type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all outline-none text-sm"
                          placeholder="••••••••"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-600 hover:text-slate-400 transition-colors">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm mt-1">
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : (
                      <>
                        {isForgotPassword ? 'Отправить ссылку' : isLogin ? 'Войти' : 'Начать обучение'}
                        {!isForgotPassword && <ArrowRight size={16} />}
                      </>
                    )}
                  </button>
                </form>

                {!isForgotPassword && (
                  <>
                    <div className="relative my-5">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/[0.06]" />
                      </div>
                      <div className="relative flex justify-center text-xs">
                        <span className="px-3 bg-slate-950 text-slate-600">или</span>
                      </div>
                    </div>

                    <button type="button" onClick={signInWithGoogle}
                      className="w-full py-2.5 bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2.5 text-sm">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      Войти через Google
                    </button>

                    <div className="mt-5 text-center">
                      <p className="text-sm text-slate-600">
                        {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                        <button onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess(''); }}
                          className="ml-1.5 text-blue-400 font-medium hover:text-blue-300 transition-colors">
                          {isLogin ? 'Зарегистрироваться' : 'Войти'}
                        </button>
                      </p>
                    </div>
                  </>
                )}

                {isForgotPassword && (
                  <div className="mt-5 text-center">
                    <button onClick={() => { setIsForgotPassword(false); setError(''); setSuccess(''); }}
                      className="text-sm text-slate-600 hover:text-slate-400 transition-colors">
                      Вернуться ко входу
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cases — Main Product */}
      <section className="py-20 relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-sm text-orange-400 mb-6">
              <Flame className="w-3.5 h-3.5" />
              Практика на реальных кейсах
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Три инвестиционных кейса
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
              Вы — новый сотрудник Tranio. Ваша задача — проанализировать каждый проект, 
              посчитать экономику и принять решение: инвестировать или нет.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-14">
            {[
              {
                num: '01',
                flag: '🇩🇪',
                title: 'Флиппинг в Максхютте',
                location: 'Бавария',
                desc: 'Купить дом, разделить на 2 квартиры, отремонтировать, продать',
                topics: ['Аналоги', 'Ремонт', 'Налоги', 'Банк'],
                steps: 12,
                level: 'Начальный',
                gradient: 'from-blue-500/10 to-indigo-500/10',
                border: 'border-blue-500/15 hover:border-blue-400/30',
                accent: 'text-blue-400',
                badge: 'bg-blue-500/10 text-blue-400',
              },
              {
                num: '02',
                flag: '🇩🇪',
                title: 'Редевелопмент в Бонне',
                location: 'Сев. Рейн-Вестфалия',
                desc: 'Купить уставший отель, отремонтировать, сдать оператору, продать',
                topics: ['Мультипликатор', 'GP/LP', 'Мезонин', 'P&L'],
                steps: 13,
                level: 'Средний',
                gradient: 'from-purple-500/10 to-violet-500/10',
                border: 'border-purple-500/15 hover:border-purple-400/30',
                accent: 'text-purple-400',
                badge: 'bg-purple-500/10 text-purple-400',
              },
              {
                num: '03',
                flag: '🇩🇪',
                title: 'Девелопмент в Ахене',
                location: 'Сев. Рейн-Вестфалия',
                desc: 'Построить апарт-отель с нуля — от участка до продажи',
                topics: ['Стройка', 'Вотерфол', 'Хёрдлы', 'Холдинг'],
                steps: 13,
                level: 'Продвинутый',
                gradient: 'from-emerald-500/10 to-teal-500/10',
                border: 'border-emerald-500/15 hover:border-emerald-400/30',
                accent: 'text-emerald-400',
                badge: 'bg-emerald-500/10 text-emerald-400',
              },
            ].map((c) => (
              <div key={c.num} className={`group relative rounded-2xl border ${c.border} bg-gradient-to-br ${c.gradient} p-5 sm:p-6 transition-all duration-300 hover:translate-y-[-2px]`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <span className="text-xs text-slate-600">{c.location}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-700 tracking-wider">{c.num}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">{c.title}</h3>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{c.desc}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {c.topics.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-500 font-medium">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/[0.05]">
                  <span className="text-xs text-slate-600">{c.steps} шагов</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${c.badge} font-semibold`}>{c.level}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            {[
              { value: '38', label: 'шагов' },
              { value: '3', label: 'страны' },
              { value: '∞', label: 'повторений' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-white/[0.04]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Как проходит обучение</h2>
            <p className="text-slate-500 text-lg">Каждый кейс — это история. Вы принимаете решения на каждом шаге.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: BookOpen, title: 'Читаете контекст', desc: 'Партнёр пишет вам письмо с предложением. Вы изучаете локацию, экономику, объект.', color: 'text-blue-400 bg-blue-500/10' },
              { icon: Target, title: 'Анализируете цифры', desc: 'Финмодель, аренда, налоги, мультипликатор. Считаете так, как считают в Tranio.', color: 'text-purple-400 bg-purple-500/10' },
              { icon: Lightbulb, title: 'Отвечаете на вопросы', desc: 'В каждом шаге — вопросы с подсказками и ответами. Записываете в рабочую тетрадь.', color: 'text-amber-400 bg-amber-500/10' },
              { icon: TrendingUp, title: 'Принимаете решение', desc: 'В финале каждого кейса вы решаете: инвестировать или нет. И аргументируете почему.', color: 'text-emerald-400 bg-emerald-500/10' },
            ].map((step, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all group">
                <div className={`w-10 h-10 rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Try the trainer */}
      <section className="py-20 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-sm text-slate-400 mb-6">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                Тренажёр
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">200+ вопросов для практики</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Помимо интерактивного курса — тренажёр с вопросами по рынкам недвижимости. 
                Мгновенная проверка и объяснения к каждому ответу.
              </p>
              <div className="flex items-center gap-5 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Мгновенная проверка
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  Объяснения ответов
                </div>
              </div>
            </div>

            {/* Quiz Card */}
            <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-5 sm:p-7 max-w-lg w-full mx-auto">
              <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] font-semibold tracking-wider text-slate-600 uppercase">Пример вопроса</span>
                <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-[10px] font-semibold rounded-md">Таиланд</span>
              </div>
              
              <h3 className="text-base font-bold text-white mb-5">
                Какой налог платит покупатель недвижимости в Таиланде?
              </h3>

              <div className="space-y-2.5 mb-5">
                {[
                  { id: 1, text: '0.5% от стоимости' },
                  { id: 2, text: '2% от стоимости' },
                  { id: 3, text: '3.3% от стоимости', correct: true },
                  { id: 4, text: '5% от стоимости' },
                ].map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.correct;
                  
                  let cls = 'w-full p-3 rounded-xl border text-left transition-all text-sm flex items-center justify-between ';
                  if (!quizSubmitted) {
                    cls += isSelected
                      ? 'border-blue-500/40 bg-blue-500/10 text-blue-300'
                      : 'border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.03] text-slate-300';
                  } else {
                    if (isCorrect) cls += 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300';
                    else if (isSelected && !isCorrect) cls += 'border-red-500/40 bg-red-500/10 text-red-300';
                    else cls += 'border-white/[0.04] text-slate-600';
                  }

                  return (
                    <button key={option.id} onClick={() => !quizSubmitted && setSelectedAnswer(option.id)} className={cls} disabled={quizSubmitted}>
                      <span className="font-medium">{option.text}</span>
                      {quizSubmitted && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                      {quizSubmitted && isSelected && !isCorrect && <span className="text-red-400 text-xs font-bold">✕</span>}
                      {!quizSubmitted && (
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-400' : 'border-slate-700'}`}>
                          {isSelected && <div className="w-2 h-2 bg-blue-400 rounded-full" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button onClick={() => setQuizSubmitted(true)} disabled={selectedAnswer === null}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-30 disabled:hover:bg-blue-600 text-white font-semibold rounded-xl transition-all text-sm">
                  Проверить ответ
                </button>
              ) : (
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
                  <div className="flex gap-3">
                    <div className="shrink-0 mt-0.5">
                      {selectedAnswer === 3 ? (
                        <CheckCircle className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Lightbulb className="w-5 h-5 text-amber-400" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">
                        {selectedAnswer === 3 ? 'Правильно!' : 'Правильный ответ: 3.3%'}
                      </p>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Трансферный налог составляет 2%, плюс специальный бизнес-налог 3.3% (если продажа в течение 5 лет), но часто делится между сторонами.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 border-t border-white/[0.04]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-14">Что внутри платформы</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Building2, title: 'Реальные кейсы Tranio', desc: 'Три проекта из практики — флиппинг, редевелопмент, девелопмент. С настоящими финмоделями.' },
              { icon: Zap, title: 'Интерактивный формат', desc: 'Вопросы, подсказки и ответы на каждом шаге. Как диалог с ментором.' },
              { icon: Target, title: 'Тренажёр по странам', desc: '200+ вопросов по рынкам недвижимости с мгновенной проверкой и объяснениями.' },
              { icon: Shield, title: 'Уроки по странам', desc: 'Структурированные уроки по ключевым рынкам: налоги, визы, процесс покупки.' },
              { icon: TrendingUp, title: 'Финмодели и расчёты', desc: 'Мультипликаторы, cap rate, IRR, анализ чувствительности — всё на реальных цифрах.' },
              { icon: GraduationCap, title: 'Прогресс и статистика', desc: 'Отслеживайте своё продвижение по курсу и результаты в тренажёре.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors group">
                <div className="shrink-0 w-9 h-9 bg-white/[0.04] rounded-lg flex items-center justify-center text-slate-500 group-hover:text-blue-400 transition-colors">
                  <item.icon className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/[0.04] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Готовы начать?</h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
            Зарегистрируйтесь и начните первый кейс — флиппинг дома в Баварии.
          </p>
          <button 
            onClick={() => { setIsLogin(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 transition-all text-sm"
          >
            Начать обучение
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-10 text-slate-600 text-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-slate-700" />
              <span className="font-semibold text-slate-500">RE Academy</span>
              <span className="text-slate-700">by Tranio</span>
            </div>
            <p>© {new Date().getFullYear()} RE Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
