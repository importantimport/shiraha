import OP from 'open-props'

export const op = {
  shadowColor: 'shadow-color',
  shadowStrength: 'shadow-strength',
} as const

export const opLight: Record<keyof typeof op, string> = {
  shadowColor: OP.shadowColor,
  shadowStrength: OP.shadowStrength,
} as const

export const opDark: Record<keyof typeof op, string> = {
  shadowColor: OP['shadowColor@media:dark'],
  shadowStrength: OP['shadowStrength@media:dark'],
} as const
