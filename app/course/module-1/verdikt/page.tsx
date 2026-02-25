'use client';
import {
  CourseLessonLayout,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function VerdiktPage() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      stepNumber={12}
      totalSteps={12}
      title="Вердикт"
      subtitle="Кейс 1 · Флиппинг в Максхютте"
      prevStep={{ href: '/course/module-1/chto-esli', title: 'Что если всё пойдёт не так?' }}
    >
      <QuestionBlock
        question="Что вы скажете Ане – стоит ли инвестировать в этот проект? Аргументируйте свой ответ и поясните, какие главные риски у этого проекта и почему вы верите или не верите, что они реализуются."
        answer="Запишите свой вердикт. Это завершение первого кейса."
      />
    </CourseLessonLayout>
  );
}
