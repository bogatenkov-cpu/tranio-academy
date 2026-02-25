'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  StoryText,
} from '@/components/course/CourseLessonLayout';

export default function ChtoTakoeDevelopmentPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={2}
      totalSteps={13}
      title="Что такое девелопмент"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/pismo-ot-partnera', title: 'Письмо от партнёра' }}
      nextStep={{ href: '/course/module-3/chto-delaem-aachen', title: 'Что делаем: апарт-отель' }}
    >
      <TextBlock title="Два вида девелопмента">
        <p>
          Девелопмент — это проекты, в которых инвестор создаёт новую недвижимость. 
          Есть два основных вида:
        </p>
        <ul>
          <li><strong>Строительство (Bauträger-Modell)</strong> — покупка земли и строительство на ней нового объекта</li>
          <li><strong>Девелопмент земли (Landentwicklung)</strong> — покупка земли, получение разрешений, подготовка участка и продажа подготовленной земли</li>
        </ul>
        <p>
          В этом кейсе мы будем рассматривать первый вариант — строительство нового объекта с нуля.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какие разрешения нужно получить, чтобы построить объект на земельном участке?"
        answer={
          <ul>
            <li>Вид использования (жильё, коммерция, смешанное)</li>
            <li>Площадь и высотность застройки</li>
            <li>Деление на юниты (отдельные единицы)</li>
          </ul>
        }
      />

      <TextBlock>
        <p>
          Девелопмент находится на пересечении трёх областей: понимания рынка, строительных норм и переговоров. 
          Успешный девелопер умеет находить участки с потенциалом, понимает, что на них можно построить с точки зрения 
          регулирования, и договаривается с властями, банками и подрядчиками о реализации проекта.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Подумайте: какую комбинацию юнитов на участке было бы наиболее выгодно построить?"
        answer="Запишите свой вариант."
      />
    </CourseLessonLayout>
  );
}
