# Code and Documentation Formatting

## General Rules

- The agent MUST follow the committed formatting configuration of the repository.
- Each file MUST have exactly one authoritative formatter within its application or package scope.
- Formatting MUST be deterministic and consistent across operating systems, editors, local CLI execution, and CI.
- Formatters and their plugins MUST use project-local, lockfile-pinned dependencies.
- The agent MUST NOT rely on globally installed formatter versions.
- Formatting configuration MUST be version-controlled and available locally.
- The agent MUST NOT import remote formatting configurations at runtime.
- Stack-specific formatting rules MUST be applied only when the corresponding technology is used.

## Text Formatting

Unless an approved stack-specific configuration requires otherwise:

- Text files MUST use UTF-8 encoding.
- Text files MUST use LF line endings.
- Text files MUST end with a final newline.
- Trailing whitespace MUST be removed.
- Indentation MUST use two spaces.
- Markdown hard-break whitespace MUST be preserved.
- Makefiles MUST preserve required tab indentation.
- WordPress PHP MUST use tabs with a width of four.

Binary files MUST NOT be normalized or formatted as text.

## Formatter Ownership

| File type                        | Formatter                  |
| -------------------------------- | -------------------------- |
| JavaScript, JSX, TypeScript, TSX | Prettier                   |
| Astro                            | Prettier with Astro plugin |
| CSS, SCSS, LESS                  | Prettier                   |
| Standalone HTML                  | Prettier                   |
| JSON, JSONC                      | Prettier                   |
| YAML                             | Prettier                   |
| Markdown, MDX                    | Prettier                   |
| WordPress PHP                    | PHPCBF                     |

- The agent MUST NOT introduce competing formatters within the same application or package scope.
- Different applications MAY use different formatters for the same file type, provided their scopes do not overlap.
- Stack-specific formatter configurations MUST NOT override unrelated applications or packages.
- ESLint, Stylelint, PHPCS, and other validators MUST NOT act as competing automatic formatters.
- The agent MUST NOT introduce an automatic formatter for an unsupported language without an approved formatting policy.

## Prettier

The default Prettier configuration MUST use:

- `singleQuote: true`
- `trailingComma: 'all'`
- `tabWidth: 2`
- `useTabs: false`
- `printWidth: 100`
- `endOfLine: 'lf'`

Markdown MUST use `proseWrap: 'preserve'`.

The agent MUST preserve approved project-specific overrides and MUST NOT replace existing formatting configuration without reviewing its purpose.

Prettier plugins MUST be installed only when required by the project stack.

## Markdown

- Markdown MUST be formatted using the project-local Prettier.
- Prettier MUST own Markdown table alignment and spacing.
- The agent MUST NOT manually pad Markdown table columns to approximate Prettier output.
- Formatting MUST preserve intentional hard breaks, links, emphasis, Unicode content, and document meaning.
- Fenced code blocks MUST be reviewed for unintended semantic changes.
- Markdown formatting MUST NOT be disabled merely to pass validation.
- Source documentation MUST remain within formatting scope.

## Astro and Tailwind CSS

When Astro is used:

- The agent MUST use `prettier-plugin-astro`.
- Astro files MUST use the Astro parser.
- The agent MUST NOT enable a competing Astro formatter.

When Tailwind CSS class sorting is enabled:

- The agent MUST use the project-local Tailwind Prettier plugin.
- `prettier-plugin-tailwindcss` MUST be loaded last.

## WordPress PHP

Within WordPress application or package scopes:

- PHPCBF MUST be the sole PHP formatter.
- PHPCS and PHPCBF MUST use the same project-local `phpcs.xml.dist` ruleset.
- The canonical ruleset MUST use `WordPress-Core`.
- PHPCS and PHPCBF MUST use local Composer-installed binaries.
- Composer dependencies MUST be locked in the project's own `composer.lock`.
- Prettier MUST exclude PHP files, including mixed PHP/HTML templates.
- The agent MUST NOT install or activate `@prettier/plugin-php`.
- The agent MUST NOT run Prettier over embedded HTML within PHP files.
- Modified PHP files MUST be checked with PHPCS and PHP syntax validation when the relevant verification is authorized.
- The agent MUST NOT disable WordPress coding standards merely to eliminate formatting violations.
- Legacy exceptions MUST be explicit, narrowly scoped, justified, and approved.

## Editor Configuration

When VS Code is used:

- `editor.formatOnSave` MUST be enabled.
- `editor.formatOnSaveMode` MUST be set to `file`.
- `prettier.requireConfig` MUST be enabled.
- Prettier MUST resolve the project-local installation.
- Default formatters MUST be assigned by language.
- When applications use different formatters for the same language, editor integration MUST respect application boundaries.
- The agent MUST NOT configure a repository-wide language formatter that conflicts with application-specific formatting rules.
- The agent MUST NOT configure competing ESLint or Stylelint fix-on-save actions.
- Project formatting settings and extension recommendations MUST be version-controlled.
- Personal editor preferences MUST NOT override committed formatting rules.

For WordPress PHP:

- The PHP formatter MUST resolve project-local PHPCBF.
- `phpcscommunity.php-codesniffer` SHOULD be used for VS Code integration.
- `phpSniffer.fixOnSave` MUST remain disabled when format-on-save already invokes PHPCBF.

## Formatting Scope

The agent MUST format only project-owned source code, configuration, and documentation.

The agent MUST exclude:

- Installed dependencies.
- Vendor code.
- Generated files.
- Build and distribution artifacts.
- Coverage reports.
- Caches.
- WordPress core.
- Uploaded and third-party assets.
- Binary files.

Ignore patterns MUST correspond to actual project structure.

The agent MUST NOT exclude entire source or documentation directories merely to avoid formatting failures.

## Formatting Workflow

- The agent MUST inspect the existing formatter configuration and available commands before execution.
- The agent MUST format newly created and modified files using the authoritative project-local formatter.
- The agent MUST review the resulting diff.
- The agent MUST run the applicable read-only formatting check when technically available and authorized.
- Formatting MUST be idempotent: a second formatting pass MUST NOT introduce additional changes.
- The agent MUST preserve unrelated files and existing uncommitted changes.
- Repository-wide formatting and normalization MUST require explicit owner approval.
- Large formatting-only changes MUST be separated from functional implementation.
- Formatting MUST NOT introduce unintended behavioral changes.

## Pull Request Verification

- Files created through GitHub API or other automated tools MUST NOT be assumed to have passed editor format-on-save.
- Before opening or updating a pull request, the agent MUST format and validate the affected files when technically possible.
- The agent MUST NOT manually imitate formatter output as a substitute for actual validation.
- If the required formatter cannot be executed, the agent MUST report the verification as `NOT RUN`.
- The agent MUST NOT report formatting, editor integration, or CI checks as passed without actual evidence.
- Successful CLI formatting MUST NOT be treated as proof that editor format-on-save works.

## CI Formatting

- Formatting checks in CI MUST be read-only.
- CI MUST use the same committed configuration and locked formatter dependencies as local development.
- CI MUST NOT automatically rewrite, commit, or push formatted files.
- Manual formatting automation MAY be introduced only with explicit approval and must produce reviewable changes.
- The agent MUST NOT weaken formatting checks or bypass failures to obtain a passing CI result.

## Configuration Changes

- Existing formatting configuration MUST be reviewed before modification.
- The agent MUST preserve approved project-specific settings.
- Formatter upgrades MUST be explicit and verified.
- Changes to formatting rules MUST NOT be mixed with unrelated functional changes.
- The agent MUST NOT overwrite application lockfiles with lockfiles from another repository.
- The agent MUST NOT change formatter ownership without approval.

## Formatting Safety

The agent MUST NOT:

- Reformat unrelated files.
- Modify third-party or generated code.
- Introduce competing formatters.
- Change formatting rules without approval.
- Disable checks to hide formatting violations.
- Perform repository-wide formatting without approval.
- Claim formatting verification that was not performed.
