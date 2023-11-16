import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../vars.css'

globalStyle('*, ::before, ::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      transitionDuration: '0.01ms !important',
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
    },
  },
  'borderColor': vars.color.primary,
  'borderStyle': 'solid',
  'borderWidth': 0,
  'boxSizing': 'inherit',
})

globalStyle('::selection', {
  color: vars.color.onPrimary,
  backgroundColor: vars.color.primary,
})
