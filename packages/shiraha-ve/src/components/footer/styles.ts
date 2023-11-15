import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

/** `:where(footer)` */
export const footer = {
  backgroundColor: vars.color.surfaceContainer,
  marginTop: '1.5rem',
  padding: '1.5rem 0',
  width: '100%',
} as const satisfies ComplexStyleRule

/** `:where(footer):has(+ footer)` (first footer) */
export const footerHasFooter = {
  borderBottomLeftRadius: '0 !important',
  borderBottomRightRadius: '0 !important',
} as const satisfies ComplexStyleRule

/** `:where(footer+footer)` (second footer) */
export const footerFooter = {
  borderTopLeftRadius: '0 !important',
  borderTopRightRadius: '0 !important',
  marginTop: 1,
} as const satisfies ComplexStyleRule

/** `:where(:not(main) footer)` */
export const notMainFooter = {
  // TODO: container like `main`
} as const satisfies ComplexStyleRule

/** `:where(main footer)` */
export const mainFooter = {
  borderRadius: '2rem',
  padding: '2rem',
} as const satisfies ComplexStyleRule
