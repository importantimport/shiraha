import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

export * from './styles.base'
export * from './styles.elevated'
export * from './styles.filled'
export * from './styles.outlined'
export * from './styles.text'
export * from './styles.tonal'

export const iconButton = {
  fontSize: 20,
  padding: 10,
  width: 40,
} as const satisfies ComplexStyleRule

export const iconOutlinedButton = {
  padding: 9,
} as const satisfies ComplexStyleRule

export const iconTextButton = {
  color: vars.color.onSurfaceVariant,
  padding: 10,
} as const satisfies ComplexStyleRule
