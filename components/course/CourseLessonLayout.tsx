'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ChevronDown, Lightbulb, HelpCircle, Sparkles, ArrowRight, ExternalLink, MapPin } from 'lucide-react';

interface CourseLessonLayoutProps {
  moduleNumber: number;
  stepNumber: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  prevStep?: { href: string; title: string };
  nextStep?: { href: string; title: string };
}

export function CourseLessonLayout({
  moduleNumber,
  stepNumber,
  totalSteps,
  title,
  subtitle,
  children,
  prevStep,
  nextStep,
}: CourseLessonLayoutProps) {
  const progress = (stepNumber / totalSteps) * 100;

  return (
    <div className="bg-slate-950 min-h-screen flex flex-col font-sans antialiased text-slate-200">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href={`/course/module-${moduleNumber}`} className="p-1.5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-white">
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xs text-slate-500 font-medium">Кейс {moduleNumber}</span>
                <span className="text-xs text-slate-600 mx-1.5">•</span>
                <span className="text-xs text-slate-400">{stepNumber} / {totalSteps}</span>
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="w-24 sm:w-32 h-1 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      {/* Title section */}
      <div className="pt-20 sm:pt-24 pb-6 sm:pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {subtitle && <p className="text-xs sm:text-sm text-slate-500 font-medium mb-1">{subtitle}</p>}
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <main className="flex-grow px-4 sm:px-6 pb-8">
        <div className="max-w-3xl mx-auto space-y-5">
          {children}
        </div>
      </main>

      {/* Navigation */}
      <div className="border-t border-white/5 px-4 sm:px-6 py-4">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          {prevStep ? (
            <Link href={prevStep.href} className="flex items-center gap-2 text-slate-500 hover:text-white text-sm font-medium transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevStep.title}</span>
              <span className="sm:hidden">Назад</span>
            </Link>
          ) : <div />}
          {nextStep ? (
            <Link href={nextStep.href} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              <span className="hidden sm:inline">{nextStep.title}</span>
              <span className="sm:hidden">Далее</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link href={`/course/module-${moduleNumber}`} className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
              Завершить кейс
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---- Content blocks ---- */

export function StoryText({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-slate-300 leading-relaxed text-sm sm:text-base">
      {children}
    </div>
  );
}

export function TextBlock({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-6">
      {title && <h2 className="text-base sm:text-lg font-bold text-white mb-3">{title}</h2>}
      <div className="text-slate-300 leading-relaxed text-sm sm:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mt-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_ol]:mt-2 [&_p]:mt-2 first:[&_p]:mt-0 [&_strong]:text-white [&_strong]:font-semibold">
        {children}
      </div>
    </div>
  );
}

export function QuestionBlock({ question, hint, answer }: { question: string; hint?: string; answer: string | React.ReactNode }) {
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="border border-blue-500/20 rounded-xl overflow-hidden">
      {/* Question */}
      <div className="p-4 sm:p-5 bg-blue-500/[0.05]">
        <div className="flex gap-3">
          <div className="shrink-0 mt-0.5">
            <HelpCircle className="w-5 h-5 text-blue-400" />
          </div>
          <p className="text-white font-medium text-sm sm:text-base leading-relaxed">{question}</p>
        </div>
      </div>

      {/* Hint */}
      {hint && (
        <div className="border-t border-white/5">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full px-4 sm:px-5 py-3 flex items-center justify-between text-sm text-amber-400/70 hover:text-amber-400 font-medium transition-colors"
          >
            <span className="flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              Подсказка
            </span>
            <ChevronDown className={`w-4 h-4 transition-transform ${showHint ? 'rotate-180' : ''}`} />
          </button>
          {showHint && (
            <div className="px-4 sm:px-5 pb-4 text-sm text-amber-300/80 leading-relaxed">
              {hint}
            </div>
          )}
        </div>
      )}

      {/* Answer */}
      <div className="border-t border-white/5">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="w-full px-4 sm:px-5 py-3 flex items-center justify-between text-sm text-green-400/70 hover:text-green-400 font-medium transition-colors"
        >
          <span className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Показать ответ
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showAnswer ? 'rotate-180' : ''}`} />
        </button>
        {showAnswer && (
          <div className="px-4 sm:px-5 pb-4 text-sm text-green-300/80 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1 [&_p]:mt-2 first:[&_p]:mt-0 [&_strong]:text-green-200 [&_li]:text-green-300/80">
            {typeof answer === 'string' ? <p>{answer}</p> : answer}
          </div>
        )}
      </div>
    </div>
  );
}

export function NarrativeBlock({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-indigo-500/40 pl-4 sm:pl-5 py-1">
      <div className="text-slate-400 leading-relaxed text-sm sm:text-base italic">
        {children}
      </div>
    </div>
  );
}

export function MessageBlock({ from, children }: { from: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-sm font-bold">
          {from[0]}
        </div>
        <span className="font-semibold text-white text-sm">{from}</span>
        <span className="text-xs text-green-500/50 font-medium">WhatsApp</span>
      </div>
      <div className="bg-green-500/[0.05] border border-green-500/10 rounded-xl p-3 sm:p-4 text-sm text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function InfoBlock({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-6">
      {title && <h2 className="text-base sm:text-lg font-bold text-white mb-3">{title}</h2>}
      <div className="text-slate-300 leading-relaxed text-sm sm:text-base [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-1.5 [&_p]:mt-2 first:[&_p]:mt-0 [&_strong]:text-white">
        {children}
      </div>
    </div>
  );
}

export function LinkCard({ href, title, description, icon }: { href: string; title: string; description?: string; icon?: 'map' | 'link' }) {
  const IconComponent = icon === 'map' ? MapPin : ExternalLink;
  const colors = icon === 'map'
    ? 'border-emerald-500/20 bg-emerald-500/[0.05] hover:bg-emerald-500/[0.1]'
    : 'border-blue-500/20 bg-blue-500/[0.05] hover:bg-blue-500/[0.1]';
  const iconColor = icon === 'map' ? 'text-emerald-400' : 'text-blue-400';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border ${colors} transition-colors group`}
    >
      <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 ${iconColor}`}>
        <IconComponent className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">{title}</div>
        {description && <div className="text-xs text-slate-500 mt-0.5 truncate">{description}</div>}
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
    </a>
  );
}

export function ImageBlock({ src, alt, caption }: { src: string; alt?: string; caption?: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/5">
      <img src={src} alt={alt || ''} className="w-full" />
      {caption && (
        <div className="px-4 py-2.5 bg-white/[0.03] text-xs text-slate-500 text-center">
          {caption}
        </div>
      )}
    </div>
  );
}

export function StatGrid({ items }: { items: { label: string; value: string; color?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-3 sm:p-4 text-center">
          <div className={`text-lg sm:text-xl font-bold ${item.color || 'text-white'}`}>{item.value}</div>
          <div className="text-xs text-slate-500 mt-0.5">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
