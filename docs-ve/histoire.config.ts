import { HstSvelte } from '@histoire/plugin-svelte'
import { TonalPalette, argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities'
import { type HistoireConfig, defineConfig } from 'histoire'

const theme = themeFromSourceColor(argbFromHex('#6750a4'))

const extractGrayColorFromPalette
  = (palette: TonalPalette): HistoireConfig['theme']['colors']['gray'] =>
    Object.fromEntries(
      [50, 100, 200, 300, 400, 500, 600, 700, 750, 800, 850, 900]
        .map(value => [value, hexFromArgb(palette.tone(100 - (value / 10)))]),
    )

const extractPrimaryColorFromPalette
  = (palette: TonalPalette): HistoireConfig['theme']['colors']['primary'] =>
    Object.fromEntries(
      [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
        .map(value => [value, hexFromArgb(palette.tone(100 - (value / 10)))]),
    )

export default defineConfig({
  backgroundPresets: [
    {
      color: 'var(--md-sys-color-surface)',
      label: 'Surface',
    },
    {
      color: 'var(--md-sys-color-surface-container-lowest)',
      label: 'Surface Container Lowest',
    },
    {
      color: 'var(--md-sys-color-surface-container-low)',
      label: 'Surface Container Low',
    },
    {
      color: 'var(--md-sys-color-surface-container)',
      label: 'Surface Container',
    },
    {
      color: 'var(--md-sys-color-surface-container-high)',
      label: 'Surface Container High',
    },
    {
      color: 'var(--md-sys-color-surface-container-highest)',
      label: 'Surface Container Highest',
    },
    {
      color: 'transparent',
      label: 'Transparent',
    },
  ],
  plugins: [HstSvelte()],
  setupFile: './histoire.setup.ts',
  theme: {
    colors: {
      gray: extractGrayColorFromPalette(theme.palettes.neutral),
      primary: extractPrimaryColorFromPalette(theme.palettes.primary),
    },
    favicon: 'favicon.svg',
    logo: {
      dark: '/favicon.svg',
      light: '/favicon.svg',
      square: '/favicon.svg',
    },
    logoHref: 'https://github.com/importantimport/shiraha',
    storeColorScheme: true,
    title: 'Shiraha',
  },
  tree: { file: ({ path, title }) => [...path.slice(4).split('/').slice(0, -1).map(str => str.at(0).toUpperCase() + str.slice(1)), title] },
})
