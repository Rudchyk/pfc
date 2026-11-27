# Git Branching & Naming Convention

## Branch Creation

- The agent MUST inspect the current repository, branch, and working tree before creating or switching branches.
- The agent MUST preserve existing uncommitted changes.
- Each independent implementation task MUST use a single short-lived working branch.
- The agent MUST reuse the existing task branch when continuing previously assigned work.
- Working branches MUST be created from the up-to-date target branch.
- The default integration base MUST be `main`, unless the project explicitly uses `development` or the owner explicitly specifies another integration base.
- Epic sub-task branches MUST use their parent epic branch as the base.
- The agent MUST NOT create additional worktrees without explicit approval.

## Issue-Linked Branch Naming

- Each independent implementation task MUST be associated with an existing GitHub Issue unless the owner explicitly approves an exception.
- The issue MUST exist before its working branch is created.
- Issue-linked working branches MUST follow the format:

  `<type>/<issue-id>-<short-kebab-case-description>`

- The branch issue identifier MUST match the actual GitHub Issue number in the same repository.
- The agent MUST NOT invent, reuse unrelated, or omit issue identifiers.
- Owner-approved tasks without an issue MAY use `<type>/<short-kebab-case-description>`.
- Existing branches MUST NOT be renamed automatically.

Branch names MUST:

- Use lowercase English letters, numbers, and hyphens in the description.
- Be short, meaningful, and related to the task.
- Use an appropriate branch type.

### Primary Branch Types

| Type      | Purpose                           |
| --------- | --------------------------------- |
| `feat/`   | New functionality                 |
| `fix/`    | Bug fixes                         |
| `hotfix/` | Urgent production fixes           |
| `chore/`  | Maintenance and technical changes |
| `docs/`   | Documentation                     |

### Additional Branch Types

| Type        | Purpose                                           |
| ----------- | ------------------------------------------------- |
| `refactor/` | Internal restructuring without behavioral changes |
| `test/`     | Test-related changes                              |
| `ci/`       | CI/CD and automation                              |
| `audit/`    | Auditing and diagnostics                          |
| `perf/`     | Performance optimization                          |

Primary branch types SHOULD be preferred.

Additional branch types MAY be used when technically justified and approved.

The agent MUST NOT use redundant or agent-specific prefixes such as `feature/`, `bugfix/`, `claude/`, or `codex/` for new branches.

Epics MUST use the appropriate technical branch type rather than a separate `epic/` prefix.

## Permanent Branches

- `main` MUST be the stable release branch.
- `development` MAY be used as an integration branch when explicitly adopted by the project.
- The agent MUST NOT create a `development` branch without approval.
- Standalone task branches and epic integration branches MUST target `development` when adopted, or `main` otherwise, unless the owner explicitly specifies another integration base.
- Epic sub-task branches MUST target their parent epic branch. Urgent production hotfixes follow the separate Hotfix Workflow.

## Epic Branch Workflow

- An epic MUST have its own GitHub Issue and a dedicated integration branch.
- The epic branch MUST follow the standard issue-linked branch naming convention.
- The epic branch MUST be created from the up-to-date target integration branch.
- Each epic sub-task MUST have its own GitHub Issue and working branch.
- Sub-task branches MUST be created from the corresponding epic branch.
- Sub-task pull requests MUST target the corresponding epic branch.
- The agent MUST NOT merge epic sub-task branches directly into `main` or `development`.
- The agent MUST NOT bypass the epic integration workflow without explicit owner approval.
- Independent sub-task branches MAY be developed in parallel.
- The epic branch MUST be synchronized with its target integration branch when necessary.
- The final epic pull request MUST target `main` or `development` according to the repository workflow, or another explicitly approved integration base.
- The epic MUST satisfy its approved acceptance criteria and required integration verification before final merge.
- All merge operations remain subject to explicit owner approval.

## Pull Request Traceability

- Pull requests for issue-linked branches MUST reference their corresponding issue.
- The pull request title MUST include the corresponding issue number, for example `feat: add user profile (#101)`.
- The agent MUST verify the head and base branches before opening a pull request.
- Issue references MUST NOT trigger automatic issue closure without explicit owner approval.

## Hotfix Workflow

- `hotfix/` MUST be reserved for urgent production fixes.
- Hotfix branches MUST be created from the up-to-date release `main` branch.
- Hotfix pull requests MUST target `main`.
- Released hotfix changes MUST be synchronized with `development` when that branch is used.
- An urgent production fix related to an epic MUST be treated as a separate hotfix task with owner approval, rather than bypassing the epic branch for an ordinary sub-task.
- The agent MUST NOT use cherry-picking as the default integration workflow.

## Branch Safety

The agent MUST NOT:

- Push changes directly to `main`, `development`, or an epic integration branch without explicit approval.
- Rename or delete existing branches without explicit approval.
- Force-push or rewrite Git history without explicit approval.
- Destructively reset or clean the working tree without explicit approval.
- Merge pull requests without explicit approval.

## Examples

**Valid issue-linked branch names:**

- `feat/100-authentication`
- `feat/101-user-profile`
- `fix/102-session-redirect`
- `hotfix/103-auth-callback`
- `chore/104-update-dependencies`
- `docs/105-api-reference`
- `refactor/106-database-client`
- `test/107-auth-service`
- `ci/108-quality-checks`

**Invalid for new issue-linked working branches:**

- `feat/user-profile`
- `feature/101-UserProfile`
- `bugfix/102-session-redirect`
- `fix_102_session_redirect`
- `new-feature`
- `claude/101-user-profile`
- `codex/101-user-profile`
- `epic/100-authentication`

**Epic integration example:**

| Issue                   | Head branch                | Pull request base         |
| ----------------------- | -------------------------- | ------------------------- |
| #101 (sub-task of #100) | `feat/101-user-profile`    | `feat/100-authentication` |
| #102 (sub-task of #100) | `fix/102-session-redirect` | `feat/100-authentication` |
| #107 (sub-task of #100) | `test/107-auth-service`    | `feat/100-authentication` |
| #100 (epic)             | `feat/100-authentication`  | `main`                    |
