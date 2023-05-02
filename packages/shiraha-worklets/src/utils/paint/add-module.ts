export const addModule = (classRef: unknown) =>
  (globalThis.CSS as unknown as CSS).paintWorklet.addModule(
    `data:application/javascript;charset=utf8,${encodeURIComponent(
      classRef.toString()
    )}`
  )
