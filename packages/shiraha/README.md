# Shiraha

Material 3-inspired Classless CSS Framework.

## Usage

### CDN

Add this line to your page between `<head></head>`:

```html
<link rel="stylesheet" href="https://unpkg.com/shiraha" />
<link rel="stylesheet" href="https://unpkg.com/shiraha/dist/themes/baseline.css" />
```

### Nightly

```diff
- <link rel="stylesheet" href="https://unpkg.com/shiraha" />
+ <link rel="stylesheet" href="https://shiraha.js.org/nightly/shiraha.css" />
- <link rel="stylesheet" href="https://unpkg.com/shiraha/dist/themes/baseline.css" />
+ <link rel="stylesheet" href="https://shiraha.js.org/nightly/themes/baseline.css" />
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
@import 'shiraha/dist/themes/baseline.css';
```

```ts
import 'shiraha'
import 'shiraha/dist/themes/baseline.css'
```

#### Import SugarSS

shiraha exported the `src` folder.

You will need to additionally install [`open-props`](https://www.npmjs.com/package/open-props), as well as other plugins used in [PostCSS Config](../../postcss.config.js).

```css
@import 'shiraha/src/shiraha.sss';
@import 'shiraha/src/themes/baseline.sss';
```

```ts
import 'shiraha/src/shiraha.sss'
import 'shiraha/src/themes/baseline.sss'
```

### Bookmarklet

Look at the [Documentation](https://shiraha.js.org/?path=%2Fdocs%2Fstories-intro--docs#shiraha-bookmarklet)
