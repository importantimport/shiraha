import { assignVars, globalStyle } from '@vanilla-extract/css'

import { opDark, opLight } from '../utils/op'
import { type Theme, vars } from '../vars.css'

/** {@link https://m3.material.io/styles/color/the-color-system/tokens#e26e130c-fa67-48e1-81ca-d28f6e4ed398} */
export const baselineThemeLight = {
  color: {
    background: '#FEF7FF',
    outline: '#79747E',
    error: '#B3261E',
    errorContainer: '#F9DEDC',
    inverseOnSurface: '#F4EFF4',
    inversePrimary: '#D0BCFF',
    inverseSurface: '#313033',
    onBackground: '#1C1B1F',
    onError: '#FFFFFF',
    onErrorContainer: '#410E0B',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#21005E',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#1E192B',
    onSurface: '#1C1B1F',
    onSurfaceVariant: '#49454E',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#370B1E',
    outlineVariant: '#C4C7C5',
    primary: '#6750A4',
    primaryContainer: '#EADDFF',
    scrim: '#000000',
    secondary: '#625B71',
    secondaryContainer: '#E8DEF8',
    shadow: '#000000',
    surface: '#FEF7FF',
    surfaceBright: '#FEF7FF',
    surfaceContainer: '#F3EDF7',
    surfaceContainerHigh: '#ECE6F0',
    surfaceContainerHighest: '#E6E0E9',
    surfaceContainerLow: '#F7F2FA',
    surfaceContainerLowest: '#FFFFFF',
    surfaceDim: '#DED8E1',
    surfaceTint: '#6750A4',
    surfaceVariant: '#E7E0EC',
    tertiary: '#7D5260',
    tertiaryContainer: '#FFD8E4',
  },
  op: opLight,
} as const satisfies Theme

/** {@link https://m3.material.io/styles/color/the-color-system/tokens#e26e130c-fa67-48e1-81ca-d28f6e4ed398} */
export const baselineThemeDark = {
  color: {
    background: '#141218',
    outline: '#938F99',
    error: '#F2B8B5',
    errorContainer: '#8C1D18',
    inverseOnSurface: '#313033',
    inversePrimary: '#6750A4',
    inverseSurface: '#E6E1E5',
    onBackground: '#E6E1E5',
    onError: '#601410',
    onErrorContainer: '#F9DEDC',
    onPrimary: '#371E73',
    onPrimaryContainer: '#EADDFF',
    onSecondary: '#332D41',
    onSecondaryContainer: '#E8DEF8',
    onSurface: '#E6E1E5',
    onSurfaceVariant: '#CAC4D0',
    onTertiary: '#492532',
    onTertiaryContainer: '#FFD8E4',
    outlineVariant: '#444746',
    primary: '#D0BCFF',
    primaryContainer: '#4F378B',
    scrim: '#000000',
    secondary: '#CCC2DC',
    secondaryContainer: '#4A4458',
    shadow: '#000000',
    surface: '#141218',
    surfaceBright: '#3B383E',
    surfaceContainer: '#211F26',
    surfaceContainerHigh: '#2B2930',
    surfaceContainerHighest: '#36343B',
    surfaceContainerLow: '#1D1B20',
    surfaceContainerLowest: '#0F0D13',
    surfaceDim: '#141218',
    surfaceTint: '#D0BCFF',
    surfaceVariant: '#49454F',
    tertiary: '#EFB8C8',
    tertiaryContainer: '#633B48',
  },
  op: opDark,
} as const satisfies Theme

globalStyle(':root, :host', {
  '@media': {
    '(perfers-color-scheme: dark)': {
      colorScheme: 'dark',
      vars: assignVars(vars, baselineThemeDark),
    },
    '(perfers-color-scheme: light)': {
      colorScheme: 'light',
      vars: assignVars(vars, baselineThemeLight),
    },
  },
})

globalStyle('[data-theme="dark"], .dark', {
  colorScheme: 'dark',
  vars: assignVars(vars, baselineThemeDark),
})

globalStyle('[data-theme="light"], .light', {
  colorScheme: 'light',
  vars: assignVars(vars, baselineThemeLight),
})
