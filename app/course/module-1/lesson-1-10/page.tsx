'use client';
import { CourseLessonLayout, TextBlock, QuestionBlock } from '@/components/course/CourseLessonLayout';

export default function Lesson110() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      lessonNumber="1.10"
      title="Анализ чувствительности"
      subtitle="Проведите анализ чувствительности проекта"
      emoji="🧷"
      color="bg-slate-700"
      prevLesson={{ href: '/course/module-1/lesson-1-9', title: '1.9 Налоги' }}
      nextLesson={{ href: '/course/module-1/lesson-1-11', title: '1.11 Вердикт' }}
    >
      <TextBlock>
        <p>Чтобы перевести неопределенность, связанную с реализацией проекта, в цифры, инвесторы проводят <strong>анализ чувствительности</strong> проекта.</p>
        <p className="mt-3">Как это сделать: сначала необходимо выбрать исходные параметры, которые оказывают наибольшее влияние на финансовый результат проекта и являются самыми рискованными — по ним производится расчет чувствительности. Обычно в проектах добавленной стоимости это <strong>стоимость продажи</strong> и <strong>расходы на ремонт или строительство</strong>. Затем каждый из параметров последовательно изменяют на какой-то процент — и смотрят, как меняется финансовый результат всего проекта.</p>
      </TextBlock>

      <QuestionBlock
        question="Еще раз посмотрите на финансовую модель. Какую переменную использует Роберт, рассчитывая чувствительность проекта?"
        answer="Стоимость продажи."
      />

      <QuestionBlock
        question="Сколько заработает инвестор, если квартиры будут проданы по цене 2 800 евро/м²? Каким будет его IRR?"
        answer={
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-100 rounded-lg text-center">
                <div className="text-lg font-bold text-slate-900">28 226 €</div>
                <div className="text-xs text-slate-500">Прибыль</div>
              </div>
              <div className="p-3 bg-slate-100 rounded-lg text-center">
                <div className="text-lg font-bold text-slate-900">15,19%</div>
                <div className="text-xs text-slate-500">IRR</div>
              </div>
            </div>
          </div>
        }
      />

      <QuestionBlock
        question="Если за 3 300 евро/м²? Каким будет его IRR?"
        answer={
          <div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-100 rounded-lg text-center">
                <div className="text-lg font-bold text-green-800">79 720 €</div>
                <div className="text-xs text-green-600">Прибыль</div>
              </div>
              <div className="p-3 bg-green-100 rounded-lg text-center">
                <div className="text-lg font-bold text-green-800">45,18%</div>
                <div className="text-xs text-green-600">IRR</div>
              </div>
            </div>
          </div>
        }
      />

      <QuestionBlock
        question="А как изменится ROE инвестора до налогов, если банк не одобрит кредит?"
        answer="Рассчитайте в финансовой модели — сравните сценарий с кредитом и без."
      />
    </CourseLessonLayout>
  );
}
