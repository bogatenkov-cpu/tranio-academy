'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  MessageBlock,
  LinkCard,
  StatGrid,
  StoryText,
  InfoBlock,
} from '@/components/course/CourseLessonLayout';

export default function ChtoDelaemAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={3}
      totalSteps={13}
      title="Что делаем: апарт-отель в Ахене"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/chto-takoe-development', title: 'Что такое девелопмент' }}
      nextStep={{ href: '/course/module-3/kto-delaet-aachen', title: 'Кто делает: Bonafide' }}
    >
      <TextBlock title="Сервисные апартаменты">
        <p>
          Проект представляет собой строительство boarding house — сервисных апартаментов (апарт-отеля). 
          Это формат между гостиницей и обычной арендной квартирой: гости живут в полноценных квартирах 
          с кухней, но получают гостиничный сервис — уборку, регистрацию, обслуживание.
        </p>
        <p>
          Такой формат востребован бизнес-туристами и теми, кто приезжает на средний срок (от нескольких 
          дней до нескольких месяцев).
        </p>
      </TextBlock>

      <TextBlock title="Ахен: макролокация">
        <p>Ахен — город на западе Германии, у границ с Бельгией и Нидерландами.</p>
      </TextBlock>

      <StatGrid items={[
        { label: 'Население', value: '249 000' },
        { label: 'Возраст 15–45 лет', value: '40%' },
        { label: 'Студенты', value: '20%' },
        { label: 'Студенты RWTH', value: '45 000' },
        { label: 'Безработица', value: '8,2%' },
        { label: 'Туристы/год', value: '15 млн' },
      ]} />

      <TextBlock>
        <p>
          RWTH Aachen University — один из ведущих технических университетов Европы с 45 000 студентов. 
          Более 20% населения города — студенты. 40% жителей — в возрасте от 15 до 45 лет.
        </p>
        <p>
          Город привлекает как бизнес-туристов (международные компании, научные центры), 
          так и обычных путешественников. Ежегодно — 15 млн посетителей и 1,9 млн ночёвок.
        </p>
      </TextBlock>

      <LinkCard
        href="https://www.citypopulation.de/en/germany/nordrheinwestfalen/st%C3%adteregion_aachen/05334002__aachen/"
        title="Citypopulation.de — Aachen"
        description="Статистика населения Ахена"
        icon="link"
      />
      <LinkCard
        href="https://www.arbeitsagentur.de/"
        title="Arbeitsagentur.de"
        description="Данные по безработице в регионе"
        icon="link"
      />

      <TextBlock title="Микролокация: Trierer Straße 289">
        <p>
          Адрес объекта — Trierer Straße 289, район Forst. 1 минута до автобусной остановки, 
          20 минут до центра города. Участок площадью 1 183 м².
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какие вопросы вы бы задали партнёру на этом этапе?"
        answer="Нужно запросить документы по проекту и финансовую модель."
      />

      <MessageBlock from="Alexander Wietasch">
        <p>
          Спасибо за интерес к проекту. Отвечаю на ваши вопросы:
        </p>
        <p>
          Разрешение на строительство: мы планируем получить его по §34 BauGB — это параграф, 
          который разрешает застройку, если она соответствует характеру окружающей застройки. 
          Мы уже провели предварительные консультации с городом.
        </p>
        <p>
          Наш собственный капитал в проекте — 450 000 €. Финансовую модель прикрепляю.
        </p>
      </MessageBlock>

      <QuestionBlock
        question="Найдите в финансовой модели ключевые цифры проекта: бюджет, площадь участка, сроки, стоимость покупки, стоимость строительства, арендный доход, цену продажи, прибыль, мультипликатор, cap rate."
        answer={
          <ul>
            <li><strong>Общий бюджет:</strong> 6,8 млн €</li>
            <li><strong>Площадь участка:</strong> 1 183 м²</li>
            <li><strong>Срок проекта:</strong> 16 месяцев</li>
            <li><strong>Участок + доп. затраты:</strong> 1,1 млн €</li>
            <li><strong>Строительство:</strong> 4,7 млн €</li>
            <li><strong>Арендный доход:</strong> 352 000 €/год</li>
            <li><strong>Цена продажи:</strong> 7,2 млн €</li>
            <li><strong>Прибыль:</strong> 1,3 млн €</li>
            <li><strong>Мультипликатор:</strong> 20,5</li>
            <li><strong>Cap rate:</strong> 4,9%</li>
          </ul>
        }
      />

      <QuestionBlock
        question="Какие основные риски вы видите в этом проекте?"
        answer={
          <ul>
            <li>Риск неполучения разрешения на строительство</li>
            <li>Превышение сметы строительства</li>
            <li>Затягивание сроков строительства</li>
            <li>Невозможность сдать объект в аренду по запланированным ставкам</li>
            <li>Невозможность продать по запланированной цене</li>
            <li>Банкротство генерального подрядчика или оператора</li>
          </ul>
        }
      />
    </CourseLessonLayout>
  );
}
