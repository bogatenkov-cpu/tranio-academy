# 📝 Обновление уроков для Supabase

## ✅ Уже обновлены:
- ✅ property-maintenance (Урок 8)
- ✅ locations (Урок 1)
- ✅ buying-process (Урок 2)

## 🔄 Нужно обновить:
- ⏳ investment-roi (Урок 3)
- ⏳ prices (Урок 4)
- ⏳ thailand-taxes (Урок 5)
- ⏳ residence-citizenship (Урок 6)
- ⏳ life-in-thailand (Урок 7)

## Как обновить:

Для каждого урока заменить:

```typescript
// СТАРОЕ:
import React, { useEffect } from 'react';

useEffect(() => {
  if (typeof window !== 'undefined') {
    const completedLessons = JSON.parse(localStorage.getItem('thailand_completed_lessons') || '[]');
    if (!completedLessons.includes('lesson-id')) {
      completedLessons.push('lesson-id');
      localStorage.setItem('thailand_completed_lessons', JSON.stringify(completedLessons));
      // ... activities code
    }
  }
}, []);
```

```typescript
// НОВОЕ:
import React from 'react';
import { useLesson } from '@/lib/hooks/useLesson';

useLesson('lesson-id', 'Урок X: Название');
```

## Список ID уроков:
- investment-roi - "Урок 3: Доходность и инвестиции"
- prices - "Урок 4: Стоимость недвижимости"
- thailand-taxes - "Урок 5: Налоги в Таиланде"
- residence-citizenship - "Урок 6: Виза и резидентство"
- life-in-thailand - "Урок 7: Жизнь в Таиланде"
