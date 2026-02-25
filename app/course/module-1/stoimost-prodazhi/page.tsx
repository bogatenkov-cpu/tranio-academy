'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostProdazhiPage() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      stepNumber={7}
      totalSteps={12}
      title="Считаем: продажа"
      subtitle="Кейс 1 · Флиппинг в Максхютте"
      prevStep={{ href: '/course/module-1/stoimost-remonta', title: 'Считаем: ремонт' }}
      nextStep={{ href: '/course/module-1/yuridicheskoe-oformlenie', title: 'Юридическое оформление' }}
    >
      <TextBlock>
        <p>
          И, наконец, третий показатель, который определяет доходность инвестиции – стоимость продажи объекта. Наша задача здесь – убедиться, что цена, по которой наш партнер планирует продать объект, соответствует рынку.
        </p>
        <p>
          Обычно в финансовые модели закладывают цену, по которой подобные объекты продаются в данный момент, без учета инфляции или других факторов, которые могут повлиять на изменение цены.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Насколько оправдан прогноз Роберта, что дом удастся продать за 2 900 евро/м²?"
        answer="Оправдан, поскольку цены на рынке сейчас выше."
      />
    </CourseLessonLayout>
  );
}
