import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export * from './styles.base'
export * from './styles.elevated'
export * from './styles.filled'
export * from './styles.outlined'
export * from './styles.text'
export * from './styles.tonal'

export const iconButton = {
  width: 40,
  padding: 10,
  overflow: 'hidden',
  fontSize: 20,
} as const satisfies ComplexStyleRule

export const iconOutlinedButton = {
  padding: 9,
} as const satisfies ComplexStyleRule

export const iconTextButton = {
  padding: 10,
  color: vars.color.onSurfaceVariant,
} as const satisfies ComplexStyleRule
