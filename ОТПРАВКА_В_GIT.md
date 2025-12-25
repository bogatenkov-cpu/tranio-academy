# Отправка обновлений в GitHub

## Команды для отправки:

```bash
cd /Users/evgeniibogatenkov/Desktop/tranio-academy

# 1. Проверьте, что изменилось
git status

# 2. Добавьте все изменения
git add .

# Или только конкретные файлы:
git add package.json package-lock.json

# 3. Создайте коммит
git commit -m "Update Next.js to 16.1.1 and fix all linting errors"

# 4. Отправьте на GitHub
git push origin main
```

---

## После git push:

Vercel автоматически:
- ✅ Увидит изменения
- ✅ Запустит новую сборку
- ✅ Установит Next.js 16.1.1
- ✅ Предупреждение об уязвимости исчезнет

---

## Проверка на Vercel:

1. Зайдите на https://vercel.com
2. Откройте проект `tranio-academy`
3. Вкладка "Deployments"
4. Дождитесь завершения сборки (2-3 минуты)
5. Проверьте логи - не должно быть предупреждения о 15.5.7

