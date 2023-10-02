import type { ComplexStyleRule } from '@vanilla-extract/css'

import { opacity } from '../../utils/color'
import { vars } from '../../vars.css'

export const baseButtonGlobal = {
  borderRadius: 20,
  color: vars.color.primary,
  cursor: 'pointer',
  display: 'inline-flex',
  gap: 8,
  height: 40,
  minWidth: 40,
  padding: '0.5rem 1.5rem',
  textDecoration: 'none',
  transition: 'ease-in-out 0.1s',
} as const satisfies ComplexStyleRule

export const baseButtonActive = {
  scale: 0.95,
} as const satisfies ComplexStyleRule

export const baseButtonWithIconChild = {
  paddingLeft: 16,
} as const satisfies ComplexStyleRule

export const baseButtonDisabled = {
  backgroundColor: opacity(vars.color.onSurface, 12),
  color: opacity(vars.color.onSurface, 38),
  cursor: 'not-allowed',
} as const satisfies ComplexStyleRule

export const baseButtonFocusVisible = {
  outline: `${vars.color.primary} solid 2px`,
  outlineOffset: 4,
} as const satisfies ComplexStyleRule

export const baseButtonSelectors = (iconButtonClass: string) => ({
  ':disabled': baseButtonDisabled,
  ':focus-visible': baseButtonFocusVisible,
  'selectors': {
    '&:active:not(:disabled)': baseButtonActive,
    [`&:has(.${iconButtonClass}:first-child:not(:last-child))`]: baseButtonWithIconChild,
  },
}) as const satisfies ComplexStyleRule

export const baseButton = (iconButtonClass: string) => ({
  ...baseButtonGlobal,
  ...baseButtonSelectors(iconButtonClass),
}) as const satisfies ComplexStyleRule
