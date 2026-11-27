# GitHub Issue Management

## General Rules

- The agent MUST follow SMART principles when defining significant tasks.
- The agent MUST create issues in the appropriate repository based on task ownership.
- The agent MUST inspect existing issues and relevant project documentation before creating a new issue.
- The agent MUST NOT create duplicate issues.
- The agent MUST NOT invent requirements, dependencies, priorities, deadlines, or technical facts.
- Each issue MUST represent one logically coherent task.
- Large tasks SHOULD be decomposed into independently reviewable implementation tasks.
- The agent MUST follow KISS, YAGNI, and Minimum Sufficient Work when defining tasks.
- Creating an issue MUST NOT be interpreted as authorization to implement it.

## Language and Writing

- Issue titles and descriptions MUST be written in English.
- Titles MUST be concise, descriptive, and action-oriented.
- Descriptions MUST be clear, technically accurate, and unambiguous.
- The agent MUST distinguish confirmed requirements from proposed solutions and unresolved decisions.
- The agent MUST NOT include secrets, credentials, private data, or unnecessary sensitive information.

## SMART Requirements

Every significant feature, fix, refactoring, architecture, security, or migration issue MUST satisfy the following criteria:

- **Specific:** Define the problem, expected behavior, affected components, and scope boundaries.
- **Measurable:** Define objective and verifiable acceptance criteria.
- **Achievable:** Consider prerequisites, dependencies, available resources, constraints, and risks.
- **Relevant:** Explain the relationship to product requirements, engineering standards, or business objectives.
- **Time-bound:** Specify an approved deadline, milestone, or release gate when available. If no deadline has been established, use `Date not set`. The agent MUST NOT invent deadlines.

## Issue Structure

Significant issues MUST use the following structure where applicable:

### Context

Describe the current state, existing problem, and relevant background.

### Objective

Define the expected outcome and explain why the task is necessary.

### Scope

Specify the changes and behavior included in the task.

### Out of Scope

Define what MUST NOT be implemented as part of the task.

### Dependencies

Identify existing prerequisites, related issues, external dependencies, and blockers.

### Constraints

Define technical, architectural, security, compatibility, and operational constraints.

### Acceptance Criteria

Provide a checklist of objective and independently verifiable requirements.

### Verification

Describe the relevant tests, manual checks, or review procedures required to verify the acceptance criteria.

### Target

Specify an approved deadline, milestone, or release gate. Otherwise, state `Date not set`.

### Definition of Done

Define the conditions that MUST be satisfied before the issue can be considered complete.

Sections that are not applicable MAY be omitted.

Small and obvious tasks MAY use a simplified structure containing a clear objective and verifiable acceptance criteria.

## Acceptance Criteria

- Acceptance criteria MUST describe observable and verifiable outcomes.
- Each criterion MUST have an unambiguous PASS or FAIL condition.
- Significant task acceptance criteria MUST be approved by the owner before implementation.
- Authentication, authorization, privacy, and data-related tasks MUST include relevant negative scenarios.
- Acceptance criteria MUST NOT be silently removed, weakened, or modified during implementation.
- Changes to approved scope or acceptance criteria MUST require owner approval.

## Definition of Ready

A significant issue is ready for implementation only when:

- The objective and scope are clear.
- Acceptance criteria are measurable and approved by the owner.
- Required dependencies and prerequisites are identified.
- Blocking decisions have been resolved.
- Relevant constraints and risks are understood.

The agent MUST NOT begin significant implementation while blocking requirements remain unresolved.

## Issue Relationships

- The agent MUST reference relevant existing issues, pull requests, ADRs, and project documentation where applicable.
- Related implementation tasks SHOULD be linked to their parent issue when the work is decomposed.
- Dependencies and blockers MUST reference real issues or confirmed requirements.
- The agent MUST NOT invent issue or pull request identifiers.
- Significant architectural changes MUST reference an approved ADR before implementation.
- Issue-linked branches and pull request targets MUST follow the [Git Branching & Naming Convention](git-branching.md).

## Epic and Sub-Issue Management

- An epic MUST represent a significant, logically coherent product or engineering objective.
- An epic MUST follow SMART principles and define overall scope, constraints, dependencies, acceptance criteria, and Definition of Done.
- An epic MUST be decomposed into independently reviewable sub-issues when multiple implementation tasks are required.
- Each sub-issue MUST reference its parent epic using the available GitHub parent/sub-issue relationship.
- Each sub-issue MUST have its own scope, measurable acceptance criteria, and verification requirements.
- Sub-issue acceptance criteria MUST contribute to the parent epic objective.
- Dependencies between sub-issues MUST be explicitly identified.
- The agent MUST NOT duplicate the entire epic specification in every sub-issue.
- The agent MUST NOT create unnecessary epics or sub-issues for small, independent tasks.
- The agent MUST NOT introduce nested epics without a demonstrated need and owner approval.
- Epic and sub-issue branches MUST follow the [Git Branching & Naming Convention](git-branching.md).
- Sub-issue completion MUST NOT automatically imply epic completion.
- An epic MUST NOT be closed until all required sub-issues and overall acceptance criteria are satisfied, required verification is complete, and the final integration pull request has been merged.
- Issue closure requires explicit owner approval.

## Issue Metadata

- The agent SHOULD apply relevant existing repository labels.
- The agent SHOULD use the existing `epic` label to identify epics when the repository provides it.
- The agent MUST follow repository-specific labeling and milestone conventions.
- The agent MUST NOT invent priorities, assignees, estimates, or milestones.
- New labels or milestones MUST NOT be created without explicit approval.

## Definition of Done

An issue MUST NOT be considered complete solely because a pull request exists or has been merged.

Completion requires:

- Approved acceptance criteria are satisfied.
- Required verification has been performed.
- Security and architectural invariants are preserved.
- Relevant implementation pull requests are linked.
- Verification results are reported accurately.
- Required approvals and quality gates are satisfied.

Verification results MUST use the following statuses where applicable:

- `PASS`
- `FAIL`
- `NOT RUN`
- `N/A`
- `BLOCKED`

Unexecuted checks MUST NOT be reported as PASS.

## Issue Safety

The agent MUST NOT:

- Create or modify issues outside the authorized scope.
- Silently expand an approved task.
- Replace confirmed requirements with assumptions.
- Mark unverified acceptance criteria as completed.
- Close issues with unresolved mandatory acceptance criteria.
- Close or delete issues without explicit approval, including through automatic pull request closing keywords.
