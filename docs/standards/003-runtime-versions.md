# 003 — Runtime & Package Manager Versions

## Purpose

Зафіксувати рекомендоване середовище розробки, допустимі major-версії та відтворюване встановлення залежностей.

## Canon

- Версію Node.js для конкретного проєкту фіксуємо в .nvmrc.
- Допустимі major-версії Node.js та PNPM визначаємо через engines у кореневому package.json.
- packageManager фіксує конкретну версію PNPM. Узгоджені оновлення версій — окремою зміною конфігурації та lockfile.
- Для погодженого PNPM 12 engineStrict задаємо в pnpm-workspace.yaml, а не через engine-strict у .npmrc.
- Не переносимо конфігурації старого PNPM без перевірки. Версії нижче — перевірений референс PFC, а не вимога негайно оновити всі наявні продукти.

## Implementation

Для нового репозиторію спочатку перевірити node -v та pnpm -v. Створити .nvmrc, налаштувати package.json та pnpm-workspace.yaml відповідно до погоджених версій. Якщо .npmrc існує, зберегти необхідні налаштування registry/auth; видаляти файл лише якщо він більше не потрібний.

## Configuration

Референс PFC:

.nvmrc:

```text
24.20.0
```

package.json:

```json
{
  "name": "pfc",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24 <25",
    "pnpm": ">=12 <13"
  },
  "packageManager": "pnpm@12.23.0"
}
```

pnpm-workspace.yaml:

```yaml
packages:
  - "apps/*"
  - "packages/*"

engineStrict: true
```

## Verification

```bash
node -v
pnpm -v
cat .nvmrc
cat package.json
cat pnpm-workspace.yaml
pnpm config get engineStrict
pnpm install --frozen-lockfile
git status --short
```

Доказ PFC: [f205545](https://github.com/Rudchyk/pfc/commit/f205545282410a29f063ea0ebc202c7bc683d931), 27.11.2026, Windows / Git Bash.

| Перевірка | Результат |
| --- | --- |
| Node.js | v24.20.0 |
| PNPM | 12.23.0 |
| engineStrict через .npmrc (попередня спроба) | undefined; конфігурація виправлена |
| pnpm config get engineStrict | true — PASS |
| pnpm install --frozen-lockfile | PASS |
| Файли у GitHub | PASS |

## Acceptance criteria

- [ ] Фактичні версії відповідають погодженому діапазону.
- [ ] .nvmrc та packageManager містять конкретні версії.
- [ ] pnpm config get engineStrict повертає true на PNPM 12.
- [ ] Frozen install проходить без зміни lockfile.

## Known limitations

Фактична відмова встановлення на несумісній версії Node.js — NOT RUN. Linux/CI, поведінка за іншої версії PNPM та автоматичне перемикання версій — NOT RUN. .nvmrc не перемикає Node.js самостійно; потрібний відповідний інструмент або ручний вибір версії. packageManager фіксує версію, але її автоматичне встановлення залежить від середовища. Не вважаємо прочитане engineStrict доказом усіх можливих перевірок сумісності.
