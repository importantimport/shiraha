import type { CustomColor } from '@material/material-color-utilities'

declare global {
  namespace ShirahaColors {
    interface Options {
      /** @defaultValue false */
      brightnessSuffix?: boolean
      /** @defaultValue undefined */
      customColors?: CustomColor[]
      /**
       * @defaultValue
       * ```ts
       * globalThis.matchMedia('(prefers-color-scheme: dark)').matches
       *   ? true
       *   : false
       * ```
       */
      dark?: boolean
      /** @defaultValue undefined */
      paletteTones?: number[]
      /** @defaultValue document.body */
      target?: HTMLElement
      /** @defaultValue undefined */
      themeColor?: string
    }
  }

  interface Window {
    shiraha:
    | {
      colors?: ShirahaColors.Options
    }
    | undefined
  }
}
