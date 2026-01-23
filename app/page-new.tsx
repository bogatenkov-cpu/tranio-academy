'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Mail, Lock, User, ArrowRight, Eye, EyeOff, Loader2, CheckCircle, 
  Library, Lightbulb, GraduationCap, Home as HomeIcon, FileText, Calculator, 
  Key, Zap, Smartphone, Target, LineChart, RefreshCcw, Star, Flame, 
  Award, Sparkles
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  // Quiz State
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

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

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased text-slate-900">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 leading-tight tracking-tight">RE <span className="text-blue-600">Academy</span></h1>
              <p className="text-[10px] text-slate-400 font-bold tracking-[0.2em] uppercase">Real Estate Platform</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-10 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">Курсы</a>
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">Страны</a>
            <a href="#" className="hover:text-blue-600 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all">Блог</a>
          </nav>
          <div className="flex items-center gap-4">
             <Button variant="ghost" className="text-sm font-bold text-slate-600 hover:text-blue-600" onClick={() => setIsLogin(true)}>Вход</Button>
             <Button className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-5" onClick={() => { setIsLogin(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Регистрация</Button>
          </div>
        </div>
      </header>

      {/* Hero & Auth Section */}
      <main className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 -z-10 opacity-10 transform translate-x-1/3 -translate-y-1/4">
          <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#2563EB" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.4,82.2,23.1,70.8,34.9C59.4,46.7,47.9,56.6,35.4,65.4C22.9,74.2,9.4,81.9,-3.3,87.6C-16,93.3,-27.9,97,-39.4,93.2C-50.9,89.4,-62,78.1,-70.3,65.4C-78.6,52.7,-84.1,38.6,-86.3,24.1C-88.5,9.6,-87.4,-5.3,-81.4,-18.2C-75.4,-31.1,-64.5,-42,-52.4,-50.3C-40.3,-58.6,-27,-64.3,-13.8,-66.5C-0.6,-68.7,11.3,-67.4,24.5,-63.5" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                200+ новых студентов за неделю
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Станьте экспертом <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">зарубежной недвижимости</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                Бесплатная образовательная платформа. Изучайте рынки, практикуйтесь на реальных кейсах и получайте сертификаты международного образца.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    <Library size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">8 уроков</div>
                    <div className="text-sm text-slate-500">Система</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Тренажер</div>
                    <div className="text-sm text-slate-500">Кейсы</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                     </div>
                   ))}
                </div>
                <div className="flex items-center text-sm text-slate-600 font-medium">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                  <span>4.9/5 рейтинг курса</span>
                </div>
              </div>
            </div>

            {/* Right Column: Auth Form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto relative">
               <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-3xl opacity-10 transform rotate-3"></div>
               <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 relative z-10">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      {isForgotPassword ? 'Восстановление' : isLogin ? 'С возвращением!' : 'Создать аккаунт'}
                    </h2>
                    <p className="text-slate-500">
                      {isForgotPassword ? 'Введите email для сброса пароля' : isLogin ? 'Войдите, чтобы продолжить обучение' : 'Начните обучение бесплатно'}
                    </p>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl flex items-start gap-2">
                      <div className="mt-0.5"><Lock size={16} /></div>
                      {error}
                    </div>
                  )}

                  {success && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 text-sm rounded-xl flex items-start gap-2">
                      <div className="mt-0.5"><CheckCircle size={16} /></div>
                      {success}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && !isForgotPassword && (
                      <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Имя</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                            placeholder="Ваше имя"
                          />
                        </div>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-slate-700 ml-1">Email</label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>

                    {!isForgotPassword && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between ml-1">
                          <label className="text-sm font-semibold text-slate-700">Пароль</label>
                          {isLogin && (
                            <button
                              type="button"
                              onClick={() => { setIsForgotPassword(true); setError(''); setSuccess(''); }}
                              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              Забыли?
                            </button>
                          )}
                        </div>
                        <div className="relative group">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-12 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all outline-none"
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <>
                          {isForgotPassword ? 'Отправить ссылку' : isLogin ? 'Войти в аккаунт' : 'Начать бесплатно'}
                          {!isForgotPassword && <ArrowRight size={20} />}
                        </>
                      )}
                    </button>
                  </form>

                  {!isForgotPassword && (
                    <>
                      <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                          <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-4 bg-white text-slate-400 font-medium">Или через Google</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={signInWithGoogle}
                        className="w-full py-3 px-4 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl transition-all flex items-center justify-center gap-3"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Google
                      </button>

                      <div className="mt-8 text-center">
                        <p className="text-slate-500 text-sm">
                          {isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
                          <button
                            onClick={() => { setIsLogin(!isLogin); setError(''); setSuccess(''); }}
                            className="ml-1.5 text-blue-600 font-bold hover:underline"
                          >
                            {isLogin ? 'Зарегистрироваться' : 'Войти'}
                          </button>
                        </p>
                      </div>
                    </>
                  )}

                  {isForgotPassword && (
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => { setIsForgotPassword(false); setError(''); setSuccess(''); }}
                        className="text-slate-500 hover:text-slate-700 text-sm font-medium hover:underline"
                      >
                        Вернуться ко входу
                      </button>
                    </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </main>

      {/* 1. КАК ЭТО РАБОТАЕТ */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4 border-blue-200 bg-blue-50 text-blue-700">Простой старт</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Как проходит обучение</h2>
            <p className="text-slate-600">Всего 4 простых шага отделяют вас от экспертных знаний в недвижимости</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { 
                 visual: (
                   <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl group-hover:bg-emerald-400/30 transition-colors"></div>
                     <div className="relative w-12 h-12 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
                       <div className="w-1 h-1 bg-emerald-500 rounded-full absolute top-2"></div>
                       <div className="w-6 h-[2px] bg-emerald-500 rotate-45"></div>
                     </div>
                   </div>
                 ),
                 title: "Выберите страну", 
                 desc: "Начните с Таиланда - популярного направления", 
                 num: "01" 
               },
               { 
                 visual: (
                   <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl group-hover:bg-blue-400/30 transition-colors"></div>
                     <div className="relative space-y-1">
                        <div className="w-8 h-1.5 bg-blue-500/40 rounded-full ml-2"></div>
                        <div className="w-10 h-1.5 bg-blue-500 rounded-full"></div>
                        <div className="w-6 h-1.5 bg-blue-500/60 rounded-full ml-4"></div>
                     </div>
                   </div>
                 ),
                 title: "Изучайте теорию", 
                 desc: "8 структурированных уроков с примерами", 
                 num: "02" 
               },
               { 
                 visual: (
                   <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute inset-0 bg-indigo-400/20 rounded-full blur-xl group-hover:bg-indigo-400/30 transition-colors"></div>
                     <div className="relative">
                        <div className="w-3 h-3 rounded-full border-2 border-indigo-500 animate-pulse"></div>
                        <div className="absolute -top-4 -left-4 w-2 h-2 rounded-full bg-indigo-500/40"></div>
                        <div className="absolute -bottom-4 -right-4 w-2 h-2 rounded-full bg-indigo-500/60"></div>
                     </div>
                   </div>
                 ),
                 title: "Тренируйтесь", 
                 desc: "200+ реальных вопросов для практики", 
                 num: "03" 
               },
               { 
                 visual: (
                   <div className="relative w-full h-full flex items-center justify-center">
                     <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl group-hover:bg-orange-400/30 transition-colors"></div>
                     <div className="relative w-10 h-10 border-2 border-orange-500 rounded-lg rotate-45 flex items-center justify-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-sm"></div>
                     </div>
                   </div>
                 ),
                 title: "Получите сертификат", 
                 desc: "Подтвердите знания экзаменом", 
                 num: "04" 
               },
             ].map((step, idx) => (
               <div key={idx} className="group relative">
                 <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-slate-100 -z-10 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-blue-500 to-transparent translate-x-[-100%] group-hover:translate-x-[0%] transition-transform duration-1000"></div>
                 </div>
                 <div className="flex flex-col items-center text-center">
                   <div className="relative w-24 h-24 mb-6 transition-all duration-500 group-hover:scale-110">
                     <div className="absolute -top-2 -right-2 text-[40px] font-black text-slate-100 group-hover:text-blue-50 transition-colors -z-10">{step.num}</div>
                     {step.visual}
                   </div>
                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{step.title}</h3>
                   <p className="text-sm text-slate-500 max-w-[200px] leading-relaxed">{step.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. ПРЕВЬЮ УРОКОВ */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Что вы будете изучать</h2>
              <p className="text-slate-600 max-w-xl">Примеры тем из курса по Таиланду. Материалы обновляются еженедельно.</p>
            </div>
            <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              Посмотреть все уроки <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HomeIcon, title: "Основы рынка", desc: "Что такое недвижимость за границей", time: "10 мин", color: "text-blue-600 bg-blue-50" },
              { icon: FileText, title: "Визы и законы", desc: "Типы виз и условия регистрации", time: "12 мин", color: "text-purple-600 bg-purple-50" },
              { icon: Calculator, title: "Налоги", desc: "Налоговая система и скрытые платежи", time: "8 мин", color: "text-green-600 bg-green-50" },
              { icon: Key, title: "Покупка", desc: "Процесс сделки и документы", time: "15 мин", color: "text-orange-600 bg-orange-50" },
            ].map((lesson, idx) => (
              <Card key={idx} className="hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 cursor-pointer border-slate-200 overflow-hidden group">
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-xl ${lesson.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <lesson.icon size={24} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{lesson.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 h-10">{lesson.desc}</p>
                  <div className="flex items-center text-xs font-medium text-slate-400">
                    <div className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-md">
                      <Zap size={12} className="fill-slate-400" />
                      {lesson.time}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС (Интерактив) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-purple-600/10 blur-[100px]"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
                <Lightbulb className="w-4 h-4" />
                Попробуйте тренажер
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Проверьте свои знания прямо сейчас</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                В нашем тренажере более 200 реальных вопросов. Они помогут подготовиться к сделкам и экзаменам.
                Попробуйте ответить на один из них.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Мгновенная проверка
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Объяснения ответов
                </div>
              </div>
            </div>

            {/* Quiz Card */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-slate-900 max-w-lg w-full mx-auto">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Вопрос 1 из 200</span>
                <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded">Таиланд • Налоги</span>
              </div>
              
              <h3 className="text-xl font-bold mb-6">
                Какой налог платит покупатель недвижимости в Таиланде?
              </h3>

              <div className="space-y-3 mb-6">
                {[
                  { id: 1, text: "0.5% от стоимости" },
                  { id: 2, text: "2% от стоимости" },
                  { id: 3, text: "3.3% от стоимости", correct: true },
                  { id: 4, text: "5% от стоимости" },
                ].map((option) => {
                  const isSelected = selectedAnswer === option.id;
                  const isCorrect = option.correct;
                  
                  let cardClass = "w-full p-4 rounded-xl border-2 text-left transition-all relative flex items-center justify-between group ";
                  
                  if (!quizSubmitted) {
                    cardClass += isSelected 
                      ? "border-blue-600 bg-blue-50 text-blue-700" 
                      : "border-slate-100 hover:border-blue-200 hover:bg-slate-50";
                  } else {
                    if (isCorrect) {
                       cardClass += "border-green-500 bg-green-50 text-green-700";
                    } else if (isSelected && !isCorrect) {
                       cardClass += "border-red-500 bg-red-50 text-red-700";
                    } else {
                       cardClass += "border-slate-100 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => !quizSubmitted && setSelectedAnswer(option.id)}
                      className={cardClass}
                      disabled={quizSubmitted}
                    >
                      <span className="font-medium">{option.text}</span>
                      {quizSubmitted && isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {quizSubmitted && isSelected && !isCorrect && <div className="w-5 h-5 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold">✕</div>}
                      {!quizSubmitted && (
                         <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-blue-600' : 'border-slate-300'}`}>
                           {isSelected && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />}
                         </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <Button 
                  onClick={handleQuizSubmit} 
                  disabled={selectedAnswer === null}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl"
                >
                  Проверить ответ
                </Button>
              ) : (
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                   <div className="flex gap-3">
                     <div className="shrink-0 mt-1">
                       {selectedAnswer === 3 ? (
                         <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600"><CheckCircle size={16} /></div>
                       ) : (
                         <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-slate-500"><Lightbulb size={16} /></div>
                       )}
                     </div>
                     <div>
                       <p className="text-sm font-bold text-slate-900 mb-1">
                         {selectedAnswer === 3 ? "Правильно!" : "Правильный ответ: 3.3%"}
                       </p>
                       <p className="text-sm text-slate-600 leading-relaxed">
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

      {/* 4. ЧТО ВЫ ПОЛУЧИТЕ */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-6">
           <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Все для комфортного обучения</h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
             {[
               { icon: Zap, title: "В своем темпе", desc: "Учитесь когда удобно, без жестких дедлайнов. Доступ 24/7." },
               { icon: Smartphone, title: "На любом устройстве", desc: "Проходите уроки с телефона в дороге или с ноутбука дома." },
               { icon: Target, title: "Только практика", desc: "Никакой воды. Только реальные кейсы, цифры и законы." },
               { icon: LineChart, title: "Статистика", desc: "Отслеживайте свой прогресс, рейтинг и слабые места." },
               { icon: Award, title: "Сертификат", desc: "Официальное подтверждение ваших знаний после экзамена." },
               { icon: RefreshCcw, title: "Обновления", desc: "База знаний постоянно обновляется с учетом новых законов." },
             ].map((item, i) => (
               <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                 <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                   <item.icon size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
         </div>
      </section>

      {/* 5. ВАША СТАТИСТИКА (Profile Preview) */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Ваш личный прогресс</h2>
           <p className="text-slate-600 mb-12">Вот как будет выглядеть ваш профиль после регистрации</p>

           <div className="relative max-w-4xl mx-auto">
             {/* Decorative Elements */}
             <div className="absolute top-10 -left-10 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
             <div className="absolute top-10 -right-10 w-24 h-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

             {/* Profile Card Mockup */}
             <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 md:p-8 text-left transition-transform hover:rotate-0 duration-500">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                  <div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white shadow-lg overflow-hidden">
                    <img src="https://i.pravatar.cc/150?u=a042581f4e29026704a" alt="User" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900">Александр Иванов</h3>
                    <p className="text-slate-500">Студент • Начал 5 дней назад</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center px-4 py-2 bg-orange-50 rounded-xl border border-orange-100">
                      <div className="flex items-center justify-center gap-1 text-orange-600 font-bold text-xl">
                        <Flame size={20} className="fill-orange-600" /> 7
                      </div>
                      <div className="text-xs text-orange-600/80 font-medium">Дней стрик</div>
                    </div>
                    <div className="text-center px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-center gap-1 text-blue-600 font-bold text-xl">
                        <Star size={20} className="fill-blue-600" /> 1,250
                      </div>
                      <div className="text-xs text-blue-600/80 font-medium">Баллов</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex justify-between mb-2">
                       <span className="text-sm font-semibold text-slate-600">Пройдено уроков</span>
                       <span className="text-sm font-bold text-slate-900">5/8</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full w-[62%]"></div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="flex justify-between mb-2">
                       <span className="text-sm font-semibold text-slate-600">Правильных ответов</span>
                       <span className="text-sm font-bold text-slate-900">89%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full w-[89%]"></div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-between">
                     <div>
                       <span className="text-sm font-semibold text-slate-600 block">Экзамен</span>
                       <span className="text-xs text-slate-400">Доступен после 8 урока</span>
                     </div>
                     <Lock className="text-slate-300 w-5 h-5" />
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Готовы начать обучение?</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10">
            Присоединяйтесь к 500+ студентам сегодня. Это бесплатно и займет всего пару минут.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transition-all duration-300"
          >
            Начать бесплатно →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-slate-400 text-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
             <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 mb-4 text-white">
                  <GraduationCap className="w-6 h-6" />
                  <span className="font-bold text-lg">RE Academy</span>
               </div>
               <p className="max-w-xs leading-relaxed">Образовательная платформа для изучения зарубежной недвижимости.</p>
             </div>
             <div>
               <h4 className="font-bold text-white mb-4">Обучение</h4>
               <ul className="space-y-2">
                 <li><a href="#" className="hover:text-white transition-colors">Курсы</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Вебинары</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Глоссарий</a></li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-white mb-4">Компания</h4>
               <ul className="space-y-2">
                 <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Политика</a></li>
               </ul>
             </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 RE Academy. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-white">Privacy</a>
               <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
