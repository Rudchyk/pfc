# Linting and Git Hooks

## General Rules

- The agent MUST follow the repository's committed linting configuration and use project-local, lockfile-pinned tools.
- The agent MUST distinguish static analysis from formatting, type checking, tests, and build verification.
- The agent MUST follow [Code and Documentation Formatting](formatting.md) for formatter ownership.
- The agent MUST NOT introduce framework-specific rules or plugins before the corresponding stack is adopted.

## ESLint

- JavaScript and TypeScript projects MUST use a project-local ESLint flat configuration.
- The baseline SHOULD include the recommended JavaScript and TypeScript rule sets where applicable.
- Runtime globals and framework-specific rules MUST be scoped to the applications or packages that use them.
- TypeScript linting without type information MUST NOT be reported as type checking.
- When Prettier is used, ESLint MUST disable conflicting formatting rules using eslint-config-prettier after other rule sets.
- ESLint MAY apply non-formatting fixes during an explicitly authorized fix or staged-file hook. Prettier MUST run after ESLint fixes.
- The agent MUST NOT disable lint rules, add blanket suppressions, or exclude owned source solely to pass checks.
- Generated files, third-party code, dependencies, caches, and build output MUST be excluded from linting.
- Framework-specific exceptions MUST be narrowly scoped, justified, and approved.

## Editor Integration

- When VS Code is used, the ESLint extension SHOULD resolve the project's local ESLint and committed configuration.
- ESLint MUST NOT be configured as a competing formatter.
- Automatic ESLint fix-on-save actions MUST NOT compete with the canonical formatter.
- Editor diagnostics MUST NOT be treated as a substitute for CLI verification.

## Git Hooks

- JavaScript/TypeScript monorepositories SHOULD use Husky and lint-staged for a lightweight pre-commit gate.
- Husky hooks MUST be version-controlled; generated hook helpers MUST NOT be committed.
- Development installation MUST initialize hooks through the repository's documented setup command or lifecycle script.
- The pre-commit hook MUST process only staged files with applicable local tools.
- For staged JS/TS files, ESLint fixes MUST precede Prettier formatting.
- Other supported staged source, configuration, and documentation files MUST use their authoritative formatter.
- The hook MUST reject unresolved lint errors and preserve unrelated files and unstaged changes.
- The agent MUST NOT bypass hooks, disable Husky, or use no-verify to hide failures.
- Full-repository lint, typecheck, test, build, database, network, or deployment operations MUST NOT be introduced into the staged-file hook.
- Git hooks are local safeguards, not proof of CI success. API-created commits may not execute local hooks.

## Verification and Safety

- The agent MUST inspect actual scripts and scope before running checks or fixes.
- The agent SHOULD prefer read-only checks of affected files.
- Repository-wide checks and autofixes MUST require owner authorization; the agent MUST preserve unrelated work.
- Dependency changes MUST update the project's own package-manager-generated lockfile. The agent MUST NOT copy or manually fabricate lockfile entries.
- Hook changes MUST be verified with a valid staged file and a deliberate non-fixable lint error in an isolated test branch or checkout.
- The agent MUST inspect the resulting staged diff, confirm unrelated files are untouched, and remove temporary fixtures.
- The agent MUST report verification results accurately as PASS, FAIL, NOT RUN, or BLOCKED.
- The agent MUST NOT claim that hooks executed for API-created commits or that unexecuted checks passed.
