import type { ComplexStyleRule } from '@vanilla-extract/css'

import { vars } from '../../vars.css'

/** `:where(footer)` */
export const footer = {
  width: '100%',
  padding: '1.5rem 0',
  marginTop: '1.5rem',
  backgroundColor: vars.color.surfaceContainer,
} as const satisfies ComplexStyleRule

/** `:where(footer):has(+ footer)` (first footer) */
export const footerHasFooter = {
  borderBottomRightRadius: '0 !important',
  borderBottomLeftRadius: '0 !important',
} as const satisfies ComplexStyleRule

/** `:where(footer+footer)` (second footer) */
export const footerFooter = {
  marginTop: 1,
  borderTopLeftRadius: '0 !important',
  borderTopRightRadius: '0 !important',
} as const satisfies ComplexStyleRule

/** `:where(:not(main) footer)` */
export const notMainFooter = {
  // TODO: container like `main`
} as const satisfies ComplexStyleRule

/** `:where(main footer)` */
export const mainFooter = {
  padding: '2rem',
  borderRadius: '2rem',
} as const satisfies ComplexStyleRule
