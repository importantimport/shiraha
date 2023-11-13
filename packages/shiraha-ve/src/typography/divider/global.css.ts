import { globalStyle } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

globalStyle('hr', {
  borderTopWidth: 1,
  color: vars.color.outlineVariant,
  height: 0,
  margin: '1.5rem 0',
})
