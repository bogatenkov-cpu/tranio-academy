'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostPokupkiBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={5}
      totalSteps={13}
      title="Считаем: покупка"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/dokumenty-bonn', title: 'Документы и регулирование' }}
      nextStep={{ href: '/course/module-2/stoimost-remonta-bonn', title: 'Считаем: ремонт' }}
    >
      <QuestionBlock
        question="В чём потенциал роста стоимости этого объекта?"
        answer="В качестве. Это уставший отель — после ремонта можно повысить стоимость номеров и, как следствие, арендный доход."
      />

      <TextBlock title="Метод мультипликатора доходности">
        <p>
          Для оценки стоимости арендной недвижимости используется метод мультипликатора
          доходности (Yield Multiple):
        </p>
        <p>
          <strong>Мультипликатор = Стоимость / NOI = 100 / Cap Rate</strong>
        </p>
        <p>
          Например, если Cap Rate = 5%, то мультипликатор = 100 / 5 = 20.
          Это значит, что стоимость объекта равна 20 годовым арендным доходам.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какой текущий арендный доход у отеля?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Какая текущая доходность (Cap Rate) у отеля?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Какой мультипликатор у отеля?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Цена покупки выше или ниже рыночной?"
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
