import{j as n}from"./jsx-runtime-6eef64cc.js";import{M as t}from"./index-dc14a54b.js";import{u as r}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-b697b554.js";import"../sb-preview/runtime.js";import"./chunk-4NMOSTKD-052c8761.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const h=`# Shiraha

Material 3-inspired Classless CSS Framework.

## Usage

### NPM

Install this package:

\`\`\`bash
pnpm add -D shiraha # pnpm
# yarn add -D shiraha # yarn
# npm i -D shiraha # npm
\`\`\`

### CDN

#### Stable

You can get the \`shiraha\` package from your favorite CDN.

For example, unpkg and jsdelivr:

\`\`\`html
<!-- unpkg -->
<link rel="stylesheet" href="https://unpkg.com/shiraha" />
<!-- equal <link rel="stylesheet" href="https://unpkg.com/shiraha/dist/shiraha.css" /> -->

<!-- jsdelivr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha" />
<!-- equal <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shiraha/dist/shiraha.css" /> -->
\`\`\`

#### Nightly

You can get the nightly build from \`shiraha.js.org/nightly\`, This path provides
only the \`dist\`.

Please note that everything should be considered unstable.

\`\`\`html
<!-- shiraha.js.org/nightly -->
<link rel="stylesheet" href="https://shiraha.js.org/nightly/shiraha.css" />
\`\`\`

### Import

#### Base

The base style of Shiraha, not including themes.

\`\`\`ts
import 'shiraha'

// or
// import 'shiraha/dist/shiraha.css'

// source (sugarss)
// import 'shiraha/src/shiraha.sss'
\`\`\`

#### Themes

You may want to use your own theme or generate a theme through [Shiraha Colors](../shiraha-colors/) / [Material Color Utilities](https://github.com/material-foundation/material-color-utilities),
so Shiraha does not come with a theme.

If you only need some preset themes, simply import them manually:

\`\`\`ts
// baseline theme
import 'shiraha/dist/themes/baseline.css'
// source (sugarss)
// import 'shiraha/src/themes/baseline.sss'

// yuki theme
import 'shiraha/dist/themes/yuki.css'
// source (sugarss)
// import 'shiraha/src/themes/yuki.sss'
\`\`\`

#### Addons

Shiraha base styles are classless whenever possible,
while some that require class names or are not suitable to be enabled by default will become addons.

For a detailed description of each addon, please see [\`shiraha.js.org\`](https://shiraha.js.org).

\`\`\`ts
import 'shiraha/dist/addons/chips.css'

// source (sugarss)
// import 'shiraha/src/addons/chips.sss'
\`\`\`
`;function a(s){return n.jsx(t,{children:h})}function j(s={}){const{wrapper:e}=Object.assign({},r(),s.components);return e?n.jsx(e,Object.assign({},s,{children:n.jsx(a,s)})):a()}export{j as default};
//# sourceMappingURL=shiraha-94ebd866.js.map
