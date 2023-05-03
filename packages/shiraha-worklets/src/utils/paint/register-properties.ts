export const registerProperties = (
  properties: {
    name: string
    syntax?: string
    inherits: boolean
    initialValue?: string | number
  }[]
) =>
  properties.forEach((property) =>
    (CSS as unknown as CSS).registerProperty(property)
  )
