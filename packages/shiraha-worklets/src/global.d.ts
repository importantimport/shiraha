declare interface CSS {
  paintWorklet: {
    addModule(
      moduleURL: string,
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

declare function registerPaint(name: string, classRef: unknown): void
