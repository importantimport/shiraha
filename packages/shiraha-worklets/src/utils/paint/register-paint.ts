export const paint
  = (name: string): ClassDecorator =>
    (classRef: Function) =>
      registerPaint(name, classRef)
