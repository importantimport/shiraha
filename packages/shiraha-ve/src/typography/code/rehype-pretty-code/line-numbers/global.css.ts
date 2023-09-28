/**
 * Line numbers
 * {@link https://rehype-pretty-code.netlify.app/}
 */

import { globalStyle } from '@vanilla-extract/css'

globalStyle('code', {
  counterReset: 'line',
})

globalStyle('code > [data-line]::before', {
  content: 'counter(line)',
  counterIncrement: 'line',
})
