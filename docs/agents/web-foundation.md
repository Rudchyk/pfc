# Next.js Web Foundation

## Workspace and dependencies

- Keep each Next.js application in its own workspace package. Use a single root package manager and generated lockfile.
- Use the App Router, TypeScript, and the repository's scoped linting and formatting tools.
- Consult the documentation shipped with the installed Next.js version before changing framework-specific code.
- Keep framework and UI dependencies in the consuming application unless shared tooling requires them at the root.
- Do not force incompatible peer dependencies or duplicate the framework's configuration. Document justified, narrowly scoped rule exceptions.
- Keep task orchestration at the workspace root. Enable task caching only after verifying environment inputs and artifact outputs.

## UI and application shell

- Keep the root layout a Server Component. Place client providers and interactive controls behind explicit client boundaries.
- When using MUI with App Router, use its compatible App Router cache provider for streamed styles and a single application theme.
- Use matching color scheme initialization and theme provider settings to avoid hydration mismatches and theme flashes. Respect the system preference and persist an explicit user selection.
- Use theme tokens for colors and typography rather than maintaining duplicate global palettes.
- Use semantic header, main, and footer regions. A short page must place the footer at the viewport bottom; a long page must keep it after content without overlap.
- Keep the initial UI neutral and do not introduce product-specific navigation, data access, or external build-time font requests without a requirement.

## Loading, errors and notifications

- Use framework loading, not-found, and error boundaries for the appropriate route scope. Root layout failures require a standalone global error document that does not depend on the failed providers.
- Provide accessible loading feedback and reusable skeletons. Never add artificial delays to production code to demonstrate loading.
- For an imperative global loading indicator, track overlapping operations independently; release each token in a finally block and allow idempotent cleanup.
- Use a shared notifier for success, info, warning, and error messages. Preserve messages queued while another is visible.
- Provide recovery actions where appropriate. Never expose stack traces, internal error messages, or secrets in user-facing fallback pages.

## Build and verification

- Produce a standalone output when independent Node.js deployment is required. Configure tracing for the workspace root and include the application public and generated static assets in the artifact.
- Verify the actual standalone server and its static assets, not just the build exit code. Build on a compatible target OS and architecture where native dependencies are involved.
- Keep generated artifacts out of version control. Document actual root commands in the developer README when introducing or changing scripts.
- Verify frozen installation, scoped typecheck, lint, format checks, development and production smoke checks, responsive layout, theme persistence, browser hydration, loading, notifications, and error recovery. Temporary failure or delay fixtures must not remain in production source.
- Report unexecuted checks as NOT RUN or BLOCKED. A successful typecheck does not establish runtime or hydration correctness.
