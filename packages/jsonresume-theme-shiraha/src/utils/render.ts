import { ResumeSchema } from '@kurone-kito/jsonresume-types'
import robotoFlex from '@fontsource/roboto-flex/latin-400.css?inline'
import materialSymbols from '@material-symbols/font-400/outlined.css?inline'
import shiraha from 'shiraha/dist/shiraha.css?inline'

import { Head } from '../components/head'
import { html } from './html'

export const renderHead = (resume: ResumeSchema) =>
  html`
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${Head(resume.basics)}
    <style>${shiraha}</style>
    <style>${robotoFlex}</style>
    <style>${materialSymbols}</style>
  `

export const renderBody = (resume: ResumeSchema) => JSON.stringify(resume)
