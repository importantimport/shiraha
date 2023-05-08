import type { CustomColor } from '@importantimport/material-color-utilities'

export interface ShirahaColorsOptions {
  /**
   * @defaultValue
   * ```ts
   * globalThis.matchMedia('(prefers-color-scheme: dark)').matches
   *   ? true
   *   : false
   * ```
   */
  dark?: boolean
  /** @defaultValue document.body */
  target?: HTMLElement
  /** @defaultValue true */
  brightnessSuffix?: boolean
  /** @defaultValue undefined */
  paletteTones?: number[]
  /** @defaultValue undefined */
  customColors?: CustomColor[]
  /** @defaultValue undefined */
  themeColor?: string
}
