/**
 * Calculate Priority
 * @param image - HTML Image Element
 * @returns score (higher is better)
 */
const calculatePriority = ([image, index, length]: [HTMLImageElement, number, number]) =>
  (image.width + ((length - index) * 10))
  * (image.classList.contains('u-photo') ? 1.2 : 1)

export const getImageElement = (): HTMLImageElement | null => {
  const images = [...document.images]
    // width larger than or equal to 128px
    .filter(({ width }) => width >= 128)
    .map((image, index, array) => [image, index, array.length] as [HTMLImageElement, number, number])
    .sort((a, b) => calculatePriority(b) - calculatePriority(a))

  // eslint-disable-next-line unicorn/no-null
  return images[0][0] ?? null
}
