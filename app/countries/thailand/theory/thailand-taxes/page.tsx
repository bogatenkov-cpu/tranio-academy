'use client';
import React, { useEffect } from 'react';
import { Home, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('thailand-taxes')) {
        completedLessons.push('thailand-taxes');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 7: Налоги на недвижимость',
          date: new Date().toISOString(),
          points: 10,
          country: '🇹🇭'
        });
        localStorage.setItem('thailand_activities', JSON.stringify(activities.slice(0, 20)));
      }
    }
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans antialiased">
      <header className="fixed w-full top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
        <div className="container mx-auto px-3 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/countries/thailand/theory" className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-all">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
            </Link>
            <Link href="/countries" className="flex items-center gap-2 sm:gap-3 group cursor-pointer">
              <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg viewBox="0 0 100 100" className="w-7 h-7 sm:w-9 sm:h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 5 C30 5, 5 20, 5 40 C5 55, 15 65, 25 70 C15 75, 10 85, 15 95" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 15 C35 15, 15 25, 15 42 C15 52, 22 60, 30 65" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 25 C40 25, 25 32, 25 45 C25 52, 30 58, 38 62" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <circle cx="50" cy="50" r="8" fill="#1e40af"/>
                  <path d="M50 95 C70 95, 95 80, 95 60 C95 45, 85 35, 75 30 C85 25, 90 15, 85 5" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 85 C65 85, 85 75, 85 58 C85 48, 78 40, 70 35" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M50 75 C60 75, 75 68, 75 55 C75 48, 70 42, 62 38" stroke="#1e40af" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-base sm:text-lg leading-none tracking-tight text-slate-900">Tranio Academy</span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 7</span>
              </div>
            </Link>
          </div>
          <Link href="/profile" className="relative group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center border border-slate-200 overflow-hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </Link>
        </div>
      </header>

      <div className="bg-violet-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <FileText className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-violet-100 font-medium mb-1">Урок 7 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Налоги на недвижимость</h1>
              <p className="text-sm sm:text-base text-violet-100 mt-1">Все виды налогов для иностранных покупателей и владельцев</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги при покупке</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-violet-50 border border-violet-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Transfer Fee</span>
                <span className="text-lg sm:text-xl font-bold text-violet-600">2%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Налог на переход права собственности, оплачивается обеими сторонами</p>
            </div>

            <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Stamp Duty</span>
                <span className="text-lg sm:text-xl font-bold text-purple-600">0.5%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Гербовый сбор (только если SBT не применяется)</p>
            </div>

            <div className="p-3 sm:p-4 bg-pink-50 border border-pink-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Specific Business Tax (SBT)</span>
                <span className="text-lg sm:text-xl font-bold text-pink-600">3.3%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Если недвижимость в собственности менее 5 лет</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги при владении</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Property Tax</span>
                <span className="text-lg sm:text-xl font-bold text-blue-600">0.02-0.1%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Ежегодный налог на недвижимость от кадастровой стоимости</p>
            </div>

            <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Land & Building Tax</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-600">0.02-0.3%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Новый налог с 2020 года, зависит от использования</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Налоги на доход от аренды</h2>
          <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-900 text-sm sm:text-base">Rental Income Tax</span>
              <span className="text-lg sm:text-xl font-bold text-amber-600">0-35%</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">Прогрессивная шкала налога на доход от аренды</p>
            <div className="text-xs text-amber-800 space-y-1">
              <div>• До 150,000 ฿: 5-10%</div>
              <div>• 150,000-1,000,000 ฿: 10-20%</div>
              <div>• Более 1,000,000 ฿: 20-35%</div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Советы по налогам</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>✅ <span className="font-semibold">Freehold vs Leasehold:</span> у leasehold ниже налоги при покупке</div>
            <div>✅ <span className="font-semibold">Проверяйте срок владения:</span> после 5 лет нет SBT</div>
            <div>✅ <span className="font-semibold">Нанимайте бухгалтера:</span> для декларирования дохода от аренды</div>
            <div>✅ <span className="font-semibold">Договаривайтесь с продавцом:</span> кто платит Transfer Fee</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/prices" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory/property-maintenance" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            Следующий урок →
          </Link>
        </div>

      </main>

      <footer className="mt-auto py-4 border-t border-slate-200 bg-white transition-colors">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2025 Tranio Academy. Все права защищены.</p>
          <div className="flex gap-4">
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Поддержка</a>
            <a className="text-sm text-slate-400 hover:text-blue-500 transition-colors" href="#">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
