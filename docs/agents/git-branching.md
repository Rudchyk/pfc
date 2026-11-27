# Git Branching & Naming Convention

## Branch Creation

- The agent MUST inspect the current repository, branch, and working tree before creating or switching branches.
- The agent MUST preserve existing uncommitted changes.
- Each independent task MUST use a single short-lived working branch.
- The agent MUST reuse the existing task branch when continuing previously assigned work.
- Working branches MUST be created from the up-to-date target branch.
- The default base branch MUST be `main`, unless the project uses `development` or the owner explicitly specifies another base branch.
- The agent MUST NOT create additional worktrees without explicit approval.

## Branch Naming

All new working branches MUST follow the format:

`<type>/<short-kebab-case-description>`

Branch names MUST:

- Use lowercase English letters, numbers, and hyphens in the description.
- Be short, meaningful, and related to the task.
- Use an appropriate branch type.

### Primary Branch Types

| Type | Purpose |
|---|---|
| `feat/` | New functionality |
| `fix/` | Bug fixes |
| `hotfix/` | Urgent production fixes |
| `chore/` | Maintenance and technical changes |
| `docs/` | Documentation |

### Additional Branch Types

| Type | Purpose |
|---|---|
| `refactor/` | Internal restructuring without behavioral changes |
| `test/` | Test-related changes |
| `ci/` | CI/CD and automation |
| `audit/` | Auditing and diagnostics |
| `perf/` | Performance optimization |

Primary branch types SHOULD be preferred.

Additional branch types MAY be used when technically justified and approved.

An existing issue identifier MAY be included in the branch name. The agent MUST NOT invent issue identifiers.

The agent MUST NOT use redundant prefixes such as `feature/` or `bugfix/` for new branches.

## Permanent Branches

- `main` MUST be the stable release branch.
- `development` MAY be used as an integration branch when explicitly adopted by the project.
- The agent MUST NOT create a `development` branch without approval.
- When `development` is used, regular working branches MUST target `development`.
- Otherwise, regular working branches MUST target `main`.

## Hotfix Workflow

- `hotfix/` MUST be reserved for urgent production fixes.
- Hotfix branches MUST be created from the up-to-date release `main` branch.
- Hotfix pull requests MUST target `main`.
- Released hotfix changes MUST be synchronized with `development` when that branch is used.
- The agent MUST NOT use cherry-picking as the default integration workflow.

## Branch Safety

The agent MUST NOT:

- Push changes directly to `main` or `development` without explicit approval.
- Rename or delete existing branches without explicit approval.
- Force-push or rewrite Git history without explicit approval.
- Destructively reset or clean the working tree without explicit approval.
- Merge pull requests without explicit approval.

## Examples

**Valid:**

- `feat/user-profile`
- `fix/session-redirect`
- `hotfix/auth-callback`
- `chore/update-dependencies`
- `docs/api-reference`
- `refactor/database-client`
- `test/auth-service`
- `ci/quality-checks`

**Invalid for new working branches:**

- `feature/UserProfile`
- `bugfix/session-redirect`
- `fix_session_redirect`
- `new-feature`
- `claude/user-profile`
- `codex/user-profile`