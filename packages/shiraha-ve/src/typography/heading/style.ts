import type { ComplexStyleRule } from '@vanilla-extract/css'

export const h1 = {
  fontSize: 'clamp(2.49rem, 2.14rem + 1.73vw, 3.05rem)',
  marginTop: 0,
} as const satisfies ComplexStyleRule

export const h2 = {
  fontSize: 'clamp(2.07rem, 1.85rem + 1.13vw, 2.44rem)',
} as const satisfies ComplexStyleRule

export const h3 = {
  fontSize: 'clamp(1.73rem, 1.59rem + 0.69vw, 1.95rem)',
} as const satisfies ComplexStyleRule

export const h4 = {
  fontSize: 'clamp(1.44rem, 1.36rem + 0.38vw, 1.56rem)',
} as const satisfies ComplexStyleRule

export const h5 = {
  fontSize: 'clamp(1.2rem, 1.17rem + 0.15vw, 1.25rem)',
} as const satisfies ComplexStyleRule

export const h6 = {
  fontSize: 'clamp(0.8rem, 0.78rem + 0.1vw, 0.83rem)',
} as const satisfies ComplexStyleRule
