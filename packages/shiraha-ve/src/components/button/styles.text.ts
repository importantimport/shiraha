import type { ComplexStyleRule } from '@vanilla-extract/css'

import { opacity } from '../../utils/color'
import { vars } from '../../vars.css'

export const textButtonGlobal = {
  ':disabled': {
    backgroundColor: 'transparent',
    color: opacity(vars.color.onSurface, 38),
  },
  'padding': '8px 12px',
} as const satisfies ComplexStyleRule

export const textButtonActive = {
  backgroundColor: opacity(vars.color.primary, 12),
} as const satisfies ComplexStyleRule

export const textButtonFocus = {
  ...textButtonActive,
  borderColor: vars.color.primary,
} as const satisfies ComplexStyleRule

export const textButtonHover = {
  backgroundColor: opacity(vars.color.primary, 8),
} as const satisfies ComplexStyleRule

export const textButtonWithIconChild = {
  paddingLeft: 12,
  paddingRight: 16,
}

export const textButtonSelectors = (iconButtonClass: string) => ({
  selectors: {
    '&:active:not(:disabled)': textButtonActive,
    '&:focus:not(:disabled)': textButtonFocus,
    '&:hover:not(:active, :disabled)': textButtonHover,
    [`&:has(.${iconButtonClass}:first-child:not(:last-child))`]: textButtonWithIconChild,
  },
}) as const satisfies ComplexStyleRule

export const textButton = (iconButtonClass: string) => ({
  ...textButtonGlobal,
  ...textButtonSelectors(iconButtonClass),
})
