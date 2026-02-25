'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function AnalizIVerdiktPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={13}
      totalSteps={13}
      title="Анализ и вердикт"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/nalogi-aachen', title: 'Налоги и холдинги' }}
    >
      <TextBlock title="Анализ чувствительности">
        <p>
          Финальный шаг перед принятием решения — анализ чувствительности. 
          Нужно понять, как меняется доходность проекта при изменении ключевых параметров: 
          стоимости строительства и мультипликатора продажи.
        </p>
        <p>
          Постройте таблицу, где по одной оси — отклонение стоимости строительства 
          (−10%, 0%, +10%, +20%), а по другой — мультипликатор продажи 
          (18, 19, 20, 20.5, 21, 22). Рассчитайте прибыль и IRR для каждой комбинации.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Проведите анализ чувствительности: как меняется доходность проекта при изменении стоимости строительства и мультипликатора продажи?"
        answer="Запишите результаты."
      />

      <QuestionBlock
        question="Стоит ли инвестировать в этот проект? Составьте итоговую презентацию с аргументами за и против."
        answer="Запишите свой вердикт. Это завершение курса."
      />
    </CourseLessonLayout>
  );
}
