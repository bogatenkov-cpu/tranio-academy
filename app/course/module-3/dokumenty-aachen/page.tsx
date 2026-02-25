'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  LinkCard,
} from '@/components/course/CourseLessonLayout';

export default function DokumentyAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={5}
      totalSteps={13}
      title="Документы и разрешения"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/kto-delaet-aachen', title: 'Кто делает: Bonafide' }}
      nextStep={{ href: '/course/module-3/stoimost-pokupki-aachen', title: 'Считаем: покупка участка' }}
    >
      <TextBlock title="Разрешение на строительство по §34 BauGB">
        <p>
          В Германии разрешение на строительство можно получить двумя путями: через Bebauungsplan 
          (план застройки, §30 BauGB) или через §34 BauGB — если плана застройки нет, но проект 
          соответствует характеру окружающей застройки.
        </p>
        <p>
          §34 позволяет строить, если новый объект вписывается в окружение по виду использования, 
          размерам, способу застройки и площади застройки. Это означает, что если соседние здания — 
          жилые дома определённой этажности, то новый объект тоже должен быть примерно таким же.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Почему девелопер считает, что получит разрешение на строительство?"
        answer="Потому что §34 BauGB позволяет строить, если проект соответствует характеру окружающей застройки. Девелопер провёл предварительные консультации с городом."
      />

      <QuestionBlock
        question="Какой документ нужно проверить, чтобы убедиться в возможности строительства?"
        answer="Карта зонирования Ахена (Flächennutzungsplan)."
      />

      <LinkCard
        href="https://geoportal.aachen.de/"
        title="Геопортал Ахена — карта зонирования"
        description="Интерактивная карта зонирования города"
        icon="map"
      />

      <QuestionBlock
        question="Какие виды деятельности запрещены в этой зоне?"
        answer="Букмекерские конторы, офисы, алкогольные магазины, бутики."
      />

      <QuestionBlock
        question="Каковы планы города по развитию этого района?"
        answer="Город делает ставку на жильё и решение проблемы смены поколений — это поддерживает жилое строительство в районе."
      />

      <LinkCard
        href="https://geoportal.aachen.de/"
        title="Генеральный план развития Ахена"
        description="Стратегия городского развития"
        icon="link"
      />

      <QuestionBlock
        question="Будет ли проблемой получить разрешение на строительство?"
        answer="Запишите своё мнение."
      />
    </CourseLessonLayout>
  );
}
