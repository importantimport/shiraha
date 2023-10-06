import type { ComplexStyleRule } from '@vanilla-extract/css'

import { opacity, state } from '../../utils/color'
import { vars } from '../../vars.css'

export const baseCard = {
  ':disabled': {
    backgroundColor: opacity(vars.color.surfaceVariant, 38),
  },
  'borderRadius': 12,
  'selectors': {
    '&:active:not(:disabled)': {
      scale: 0.95,
    },
  },
} as const satisfies ComplexStyleRule

export const elevatedCard = {
  /** TODO: shadow-1 */
  backgroundColor: vars.color.surfaceContainerLow,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onSurface, 12, vars.color.surfaceContainerLow),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: state(vars.color.onSurface, 12, vars.color.surfaceContainerLow),
    },
    /** TODO: shadow-2 */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onSurface, 8, vars.color.surfaceContainerLow),
    },
  },
} as const satisfies ComplexStyleRule

export const filledCard = {
  backgroundColor: vars.color.surfaceContainerHighest,
  selectors: {
    '&:active:not(:disabled)': {
      backgroundColor: state(vars.color.onSurface, 12, vars.color.surfaceContainerHighest),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: state(vars.color.onSurface, 12, vars.color.surfaceContainerHighest),
    },
    /** TODO: shadow-1 */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: state(vars.color.onSurface, 8, vars.color.surfaceContainerHighest),
    },
  },
} as const satisfies ComplexStyleRule

export const outlinedCard = {
  ':disabled': {
    backgroundColor: 'transparent',
    // TODO: check
    borderColor: opacity(vars.color.outline, 12),
  },
  'backgroundColor': vars.color.surface,
  'borderColor': vars.color.outlineVariant,
  'selectors': {
    '&:active:not(:disabled)': {
      backgroundColor: opacity(vars.color.onSurface, 12),
    },
    '&:focus-visible:not(:disabled)': {
      backgroundColor: opacity(vars.color.onSurface, 12),
    },
    /** TODO: shadow-1 */
    '&:hover:not(:active, :disabled)': {
      backgroundColor: opacity(vars.color.onSurface, 8),
    },
  },
} as const satisfies ComplexStyleRule
