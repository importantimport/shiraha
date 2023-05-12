/// <reference types="vite/client" />

declare interface CSS {
  paintWorklet: {
    addModule(
      moduleURL: string | URL,
      options?: { credentials: Request['credentials'] }
    ): Promise<void>
  }
  registerProperty(property: {
    name: string
    syntax?: string
    inherits: boolean
    initialValue?: string | number
  }): void
}

declare function registerPaint(name: string, classReference: unknown): void
