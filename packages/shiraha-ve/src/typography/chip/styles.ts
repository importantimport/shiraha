import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export const chip = {
  backgroundColor: vars.color.surfaceContainerLow,
  borderRadius: '9999px',
  color: vars.color.primary,
  display: 'inline-block',
  fontSize: 14,
  marginRight: '4px',
  paddingBlock: '2px',
  paddingInline: '8px',
  textDecoration: 'none',
} as const satisfies ComplexStyleRule

export const chipHover = {
  backgroundColor: vars.color.secondaryContainer,
} as const satisfies ComplexStyleRule
