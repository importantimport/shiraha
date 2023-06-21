import { defineConfig } from 'vite'

import { vite as postcss } from '../postcss.config'

export default defineConfig({ css: { postcss } })
