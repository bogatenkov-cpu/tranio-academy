'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function AnalizChuvstvitelnostiBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={12}
      totalSteps={13}
      title="Что если всё пойдёт не так?"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/nalogi-bonn', title: 'Налоги' }}
      nextStep={{ href: '/course/module-2/verdikt-bonn', title: 'Вердикт' }}
    >
      <TextBlock>
        <p>
          Анализ чувствительности помогает понять, как изменится доходность проекта при
          изменении ключевых параметров. Это один из главных инструментов управления рисками.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Проведите анализ чувствительности по двум самым важным параметрам проекта. Постройте три сценария: консервативный, реалистичный и оптимистичный — с шагом 10%."
        answer="Запишите результаты в рабочей тетради."
      />
    </CourseLessonLayout>
  );
}
