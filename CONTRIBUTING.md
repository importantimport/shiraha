# Contributing to Shiraha

Hello! Glad you are interested in Shiraha.

## Quick Start

```bash
npm i -g pnpm # if you don't have pnpm
pnpm dlx degit importantimport/shiraha
cd shiraha
pnpm install
```

## [Shiraha VE](/packages/shiraha-ve/)

Currently the main code base for Shiraha. This package is written in TypeScript,
[Vanilla Extract](https://vanilla-extract.style) and
[Open Props](https://open-props.style/), so you need to know them.

The css files are distributed in different folders by type and are named as
follows:

- If the x style requires only a `.global.css.ts` or a `.vanilla.css.ts`, then
  no folder is created and it is named `x.{global, vanilla}.css.ts`.
- If the x style has both, create a folder and create `global.css.ts` and
  `vanilla.css.ts` under the folder.
- For simpler styles, use a single `styles.ts` file
- For complex styles, use the `styles.ts` file as an entry point to
  `styles.yyy.ts`, `styles.zzz.ts` or more...

## [Docs VE](/docs-ve/)

Use Histoire, the new documentation for Shiraha VE.

To view the documentation locally, you just need to run `pnpm run dev:ve`

It uses the Svelte `story.svelte`, and the folder and naming format should be
consistent with Shiraha VE.

> Note: `tsup --watch` only detects `.css.ts`, when you modify `styles.ts` you
> also need to <kbd>Ctrl</kbd> + <kbd>S</kbd> in the `*.css.ts` entry to save
> it.

## [Shiraha Colors](/packages/shiraha-colors/)

This script is generally considered to require few changes, but accepts new
features and bug fixes.

I don't think there is much to write here.

## [Shiraha](/packages/shiraha/)

Shiraha written using SugarSS. Can be used as a reference when improving Shiraha
VE, but this package no longer accepts PR (as it will be replaced by Shiraha VE)

## [Shiraha Worklets](/packages/shiraha-worklets/)

Abandoned package, no longer accepting PR.
