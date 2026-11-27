import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import { defineConfig, globalIgnores } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
    '**/vendor/**',
    '**/.cache/**',
    '**/tmp/**',
    '**/.husky/_/**',
    '**/.next/**',
    '**/out/**',
    '**/next-env.d.ts',
    '**/.vercel/**',
    '**/.turbo/**',
  ]),
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    extends: [js.configs.recommended],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
  },
  {
    files: ['**/*.config.{js,mjs,cjs,ts,mts,cts}', 'scripts/**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.node },
  },
  {
    files: ['apps/web/**/*.{js,jsx,ts,tsx}'],
    extends: [
      next.configs.recommended,
      next.configs['core-web-vitals'],
      reactHooks.configs.flat.recommended,
    ],
    settings: {
      next: {
        rootDir: 'apps/web/',
      },
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  // Keep Prettier as the sole formatter, after all lint rule sets.
  prettier,
]);
