import type { ComplexStyleRule } from '@vanilla-extract/css'

/** {@link https://www.builder.io/blog/css-gap} */
export const section = {
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
} as const satisfies ComplexStyleRule

export const sectionChild = {
  marginBottom: 0,
  marginTop: 0,
} as const satisfies ComplexStyleRule
