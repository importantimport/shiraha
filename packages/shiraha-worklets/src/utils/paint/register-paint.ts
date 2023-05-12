export const paint
  = (name: string): ClassDecorator =>
    (classReference: Function) =>
      registerPaint(name, classReference)
