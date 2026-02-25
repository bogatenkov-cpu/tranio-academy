'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostRemontaBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={6}
      totalSteps={13}
      title="Считаем: ремонт"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/stoimost-pokupki-bonn', title: 'Считаем: покупка' }}
      nextStep={{ href: '/course/module-2/stoimost-arendy', title: 'Стоимость аренды' }}
    >
      <QuestionBlock
        question="Сколько стоит ремонт отеля?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Сколько стоит ремонт в пересчёте на квадратный метр?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Сколько времени займёт ремонт?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Как защититься от риска непредвиденных расходов на ремонт?"
        answer="Заложить 10% contingency — резерв на непредвиденные расходы. Это стандартная практика в проектах добавленной стоимости."
      />
    </CourseLessonLayout>
  );
}
