'use client';
import {
  CourseLessonLayout,
  NarrativeBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function VerdiktBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={13}
      totalSteps={13}
      title="Вердикт"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/analiz-chuvstvitelnosti-bonn', title: 'Что если всё пойдёт не так?' }}
    >
      <NarrativeBlock>
        После проведения анализа чувствительности вам приходит письмо от Ани. Она спрашивает
        о вашем решении — готовы ли вы инвестировать в этот проект?
      </NarrativeBlock>

      <QuestionBlock
        question="Инвестируете или нет? Какие основные риски? Какой потенциал заработка? Подготовьте презентацию из 5 слайдов с аргументами."
        answer="Запишите свой вердикт. Это завершение второго кейса."
      />
    </CourseLessonLayout>
  );
}
