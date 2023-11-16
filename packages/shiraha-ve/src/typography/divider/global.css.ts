import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

globalStyle('hr', {
  height: 0,
  margin: '1.5rem 0',
  color: vars.color.outlineVariant,
  borderTopWidth: 1,
})
