export const registerProperties = (properties: CSSRegisterPropertyOptions[]) =>
  properties.forEach((property) => (CSS as unknown as CSS).registerProperty(property))
