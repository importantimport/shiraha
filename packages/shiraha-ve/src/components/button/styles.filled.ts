import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { state } from '../../utils/color'
import { vars } from '../../vars.css'

export const filledButtonGlobal = {
  backgroundColor: vars.color.primary,
  color: vars.color.onPrimary,
} as const satisfies ComplexStyleRule

export const filledButtonActive = {
  backgroundColor: state(vars.color.onPrimary, 12, vars.color.primary),
} as const satisfies ComplexStyleRule

export const filledButtonFocus = filledButtonActive

export const filledButtonHover = {
  backgroundColor: state(vars.color.onPrimary, 8, vars.color.primary),
  boxShadow: OP.shadow1,
} as const satisfies ComplexStyleRule

export const filledButtonSelectors = {
  selectors: {
    '&:active:not(:disabled)': filledButtonActive,
    '&:focus:not(:disabled)': filledButtonFocus,
    '&:hover:not(:active, :disabled)': filledButtonHover,
  },
} as const satisfies ComplexStyleRule

export const filledButton = {
  ...filledButtonGlobal,
  ...filledButtonSelectors,
} as const satisfies ComplexStyleRule
