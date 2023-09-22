import { createGlobalTheme } from '@vanilla-extract/css'
import { baselineThemeDark, baselineThemeLight } from 'shiraha-ve/src/themes/baseline.css.ts'
import { vars } from 'shiraha-ve/src/vars.css.ts'

createGlobalTheme('html:not(.dark)', vars, baselineThemeLight)
createGlobalTheme('html.dark', vars, baselineThemeDark)
