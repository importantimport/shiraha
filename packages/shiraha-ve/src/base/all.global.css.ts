import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../vars.css'

globalStyle('*, ::before, ::after', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
    },
  },
  'borderColor': vars.color.primary,
  'borderStyle': 'solid',
  'borderWidth': 0,
  'boxSizing': 'border-box',
})
