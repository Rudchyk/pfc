# pfc

Project Foundation Canon (Канон фундаменту проєкту)

## Development setup

Install the locked dependencies using the repository's supported Node.js and pnpm versions:

```bash
pnpm install --frozen-lockfile
```

The development installation runs the `prepare` script to initialize Husky. If the hooks need to be initialized again, run `pnpm prepare`.

## Formatting

```bash
pnpm format
pnpm format:check
```

- `pnpm format`: format all supported files within the repository's configured scope.
- `pnpm format:check`: verify formatting without modifying files.

For focused changes, run `pnpm exec prettier --check <file>` or `pnpm exec prettier --write <file>` with the actual file path.

## Linting

```bash
pnpm lint
```

Run the repository-wide ESLint check without autofixing. For focused verification, use `pnpm exec eslint <file>`.

Prettier owns formatting; ESLint checks code quality. Framework-specific rules are introduced only when the corresponding application or package requires them.

## Git hooks

Husky runs lint-staged before local commits. Staged JavaScript and TypeScript files are linted with autofix and then formatted with Prettier. Other supported staged files are formatted by Prettier alone.

Unresolved lint errors block the commit. Review the staged changes and resolve failures instead of bypassing the hook. Local hooks do not replace explicit lint and formatting checks.
