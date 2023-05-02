export const paint =
  (name: string): ClassDecorator =>
  (classRef: Function) =>
    globalThis.registerPaint(name, classRef)