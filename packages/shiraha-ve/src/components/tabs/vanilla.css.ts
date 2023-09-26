import { style } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

/** `[role="tablist"]` */
export const tablist = style({
  display: 'flex',
  width: '100%',
})

/** `[role="tab"]` */
export const tab = style({
  alignItems: 'center',
  borderBottomColor: vars.color.surfaceVariant,
  borderBottomWidth: 1,
  display: 'inline-flex',
  height: 48,
  justifyContent: 'center',
  width: '100%',
})

export const tabActive = style({
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
