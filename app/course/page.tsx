'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Lock, ChevronRight, MapPin, Building2, Hammer, Landmark } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CoursePage() {
  const modules = [
    {
      id: 1,
      title: 'Флиппинг в Максхютте',
      location: 'Бавария, Германия',
      flag: '🇩🇪',
      tagline: 'Твой первый проект. Купить дом, отремонтировать, продать как две квартиры.',
      steps: 12,
      difficulty: 'Начальный',
      color: 'from-blue-600 to-indigo-700',
      accent: 'blue',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80',
    },
    {
      id: 2,
      title: 'Редевелопмент в Бонне',
      location: 'Северный Рейн-Вестфалия, Германия',
      flag: '🇩🇪',
      tagline: 'Конкурент, отель и новые инструменты. Переделать старое здание в прибыльный бизнес.',
      steps: 13,
      difficulty: 'Средний',
      color: 'from-purple-600 to-violet-800',
      accent: 'purple',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80',
    },
    {
      id: 3,
      title: 'Девелопмент в Ахене',
      location: 'Северный Рейн-Вестфалия, Германия',
      flag: '🇩🇪',
      tagline: 'Самый сложный кейс. Построить апарт-отель с нуля на пустом участке.',
      steps: 12,
      difficulty: 'Продвинутый',
      color: 'from-emerald-600 to-teal-800',
      accent: 'emerald',
      unlocked: true,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-950 font-sans antialiased text-white">
        {/* Header */}
        <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/countries" className="p-1.5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-white">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">RE Academy</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400 mb-6">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Интерактивный курс
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
              Зарубежная<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                недвижимость
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Три реальных кейса из практики международного агентства. Ты — новый сотрудник. 
              Твоя задача — проанализировать каждый проект и принять инвестиционное решение.
            </p>

            <div className="flex justify-center gap-6 sm:gap-10 mt-10">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">37</div>
                <div className="text-xs text-slate-500 mt-0.5">шагов</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
                <div className="text-xs text-slate-500 mt-0.5">кейса</div>
              </div>
              <div className="w-px bg-white/10" />
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
                <div className="text-xs text-slate-500 mt-0.5">страны</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="px-4 sm:px-6 pb-20">
          <div className="max-w-4xl mx-auto space-y-6">
            {modules.map((mod, idx) => (
              <Link
                key={mod.id}
                href={`/course/module-${mod.id}`}
                className="block group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500`} />
                  
                  <div className="relative p-5 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 items-start">
                    {/* Image */}
                    <div className="w-full sm:w-48 h-32 sm:h-36 rounded-xl overflow-hidden flex-shrink-0 relative">
                      <img 
                        src={mod.image} 
                        alt={mod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 flex items-center gap-1.5 text-xs text-white/80">
                        <MapPin className="w-3 h-3" />
                        {mod.location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{mod.flag}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full bg-white/5 text-slate-400`}>
                          {mod.difficulty}
                        </span>
                        <span className="text-xs text-slate-500">{mod.steps} шагов</span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                        {mod.title}
                      </h2>

                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                        {mod.tagline}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors">
                        Начать кейс
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Story intro */}
          <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
            <p className="text-sm text-slate-500 leading-relaxed">
              <span className="text-slate-300 font-medium">Как это работает:</span> Ты проходишь три реальных проекта от простого к сложному. 
              В каждом — сюжет, вопросы и решения. Сначала читаешь ситуацию, потом отвечаешь на вопросы, 
              потом принимаешь решение. В конце каждого кейса — вердикт: инвестировать или нет.
            </p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
