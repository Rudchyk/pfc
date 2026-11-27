# Web Foundation Implementation Plan

## Purpose and applicability

This is an optional implementation blueprint, not an agent policy or a mandatory technology choice. Use it only when the project owner selects it. Adapt scope, framework versions, package names, language, theme, navigation, deployment target, and optional features to the target project. Follow its applicable AGENTS.md and engineering rules.

The reference implementation uses Next.js App Router, React, TypeScript, pnpm workspaces, Turborepo, MUI and Emotion. Database access, authentication, product features and test framework integration are separate plans.

## Prerequisites

- Confirm the target workspace structure, runtime versions, package manager and existing quality tooling.
- Review the project's existing implementation and installed framework documentation.
- Agree on the application package name, routing, UI library, localization, deployment output and acceptance criteria.
- Check actual stable dependency versions and peer compatibility before installation. Use exact direct versions and a generated root lockfile where the project follows this convention.

## Implementation sequence

### 1. Initialize the workspace application

Create a minimal App Router application with TypeScript, a src directory and an import alias. Integrate the existing workspace rather than nesting another repository or lockfile. Keep framework dependencies in the consuming app and shared engineering tools at the workspace root. Remove unwanted starter assets and unnecessary build-time external requests.

Configure scoped development, build, start, lint, typecheck and format commands. If the monorepo uses Turborepo, define the tasks and their dependencies; enable caches only once inputs and outputs have been verified. Integrate compatible Next.js and React Hooks rules without replacing the existing formatter or forcing incompatible peer dependencies.

### 2. Set up the UI foundation

If MUI is selected, install the material, Next.js integration and required Emotion packages. Use the compatible App Router cache provider for streamed SSR styles and a single theme provider with CssBaseline. Match the theme initialization script, color-scheme selector, storage key and default mode.

Provide light, dark and system options, persist user selection, and use theme tokens. Prefer neutral defaults and system fonts until branding is specified.

### 3. Implement the application shell

Create a semantic header, main and footer. Use a flex-based viewport-height shell so the footer stays at the bottom on short pages and follows long content without overlay.

Provide a desktop navigation beside the brand and a theme switcher on the right. On narrow screens, place a hamburger before the brand and use a full-width, full-height temporary drawer entering from the left. Share navigation definitions, mark the active route, close after selection, and preserve keyboard interaction and focus handling.

### 4. Implement feedback and recovery

- Add route-level not-found, error and loading boundaries and an independent global-error document that does not rely on failed root providers.
- Show accessible loading feedback and a reusable skeleton. For imperative global loading, count overlapping operations independently; release tokens in finally blocks and make cleanup idempotent.
- Provide queued notifications for success, info, warning and error, including manual dismissal and automatic timeout.
- Provide safe recovery actions and do not display internal exception messages or stack traces to users.

### 5. Add an optional demonstration catalog

In a reference or training application, group demonstrations under /demo and share their metadata between the catalog and navigation. The PFC reference includes 404 (intentionally absent route), error, global-error, loading, global-loading, notifications, layout and theme.

Demonstration failures and delays must be confined to explicitly selected examples. Request-time server examples should not execute during static generation. Disable link prefetching for demonstration routes to avoid triggering intentional failures or delays without navigation. Keep the root global-error trigger limited to its demonstration pathname.

PFC intentionally retains these examples in development and production builds. For a real product, omit them or restrict access before public deployment unless the owner explicitly approves a public demonstration application. Do not add artificial delays or intentional failures to normal product behavior.

### 6. Prepare deployment when selected

For standalone Node.js deployment, configure tracing for the workspace root and package public and generated static assets with the server. Verify actual startup and assets on the target OS and architecture. Do not assume a build produced on one platform is portable to another when native modules are present.

### 7. Document and verify

Document actual developer commands and optional demonstration URLs in the project README. Keep this blueprint separate from mandatory agent instructions. Exclude generated artifacts from version control.

Suggested acceptance criteria, adapted to the approved scope:

- [ ] Frozen installation succeeds; scoped lint, typecheck and formatting pass.
- [ ] Development server renders without hydration errors; themes persist and respect system preference.
- [ ] Desktop navigation and mobile drawer work, including active routes, close behavior, Escape and responsive layout.
- [ ] Short and long pages place the footer correctly.
- [ ] 404, error recovery, root error, loading, concurrent operations and notification queue behave as expected.
- [ ] Optional demonstration routes are documented and isolated from normal product behavior.
- [ ] If deployment is in scope, production build, standalone startup and static assets are verified, including selected demonstration routes.
- [ ] Unexecuted checks are explicitly reported as NOT RUN or BLOCKED; no generated output or temporary fixtures are tracked.
