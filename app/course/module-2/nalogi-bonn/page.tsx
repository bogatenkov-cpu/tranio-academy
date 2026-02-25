'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function NalogiBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={11}
      totalSteps={13}
      title="Налоги"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/finansirovanie-bonn', title: 'Финансирование: мезонин и equity' }}
      nextStep={{ href: '/course/module-2/analiz-chuvstvitelnosti-bonn', title: 'Что если всё пойдёт не так?' }}
    >
      <QuestionBlock
        question="Какие налоги нужно учитывать в этом проекте?"
        answer={
          <ul>
            <li>Налог при покупке (на переход права собственности)</li>
            <li>Налог на имущество</li>
            <li>Налог на арендный доход</li>
            <li>Налог на прирост капитала (при продаже)</li>
            <li>Налог на дивиденды</li>
          </ul>
        }
      />

      <QuestionBlock
        question="Какие ставки налогов?"
        answer={
          <div>
            <p><strong>Налог на арендный доход:</strong> 15,825% (корпоративный налог)</p>
            <p><strong>Налог на прирост капитала:</strong> 31% (корпоративный + промысловый)</p>
          </div>
        }
      />

      <QuestionBlock
        question="Из чего складывается налог на прирост капитала?"
        answer="Корпоративный налог (Körperschaftsteuer) + промысловый налог (Gewerbesteuer). Поскольку проект является активным бизнесом (спекуляция недвижимостью), применяются оба налога."
      />

      <QuestionBlock
        question="Какие расходы можно вычесть из налогооблагаемой базы?"
        answer={
          <ul>
            <li>Операционные расходы</li>
            <li>Налог на имущество</li>
            <li>Страховка</li>
            <li>Проценты по займу</li>
          </ul>
        }
      />

      <QuestionBlock
        question="Какая экономия от структуры займа при ставке 7%?"
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
