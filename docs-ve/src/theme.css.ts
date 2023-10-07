import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'
import { baselineThemeDark, baselineThemeLight } from 'shiraha-ve/src/themes/baseline.css.ts'
import { vars } from 'shiraha-ve/src/vars.css.ts'

createGlobalTheme('html:not(.dark, .htw-dark)', vars, baselineThemeLight)
createGlobalTheme('html.dark, html.htw-dark', vars, baselineThemeDark)

// fix boxShadow
// globalStyle('#app > .histoire-generic-render-story', { margin: -12 })

// fix boxShadow
globalStyle('#app > .histoire-generic-render-story > *', { padding: 12 })

// fix font size
globalStyle('#app > .histoire-generic-render-story', { fontSize: '1rem' })
