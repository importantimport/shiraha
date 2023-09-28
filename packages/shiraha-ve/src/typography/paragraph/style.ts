import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

export const p = {
  fontSize: OP.fontSize1,
} as const satisfies ComplexStyleRule

export const pNotFirstChild = {
  marginTop: 24,
} as const satisfies ComplexStyleRule
