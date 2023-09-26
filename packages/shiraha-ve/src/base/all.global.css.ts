import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../vars.css'

globalStyle('*, ::before, ::after', {
  borderColor: vars.color.primary,
  borderStyle: 'solid',
  borderWidth: 0,
  boxSizing: 'border-box',
})
