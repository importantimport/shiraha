// vite.config.ts
import { defineConfig } from "file:///home/dev/shiraha/node_modules/.pnpm/vite@4.0.1/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///home/dev/shiraha/node_modules/.pnpm/@vitejs+plugin-vue@3.1.2_vite@4.0.1+vue@3.2.41/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///home/dev/shiraha/node_modules/.pnpm/@vitejs+plugin-vue-jsx@2.0.1_vite@4.0.1+vue@3.2.41/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vueI18n from "file:///home/dev/shiraha/node_modules/.pnpm/@intlify+vite-plugin-vue-i18n@6.0.3_vite@4.0.1+vue-i18n@9.2.2/node_modules/@intlify/vite-plugin-vue-i18n/lib/index.mjs";
import Markdown from "file:///home/dev/shiraha/node_modules/.pnpm/vite-plugin-vue-markdown@0.21.1_vite@4.0.1/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import eslint from "file:///home/dev/shiraha/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.25.0+vite@4.0.1/node_modules/vite-plugin-eslint/dist/index.mjs";

// ../postcss.config.js
import sugarss from "file:///home/dev/shiraha/node_modules/.pnpm/sugarss@4.0.1_postcss@8.4.20/node_modules/sugarss/index.mjs";
import postcssImport from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-import@15.1.0_postcss@8.4.20/node_modules/postcss-import/index.js";
import postcssImportExtGlob from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-import-ext-glob@2.1.1_postcss@8.4.20/node_modules/postcss-import-ext-glob/index.js";
import postcssMixins from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-mixins@9.0.4_postcss@8.4.20/node_modules/postcss-mixins/index.js";
import postcssJitProps from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-jit-props@1.0.8_postcss@8.4.20/node_modules/postcss-jit-props/index.js";
import postcssLightningCSS from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-lightningcss@0.6.0_postcss@8.4.20/node_modules/postcss-lightningcss/src/index.js";
import combineSelectors from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-combine-duplicated-selectors@10.0.3_postcss@8.4.20/node_modules/postcss-combine-duplicated-selectors/src/index.js";
import combineMediaQuery from "file:///home/dev/shiraha/node_modules/.pnpm/postcss-combine-media-query@1.0.1/node_modules/postcss-combine-media-query/index.js";
import OpenProps from "file:///home/dev/shiraha/node_modules/.pnpm/open-props@1.4.16/node_modules/open-props/dist/open-props.module.js";
var vite = {
  parser: sugarss,
  plugins: [
    postcssImport(),
    postcssImportExtGlob(),
    postcssMixins(),
    postcssJitProps(OpenProps),
    combineSelectors(),
    combineMediaQuery(),
    postcssLightningCSS({
      browsers: "defaults and supports css-cascade-layers",
      lightningcssOptions: {
        drafts: {
          nesting: true,
          customMedia: true
        }
      }
    })
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  css: { postcss: vite },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    vueJsx(),
    vueI18n({
      include: resolve("src/locales/**")
    }),
    Markdown({}),
    eslint()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiLi4vcG9zdGNzcy5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kZXYvc2hpcmFoYS9wYWdlc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGV2L3NoaXJhaGEvcGFnZXMvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGV2L3NoaXJhaGEvcGFnZXMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXG4vLyB2aXRlIHBsdWdpbnNcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xuaW1wb3J0IHZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdml0ZS1wbHVnaW4tdnVlLWkxOG4nXG5pbXBvcnQgTWFya2Rvd24gZnJvbSAndml0ZS1wbHVnaW4tdnVlLW1hcmtkb3duJ1xuaW1wb3J0IGVzbGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG4vLyBwb3N0Y3NzIGNvbmZpZ1xuaW1wb3J0IHsgdml0ZSBhcyBwb3N0Y3NzIH0gZnJvbSAnLi4vcG9zdGNzcy5jb25maWcuanMnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHsgcG9zdGNzcyB9LFxuICBwbHVnaW5zOiBbXG4gICAgdnVlKHsgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dIH0pLFxuICAgIHZ1ZUpzeCgpLFxuICAgIHZ1ZUkxOG4oe1xuICAgICAgaW5jbHVkZTogcmVzb2x2ZSgnc3JjL2xvY2FsZXMvKionKVxuICAgIH0pLFxuICAgIE1hcmtkb3duKHtcbiAgICAgIC8vIFRPRE86IFN0YXJyeSBOaWdodFxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dvb29ybS9zdGFycnktbmlnaHQjZXhhbXBsZS1pbnRlZ3JhdGluZy13aXRoLW1hcmtkb3duLWl0XG4gICAgICAvLyBtYXJrZG93bkl0T3B0aW9uczoge31cbiAgICB9KSBhcyBhbnksXG4gICAgZXNsaW50KClcbiAgXVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvZGV2L3NoaXJhaGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Rldi9zaGlyYWhhL3Bvc3Rjc3MuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2Rldi9zaGlyYWhhL3Bvc3Rjc3MuY29uZmlnLmpzXCI7Ly8gcGFyc2VyXHJcbmltcG9ydCBzdWdhcnNzIGZyb20gJ3N1Z2Fyc3MnXHJcbi8vIHBsdWdpbnNcclxuaW1wb3J0IHBvc3Rjc3NJbXBvcnQgZnJvbSAncG9zdGNzcy1pbXBvcnQnXHJcbmltcG9ydCBwb3N0Y3NzSW1wb3J0RXh0R2xvYiBmcm9tICdwb3N0Y3NzLWltcG9ydC1leHQtZ2xvYidcclxuaW1wb3J0IHBvc3Rjc3NNaXhpbnMgZnJvbSAncG9zdGNzcy1taXhpbnMnXHJcbmltcG9ydCBwb3N0Y3NzSml0UHJvcHMgZnJvbSAncG9zdGNzcy1qaXQtcHJvcHMnXHJcbmltcG9ydCBwb3N0Y3NzTGlnaHRuaW5nQ1NTIGZyb20gJ3Bvc3Rjc3MtbGlnaHRuaW5nY3NzJ1xyXG5pbXBvcnQgY29tYmluZVNlbGVjdG9ycyBmcm9tICdwb3N0Y3NzLWNvbWJpbmUtZHVwbGljYXRlZC1zZWxlY3RvcnMnXHJcbmltcG9ydCBjb21iaW5lTWVkaWFRdWVyeSBmcm9tICdwb3N0Y3NzLWNvbWJpbmUtbWVkaWEtcXVlcnknXHJcbi8vIG9wZW4tcHJvcHNcclxuaW1wb3J0IE9wZW5Qcm9wcyBmcm9tICdvcGVuLXByb3BzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHZpdGUgPSB7XHJcbiAgcGFyc2VyOiBzdWdhcnNzLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHBvc3Rjc3NJbXBvcnQoKSxcclxuICAgIHBvc3Rjc3NJbXBvcnRFeHRHbG9iKCksXHJcbiAgICBwb3N0Y3NzTWl4aW5zKCksXHJcbiAgICBwb3N0Y3NzSml0UHJvcHMoT3BlblByb3BzKSxcclxuICAgIGNvbWJpbmVTZWxlY3RvcnMoKSxcclxuICAgIGNvbWJpbmVNZWRpYVF1ZXJ5KCksXHJcbiAgICBwb3N0Y3NzTGlnaHRuaW5nQ1NTKHtcclxuICAgICAgYnJvd3NlcnM6ICdkZWZhdWx0cyBhbmQgc3VwcG9ydHMgY3NzLWNhc2NhZGUtbGF5ZXJzJyxcclxuICAgICAgbGlnaHRuaW5nY3NzT3B0aW9uczoge1xyXG4gICAgICAgIGRyYWZ0czoge1xyXG4gICAgICAgICAgbmVzdGluZzogdHJ1ZSxcclxuICAgICAgICAgIGN1c3RvbU1lZGlhOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeyBlbnYsIGZpbGUgfSkgPT4gKHtcclxuICBwYXJzZXI6IGZpbGUuZXh0bmFtZSA9PT0gJy5zc3MnID8gc3VnYXJzcyA6IGZhbHNlLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHBvc3Rjc3NJbXBvcnQoKSxcclxuICAgIHBvc3Rjc3NJbXBvcnRFeHRHbG9iKCksXHJcbiAgICBwb3N0Y3NzTWl4aW5zKCksXHJcbiAgICBwb3N0Y3NzSml0UHJvcHMoT3BlblByb3BzKSxcclxuICAgIGNvbWJpbmVTZWxlY3RvcnMoKSxcclxuICAgIGNvbWJpbmVNZWRpYVF1ZXJ5KCksXHJcbiAgICBwb3N0Y3NzTGlnaHRuaW5nQ1NTKHtcclxuICAgICAgYnJvd3NlcnM6ICdkZWZhdWx0cyBhbmQgc3VwcG9ydHMgY3NzLWNhc2NhZGUtbGF5ZXJzJyxcclxuICAgICAgbGlnaHRuaW5nY3NzT3B0aW9uczoge1xyXG4gICAgICAgIG1pbmlmeTogZW52ID09PSAncHJvZHVjdGlvbicgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgZHJhZnRzOiB7XHJcbiAgICAgICAgICBuZXN0aW5nOiB0cnVlLFxyXG4gICAgICAgICAgY3VzdG9tTWVkaWE6IHRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVAsU0FBUyxvQkFBb0I7QUFDcFIsU0FBUyxlQUFlO0FBRXhCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sY0FBYztBQUNyQixPQUFPLFlBQVk7OztBQ05uQixPQUFPLGFBQWE7QUFFcEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyx5QkFBeUI7QUFDaEMsT0FBTyxzQkFBc0I7QUFDN0IsT0FBTyx1QkFBdUI7QUFFOUIsT0FBTyxlQUFlO0FBRWYsSUFBTSxPQUFPO0FBQUEsRUFDbEIsUUFBUTtBQUFBLEVBQ1IsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QscUJBQXFCO0FBQUEsSUFDckIsY0FBYztBQUFBLElBQ2QsZ0JBQWdCLFNBQVM7QUFBQSxJQUN6QixpQkFBaUI7QUFBQSxJQUNqQixrQkFBa0I7QUFBQSxJQUNsQixvQkFBb0I7QUFBQSxNQUNsQixVQUFVO0FBQUEsTUFDVixxQkFBcUI7QUFBQSxRQUNuQixRQUFRO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0Y7OztBRHBCQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixLQUFLLEVBQUUsY0FBUTtBQUFBLEVBQ2YsU0FBUztBQUFBLElBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDcEMsT0FBTztBQUFBLElBQ1AsUUFBUTtBQUFBLE1BQ04sU0FBUyxRQUFRLGdCQUFnQjtBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFNBQVMsQ0FJVCxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsRUFDVDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
