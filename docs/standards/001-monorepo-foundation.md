# 001 — PNPM Monorepo Foundation

## Purpose

Створити мінімальний фундамент JavaScript/TypeScript-монорепозиторію без прив'язки до фреймворку, ORM чи інструмента збірки.

## Canon

Для проєктів із погодженим PNPM workspace:

- Один кореневий приватний package.json (private: true), один pnpm-workspace.yaml і один спільний pnpm-lock.yaml у Git.
- apps/ — незалежні застосунки; packages/ — спільні бібліотеки та пакети.
- Власні package.json дочірніх пакетів додаються під час їх створення. Не створювати фіктивних застосунків чи бібліотек.
- Порожні каталоги можна зберегти через .gitkeep.
- Залежності встановлюються з кореня. Lockfile генерує PNPM; не редагувати вручну.
- Не додавати Next.js, TypeScript, Turborepo, ORM чи інші залежності до узгодження відповідних етапів.

## Implementation

Передумови: створений Git-репозиторій, встановлені Node.js, PNPM та Git. Версії — за [003](003-runtime-versions.md).

Приклад для PFC у Git Bash (для іншого продукту підставити його репозиторій, робочий каталог та назву пакета):

```bash
cd /c/playground
git clone https://github.com/Rudchyk/pfc.git
cd pfc
pnpm init
mkdir -p apps packages
touch apps/.gitkeep packages/.gitkeep
```

Після ініціалізації залишити потрібні поля package.json, створити pnpm-workspace.yaml, застосувати [Git Ignore](002-gitignore.md) та [runtime versions](003-runtime-versions.md). Потім виконати:

```bash
pnpm install
```

## Configuration

Мінімальний приклад workspace (остаточна конфігурація включає engineStrict із 003):

```yaml
packages:
  - "apps/*"
  - "packages/*"
```

Структура фундаменту на етапі 001–003:

```text
apps/.gitkeep
packages/.gitkeep
.gitignore
.nvmrc
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
README.md
```

Фінальний package.json і pnpm-workspace.yaml — у [003](003-runtime-versions.md).

## Verification

```bash
pnpm install --frozen-lockfile
pnpm list -r --depth 0
ls -la apps packages
git status --short
```

Доказ PFC: [f205545](https://github.com/Rudchyk/pfc/commit/f205545282410a29f063ea0ebc202c7bc683d931), 27.11.2026, Windows / Git Bash. Встановлення з frozen lockfile — PASS; workspace, lockfile та .gitkeep перевірені локально й у GitHub.

## Acceptance criteria

- [ ] Workspace має apps/* та packages/*.
- [ ] Кореневий пакет приватний; lockfile збережено у Git.
- [ ] Встановлення з frozen lockfile завершується успішно.
- [ ] node_modules та локальні секрети не потрапляють у Git.
- [ ] Немає непогоджених залежностей.

## Known limitations

Порожній workspace не виводить дочірніх пакетів у pnpm list -r; це очікувано. Фактичне підключення та взаємодія дочірніх пакетів ще NOT RUN. Linux/CI перевірка ще NOT RUN. Для проєктів з іншими пакетними менеджерами цей профіль не застосовується автоматично.
