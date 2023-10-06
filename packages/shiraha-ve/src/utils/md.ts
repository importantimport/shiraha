/** {@link https://m3.material.io/styles/motion/easing-and-duration/tokens-specs} */
const motion = {
  emphasizedAccelerate: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)',
  emphasizedDecelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)',
  standard: 'cubic-bezier(0.2, 0.0, 0, 1.0)',
  standardAccelrate: 'cubic-bezier(0.3, 0, 1, 1)',
  standardDecelerate: 'cubic-bezier(0, 0, 0, 1)',
} as const

/** {@link https://m3.material.io/styles/motion/easing-and-duration/tokens-specs} */
const duration = {
/* eslint-disable perfectionist/sort-objects */
  short1: '50ms',
  short2: '100ms',
  short3: '150ms',
  short4: '200ms',
  medium1: '250ms',
  medium2: '300ms',
  medium3: '350ms',
  medium4: '400ms',
  long1: '450ms',
  long2: '500ms',
  long3: '550ms',
  long4: '600ms',
  extraLong1: '700ms',
  extraLong2: '800ms',
  extraLong3: '900ms',
  extraLong4: '1000ms',
/* eslint-enable perfectionist/sort-objects */
} as const

export const md = {
  duration,
  motion,
} as const
