export const addModule = (classRef: string) =>
  (CSS as unknown as CSS).paintWorklet.addModule(classRef)
