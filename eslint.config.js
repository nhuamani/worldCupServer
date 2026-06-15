import js from '@eslint/js'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
])
