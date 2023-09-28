import { globalStyle } from '@vanilla-extract/css'

globalStyle('img, audio, video', {
  maxWidth: '100%',
})

globalStyle('figure, picture', {
  margin: '1rem 0',
})

// globalStyle('figcaption', {})
