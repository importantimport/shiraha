import { createFullConfig } from '@importantimport/eslint-config'

export default await createFullConfig({
  gitignore: false,
  ts: true,
  vanillaExtract: true,
})
