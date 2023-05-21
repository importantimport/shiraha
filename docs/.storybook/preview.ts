import 'material-symbols/outlined.css'
import 'shiraha/src/shiraha.sss'
// import 'shiraha/src/themes/yuki.sss'
import 'shiraha/src/themes/baseline-tone-based.sss'

import { themes } from '@storybook/theming'
import type { Preview } from '@storybook/web-components'

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, brandTitle: 'Shiraha' },
      light: { ...themes.normal, brandTitle: 'Shiraha' },
    },
    html: {
      removeComments: true,
      root: '#root-inner',
    },
    options: {
      storySort: {
        order: ['stories', 'components', 'typography', 'addons', 'worklets', 'templates'],
      },
    },
  },
} as Preview
