'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostProdazhiAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={9}
      totalSteps={13}
      title="Считаем: продажа"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/stoimost-arendy-aachen', title: 'Стоимость аренды' }}
      nextStep={{ href: '/course/module-3/otnosheniya-gp-lp-aachen', title: 'Отношения GP и LP' }}
    >
      <TextBlock>
        <p>
          Цена продажи объекта рассчитывается через мультипликатор — отношение цены продажи к годовому 
          арендному доходу. Чем выше мультипликатор, тем дороже объект относительно его арендного дохода.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какой мультипликатор заложен в финансовую модель?"
        answer="20,5."
      />

      <QuestionBlock
        question="Реалистична ли цена продажи?"
        answer="Нет — стоимость аренды завышена (как мы выяснили на прошлом шаге). Если реальная аренда ниже, то при том же мультипликаторе цена продажи тоже будет ниже. А если покупатель применит рыночный мультипликатор к завышенной аренде — он переплатит."
      />

      <TextBlock>
        <p>
          При построении финансовых моделей важно использовать текущие рыночные цены, 
          а не прогнозные. Прогнозный рост цен — это бонус, но закладывать его в базовый сценарий 
          рискованно.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какой прогноз по ценам на недвижимость даёт Engel & Völkers для Ахена?"
        answer="Цены будут расти."
      />
    </CourseLessonLayout>
  );
}
