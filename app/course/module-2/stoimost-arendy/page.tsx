'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  LinkCard,
} from '@/components/course/CourseLessonLayout';

export default function StoimostArendyPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={7}
      totalSteps={13}
      title="Стоимость аренды"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/stoimost-remonta-bonn', title: 'Считаем: ремонт' }}
      nextStep={{ href: '/course/module-2/stoimost-prodazhi-bonn', title: 'Считаем: продажа' }}
    >
      <TextBlock title="P&L отеля">
        <p>
          Чтобы оценить арендный доход, нужно разобраться в P&L (отчёте о прибылях и убытках)
          отеля. Ключевые показатели:
        </p>
        <ul>
          <li><strong>ADR (Average Daily Rate)</strong> — средняя стоимость номера за ночь</li>
          <li><strong>Occupancy</strong> — загрузка отеля (% занятых номеров)</li>
          <li><strong>RevPAR</strong> — выручка на номер = ADR × Occupancy</li>
        </ul>
      </TextBlock>

      <TextBlock title="Формула стоимости">
        <p>
          <strong>Стоимость = NOI × (100 / Cap Rate)</strong>
        </p>
        <p>
          Чем выше арендный доход (NOI) и чем ниже Cap Rate, тем дороже стоит объект.
          После ремонта мы повышаем ADR — а значит растёт NOI и стоимость объекта.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какой текущий ADR у отеля?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Какой ADR планируется после ремонта?"
        answer="Запишите своё мнение."
      />

      <QuestionBlock
        question="Проверьте конкурентов на Booking.com — какие ADR у похожих отелей в Бонне?"
        answer="Запишите своё мнение."
      />

      <LinkCard
        href="https://www.booking.com"
        title="Booking.com"
        description="Проверьте цены конкурентов в Бонне"
        icon="link"
      />

      <QuestionBlock
        question="Является ли стоимость аренды адекватной рынку?"
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
