export const paint
  = (name: string): ClassDecorator =>
    (classReference: unknown) =>
      registerPaint(name, classReference)
