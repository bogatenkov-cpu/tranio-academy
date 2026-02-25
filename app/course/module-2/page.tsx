'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ChevronRight, MessageCircle, MapPin, Search, FileText, DollarSign, Wrench, TrendingUp, Users, Landmark, Receipt, BarChart3, CheckCircle, Hotel } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const steps = [
  {
    slug: 'chto-takoe-redevelopment',
    icon: Sparkles,
    title: 'Что такое редевелопмент',
    desc: 'Обед с Аней и Лёшей. Афины, value-add и новый проект',
    action: 'Разобраться в стратегии',
    color: 'bg-purple-500',
  },
  {
    slug: 'chto-delaem-bonn',
    icon: Hotel,
    title: 'Что делаем: отель в Бонне',
    desc: 'Бонн — экономика, туризм, Бетховен и Haribo',
    action: 'Проанализировать локацию',
    color: 'bg-blue-500',
  },
  {
    slug: 'kto-delaet-bonn',
    icon: Search,
    title: 'Кто делает: Centro Hotel Group',
    desc: 'GP и LP. Можно ли доверять оператору?',
    action: 'Оценить партнёра',
    color: 'bg-violet-500',
  },
  {
    slug: 'dokumenty-bonn',
    icon: FileText,
    title: 'Документы и регулирование',
    desc: 'Зонирование, генплан, нужны ли разрешения?',
    action: 'Проверить регулирование',
    color: 'bg-amber-500',
  },
  {
    slug: 'stoimost-pokupki-bonn',
    icon: DollarSign,
    title: 'Считаем: покупка',
    desc: 'Yield Multiple и обратный расчёт цены',
    action: 'Рассчитать стоимость',
    color: 'bg-yellow-500',
  },
  {
    slug: 'stoimost-remonta-bonn',
    icon: Wrench,
    title: 'Считаем: ремонт',
    desc: 'Смета, стоимость на м² и непредвиденные расходы',
    action: 'Оценить затраты',
    color: 'bg-orange-500',
  },
  {
    slug: 'stoimost-arendy',
    icon: Receipt,
    title: 'Стоимость аренды',
    desc: 'P&L, ADR, загрузка и конкуренты на Booking',
    action: 'Проверить прогноз аренды',
    color: 'bg-teal-500',
  },
  {
    slug: 'stoimost-prodazhi-bonn',
    icon: TrendingUp,
    title: 'Считаем: продажа',
    desc: 'Рассчитываем цену продажи по мультипликатору',
    action: 'Рассчитать выручку',
    color: 'bg-emerald-500',
  },
  {
    slug: 'otnosheniya-gp-lp',
    icon: Users,
    title: 'Отношения GP и LP',
    desc: 'ООО vs товарищество на вере. Как делить прибыль?',
    action: 'Выбрать структуру',
    color: 'bg-pink-500',
  },
  {
    slug: 'finansirovanie-bonn',
    icon: Landmark,
    title: 'Финансирование: мезонин и equity',
    desc: 'Два типа капитала, рефинансирование и пандемия',
    action: 'Разобраться в финансировании',
    color: 'bg-cyan-500',
  },
  {
    slug: 'nalogi-bonn',
    icon: Receipt,
    title: 'Налоги',
    desc: 'Налог на аренду, прирост капитала и вычеты',
    action: 'Посчитать налоги',
    color: 'bg-red-500',
  },
  {
    slug: 'analiz-chuvstvitelnosti-bonn',
    icon: BarChart3,
    title: 'Что если всё пойдёт не так?',
    desc: 'Анализ чувствительности по двум параметрам',
    action: 'Просчитать сценарии',
    color: 'bg-slate-500',
  },
  {
    slug: 'verdikt-bonn',
    icon: CheckCircle,
    title: 'Вердикт',
    desc: 'Письмо от Ани. Инвестировать или нет?',
    action: 'Принять финальное решение',
    color: 'bg-green-500',
  },
];

export default function Module2Page() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-950 font-sans antialiased text-white">
        <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/course" className="p-1.5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/course" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">Кейс 2</span>
              </Link>
            </div>
          </div>
        </header>

        <div className="pt-20 sm:pt-24 pb-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80"
                alt="Hotel in Bonn"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <span className="text-xl">🇩🇪</span>
                  <MapPin className="w-3.5 h-3.5" />
                  Бонн, Северный Рейн-Вестфалия
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">Редевелопмент в Бонне</h1>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 mb-10">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                <span className="text-white font-medium">Ситуация:</span> Ты обедаешь с Аней и новым коллегой Лёшей. 
                Аня рассказывает о проекте в Афинах, а затем приходит письмо от партнёра — Centro Hotel Group предлагает 
                купить уставший отель в Бонне, отремонтировать и продать как арендный бизнес. Твоя задача — 
                проанализировать проект и решить, стоит ли инвестировать.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-white/10 to-green-500/40" />

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <Link
                      key={step.slug}
                      href={`/course/module-2/${step.slug}`}
                      className="block group relative pl-14 sm:pl-16"
                    >
                      <div className={`absolute left-2.5 sm:left-3.5 top-4 w-5 h-5 sm:w-5 sm:h-5 rounded-full ${step.color} ring-4 ring-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform`}>
                        <span className="text-[9px] font-bold text-white">{idx + 1}</span>
                      </div>

                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group-hover:translate-x-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors" />
                              <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-purple-300 transition-colors">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 mb-2">{step.desc}</p>
                            <span className="text-xs text-purple-400/70 font-medium">{step.action}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
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
