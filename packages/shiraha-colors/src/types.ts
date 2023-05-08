import type {
  CustomColor,
  applyTheme,
} from '@importantimport/material-color-utilities'

type ApplyTheme = Parameters<typeof applyTheme>[1]

export interface ShirahaColorsOptions {
  /**
   * @defaultValue
   * ```ts
   * globalThis.matchMedia('(prefers-color-scheme: dark)').matches
   *   ? true
   *   : false
   * ```
   */
  dark?: ApplyTheme['dark']
  /** @defaultValue document.body */
  target?: ApplyTheme['target']
  /** @defaultValue true */
  brightnessSuffix?: ApplyTheme['brightnessSuffix']
  /** @defaultValue undefined */
  paletteTones?: ApplyTheme['paletteTones']
  /** @defaultValue undefined */
  customColors?: CustomColor[]
  /** @defaultValue undefined */
  themeColor?: string
}
