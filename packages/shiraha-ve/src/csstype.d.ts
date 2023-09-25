import type { Properties as CSSProperties } from 'csstype'

declare module 'csstype' {
  interface Properties extends CSSProperties {
    /** {@link https://github.com/frenic/csstype/issues/175} */
    container?: string
    containerName?: string
    containerType?: string
    /** {@link https://github.com/frenic/csstype/issues/177} */
    textWrap?: string
  }
}
