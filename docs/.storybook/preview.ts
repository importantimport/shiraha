import type { Preview } from '@storybook/web-components'

import 'shiraha/src/shiraha.sss'
import 'shiraha/src/themes/yuki.sss'

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} as Preview
