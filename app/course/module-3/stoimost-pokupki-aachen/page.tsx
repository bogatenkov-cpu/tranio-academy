'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
  InfoBlock,
} from '@/components/course/CourseLessonLayout';

export default function StoimostPokupkiAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={6}
      totalSteps={13}
      title="Считаем: покупка участка"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/dokumenty-aachen', title: 'Документы и разрешения' }}
      nextStep={{ href: '/course/module-3/stoimost-stroitelstva', title: 'Стоимость строительства' }}
    >
      <TextBlock>
        <p>
          Стоимость земельного участка — первый крупный расход в девелопменте. 
          Обычно земля составляет менее 30% от общего бюджета проекта.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какова стоимость участка и цена за квадратный метр?"
        answer="940 000 € за участок, 486 €/м² (при площади 1 183 м²)."
      />

      <QuestionBlock
        question="Какой процент от общего бюджета составляет покупка участка?"
        hint="Общий бюджет проекта — 6,8 млн €."
        answer="Около 14% — это значительно меньше типичных 30%."
      />

      <QuestionBlock
        question="Почему стоимость участка значительно ниже 30% от бюджета?"
        answer="Потому что на участке нет разрешения на строительство. Земля без разрешения стоит дешевле — инвестор берёт на себя риск его получения."
      />

      <QuestionBlock
        question="Каковы дополнительные расходы на приобретение (Erwerbsnebenkosten)?"
        answer="148 000 € — это около 15% от стоимости участка."
      />

      <QuestionBlock
        question="Почему доп. расходы выше обычных?"
        answer="Потому что они включают не только стандартные расходы (налог на переход права собственности, нотариус, реестр), но и затраты на получение разрешений на строительство."
      />

      <InfoBlock title="На что обратить внимание при покупке земли">
        <ul>
          <li><strong>Вид использования</strong> — что разрешено строить на этом участке</li>
          <li><strong>Обременения</strong> — сервитуты, права прохода, ограничения</li>
          <li><strong>Соседи</strong> — кто живёт рядом, возможные конфликты</li>
          <li><strong>Пожарная безопасность</strong> — требования к подъездам, расстояниям</li>
          <li><strong>Разрешения</strong> — наличие или возможность получения Baugenehmigung</li>
          <li><strong>GRZ (Grundflächenzahl)</strong> — коэффициент застройки: какую долю участка можно застроить. Например, GRZ 0,4 означает, что застроить можно не более 40% площади участка.</li>
          <li><strong>GFZ (Geschossflächenzahl)</strong> — коэффициент плотности застройки: отношение общей площади всех этажей к площади участка. Например, GFZ 1,2 означает, что суммарная площадь всех этажей может быть до 120% от площади участка.</li>
        </ul>
      </InfoBlock>
    </CourseLessonLayout>
  );
}
