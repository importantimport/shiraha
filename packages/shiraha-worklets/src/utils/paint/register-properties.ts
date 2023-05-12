export const registerProperties = (
  properties: {
    name: string
    syntax?: string
    inherits: boolean
    initialValue?: string | number
  }[],
) => {
  for (const property of properties) (window.CSS as unknown as CSS).registerProperty(property)
}
