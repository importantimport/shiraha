import type { CustomColor } from '@importantimport/material-color-utilities'

export type ShirahaColorsOptions = {
  /**
   * CSS variable prefix.
   * @defaultValue 'md-sys-color'
   * @example 'onPrimary => --md-sys-color-on-primary'
   */
  prefix?: {
    color?: string

    palette?: string
  }
  /**
   * CSS color format.
   * @defaultValue 'hex'
   * @remarks hsl is not currently supported
   */
  colorFormat?: 'hex' | 'rgb'
  /**
   * @defaultValue 'internal'
   */
  mode?: 'internal' | 'inline'
  /**
   * @defaultValue `mode === 'internal' ? document.head : document.body`
   */
  target?: HTMLElement
  /**
   * @defaultValue []
   */
  paletteTones?: number[]

  customColors?: CustomColor[]
}
