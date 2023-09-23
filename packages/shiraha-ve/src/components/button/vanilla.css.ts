import { style } from '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import * as styles from './style'

export const buttonIcon = style({
  fontSize: '1.25rem !important',
  padding: 2,
})

export const button = recipe({
  base: [styles.baseButton(buttonIcon)],
  defaultVariants: { type: 'filled' },
  variants: {
    type: {
      elevated: styles.elevatedButton,
      filled: styles.filledButton,
      outlined: styles.outlinedButton,
      text: styles.textButton(buttonIcon),
      tonal: styles.tonalButton,
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
