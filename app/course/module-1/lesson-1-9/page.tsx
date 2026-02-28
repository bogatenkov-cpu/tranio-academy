'use client';
import { CourseLessonLayout, TextBlock, QuestionBlock, InfoBlock } from '@/components/course/CourseLessonLayout';

export default function Lesson19() {
  return (
    <CourseLessonLayout
      moduleNumber={1}
      stepNumber={10}
      totalSteps={12}
      title="Налоги"
      subtitle="Налоговое структурирование проектов добавленной стоимости"
      prevStep={{ href: '/course/module-1/lesson-1-8', title: '1.8 Финансирование' }}
      nextStep={{ href: '/course/module-1/lesson-1-10', title: '1.10 Анализ чувствительности' }}
    >
      <TextBlock>
        <p>В проектах добавленной стоимости вопрос налогового структурирования стоит острее: прибыль выше — а значит и выше налоги.</p>
      </TextBlock>

      <QuestionBlock
        question="Вспомните, какие налоги, связанные с недвижимостью, существуют."
        answer={
          <div>
            <p className="font-semibold mb-2">При покупке:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>налог на переход права собственности</li>
              <li>налог на добавленную стоимость (НДС)</li>
              <li>гербовый сбор</li>
            </ul>
            <p className="font-semibold mb-2">При владении:</p>
            <ul className="list-disc pl-5 space-y-1 mb-3">
              <li>налог на имущество</li>
              <li>налог на богатство</li>
              <li>налог на доход от аренды</li>
            </ul>
            <p className="font-semibold mb-2">При отчуждении:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>налог на дивиденды</li>
              <li>налог на прирост капитала</li>
              <li>налог на наследство или дарение</li>
            </ul>
          </div>
        }
      />

      <QuestionBlock
        question="Какие два типа налогов из вышеперечисленных становятся более важными в проектах добавленной стоимости, чем в аренде?"
        answer="В отличие от аренды, на первое место вместо налога на аренду выходит налог на прирост капитала. Также актуальнее становится налог на дивиденды, поскольку в проектах добавленной стоимости почти всегда участвуют юридические лица."
      />

      <QuestionBlock
        question="Какие налоги нужно будет заплатить в этом кейсе?"
        answer="Налог на переход права собственности и налог на прирост капитала."
      />

      <InfoBlock title="Налог на переход права собственности">
        <p className="mb-4">Налог на переход права собственности работает по тем же правилам, что и в аренде.</p>
        <QuestionBlock
          question="Сколько составит налог на переход права собственности в процентах в этом кейсе?"
          answer="3,5%"
        />
        <div className="mt-4">
          <QuestionBlock
            question="Как гипотетически можно было бы избежать этого налога?"
            hint="Посмотрите материал по налогам на недвижимость в Германии"
            answer="Если бы это был не asset deal, а share deal, то есть недвижимость была оформлена на юрлицо, и мы бы покупали акции этого юрлица."
          />
        </div>
      </InfoBlock>

      <InfoBlock title="Налог на прирост капитала">
        <p className="mb-3">Налог на прирост капитала — это обобщающее название для разных налогов, которые нужно платить, когда продаешь недвижимость по цене выше, чем купил.</p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-4">
          <h3 className="font-bold text-slate-900 mb-3">Как в Германии</h3>

          <div className="space-y-3">
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
              <p className="font-semibold text-blue-900 mb-1">Для физических лиц</p>
              <p className="text-sm text-blue-800">Налог соответствует подоходному налогу: прогрессивная ставка от <strong>14,8%</strong> (при доходе от 9 408 евро) до <strong>47,5%</strong> (от 57 051 евро).</p>
              <p className="text-sm text-blue-800 mt-2">Физлицо освобождается от налога, если владеет объектом более 10 лет или использует его в личных целях в течение 3 лет перед продажей.</p>
            </div>

            <div className="p-3 bg-green-50 border border-green-100 rounded-lg">
              <p className="font-semibold text-green-900 mb-1">Для юридических лиц</p>
              <p className="text-sm text-green-800">Налог соответствует корпоративному налогу — плоская ставка <strong>15,825%</strong>.</p>
              <p className="text-sm text-green-800 mt-2">Если бизнес <strong>активный</strong> (как в проектах добавленной стоимости), к корпоративному налогу добавляется промысловый (<strong>14–17%</strong>).</p>
            </div>
          </div>
        </div>

        <p className="mb-4 text-sm text-slate-600">Если компания продала более 3 объектов за последние 5 лет — бизнес считается активным.</p>

        <QuestionBlock
          question="Какому налогу будет соответствовать налог на прирост капитала в вашем случае?"
          answer="Подоходному налогу."
        />

        <div className="mt-4">
          <QuestionBlock
            question="Тогда сколько составит налог на прирост капитала в этом кейсе?"
            answer="36,31%"
          />
        </div>

        <div className="mt-4">
          <QuestionBlock
            question="Было бы выгодным открытие юридического лица в вашем случае? Его оформление стоит 5 тыс. евро."
            answer="Подсчитайте и сравните оба варианта в финансовой модели."
          />
        </div>
      </InfoBlock>

      <InfoBlock title="Налоговые вычеты">
        <p className="mb-3">У владельцев недвижимости есть разные варианты, как законно уменьшить размер налогов.</p>

        <div className="grid sm:grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="font-semibold text-sm mb-2">Вычеты из налога на доход от аренды:</p>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• налог на имущество</li>
              <li>• амортизация объекта</li>
              <li>• коммунальные платежи</li>
              <li>• плата управляющей компании</li>
              <li>• проценты по займу</li>
              <li>• ремонт, страхование</li>
            </ul>
          </div>
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
            <p className="font-semibold text-sm mb-2">Вычеты из налога на прирост капитала:</p>
            <ul className="text-xs text-slate-600 space-y-1">
              <li>• госпошлина</li>
              <li>• налог на переход права собственности</li>
              <li>• проценты по займу</li>
              <li>• комиссия банка</li>
              <li>• комиссия брокера</li>
            </ul>
          </div>
        </div>

        <QuestionBlock
          question="Какие расходы мы можем использовать, чтобы уменьшить налогооблагаемую базу в нашем случае?"
          answer={
            <ul className="list-disc pl-5 space-y-1">
              <li>комиссию брокера</li>
              <li>комиссию банка</li>
              <li>проценты по займу</li>
              <li>затраты на реновацию</li>
              <li>затраты на коммуналку (хаузгельд)</li>
            </ul>
          }
        />
      </InfoBlock>
    </CourseLessonLayout>
  );
}
