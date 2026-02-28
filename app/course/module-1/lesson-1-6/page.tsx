'use client';
import { CourseLessonLayout, TextBlock, QuestionBlock } from '@/components/course/CourseLessonLayout';

export default function Lesson16() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      stepNumber={7}
      totalSteps={12}
      title="Стоимость продажи"
      subtitle="Оценка прогнозируемой цены продажи"
      prevStep={{ href: '/course/module-1/lesson-1-5', title: '1.5 Стоимость ремонта' }}
      nextStep={{ href: '/course/module-1/lesson-1-7', title: '1.7 Отношения GP и LP' }}
    >
      <TextBlock>
        <p>И, наконец, третий показатель, который определяет доходность инвестиции — <strong>стоимость продажи объекта</strong>. Наша задача здесь — убедиться, что цена, по которой наш партнер планирует продать объект, соответствует рынку.</p>
        <p className="mt-3">Обычно в финансовые модели закладывают цену, по которой подобные объекты продаются в данный момент, без учета инфляции или других факторов, которые могут повлиять на изменение цены.</p>
      </TextBlock>

      <QuestionBlock
        question="Насколько оправдан прогноз Роберта, что дом удастся продать за 2 900 евро/м²?"
        answer="Оправдан, поскольку цены на рынке сейчас выше."
      />
    </CourseLessonLayout>
  );
}
