import { style } from '@vanilla-extract/css'

import { opacity } from '../../utils/color'
import { vars } from '../../vars.css'

/** `[role="tablist"]` */
export const tablist = style({
  borderBottomColor: vars.color.surfaceVariant,
  borderBottomWidth: 1,
  display: 'flex',
  width: '100%',
})

/** `[role="tab"]` */
export const tab = style({
  ':focus-visible': {
    backgroundColor: opacity(vars.color.onSurface, 12),
    outline: `${vars.color.primary} auto 2px`,
  },
  ':hover': {
    backgroundColor: opacity(vars.color.onSurface, 8),
  },
  'alignItems': 'center',
  'display': 'inline-flex',
  'height': 48,
  'justifyContent': 'center',
  'width': '100%',
})

export const tabActive = style({
  backgroundColor: opacity(vars.color.onSurface, 12),
  borderBottomColor: vars.color.primary,
  borderBottomWidth: 2,
})

/** `[role="tabpanel"]` */
export const tabpanel = style({
  padding: 12,
  width: '100%',
})

export const tabpanelHidden = style({
  display: 'none',
})
