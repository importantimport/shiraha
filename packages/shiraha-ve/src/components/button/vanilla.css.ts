import { style } from '@vanilla-extract/css'
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import * as styles from './styles'

export const buttonIcon = style({
  fontSize: '1.25rem !important',
  padding: 2,
})

export const button = recipe({
  base: [styles.baseButton(buttonIcon)],
  compoundVariants: [
    {
      style: styles.iconOutlinedButton,
      variants: { icon: true, type: 'outlined' },
    },
    {
      style: styles.iconTextButton,
      variants: { icon: true, type: 'text' },
    },
  ],
  defaultVariants: { icon: false, type: 'filled' },
  variants: {
    icon: {
      true: styles.iconButton,
    },
    type: {
      elevated: styles.elevatedButton,
      filled: styles.filledButton,
      outlined: styles.outlinedButton(buttonIcon),
      text: styles.textButton(buttonIcon),
      tonal: styles.tonalButton,
    },
  },
})

export type ButtonVariants = RecipeVariants<typeof button>
