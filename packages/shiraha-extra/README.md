# Shiraha Extra

> This package is currently unreleased.

```bash
pnpm add -D shiraha shiraha-extra # pnpm
# yarn add -D shiraha shiraha-extra # yarn
# npm i -D shiraha shiraha-extra # npm
```

## VitePress Theme

```ts
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
// import variables
import 'shiraha-extra/vitepress'
// import baseline theme
import 'shiraha/themes/baseline'

export DefaultTheme
```
