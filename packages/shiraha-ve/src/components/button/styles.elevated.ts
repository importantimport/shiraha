import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { state } from '../../utils/color'
import { vars } from '../../vars.css'

export const elevatedButtonGlobal = {
  backgroundColor: vars.color.surfaceContainerLow,
  boxShadow: OP.shadow1,
} as const satisfies ComplexStyleRule

export const elevatedButtonActive = {
  backgroundColor: state(vars.color.primary, 12, vars.color.surfaceContainerLow),
} as const satisfies ComplexStyleRule

export const elevatedButtonFocus = elevatedButtonActive

export const elevatedButtonHover = {
  backgroundColor: state(vars.color.primary, 8, vars.color.surfaceContainerLow),
  boxShadow: OP.shadow2,
} as const satisfies ComplexStyleRule

export const elevatedButtonSelectors = {
  selectors: {
    '&:active:not(:disabled)': elevatedButtonActive,
    '&:focus:not(:disabled)': elevatedButtonFocus,
    '&:hover:not(:active, :disabled)': elevatedButtonHover,
  },
} as const satisfies ComplexStyleRule

export const elevatedButton = {
  ...elevatedButtonGlobal,
  ...elevatedButtonSelectors,
} as const satisfies ComplexStyleRule
