import type { ShirahaColorsOptions } from './types'

declare global {
  interface Window {
    shiraha:
      | {
          colors?: ShirahaColorsOptions
        }
      | undefined
  }
}
