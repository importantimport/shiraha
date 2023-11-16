import { globalStyle } from '@vanilla-extract/css'

globalStyle(':where(img, audio, video)', {
  maxWidth: '100%',
  borderRadius: 2,
})

globalStyle(':where(figure, picture)', {
  margin: '1rem 0',
})

globalStyle(':where(figcaption)', {
  fontSize: '0.875em',
})
