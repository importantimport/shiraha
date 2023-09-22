import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

/** {@link https://m3.material.io/styles/shape/shape-scale-tokens#a830b8f8-f15b-4be9-8b2e-839f78481cf2} */
export const shapeProperties = defineProperties({
  properties: {
    borderRadius: {
      // largeTop: '16px 16px 0 0',
      extraLarge: 28,
      extraSmall: 4,
      // extraLargeTop: '28px 28px 0 0',
      full: '100%',
      large: 16,
      medium: 12,
      // largeEnd: '0 16px 16px 0',
      none: 0,
      // extraSmallTop: '4px 4px 0 0',
      small: 8,
    },
  },
})

export const stateProperties = defineProperties({
  properties: {
    opacity: {
      dragged: 0.16,
      focus: 0.12,
      hover: 0.08,
      pressed: 0.12,
    },
  },
})

export const sprinkles = createSprinkles(
  shapeProperties,
  stateProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]
