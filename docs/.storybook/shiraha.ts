import { create } from '@storybook/theming/create'

// const cssVar = (property: string) =>
//   getComputedStyle(document.body).getPropertyValue(property)

export default create({
  base: 'dark',
  brandTitle: 'Shiraha',

  // brandUrl: 'shiraha.js.org',
  // brandTarget: '_self'

  // colorPrimary: cssVar('--md-sys-color-primary'),
  // colorSecondary: cssVar('--md-sys-color-secondary'),

  // appBg: cssVar('--md-sys-color-background')
  // appContentBg: 'var(--md-sys-color-background)',

  // textColor: 'var(--md-sys-color-on-background)'
})
