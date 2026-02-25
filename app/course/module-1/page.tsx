'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ChevronRight, MessageCircle, MapPin, Search, FileText, DollarSign, Wrench, TrendingUp, Users, Landmark, Receipt, BarChart3, CheckCircle } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const steps = [
  {
    slug: 'pervoe-soobshenie',
    icon: MessageCircle,
    title: 'Первое сообщение',
    desc: 'Роберт пишет в WhatsApp — предлагает проект',
    action: 'Прочитать и задать вопросы',
    color: 'bg-blue-500',
  },
  {
    slug: 'razvedka-mestnosti',
    icon: MapPin,
    title: 'Разведка местности',
    desc: 'Германия → Бавария → Максхютте. Стоит ли смотреть?',
    action: 'Проанализировать локацию',
    color: 'bg-emerald-500',
  },
  {
    slug: 'proveryaem-partnera',
    icon: Search,
    title: 'Проверяем партнёра',
    desc: 'Роберт отвечает на вопросы. Можно ли ему доверять?',
    action: 'Оценить компетенции',
    color: 'bg-violet-500',
  },
  {
    slug: 'dokumenty-i-razresheniya',
    icon: FileText,
    title: 'Документы и разрешения',
    desc: 'Нужен второй кадастровый номер — главный риск',
    action: 'Определить разрешения',
    color: 'bg-amber-500',
  },
  {
    slug: 'stoimost-pokupki',
    icon: DollarSign,
    title: 'Считаем: покупка',
    desc: 'Дорого или дёшево? Сравниваем с рынком',
    action: 'Найти аналоги и сравнить',
    color: 'bg-yellow-500',
  },
  {
    slug: 'stoimost-remonta',
    icon: Wrench,
    title: 'Считаем: ремонт',
    desc: 'Смета не сходится с первым письмом...',
    action: 'Найти расхождения',
    color: 'bg-orange-500',
  },
  {
    slug: 'stoimost-prodazhi',
    icon: TrendingUp,
    title: 'Считаем: продажа',
    desc: 'Оправдан ли прогноз 2 900 €/м²?',
    action: 'Проверить прогноз',
    color: 'bg-teal-500',
  },
  {
    slug: 'yuridicheskoe-oformlenie',
    icon: Users,
    title: 'Юридическое оформление',
    desc: 'Физлицо или юрлицо? Плюсы и минусы',
    action: 'Принять решение',
    color: 'bg-pink-500',
  },
  {
    slug: 'bank-kak-partner',
    icon: Landmark,
    title: 'Банк как партнёр',
    desc: 'LTV, ставка, ROE. Почему банк — это плюс',
    action: 'Рассчитать показатели',
    color: 'bg-cyan-500',
  },
  {
    slug: 'nalogovaya-realnost',
    icon: Receipt,
    title: 'Налоговая реальность',
    desc: 'Налог на покупку, на прирост капитала, вычеты',
    action: 'Посчитать налоги',
    color: 'bg-red-500',
  },
  {
    slug: 'chto-esli',
    icon: BarChart3,
    title: 'Что если всё пойдёт не так?',
    desc: 'Анализ чувствительности: IRR от 15% до 45%',
    action: 'Просчитать сценарии',
    color: 'bg-slate-500',
  },
  {
    slug: 'verdikt',
    icon: CheckCircle,
    title: 'Вердикт',
    desc: 'Звонишь Ане. Инвестируем или нет?',
    action: 'Принять финальное решение',
    color: 'bg-green-500',
  },
];

export default function Module1Page() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-950 font-sans antialiased text-white">
        <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/course" className="p-1.5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">Кейс 1</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="pt-20 sm:pt-24 pb-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80"
                alt="House in Bavaria"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <span className="text-xl">🇩🇪</span>
                  <MapPin className="w-3.5 h-3.5" />
                  Максхютте, Бавария
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">Флиппинг в Максхютте</h1>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 mb-10">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                <span className="text-white font-medium">Ситуация:</span> Ты — новый сотрудник Tranio. 
                Аня, твой руководитель, обещала дать первый проект. И вот — Роберт, партнёр из Германии, 
                пишет в WhatsApp. Он предлагает купить старый дом в Максхютте, отремонтировать и продать 
                как две квартиры. Твоя задача — разобраться, стоит ли инвестировать.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Map */}
        <div className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-green-500/40" />

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <Link
                      key={step.slug}
                      href={`/course/module-1/${step.slug}`}
                      className="block group relative pl-14 sm:pl-16"
                    >
                      {/* Circle on the line */}
                      <div className={`absolute left-2.5 sm:left-3.5 top-4 w-5 h-5 sm:w-5 sm:h-5 rounded-full ${step.color} ring-4 ring-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform`}>
                        <span className="text-[9px] font-bold text-white">{idx + 1}</span>
                      </div>

                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group-hover:translate-x-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                              <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-300 transition-colors">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 mb-2">{step.desc}</p>
                            <span className="text-xs text-blue-400/70 font-medium">{step.action}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
