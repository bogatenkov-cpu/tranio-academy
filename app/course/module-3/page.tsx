'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, ChevronRight, Mail, MapPin, Search, FileText, DollarSign, Hammer, TrendingUp, Users, Landmark, Receipt, BarChart3, CheckCircle, Building2 } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

const steps = [
  {
    slug: 'pismo-ot-partnera',
    icon: Mail,
    title: 'Письмо от партнёра',
    desc: 'Alexander Wietasch из Bonafide предлагает проект в Ахене',
    action: 'Прочитать и оценить',
    color: 'bg-emerald-500',
  },
  {
    slug: 'chto-takoe-development',
    icon: Sparkles,
    title: 'Что такое девелопмент',
    desc: 'Строительство vs девелопмент земли. Самая рискованная стратегия',
    action: 'Разобраться в стратегии',
    color: 'bg-teal-500',
  },
  {
    slug: 'chto-delaem-aachen',
    icon: Building2,
    title: 'Что делаем: апарт-отель в Ахене',
    desc: 'RWTH, 15 млн туристов, Trierer Straße 289',
    action: 'Проанализировать рынок',
    color: 'bg-blue-500',
  },
  {
    slug: 'kto-delaet-aachen',
    icon: Search,
    title: 'Кто делает: Bonafide',
    desc: '35 лет на рынке. Оператор Living28 — на Booking 8.7',
    action: 'Оценить партнёров',
    color: 'bg-violet-500',
  },
  {
    slug: 'dokumenty-aachen',
    icon: FileText,
    title: 'Документы и разрешения',
    desc: '§34 Строительного кодекса, соседи и генплан',
    action: 'Проверить разрешения',
    color: 'bg-amber-500',
  },
  {
    slug: 'stoimost-pokupki-aachen',
    icon: DollarSign,
    title: 'Считаем: покупка участка',
    desc: '940 тыс. евро — почему сильно меньше 30% бюджета?',
    action: 'Оценить стоимость',
    color: 'bg-yellow-500',
  },
  {
    slug: 'stoimost-stroitelstva',
    icon: Hammer,
    title: 'Стоимость строительства',
    desc: 'Участники, харды/софты, KfW-субсидии',
    action: 'Разобрать смету',
    color: 'bg-orange-500',
  },
  {
    slug: 'stoimost-arendy-aachen',
    icon: Receipt,
    title: 'Стоимость аренды',
    desc: 'Апартаменты vs конкуренты. Цены завышены?',
    action: 'Проверить рынок',
    color: 'bg-pink-500',
  },
  {
    slug: 'stoimost-prodazhi-aachen',
    icon: TrendingUp,
    title: 'Считаем: продажа',
    desc: 'Мультипликатор 20.5 и прогноз Engel & Völkers',
    action: 'Рассчитать цену',
    color: 'bg-cyan-500',
  },
  {
    slug: 'otnosheniya-gp-lp-aachen',
    icon: Users,
    title: 'Отношения GP и LP',
    desc: 'Физлицо, ООО, товарищество. Кто за рулём?',
    action: 'Выбрать структуру',
    color: 'bg-indigo-500',
  },
  {
    slug: 'finansirovanie-aachen',
    icon: Landmark,
    title: 'Вотерфол и хёрдлы',
    desc: 'Soft vs hard hurdle. Как делить прибыль справедливо',
    action: 'Разобраться в вотерфоле',
    color: 'bg-purple-500',
  },
  {
    slug: 'nalogi-aachen',
    icon: Receipt,
    title: 'Налоги и холдинги',
    desc: 'Дивиденды, СОИДН, Кипр и Economic Substance',
    action: 'Посчитать налоги',
    color: 'bg-red-500',
  },
  {
    slug: 'analiz-i-verdikt',
    icon: CheckCircle,
    title: 'Анализ и вердикт',
    desc: 'Чувствительность к стройке и фактору продажи. Финал',
    action: 'Принять финальное решение',
    color: 'bg-green-500',
  },
];

export default function Module3Page() {
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
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">Кейс 3</span>
              </Link>
            </div>
          </div>
        </header>

        <div className="pt-20 sm:pt-24 pb-8 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Development in Aachen"
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <span className="text-xl">🇩🇪</span>
                  <MapPin className="w-3.5 h-3.5" />
                  Ахен, Северный Рейн-Вестфалия
                </div>
                <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">Девелопмент в Ахене</h1>
              </div>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 mb-10">
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                <span className="text-white font-medium">Ситуация:</span> Alexander Wietasch из Bonafide 
                присылает письмо — компания покупает участок на Trierer Straße 289 в Ахене и планирует 
                построить boarding house. Нужен мезонинный кредит 2,1 млн евро. Самый сложный кейс курса — 
                строительство с нуля, вотерфол, хёрдлы и холдинговые структуры.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-6 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-white/10 to-green-500/40" />

              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <Link
                      key={step.slug}
                      href={`/course/module-3/${step.slug}`}
                      className="block group relative pl-14 sm:pl-16"
                    >
                      <div className={`absolute left-2.5 sm:left-3.5 top-4 w-5 h-5 sm:w-5 sm:h-5 rounded-full ${step.color} ring-4 ring-slate-950 flex items-center justify-center group-hover:scale-125 transition-transform`}>
                        <span className="text-[9px] font-bold text-white">{idx + 1}</span>
                      </div>

                      <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group-hover:translate-x-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                              <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-emerald-300 transition-colors">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-500 mb-2">{step.desc}</p>
                            <span className="text-xs text-emerald-400/70 font-medium">{step.action}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
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
