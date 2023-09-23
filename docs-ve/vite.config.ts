import { svelte } from '@sveltejs/vite-plugin-svelte'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  css: { postcss: {} },
  plugins: [
    svelte({
      onwarn: (warning, defaultHandler) => {
        if (['reactive-component'].includes(warning.code))
          return

        defaultHandler(warning)
      },
    }),
    vanillaExtractPlugin(),
  ],
  server: {
    fs: { allow: ['..'] },
    host: '0.0.0.0',
  },
})
