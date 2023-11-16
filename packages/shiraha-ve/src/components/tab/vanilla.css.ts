import { style } from '@vanilla-extract/css'

import { opacity } from '../../utils/color'
import { vars } from '../../vars.css'

/** `[role="tablist"]` */
export const tablist = style({
  display: 'flex',
  width: '100%',
  borderBottomColor: vars.color.surfaceVariant,
  borderBottomWidth: 1,
})

/** `[role="tab"]` */
export const tab = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 48,
  borderBottomColor: 'transparent',
  borderBottomWidth: 2,
  ':focus-visible': {
    backgroundColor: opacity(vars.color.onSurface, 12),
    outline: `${vars.color.primary} auto 2px`,
  },
  ':hover': {
    backgroundColor: opacity(vars.color.onSurface, 8),
  },
})

export const tabActive = style({
  // backgroundColor: opacity(vars.color.onSurface, 12),
  borderBottomColor: vars.color.primary,
})

/** `[role="tabpanel"]` */
export const tabpanel = style({
  width: '100%',
  padding: 12,
})

export const tabpanelHidden = style({
  display: 'none',
})
