import ii from '@importantimport/eslint-config'

export default [
  ...ii,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './packages/*/tsconfig.json'],
      },
    },
  },
]
