// parser
import sugarss from 'sugarss'
// plugins
import postcssEasyImport from 'postcss-easy-import'
import postcssMixins from 'postcss-mixins'
import postcssJitProps from 'postcss-jit-props'
import postcssLightningCSS from 'postcss-lightningcss'
import combineSelectors from 'postcss-combine-duplicated-selectors'
import combineMediaQuery from 'postcss-combine-media-query'
// open-props
import OpenProps from 'open-props'

export default ({ env, file }) => ({
  parser: file.extname === '.sss' ? sugarss : false,
  plugins: [
    postcssEasyImport({ extensions: ['.sss', '.css'] }),
    postcssMixins({
      mixins: {
        theme: (_mixin, colorScheme) => ({
          '&': {
            '--shiraha-color-background-h': `var(--shiraha-color-background-h-${colorScheme})`,
            '--shiraha-color-background-s': `var(--shiraha-color-background-s-${colorScheme})`,
            '--shiraha-color-background-l': `var(--shiraha-color-background-l-${colorScheme})`,
            '--shiraha-color-content-h': `var(--shiraha-color-content-h-${colorScheme})`,
            '--shiraha-color-content-s': `var(--shiraha-color-content-s-${colorScheme})`,
            '--shiraha-color-content-l': `var(--shiraha-color-content-l-${colorScheme})`,
            '--shiraha-color-primary-h': `var(--shiraha-color-primary-h-${colorScheme})`,
            '--shiraha-color-primary-s': `var(--shiraha-color-primary-s-${colorScheme})`,
            '--shiraha-color-primary-l': `var(--shiraha-color-primary-l-${colorScheme})`,
            'color-scheme': colorScheme,
          },
        }),
      },
    }),
    postcssJitProps(OpenProps),
    combineSelectors(),
    combineMediaQuery(),
    postcssLightningCSS({
      browsers: 'defaults and supports css-cascade-layers',
      lightningcssOptions: {
        minify: env === 'production' ? true : false,
        drafts: {
          nesting: true,
          customMedia: true,
        },
      },
    }),
  ],
})
