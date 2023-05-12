export const addModule = (classReference: string) =>
  (CSS as unknown as CSS).paintWorklet.addModule(classReference)
