'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function OtnosheniyaGpLpAachenPage() {
  return (
    <CourseLessonLayout
      moduleNumber={3}
      stepNumber={10}
      totalSteps={13}
      title="Отношения GP и LP"
      subtitle="Кейс 3 · Девелопмент в Ахене"
      prevStep={{ href: '/course/module-3/stoimost-prodazhi-aachen', title: 'Считаем: продажа' }}
      nextStep={{ href: '/course/module-3/finansirovanie-aachen', title: 'Вотерфол и хёрдлы' }}
    >
      <TextBlock title="Формы оформления недвижимости">
        <p>
          При инвестировании в недвижимость важно выбрать правильную юридическую форму. 
          Каждая из них имеет свои преимущества и ограничения с точки зрения управления, 
          ответственности и налогообложения.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Какие варианты оформления недвижимости существуют?"
        answer={
          <ul>
            <li><strong>Физическое лицо (Einzelperson)</strong> — простое оформление, но полная личная ответственность и высокие налоги при активном бизнесе</li>
            <li><strong>ООО (GmbH)</strong> — ограниченная ответственность, корпоративный налог, но дополнительные расходы на администрирование</li>
            <li><strong>Товарищество на вере (KG / GmbH & Co. KG)</strong> — гибкая структура, где GP управляет, а LP — пассивные инвесторы с ограниченной ответственностью</li>
          </ul>
        }
      />

      <QuestionBlock
        question="Какие два главных вопроса нужно решить при выборе структуры?"
        answer="Как управлять проектом (кто принимает решения) и как делить прибыль между участниками."
      />

      <TextBlock title="GP и LP">
        <p>
          В структуре товарищества есть два типа партнёров:
        </p>
        <ul>
          <li><strong>GP (General Partner)</strong> — генеральный партнёр, «водитель». Управляет проектом, принимает операционные решения, несёт неограниченную ответственность.</li>
          <li><strong>LP (Limited Partner)</strong> — ограниченный партнёр, «пассажир». Вносит капитал, получает долю прибыли, но не участвует в управлении. Ответственность ограничена размером вклада.</li>
        </ul>
        <p>
          Условия распределения прибыли, права и обязанности сторон фиксируются в Term Sheet — 
          документе, который описывает ключевые условия сделки до подписания полноценного договора.
        </p>
      </TextBlock>
    </CourseLessonLayout>
  );
}
