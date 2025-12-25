# Полная проверка и отправка всех файлов в GitHub

## Шаг 1: Проверка текущего состояния

```bash
cd /Users/evgeniibogatenkov/Desktop/tranio-academy

# Проверить статус
git status

# Проверить последний коммит
git log --oneline -5

# Проверить версию Next.js в package.json
grep '"next":' package.json
```

---

## Шаг 2: Добавить ВСЕ файлы (включая исправленные)

```bash
# Добавить все изменения и новые файлы
git add .

# Проверить, что добавилось
git status
```

---

## Шаг 3: Создать коммит со всеми изменениями

```bash
git commit -m "Complete update: Next.js 16.1.1, fix all linting errors, update all files"
```

---

## Шаг 4: Отправить на GitHub

```bash
git push origin main
```

---

## Шаг 5: Проверка после отправки

```bash
# Проверить, что все отправлено
git status
# Должно показать: "Your branch is up to date with 'origin/main'"

# Проверить последний коммит на GitHub
git log origin/main --oneline -1
```

---

## Важные файлы, которые должны быть в репозитории:

✅ `package.json` - с версией Next.js 16.1.1
✅ `package-lock.json` - с обновленными зависимостями
✅ `app/countries/thailand/trainer/page.tsx` - исправленный
✅ `app/countries/thailand/exam/page.tsx` - исправленный
✅ `app/profile/page.tsx` - исправленный
✅ `app/countries/thailand/theory/buying-process/page.tsx` - исправленный
✅ `app/countries/thailand/theory/locations/page.tsx` - исправленный
✅ Все остальные файлы проекта

---

## Если что-то пошло не так:

### Принудительная отправка (используйте осторожно):
```bash
git push origin main --force
```

### Проверка удаленного репозитория:
```bash
# Посмотреть, что на GitHub
git fetch origin
git log origin/main --oneline -5
```

