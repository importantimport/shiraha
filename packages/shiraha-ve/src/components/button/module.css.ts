import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { vars } from '../../vars.css'

export const button = recipe({
  base: [{
    borderRadius: 20,
    display: 'inline-block',
    height: 40,
    margin: '0.25rem',
    minWidth: 40,
    padding: '0.5rem 0.75rem',
    textDecoration: 'none',
  }],
  // compoundVariants: [],
  defaultVariants: { type: 'filled' },
  variants: {
    type: {
      elevated: {},
      filled: {
        /**
         * CSS Relative colors
         * {@link https://caniuse.com/css-relative-colors}
         */
        ':disabled': {
          backgroundColor: `rgb(from ${vars.color.onSurface} r g b / 0.12)`,
          color: `rgb(from ${vars.color.onSurface} r g b / 0.38)`,
        },
        'backgroundColor': vars.color.primary,
        'color': vars.color.onPrimary,
      },
      filledTonal: {},
      outlined: {},
      text: {},
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
