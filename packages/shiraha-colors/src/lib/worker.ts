import { argbFromRgb, QuantizerCelebi, Score } from '@material/material-color-utilities'
import { themeFromSourceColor } from 'mcu-extra'

addEventListener('message', async ({ data: { image } }: MessageEvent<ShirahaColors.WorkerData>) => {
  const canvas = new OffscreenCanvas(image.width, image.height)
  const context = canvas.getContext('2d')

  if (!context)
    return

  context.drawImage(image, 0, 0)

  const { data: imageBytes } = context.getImageData(0, 0, image.width, image.height)

  const pixels: number[] = []
  for (let index = 0; index < imageBytes.length; index += 4) {
    const r = imageBytes[index]
    const g = imageBytes[index + 1]
    const b = imageBytes[index + 2]
    const a = imageBytes[index + 3]
    if (a < 255)
      continue

    const argb = argbFromRgb(r, g, b)
    pixels.push(argb)
  }

  // Convert Pixels to Material Colors
  const result = QuantizerCelebi.quantize(pixels as unknown as number[], 128)
  const ranked = Score.score(result)
  const top = ranked[0]

  const theme = themeFromSourceColor(top)

  postMessage(theme)
}, false)
