# Shiraha

Material 3-inspired Classless CSS Framework.

## Usage

### HTML

Add this line to your page between `<head></head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/shiraha" />
```

### NPM

Install this package:

```bash
pnpm add -D shiraha # pnpm
# yarn add -D shiraha # yarn
# npm i -D shiraha # npm
```

Import it in CSS or JS:

```css
@import 'shiraha';
```

```ts
import 'shiraha'
```

#### Import SugarSS

Of course you can! shiraha exported the `src` folder.

You will need to additionally install [`open-props`](https://www.npmjs.com/package/open-props), as well as other plugins used in [PostCSS Config](../../postcss.config.js).

```css
@import 'shiraha/src/shiraha.sss';
```

```ts
import 'shiraha/src/shiraha.sss'
```

### Bookmarklet

TODO
