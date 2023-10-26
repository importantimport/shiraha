import { globalStyle } from '@vanilla-extract/css'
import OP from 'open-props'

import { vars } from '../vars.css'

globalStyle('html', {
  accentColor: vars.color.primary,
  boxSizing: 'border-box',
  fontFamily: OP.fontSans,
  fontSize: OP.fontSize1,
  fontWeight: OP.fontWeight4,
  hyphens: 'auto',
  lineHeight: 1.5,
  overflowWrap: 'break-word',
  tabSize: 4,
  textWrap: 'pretty',
  wordWrap: 'break-word',
})

globalStyle('html:focus-within', {
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      scrollBehavior: 'auto',
    },
  },
  'scrollBehavior': 'smooth',
})
