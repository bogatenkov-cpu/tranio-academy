'use client';
import Link from 'next/link';
import { ArrowLeft, BookOpen, FileText, BarChart3 } from 'lucide-react';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function CoursePage() {
  const modules = [
    {
      id: 1,
      title: 'Модуль 1: Основы инвестирования',
      description: 'Фундаментальные знания о зарубежной недвижимости',
      lessons: 12,
      duration: '2-3 часа',
      icon: BookOpen,
      color: 'blue',
      path: '/course/module-1'
    },
    {
      id: 2,
      title: 'Модуль 2: Практические аспекты',
      description: 'Практика инвестирования и управления недвижимостью',
      lessons: 13,
      duration: '3-4 часа',
      icon: FileText,
      color: 'purple',
      path: '/course/module-2'
    },
    {
      id: 3,
      title: 'Модуль 3: Финансовый анализ',
      description: 'Анализ инвестиционных проектов и оценка рисков',
      lessons: 12,
      duration: '2-3 часа',
      icon: BarChart3,
      color: 'green',
      path: '/course/module-3'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-200',
        hover: 'hover:border-blue-300'
      },
      purple: {
        bg: 'bg-purple-50',
        text: 'text-purple-600',
        border: 'border-purple-200',
        hover: 'hover:border-purple-300'
      },
      green: {
        bg: 'bg-green-50',
        text: 'text-green-600',
        border: 'border-green-200',
        hover: 'hover:border-green-300'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-6">
            <Link 
              href="/countries"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад к главной
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              Курс "Зарубежная недвижимость"
            </h1>
            <p className="text-slate-600 mt-2">
              Полный курс по инвестированию в недвижимость за рубежом
            </p>
          </div>
        </header>

        {/* Course Stats */}
        <div className="bg-white border-b border-slate-200">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">37</div>
                <div className="text-slate-600 mt-1">Уроков</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">8-10</div>
                <div className="text-slate-600 mt-1">Часов обучения</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">3</div>
                <div className="text-slate-600 mt-1">Модуля</div>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-6">
            {modules.map((module) => {
              const colors = getColorClasses(module.color);
              const Icon = module.icon;
              
              return (
                <Link
                  key={module.id}
                  href={module.path}
                  className={`block bg-white border-2 ${colors.border} ${colors.hover} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`${colors.bg} ${colors.text} w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {module.title}
                      </h2>
                      <p className="text-slate-600 mb-4">
                        {module.description}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-slate-500">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{module.lessons} уроков</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{module.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Info */}
          <div className="max-w-4xl mx-auto mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              📚 О курсе
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Этот курс охватывает все аспекты инвестирования в зарубежную недвижимость: от базовых понятий до сложного финансового анализа. Каждый урок содержит практические материалы в формате PDF.
            </p>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
