import { defineConfig } from 'vite'
import { vite as postcss } from '../postcss.config'

// https://vitejs.dev/config/
export default defineConfig({
  css: { postcss: postcss as any },
  plugins: [],
})
