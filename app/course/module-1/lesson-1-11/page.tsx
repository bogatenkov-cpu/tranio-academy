'use client';
import { CourseLessonLayout, TextBlock, QuestionBlock } from '@/components/course/CourseLessonLayout';

export default function Lesson111() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      stepNumber={12}
      totalSteps={12}
      title="Вердикт"
      subtitle="Принятие инвестиционного решения"
      prevStep={{ href: '/course/module-1/lesson-1-10', title: '1.10 Анализ чувствительности' }}
    >
      <QuestionBlock
        question="Что вы скажете Ане — стоит ли инвестировать в этот проект? Аргументируйте свой ответ и поясните, какие главные риски у этого проекта и почему вы верите или не верите, что они реализуются."
        answer={
          <div>
            <p className="mb-3">Это финальное задание модуля. Подготовьте аргументированный ответ, учитывая все аспекты, которые мы рассмотрели:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Локация</strong> — Бавария, сильный рынок, рядом Регенсбург</li>
              <li><strong>Партнер</strong> — Роберт, 5 лет опыта, покупает материалы дешевле</li>
              <li><strong>Документы</strong> — нужен второй кадастровый номер</li>
              <li><strong>Цена покупки</strong> — ниже рынка</li>
              <li><strong>Ремонт</strong> — расхождение сметы и первоначальных оценок</li>
              <li><strong>Цена продажи</strong> — оправдана рынком</li>
              <li><strong>Юридическое оформление</strong> — физлицо</li>
              <li><strong>Финансирование</strong> — возможно, но не гарантировано</li>
              <li><strong>Налоги</strong> — подоходный налог ~36%</li>
              <li><strong>Чувствительность</strong> — IRR от 15% до 45% в зависимости от цены продажи</li>
            </ul>
            <p className="mt-4 font-semibold">Запишите свое решение — вы закончили первый модуль!</p>
          </div>
        }
      />

      <TextBlock>
        <p className="text-center text-lg font-semibold text-green-700">
          Поздравляем! Вы завершили Модуль 1: Флиппинг в Максхютте.
        </p>
        <p className="text-center text-slate-500 mt-2">
          Переходите к Модулю 2, где мы рассмотрим проект редевелопмента в Афинах — более сложный и интересный кейс.
        </p>
      </TextBlock>
    </CourseLessonLayout>
  );
}
