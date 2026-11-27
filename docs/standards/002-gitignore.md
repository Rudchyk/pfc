# 002 — Git Ignore

## Purpose

Зберігати у Git вихідний код, відтворювані конфігурації та lockfile, не зберігаючи залежності, локальні секрети, згенеровані й тимчасові файли.

## Canon

- Ігнорувати node_modules/, локальні .env-файли, dist/, build/, логи, системні файли та tmp/.
- Дозволяти версіонування .env.example та .env.*.example, але ніколи не додавати до них реальні секрети.
- package.json, pnpm-workspace.yaml, pnpm-lock.yaml та .gitignore зберігаються у Git.
- Специфічні правила Next.js, Turborepo, Playwright тощо додавати під час інтеграції відповідного інструмента, не наперед.
- tmp/ — тимчасові локальні артефакти, не сховище постійних даних чи бекапів.

## Implementation

Створити .gitignore в корені нового репозиторію. Для наявного проєкту перевірити та доповнити поточні правила, не перезаписувати їх без огляду.

## Configuration

```gitignore
# Dependencies
node_modules/

# Environment variables
.env
.env.*
!.env.example
!.env.*.example

# Build artifacts
dist/
build/

# Logs
*.log

# Operating system
.DS_Store
Thumbs.db

# Temporary files
tmp/
```

## Verification

```bash
git check-ignore node_modules/
git check-ignore .env.local
git check-ignore .env.example
git check-ignore tmp/probe.txt
git status --short
```

Очікування: перша, друга та четверта перевірки виводять відповідний шлях; .env.example не ігнорується (код завершення 1, відсутній вивід). node_modules не з'являється в git status.

Доказ PFC: [f205545](https://github.com/Rudchyk/pfc/commit/f205545282410a29f063ea0ebc202c7bc683d931), 27.11.2026. Ігнорування node_modules, .env.local, tmp/probe.txt та виняток для .env.example — PASS. Перелік файлів коміту перевірено у GitHub.

## Acceptance criteria

- [ ] Локальні залежності, секрети та tmp ігноруються.
- [ ] Безсекретні env examples і lockfile дозволено зберігати.
- [ ] Git status не показує згенеровані залежності.

## Known limitations

.gitignore не видаляє вже відстежувані файли та не є механізмом захисту секретів. Якщо секрет потрапив у Git, потрібна окрема процедура реагування. У референсному коміті .gitignore має ті самі правила, але без окремого коментаря перед tmp/ та без кінцевого переносу рядка. Форматування реального файлу не змінюємо в документаційному PR.
