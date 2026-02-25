'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostProdazhiBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={8}
      totalSteps={13}
      title="Считаем: продажа"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/stoimost-arendy', title: 'Стоимость аренды' }}
      nextStep={{ href: '/course/module-2/otnosheniya-gp-lp', title: 'Отношения GP и LP' }}
    >
      <TextBlock>
        <p>
          Теперь, когда мы знаем арендный доход после ремонта, можем рассчитать цену продажи
          с помощью мультипликатора.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Рассчитайте цену продажи, используя мультипликатор 23."
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
