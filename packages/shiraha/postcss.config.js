// parser
import sugarss from 'sugarss'
// plugins
import postcssEasyImport from 'postcss-easy-import'
import postcssMixins from 'postcss-mixins'
import postcssPresetEnv from 'postcss-preset-env'
// import cssnano from 'cssnano'

export default ({ file }) => ({
  parser: file.extname === '.sss' ? sugarss : false,
  plugins: [
    postcssEasyImport({ extensions: ['.sss'] }),
    postcssMixins(),
    postcssPresetEnv({
      browsers:
        'defaults and supports css-variables and supports prefers-color-scheme and supports css-cascade-layers',
      features: {
        'nesting-rules': true,
        'cascade-layers': true,
      },
    }),
    // cssnano(),
  ],
})
