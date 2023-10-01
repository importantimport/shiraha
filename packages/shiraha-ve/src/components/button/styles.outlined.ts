import type { ComplexStyleRule } from '@vanilla-extract/css'

import { opacity } from '../../utils/color'
import { vars } from '../../vars.css'

export const outlinedButtonGlobal = {
  borderColor: vars.color.outline,
  borderWidth: 1,
  /** (8px - 1px) (24px - 1px) */
  padding: '7px 23px',
} as const satisfies ComplexStyleRule

export const outlinedButtonActive = {
  backgroundColor: opacity(vars.color.primary, 12),
} as const satisfies ComplexStyleRule

export const outlinedButtonFocus = {
  ...outlinedButtonActive,
  borderColor: vars.color.primary,
} as const satisfies ComplexStyleRule

export const outlinedButtonHover = {
  backgroundColor: opacity(vars.color.primary, 8),
} as const satisfies ComplexStyleRule

export const outlinedButtonWithIconChild = {
  /** (16px - 1px) */
  paddingLeft: 15,
} as const satisfies ComplexStyleRule

export const outlinedButtonSelectors = (iconButtonClass: string) => ({
  selectors: {
    '&:active:not(:disabled)': outlinedButtonActive,
    '&:focus:not(:disabled)': outlinedButtonFocus,
    '&:hover:not(:active, :disabled)': outlinedButtonHover,
    [`&:has(.${iconButtonClass}:first-child:not(:last-child))`]: outlinedButtonWithIconChild,
  },
}) as const satisfies ComplexStyleRule

export const outlinedButton = (iconButtonClass: string) => ({
  ...outlinedButtonGlobal,
  ...outlinedButtonSelectors(iconButtonClass),
}) as const satisfies ComplexStyleRule
