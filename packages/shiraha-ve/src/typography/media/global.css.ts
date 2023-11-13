import { globalStyle } from '@vanilla-extract/css'

globalStyle(':where(img, audio, video)', {
  borderRadius: 2,
  maxWidth: '100%',
})

globalStyle(':where(figure, picture)', {
  margin: '1rem 0',
})

globalStyle(':where(figcaption)', {
  fontSize: '0.875em',
})
