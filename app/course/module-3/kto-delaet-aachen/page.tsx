'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  StoryText,
  StatGrid,
} from '@/components/course/CourseLessonLayout';

export default function KtoDelaetAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={4}
      totalSteps={13}
      title="Кто делает: Bonafide"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/chto-delaem-aachen', title: 'Что делаем: апарт-отель' }}
      nextStep={{ href: '/course/module-3/dokumenty-aachen', title: 'Документы и разрешения' }}
    >
      <TextBlock title="Bonafide Planungs- und Baugesellschaft mbH">
        <p>
          Bonafide — немецкая девелоперская компания с более чем 35-летней историей. 
          Компания занимается планированием и строительством жилой и коммерческой недвижимости.
        </p>
      </TextBlock>

      <StatGrid items={[
        { label: 'Лет на рынке', value: '35+' },
        { label: 'Офисы', value: '5' },
        { label: 'Сотрудники', value: '28' },
        { label: 'Проекты', value: '14' },
      ]} />

      <QuestionBlock
        question="Кто выступает генеральным партнёром (GP) в этом проекте?"
        answer="Bonafide Planungs- und Baugesellschaft mbH."
      />

      <QuestionBlock
        question="Можно ли доверять этому партнёру?"
        answer="Да — у компании более 35 лет опыта, 5 офисов, 28 сотрудников и 14 реализованных проектов. Это серьёзный, опытный партнёр."
      />

      <TextBlock title="Оператор: Living28">
        <p>
          Для управления апарт-отелем привлечён оператор Living28. Компания уже управляет 
          аналогичными объектами и имеет высокие рейтинги на площадках бронирования.
        </p>
      </TextBlock>

      <StatGrid items={[
        { label: 'Рейтинг Booking', value: '8,7', color: 'text-green-400' },
        { label: 'Отзывы', value: '300+' },
      ]} />

      <QuestionBlock
        question="Наличие заранее договорённого арендатора — это хорошо или плохо?"
        answer="Хорошо. Наличие оператора, который готов арендовать объект после его строительства, снижает риски проекта и упрощает продажу объекта инвестору — покупатель получает объект с готовым арендным потоком."
      />

      <QuestionBlock
        question="Кто выступает арендатором объекта?"
        answer="Living28 GmbH — оператор сервисных апартаментов."
      />
    </CourseLessonLayout>
  );
}
