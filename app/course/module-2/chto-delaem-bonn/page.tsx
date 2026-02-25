'use client';
import {
  CourseLessonLayout,
  StoryText,
  TextBlock,
  QuestionBlock,
  NarrativeBlock,
  InfoBlock,
  StatGrid,
  LinkCard,
} from '@/components/course/CourseLessonLayout';

export default function ChtoDelaemBonnPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={2}
      totalSteps={13}
      title="Что делаем: отель в Бонне"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/chto-takoe-redevelopment', title: 'Что такое редевелопмент' }}
      nextStep={{ href: '/course/module-2/kto-delaet-bonn', title: 'Кто делает: Centro Hotel Group' }}
    >
      <QuestionBlock
        question="Что предлагает сделать партнёр — в одном предложении?"
        answer="Купить отель, сдать оператору, сделать ремонт, повысить стоимость номеров, рефинансировать, продать дороже."
      />

      <TextBlock title="Анализ макролокации: Бонн">
        <p>
          Чтобы понять, удастся ли продать отель по рыночной цене после ремонта, нужно разобраться
          в экономике города. Бонн — бывшая столица ФРГ — сохраняет сильные экономические позиции.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Почему получится продать отель по рыночной цене?"
        hint="Посмотрите на экономические показатели города: ВВП, население, крупные работодатели и туризм."
        answer={
          <div>
            <p><strong>Экономика Бонна:</strong></p>
            <ul>
              <li>Население — 334 тыс. человек</li>
              <li>Более 20 офисов ООН расположены в Бонне</li>
              <li>Университет Бонна — University of Excellence</li>
              <li>Штаб-квартиры Deutsche Post и Deutsche Telekom</li>
              <li>Высокий ВВП на душу населения</li>
            </ul>
            <p><strong>Туризм:</strong></p>
            <ul>
              <li>1,8 млн ночёвок в 2019 году</li>
              <li>Дом-музей Бетховена</li>
              <li>Фабрика Haribo</li>
            </ul>
            <p>
              Сильная экономика + развитый туризм = устойчивый спрос на гостиничную недвижимость.
              Это значит, что после ремонта отель можно будет продать по рыночной цене.
            </p>
          </div>
        }
      />

      <StatGrid items={[
        { label: 'Население', value: '334 тыс.', color: 'text-blue-400' },
        { label: 'Офисы ООН', value: '20+', color: 'text-green-400' },
        { label: 'Ночёвок (2019)', value: '1,8 млн', color: 'text-amber-400' },
      ]} />

      <TextBlock title="Микролокация">
        <p>
          Отель расположен в районе Бад-Годесберг — респектабельном пригороде Бонна.
        </p>
        <ul>
          <li>10 минут от замка Годесберг</li>
          <li>5 минут до парка и железнодорожной станции</li>
          <li>20 минут до центра Бонна</li>
        </ul>
      </TextBlock>

      <NarrativeBlock>
        После изучения локации Лёша просит Ганса, финансового аналитика, подготовить финансовую
        модель проекта.
      </NarrativeBlock>

      <QuestionBlock
        question="Изучите финансовую модель и выпишите ключевые цифры проекта."
        answer={
          <div>
            <p>Ключевые параметры проекта:</p>
            <ul>
              <li><strong>Стоимость покупки:</strong> 2 902 530 €</li>
              <li><strong>Срок проекта:</strong> 30 месяцев</li>
              <li><strong>Аренда:</strong> 520 240 € в год</li>
              <li><strong>Мультипликатор:</strong> 18,2</li>
              <li><strong>Цена продажи:</strong> 4 464 000 €</li>
            </ul>
          </div>
        }
      />

      <StatGrid items={[
        { label: 'Стоимость покупки', value: '2,9 млн €', color: 'text-blue-400' },
        { label: 'Срок проекта', value: '30 мес.', color: 'text-amber-400' },
        { label: 'Аренда в год', value: '520 240 €', color: 'text-green-400' },
        { label: 'Мультипликатор', value: '18,2', color: 'text-purple-400' },
        { label: 'Цена продажи', value: '4,46 млн €', color: 'text-emerald-400' },
      ]} />
    </CourseLessonLayout>
  );
}
