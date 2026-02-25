'use client';
import {
  CourseLessonLayout,
  TextBlock,
  QuestionBlock,
} from '@/components/course/CourseLessonLayout';

export default function OtnosheniyaGpLpPage() {
  return (
    <CourseLessonLayout
      moduleNumber={2}
      stepNumber={9}
      totalSteps={13}
      title="Отношения GP и LP"
      subtitle="Кейс 2 · Редевелопмент в Бонне"
      prevStep={{ href: '/course/module-2/stoimost-prodazhi-bonn', title: 'Считаем: продажа' }}
      nextStep={{ href: '/course/module-2/finansirovanie-bonn', title: 'Финансирование: мезонин и equity' }}
    >
      <QuestionBlock
        question="Зачем создавать юридическое лицо для проекта?"
        answer={
          <ul>
            <li>Ограничить ответственность участников</li>
            <li>Объединить партнёров в рамках одной структуры</li>
            <li>Снизить налоги</li>
          </ul>
        }
      />

      <TextBlock title="LLC (GmbH) — общество с ограниченной ответственностью">
        <p>Основные характеристики:</p>
        <ul>
          <li>Ограниченная ответственность — участники отвечают только вкладом в уставный капитал</li>
          <li>Совместная ответственность участников</li>
          <li>Прибыль распределяется пропорционально долям</li>
          <li>GP имеет решающий голос в управлении</li>
        </ul>
      </TextBlock>

      <TextBlock title="KG — коммандитное товарищество">
        <p>
          KG (Kommanditgesellschaft) — это партнёрство, в котором есть два типа участников:
        </p>
        <ul>
          <li><strong>Полные партнёры (GP)</strong> — управляют проектом и несут неограниченную ответственность</li>
          <li><strong>Ограниченные партнёры (LP)</strong> — вкладывают капитал и отвечают только в размере вклада</li>
        </ul>
        <p>
          Главное преимущество KG: на уровне товарищества не платится корпоративный налог —
          налог платят только участники при получении дохода.
        </p>
      </TextBlock>

      <QuestionBlock
        question="Почему не ИП или АО?"
        answer={
          <div>
            <p>
              <strong>ИП</strong> — не является юридическим лицом, не ограничивает ответственность
              и не позволяет объединить партнёров.
            </p>
            <p>
              <strong>АО (акционерное общество)</strong> — предназначено для неограниченного
              выпуска акций. Для небольшого проекта с несколькими партнёрами это избыточная
              и дорогая структура.
            </p>
          </div>
        }
      />
    </CourseLessonLayout>
  );
}
