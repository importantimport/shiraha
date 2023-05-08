export const registerProperties = (
  properties: {
    name: string
    syntax?: string
    inherits: boolean
    initialValue?: string | number
  }[],
) =>
  properties.forEach(property =>
    (window.CSS as unknown as CSS).registerProperty(property),
  )
