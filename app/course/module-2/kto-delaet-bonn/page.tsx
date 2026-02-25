'use client';
import {
  CourseLessonLayout,
  StoryText,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function KtoDelaetBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={3}
      totalSteps={13}
      title="Кто делает: Centro Hotel Group"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/chto-delaem-bonn', title: 'Что делаем: отель в Бонне' }}
      nextStep={{ href: '/course/module-2/dokumenty-bonn', title: 'Документы и регулирование' }}
    >
      <TextBlock title="GP и LP">
        <p>
          В проектах добавленной стоимости обычно есть два типа участников:
          <strong> генеральный партнёр (GP)</strong> — тот, кто управляет проектом, и
          <strong> ограниченный партнёр (LP)</strong> — тот, кто инвестирует деньги.
        </p>
        <p>
          GP отвечает за реализацию: ищет объект, ведёт переговоры, управляет ремонтом
          и продажей. LP вкладывает капитал и получает долю прибыли.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Кто GP в этом проекте?"
        answer="Centro Hotel Group — сеть отелей 3–4 звезды, штаб-квартира в Гамбурге."
      />

      <TextBlock title="Критерии доверия к GP">
        <p>Чтобы оценить надёжность генерального партнёра, обратите внимание на:</p>
        <ul>
          <li>Сколько лет компания на рынке</li>
          <li>Сколько проектов реализовано</li>
          <li>Какого типа проекты (похожи ли на ваш)</li>
          <li>Кто партнёры и контрагенты компании</li>
        </ul>
      </TextBlock>

      <TextBlock title="Хороший GP vs Плохой GP">
        <p>
          <strong>Хороший GP:</strong> имеет опыт в конкретном типе проектов, прозрачно
          показывает финансовую модель, имеет известных партнёров, готов вкладывать
          собственные деньги в проект.
        </p>
        <p>
          <strong>Плохой GP:</strong> нет подтверждённого опыта, непрозрачная финансовая
          модель, не вкладывает собственные средства, обещает нереалистично высокую доходность.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Можно ли доверять Centro Hotel Group? Почему?"
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
