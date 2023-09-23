import { type createGlobalTheme, createGlobalThemeContract } from '@vanilla-extract/css'

import { op } from './utils/op'

const color = {
  background: 'md-sys-color-background',
  error: 'md-sys-color-error',
  errorContainer: 'md-sys-color-error-container',
  inverseOnSurface: 'md-sys-color-inverse-on-surface',
  inversePrimary: 'md-sys-color-inverse-primary',
  inverseSurface: 'md-sys-color-inverse-surface',
  onBackground: 'md-sys-color-on-background',
  onError: 'md-sys-color-on-error',
  onErrorContainer: 'md-sys-color-on-error-container',
  onPrimary: 'md-sys-color-on-primary',
  onPrimaryContainer: 'md-sys-on-primary-container',
  onSecondary: 'md-sys-color-on-secondary',
  onSecondaryContainer: 'md-sys-color-on-secondary-container',
  onSurface: 'md-sys-color-on-surface',
  onSurfaceVariant: 'md-sys-color-on-surface-variant',
  onTertiary: 'md-sys-color-on-tertiary',
  onTertiaryContainer: 'md-sys-color-on-tertiary-container',
  outline: 'md-sys-color-outline',
  outlineVariant: 'md-sys-color-outline-variant',
  primary: 'md-sys-color-primary',
  primaryContainer: 'md-sys-color-primary-container',
  scrim: 'md-sys-color-scrim',
  secondary: 'md-sys-color-secondary',
  secondaryContainer: 'md-sys-color-secondary-container',
  shadow: 'md-sys-color-shadow',
  surface: 'md-sys-color-surface',
  surfaceBright: 'md-sys-color-surface-bright',
  surfaceContainer: 'md-sys-color-surface-container',
  surfaceContainerHigh: 'md-sys-color-surface-container-high',
  surfaceContainerHighest: 'md-sys-color-surface-container-highest',
  surfaceContainerLow: 'md-sys-color-surface-container-low',
  surfaceContainerLowest: 'md-sys-color-surface-container-lowest',
  surfaceDim: 'md-sys-color-surface-dim',
  surfaceTint: 'md-sys-color-surface-tint',
  surfaceVariant: 'md-sys-color-surface-variant',
  tertiary: 'md-sys-color-tertiary',
  tertiaryContainer: 'md-sys-color-tertiary-container',
} as const

export const vars = createGlobalThemeContract({
  color,
  op,
})

export type Theme = Parameters<typeof createGlobalTheme<typeof vars>>[2]
