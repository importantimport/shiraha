import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export const blockquote = {
  paddingLeft: 24,
  marginTop: 24,
  fontStyle: 'italic',
  borderLeftColor: vars.color.surfaceVariant,
  borderLeftWidth: 4,
} as const satisfies ComplexStyleRule
