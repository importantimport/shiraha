import { ComplexStyleRule } from '@vanilla-extract/css'

import { opacity, state } from '../../utils/color'
import { vars } from '../../vars.css'

export const baseButton = (iconButtonClass: string) => ({
  ':disabled': {
    backgroundColor: opacity(vars.color.onSurface, 12),
    color: opacity(vars.color.onSurface, 38),
  },
  'borderRadius': 20,
  'color': vars.color.primary,
  'display': 'inline-flex',
  'gap': 8,
  'height': 40,
  'margin': '0.25rem',
  'minWidth': 40,
  'overflow': 'hidden',
  'padding': '0.5rem 1.5rem',
  'selectors': {
    [`&:has(.${iconButtonClass}:first-child:not(last-child))`]: {
      paddingLeft: 16,
    },
  },
  'textDecoration': 'none',
}) satisfies ComplexStyleRule

export const elevatedButton = {
  /** TODO: shadow-1 */
  backgroundColor: vars.color.surfaceContainerLow,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.primary, 12, vars.color.surfaceContainerLow),
    },
    '&:focus-visible:not(:active, :disabled)': {
      backgroundColor: state(vars.color.primary, 12, vars.color.surfaceContainerLow),
    },
    /** TODO: shadow-2 */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.primary, 8, vars.color.surfaceContainerLow),
    },
  },
} satisfies ComplexStyleRule

export const filledButton = {
  backgroundColor: vars.color.primary,
  color: vars.color.onPrimary,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onPrimary, 12, vars.color.primary),
    },
    '&:focus-visible:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onPrimary, 12, vars.color.primary),
    },
    /** TODO: shadow */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onPrimary, 8, vars.color.primary),
    },
  },
} satisfies ComplexStyleRule

export const outlinedButton = {
  borderColor: vars.color.outline,
  borderWidth: 1,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
    },
    '&:focus-visible:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
      borderColor: vars.color.primary,
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 8),
    },
  },
} satisfies ComplexStyleRule

export const textButton = (iconButtonClass: string) => ({
  ':disabled': {
    backgroundColor: 'transparent',
    color: opacity(vars.color.onSurface, 38),
  },
  'padding': '0.5rem 0.75rem',
  'selectors': {
    '&:active:not(:disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
    },
    '&:focus-visible:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 12),
      borderColor: vars.color.primary,
    },
    '&:hover:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.primary, 8),
    },
    [`&:has(.${iconButtonClass}:first-child:not(last-child))`]: {
      paddingLeft: 12,
      paddingRight: 16,
    },
  },
}) satisfies ComplexStyleRule

export const tonalButton = {
  backgroundColor: vars.color.secondaryContainer,
  color: vars.color.onSecondaryContainer,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 12, vars.color.secondaryContainer),
    },
    '&:focus-visible:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 12, vars.color.secondaryContainer),
    },
    /** TODO: shadow */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onSecondaryContainer, 8, vars.color.secondaryContainer),
    },
  },
} satisfies ComplexStyleRule
