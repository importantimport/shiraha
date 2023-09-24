<div align="center">
<a href="https://github.com/importantimport/shiraha">
<img src="docs/public/favicon.svg" alt="shiraha" width="192px" />
</a>
</div>
<h1 align="center">Shiraha</h1>
<p align="center">Material 3-inspired Classless CSS Framework. [WIP]</p>
<div align="center">

**[<kbd> <br> Storybook <br> </kbd>](https://importantimport.github.io/shiraha)** 
**[<kbd> <br> Open in Stackblitz <br> </kbd>](https://stackblitz.com/github/importantimport/hsno)** 
**[<kbd> <br> Lume Theme Shiraha <br> </kbd>](https://github.com/importantimport/lume_theme_shiraha)**

</div>

---

<!-- ## ✨ Features

### Tight integration with `material-color-utilities` [WIP]

Use the dynamic color scheme from the MCU in the way you like.

### Built for semantic HTML [WIP]

HTML gets better with [semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics), [microdata](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata) and [microformats](https://developer.mozilla.org/en-US/docs/Web/HTML/microformats). Shiraha is ready for Machine-readable HTML.

### Compatible with some Rehype plugins [WIP]

Shiraha defaults to setting styles for Rehype plugins like `rehype-pretty-code`, `rehype-autolink-heading`, etc. -->

## ✨ Rewrite

Shiraha is being rewritten using Vanilla Extract!

The new documentation is temporarily deployed at https://shiraha.js.org/ve
and you can see the source code at [shiraha-ve](/packages/shiraha-ve/) and [docs-ve](/docs-ve/).

## 📝 Documentation

The documentation is located in the [`docs`](/docs/) folder and can be viewed from [shiraha.js.org](https://shiraha.js.org).

## 📦️ Packages

### [Shiraha](/packages/shiraha/)

[![npm](https://img.shields.io/npm/v/shiraha)](https://npmjs.com/package/shiraha)
![brotli size](https://img.badgesize.io/https:/unpkg.com/shiraha?compression=brotli)

Material 3-inspired Classless CSS Framework.

```html
<link rel="stylesheet" href="https://unpkg.com/shiraha" />
```

### [Shiraha Colors](/packages/shiraha-colors/)

[![npm](https://img.shields.io/npm/v/shiraha-colors)](https://npmjs.com/package/shiraha-colors)
![brotli size](https://img.badgesize.io/https:/unpkg.com/shiraha-colors?compression=brotli)

A browser script that will automatically extract the theme color from your current page.

```html
<script type="module" src="https://esm.run/shiraha-colors" async></script>
```

## 👥 Contributing

Welcome! Shiraha is still in the early stages of development and I would be happy to merge Pull Requests.

```bash
pnpm dlx degit importantimport/shiraha
pnpm install
pnpm -rF shiraha-docs dev
```

## 📄 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
