import { createFullConfig } from '@importantimport/eslint-config'
import { GLOB_TS } from '@importantimport/eslint-config/utils/glob'
import { createConfig } from '@importantimport/eslint-config-vanilla-extract'

export default await createFullConfig({
  gitignore: false,
  ts: true,
  vanillaExtract: true,
}, {
  ...createConfig()[0],
  // check styles.ts, styles.*.ts
  files: [GLOB_TS],
}, {
  rules: {
    'n/no-extraneous-import': 'off',
  },
})
