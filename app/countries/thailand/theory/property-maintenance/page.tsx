'use client';
import React from 'react';
import { Home, Wrench } from 'lucide-react';
import Link from 'next/link';
import { useLesson } from '@/lib/hooks/useLesson';

export default function LessonPage() {
  useLesson('property-maintenance', 'Урок 8: Содержание недвижимости');

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
                <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium uppercase tracking-wide mt-0.5 sm:mt-1">🇹🇭 Урок 8</span>
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

      <div className="bg-teal-600 text-white pt-20 sm:pt-24 pb-8 sm:pb-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
              <Wrench className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium mb-1">Урок 8 • Теория</div>
              <h1 className="text-xl sm:text-3xl font-bold">Содержание недвижимости</h1>
              <p className="text-sm sm:text-base text-teal-100 mt-1">Коммунальные услуги, управление, обслуживание и ремонт</p>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-3 sm:px-6 py-6 sm:py-10 max-w-4xl space-y-6">
        
        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Ежемесячные расходы</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-teal-50 border border-teal-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Коммунальные расходы (Common Fee)</span>
                <span className="text-lg sm:text-xl font-bold text-teal-600">40-80 ฿/м²</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Управление, охрана, бассейн, фитнес, сад</p>
            </div>

            <div className="p-3 sm:p-4 bg-blue-50 border border-blue-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Электричество</span>
                <span className="text-lg sm:text-xl font-bold text-blue-600">5-7 ฿/кВт⋅ч</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">В среднем 2,000-5,000 ฿/месяц с кондиционером</p>
            </div>

            <div className="p-3 sm:p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Вода</span>
                <span className="text-lg sm:text-xl font-bold text-cyan-600">18-25 ฿/м³</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">В среднем 200-500 ฿/месяц</p>
            </div>

            <div className="p-3 sm:p-4 bg-emerald-50 border border-emerald-100 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-slate-900 text-sm sm:text-base">Интернет</span>
                <span className="text-lg sm:text-xl font-bold text-emerald-600">600-1,200 ฿</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600">Высокоскоростной интернет, кабельное ТВ</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Управление арендой</h2>
          <div className="space-y-3">
            <div className="p-3 sm:p-4 bg-purple-50 border border-purple-100 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Управляющая компания</h4>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                <div>• <span className="font-semibold">Комиссия:</span> 10-20% от арендной платы</div>
                <div>• <span className="font-semibold">Услуги:</span> поиск арендаторов, уборка, ремонт, отчеты</div>
                <div>• <span className="font-semibold">Преимущества:</span> высокая загрузка, профессиональный сервис</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 bg-pink-50 border border-pink-100 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Самостоятельное управление</h4>
              <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                <div>• <span className="font-semibold">Комиссия:</span> 0% (только ваше время)</div>
                <div>• <span className="font-semibold">Сложности:</span> нужно быть на месте, решать проблемы</div>
                <div>• <span className="font-semibold">Рекомендуется:</span> если живете в Таиланде постоянно</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Типичные расходы на содержание</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">💡</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Студия 30м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">4,000-8,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-orange-50 border border-orange-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏢</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">1-комн 50м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">6,000-12,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-red-50 border border-red-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏠</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">2-комн 80м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">8,000-15,000 ฿/месяц</p>
            </div>
            <div className="p-3 sm:p-4 bg-rose-50 border border-rose-100 rounded-lg">
              <div className="text-xl sm:text-2xl mb-2">🏡</div>
              <h4 className="font-bold text-slate-900 mb-2 text-sm sm:text-base">Вилла 200м²</h4>
              <p className="text-xs sm:text-sm text-slate-600">15,000-30,000 ฿/месяц</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">Советы по содержанию</h2>
          <div className="space-y-2 text-xs sm:text-sm text-slate-700">
            <div>✅ <span className="font-semibold">Выбирайте комплекс с хорошим управлением:</span> проверяйте отзывы</div>
            <div>✅ <span className="font-semibold">Закладывайте 10-15% от дохода:</span> на непредвиденные расходы</div>
            <div>✅ <span className="font-semibold">Наймите управляющую компанию:</span> если не живете в Таиланде</div>
            <div>✅ <span className="font-semibold">Регулярное обслуживание:</span> кондиционеры, сантехника</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6">
          <Link href="/countries/thailand/theory/thailand-taxes" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold transition-all text-sm sm:text-base text-center">
            ← Предыдущий урок
          </Link>
          <Link href="/countries/thailand/theory" className="flex-1 py-3 px-4 sm:px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-all text-sm sm:text-base text-center">
            К списку уроков
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
