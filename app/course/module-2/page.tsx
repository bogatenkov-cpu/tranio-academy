'use client';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Lock, MapPin } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

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
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm tracking-tight hidden sm:inline">Кейс 2</span>
              </div>
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

            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Скоро</h2>
              <p className="text-slate-500 max-w-md">
                Этот кейс находится в разработке. Конкурент, отель и новые инструменты — 
                13 шагов от покупки до инвестиционного решения.
              </p>
              <Link href="/course" className="mt-6 text-sm text-purple-400 hover:text-purple-300 font-medium transition-colors">
                ← Вернуться к кейсам
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
