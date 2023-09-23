import { type RecipeVariants, recipe } from '@vanilla-extract/recipes'

import * as styles from './style'

export const card = recipe({
  base: [styles.baseCard],
  defaultVariants: { type: 'filled' },
  variants: {
    type: {
      elevated: styles.elevatedCard,
      filled: styles.filledCard,
      outlined: styles.outlinedCard,
    },
  },
})

export type CardVariants = RecipeVariants<typeof card>
