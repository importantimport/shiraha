import type { ComplexStyleRule } from '@vanilla-extract/css'

import OP from 'open-props'

import { state } from '../../utils/color'
import { vars } from '../../vars.css'

export const tonalButtonGlobal = {
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
} as const satisfies ComplexStyleRule

export const tonalButtonActive = {
  backgroundColor: state(vars.color.onSecondaryContainer, 12, vars.color.secondaryContainer),
} as const satisfies ComplexStyleRule

export const tonalButtonFocus = tonalButtonActive

export const tonalButtonHover = {
  backgroundColor: state(vars.color.onSecondaryContainer, 8, vars.color.secondaryContainer),
  boxShadow: OP.shadow1,
} as const satisfies ComplexStyleRule

export const tonalButtonSelectors = {
  selectors: {
    '&:active:not(:disabled)': tonalButtonActive,
    '&:focus:not(:disabled)': tonalButtonFocus,
    '&:hover:not(:active, :disabled)': tonalButtonHover,
  },
} as const satisfies ComplexStyleRule

export const tonalButton = {
  ...tonalButtonGlobal,
  ...tonalButtonSelectors,
}
