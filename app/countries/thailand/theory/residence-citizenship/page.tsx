'use client';
import React, { useState, useEffect } from 'react';
import { Home, IdCard, Plane, Briefcase, Heart, DollarSign, Info, User, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function LessonPage() {
  const [selectedVisaType, setSelectedVisaType] = useState('tourist');
  const [selectedResidenceType, setSelectedResidenceType] = useState('elite');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
      if (!completedLessons.includes('residence-citizenship')) {
        completedLessons.push('residence-citizenship');
        localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
        
        const activities = JSON.parse(localStorage.getItem('thailand_activities') || '[]');
        activities.unshift({
          type: 'lesson',
          title: 'Урок 5: ВНЖ и гражданство',
          date: new Date().toISOString(),
          points: 10,
          country: '🇹🇭'
        });
        localStorage.setItem('thailand_activities', JSON.stringify(activities.slice(0, 20)));
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation Header */}
      <nav className="bg-white/80 backdrop-blur border-b border-purple-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/countries/thailand/theory" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                <Home className="w-6 h-6 text-purple-700" />
              </div>
              <div>
                <div className="font-bold text-gray-800">Tranio Academy</div>
                <div className="text-xs text-gray-500">Урок 5: ВНЖ и гражданство</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/countries/thailand/theory" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition-all">
                <BookOpen className="w-4 h-4" />
                К урокам
              </Link>
              <Link href="/profile" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 font-medium hover:shadow-md transition-all">
                <User className="w-4 h-4" />
                Профиль
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Lesson Header */}
      <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
        <div className="max-w-4xl mx-auto px-6 py-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/80 rounded-2xl backdrop-blur shadow-sm">
              <IdCard className="w-10 h-10 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm text-indigo-700 font-medium mb-1">Урок 5 • Теория</div>
              <h1 className="text-3xl font-bold text-indigo-900">ВНЖ и гражданство в Таиланде</h1>
              <p className="text-indigo-800 mt-1">Визы, вид на жительство и получение гражданства</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-6">
        
        {/* Intro */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-indigo-100">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Безвизовое посещение</h2>
              <p className="text-gray-600 leading-relaxed">
                Россиянам виза не требуется для пребывания до <span className="font-semibold text-indigo-700">60 дней</span>.
                С июня 2025 года будет введено обязательное <span className="font-semibold text-indigo-700">электронное разрешение на въезд (ETA)</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl">
              <div className="text-xs font-medium text-indigo-600 mb-1">Без визы</div>
              <div className="font-bold text-indigo-800">60 дней</div>
              <div className="text-xs text-indigo-600 mt-1">для россиян</div>
            </div>
            <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl">
              <div className="text-xs font-medium text-purple-600 mb-1">С визой</div>
              <div className="font-bold text-purple-800">до 60 дней</div>
              <div className="text-xs text-purple-600 mt-1">при каждом въезде</div>
            </div>
          </div>
        </div>

        {/* Short-term Visas */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-blue-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Plane className="w-6 h-6 text-blue-800" />
              <h2 className="text-xl font-bold text-blue-800">Краткосрочные визы</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedVisaType('tourist')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedVisaType === 'tourist'
                    ? 'bg-gradient-to-r from-blue-200 to-cyan-200 text-blue-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🎫 Туристическая
              </button>
              <button
                onClick={() => setSelectedVisaType('transit')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedVisaType === 'transit'
                    ? 'bg-gradient-to-r from-green-200 to-emerald-200 text-green-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                ✈️ Транзитная
              </button>
            </div>

            {selectedVisaType === 'tourist' && (
              <div className="space-y-3">
                <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3">Туристическая виза</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>• <span className="font-semibold">Срок действия:</span> 3 или 6 месяцев</div>
                    <div>• <span className="font-semibold">Пребывание:</span> до 60 дней при каждом въезде</div>
                    <div>• <span className="font-semibold">Документы:</span> паспорт, фото, билет, подтверждение средств (20 000 ฿)</div>
                    <div>• <span className="font-semibold">Продление:</span> возможно в иммиграционном офисе</div>
                  </div>
                </div>
              </div>
            )}

            {selectedVisaType === 'transit' && (
              <div className="space-y-3">
                <div className="p-5 bg-green-50 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 mb-3">Транзитная виза</h3>
                  <div className="space-y-2 text-sm text-green-800">
                    <div>• <span className="font-semibold">Срок действия:</span> 3 месяца</div>
                    <div>• <span className="font-semibold">Пребывание:</span> до 30 дней</div>
                    <div>• <span className="font-semibold">Назначение:</span> транзит, спорт, экипажи</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Long-term Residence */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-purple-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-800" />
              <h2 className="text-xl font-bold text-purple-800">Долгосрочные резидентские визы</h2>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex gap-2 mb-5">
              <button
                onClick={() => setSelectedResidenceType('elite')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedResidenceType === 'elite'
                    ? 'bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                ⭐ Thailand Elite
              </button>
              <button
                onClick={() => setSelectedResidenceType('smart')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedResidenceType === 'smart'
                    ? 'bg-gradient-to-r from-amber-200 to-orange-200 text-amber-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                💼 SMART Visa
              </button>
              <button
                onClick={() => setSelectedResidenceType('ltr')}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm transition-all ${
                  selectedResidenceType === 'ltr'
                    ? 'bg-gradient-to-r from-emerald-200 to-teal-200 text-emerald-800 shadow-md'
                    : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                }`}
              >
                🏠 LTR Visa
              </button>
            </div>

            {selectedResidenceType === 'elite' && (
              <div className="space-y-3">
                <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-3">Thailand Elite Visa</h3>
                  <div className="space-y-2 text-sm text-purple-800">
                    <div>• <span className="font-semibold">Срок:</span> от 5 до 20 лет</div>
                    <div>• <span className="font-semibold">Стоимость:</span> от 650 000 ฿</div>
                    <div>• <span className="font-semibold">Привилегии:</span> ускоренное прохождение контроля, эксклюзивные мероприятия</div>
                    <div>• <span className="font-semibold">Для кого:</span> состоятельные иностранцы, пенсионеры</div>
                  </div>
                </div>
              </div>
            )}

            {selectedResidenceType === 'smart' && (
              <div className="space-y-3">
                <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                  <h3 className="font-bold text-amber-900 mb-3">SMART Visa</h3>
                  <div className="space-y-2 text-sm text-amber-800">
                    <div>• <span className="font-semibold">Срок:</span> до 4 лет с продлением</div>
                    <div>• <span className="font-semibold">Для кого:</span> инвесторы, специалисты, стартаперы, руководители</div>
                    <div>• <span className="font-semibold">Требования:</span> высокий доход, опыт работы</div>
                  </div>
                </div>
              </div>
            )}

            {selectedResidenceType === 'ltr' && (
              <div className="space-y-3">
                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 mb-3">LTR Visa (Long Term Resident)</h3>
                  <div className="space-y-2 text-sm text-emerald-800">
                    <div>• <span className="font-semibold">Срок:</span> 10 лет</div>
                    <div>• <span className="font-semibold">Введена:</span> 2022 год</div>
                    <div>• <span className="font-semibold">Для кого:</span> состоятельные, пенсионеры, специалисты, цифровые кочевники</div>
                    <div>• <span className="font-semibold">Требования:</span> финансовая состоятельность, медицинская страховка</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Investment Visas */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-green-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-200 to-emerald-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-800" />
              <h2 className="text-xl font-bold text-green-800">ВНЖ через инвестиции</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-green-50 rounded-xl border border-green-200">
              <h3 className="font-bold text-green-900 mb-3">Важно знать</h3>
              <p className="text-sm text-green-800 mb-3">
                Программы получения ВНЖ при покупке недвижимости на определённую сумму в законодательстве не предусмотрена, 
                но есть альтернативные долгосрочные визы резидента.
              </p>
              <div className="space-y-2 text-sm text-green-800">
                <div>✅ <span className="font-semibold">Thailand Elite:</span> инвестиционная виза до 20 лет (от 650 000 ฿)</div>
                <div>✅ <span className="font-semibold">Инвесторская виза:</span> 5 лет за покупку недвижимости от 10 млн ฿</div>
                <div>✅ <span className="font-semibold">LTR Visa:</span> резидентская виза при доказательстве финансового благополучия</div>
              </div>
            </div>
          </div>
        </div>

        {/* Citizenship */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg border border-rose-100 overflow-hidden">
          <div className="bg-gradient-to-r from-rose-200 to-pink-200 px-6 py-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-800" />
              <h2 className="text-xl font-bold text-rose-800">Получение гражданства</h2>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h3 className="font-bold text-rose-900 mb-3">Требования для получения гражданства</h3>
              <div className="space-y-2 text-sm text-rose-800">
                <div>• <span className="font-semibold">Проживание:</span> минимум 5 лет в статусе резидента</div>
                <div>• <span className="font-semibold">Язык:</span> экзамен на владение тайским языком (устный и письменный)</div>
                <div>• <span className="font-semibold">Доход:</span> свыше 480 000 ฿ в год</div>
                <div>• <span className="font-semibold">Репутация:</span> отсутствие проблем с законом</div>
                <div>• <span className="font-semibold">Процесс:</span> длительный и сложный, требует тщательной подготовки</div>
              </div>
            </div>

            <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
              <h3 className="font-bold text-pink-900 mb-3">Особенности</h3>
              <div className="space-y-2 text-sm text-pink-800">
                <div>• Гражданство Таиланда получить сложнее, чем ВНЖ</div>
                <div>• Рекомендуется начать с получения долгосрочной визы</div>
                <div>• Процесс может занять несколько лет</div>
                <div>• Требуется профессиональная помощь и консультации</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white/80 backdrop-blur rounded-3xl shadow-lg p-6 border border-amber-100">
          <div className="flex items-start gap-3">
            <Info className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-3">Советы</h2>
              <div className="space-y-2 text-gray-600">
                <div>✅ <span className="font-semibold">Начните с визы:</span> сначала получите долгосрочную визу, затем ВНЖ</div>
                <div>✅ <span className="font-semibold">Консультации:</span> обратитесь к профессиональным консультантам</div>
                <div>✅ <span className="font-semibold">Документы:</span> подготовьте полный пакет документов заранее</div>
                <div>✅ <span className="font-semibold">Финансы:</span> убедитесь в наличии достаточных средств</div>
                <div>✅ <span className="font-semibold">Сроки:</span> процесс может занять от нескольких недель до месяцев</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex gap-4 pt-6">
          <Link
            href="/countries/thailand/theory/life-in-thailand"
            className="flex-1 py-4 px-6 rounded-2xl bg-white/80 border-2 border-indigo-200 text-indigo-700 font-semibold hover:shadow-lg transition-all"
          >
            ← Предыдущий урок
          </Link>
          <Link
            href="/countries/thailand/theory/prices"
            className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-900 font-semibold hover:shadow-lg transition-all"
          >
            Следующий урок →
          </Link>
        </div>

      </div>
    </div>
  );
}
