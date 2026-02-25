'use client';
import {
  CourseLessonLayout,
  StoryText,
  TextBlock,
  MessageBlock,
  LinkCard,
} from '@/components/course/CourseLessonLayout';

export default function PismoOtPartneraPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={1}
      totalSteps={13}
      title="Письмо от партнёра"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      nextStep={{ href: '/course/module-3/chto-takoe-development', title: 'Что такое девелопмент' }}
    >
      <StoryText>
        <p>
          Вам приходит письмо от Александра Витача, партнёра компании Bonafide Planungs- und Baugesellschaft mbH. 
          Он предлагает участие в проекте строительства апарт-отеля (boarding house) в Ахене.
        </p>
      </StoryText>

      <MessageBlock from="Alexander Wietasch">
        <p>Добрый день,</p>
        <p>
          Мы — компания Bonafide Planungs- und Baugesellschaft mbH, девелоперская компания с более чем 35-летним опытом 
          в строительстве и управлении недвижимостью.
        </p>
        <p>
          Предлагаем вам участие в проекте строительства boarding house (апарт-отеля) по адресу 
          Trierer Straße 289, Aachen. Мы ищем мезонинное финансирование в размере 2,1 млн евро 
          под 10% годовых сроком на 2 года.
        </p>
        <p>
          Детали проекта — в прикреплённом файле.
        </p>
        <p>С уважением,<br />Alexander Wietasch<br />Bonafide Planungs- und Baugesellschaft mbH</p>
      </MessageBlock>

      <LinkCard
        href="https://drive.google.com/file/d/1AEm6BOGlqlJJEZwd7ff3KrrPWPYv3Agx/view"
        title="Прикреплённый файл: детали проекта"
        icon="link"
      />

      <TextBlock title="План анализа">
        <p>Как и в предыдущих кейсах, нам нужно ответить на ключевые вопросы:</p>
        <ol>
          <li>Что мы делаем и где?</li>
          <li>Кто наш партнёр?</li>
          <li>Какие документы и разрешения нужны?</li>
          <li>Сколько стоит покупка участка?</li>
          <li>Сколько стоит строительство?</li>
          <li>Сколько будет стоить аренда?</li>
          <li>Сколько можно получить при продаже?</li>
          <li>Как устроены отношения GP и LP?</li>
          <li>Как устроено финансирование?</li>
          <li>Какие налоги?</li>
          <li>Итоговый анализ и вердикт</li>
        </ol>
      </TextBlock>
    </CourseLessonLayout>
  );
}
