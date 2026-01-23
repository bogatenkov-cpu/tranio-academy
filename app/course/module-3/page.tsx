'use client';
import Link from 'next/link';
import { ArrowLeft, FileDown } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Module3Page() {
  const lessons = [
    { id: '3.0', title: 'Введение в модуль', file: '3.0 (1).pdf' },
    { id: '3.1', title: 'Урок 3.1', file: '3.1 (1).pdf' },
    { id: '3.2', title: 'Урок 3.2', file: '3.2 (1).pdf' },
    { id: '3.3', title: 'Урок 3.3', file: '3.3 (1).pdf' },
    { id: '3.4', title: 'Урок 3.4', file: '3.4 (1).pdf' },
    { id: '3.5', title: 'Урок 3.5', file: '3.5 (1).pdf' },
    { id: '3.6', title: 'Урок 3.6', file: '3.6 (1).pdf' },
    { id: '3.7', title: 'Урок 3.7', file: '3.7 (1).pdf' },
    { id: '3.8', title: 'Урок 3.8', file: '3.8 (1).pdf' },
    { id: '3.9', title: 'Урок 3.9', file: '3.9 (1).pdf' },
    { id: '3.10', title: 'Урок 3.10', file: '3.10 (1).pdf' },
    { id: '3.11', title: 'Анализ чувствительности', file: '3.11 (1).pdf' },
  ];

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-6">
            <Link 
              href="/course"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад к курсу
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              Модуль 3: Финансовый анализ
            </h1>
            <p className="text-slate-600 mt-2">
              Анализ инвестиционных проектов и оценка рисков
            </p>
          </div>
        </header>

        <div className="bg-green-50 border-b border-green-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-slate-700">Прогресс модуля</span>
              <span className="text-sm font-semibold text-green-600">0 / {lessons.length}</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full w-[0%] transition-all duration-500"></div>
            </div>
          </div>
        </div>

        <main className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto space-y-4">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 text-green-600 font-bold group-hover:bg-green-600 group-hover:text-white transition-all">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {lesson.title}
                    </h3>
                    <p className="text-sm text-slate-500">
                      Урок {lesson.id}
                    </p>
                  </div>

                  <a
                    href={`/courses/${lesson.file}`}
                    download
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <FileDown className="w-4 h-4" />
                    <span className="hidden sm:inline">Скачать PDF</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-slate-100 border border-slate-200 rounded-xl p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              💡 <strong>Совет:</strong> Проходите уроки последовательно. Каждый урок доступен для скачивания в формате PDF. После завершения модуля у вас будет полное понимание финансового анализа в недвижимости.
            </p>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
