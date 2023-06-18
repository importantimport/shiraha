import type { CustomColor } from '@material/material-color-utilities'

declare global {
  namespace ShirahaColors {
    interface Options {
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
      /** @defaultValue false */
      brightnessSuffix?: boolean
      /** @defaultValue undefined */
      paletteTones?: number[]
      /** @defaultValue undefined */
      customColors?: CustomColor[]
      /** @defaultValue undefined */
      themeColor?: string
    }

    interface WorkerData {
      image: ImageBitmap
      options?: ShirahaColors.Options
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
