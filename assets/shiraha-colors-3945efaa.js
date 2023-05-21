import{j as t}from"./jsx-runtime-6eef64cc.js";import{M as o}from"./index-cd6d111a.js";import{u as e}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./iframe-2cc68d5f.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./index-d38538b0.js";import"./index-356e4a49.js";const i=`# Shiraha Colors

Browser script to generate colors for Shiraha / Material Web.

## Usage

\`\`\`html
<script type="module" src="https://esm.run/shiraha-colors" async><\/script>
\`\`\`

### nomodule

Add \`<script nomodule\` to be used in environments that do not support ES Module.

\`\`\`html
<head>
  <script type="module" src="https://esm.run/shiraha-colors" async><\/script>
  <script nomodule src="https://esm.run/shiraha-colors/nomodule" async><\/script>
</head>
\`\`\`

### Configuration

You can see all supported configuration options in [src/types.ts](src/types.ts).

\`\`\`html
<head>
  <script>
    shiraha = {
      colors: {
        /* Shiraha Colors Config */
      },
    }
  <\/script>
  <script type="module" src="https://esm.run/shiraha-colors" async><\/script>
</head>
\`\`\`

### with [Partytown](https://partytown.builder.io)

> Partytown does not support ES Module at this time. see [partytown#195](https://github.com/BuilderIO/partytown/issues/195)

\`\`\`html
<head>
  <script
    type="text/partytown"
    src="https://esm.run/shiraha-colors/nomodule"
    async
  ><\/script>
  <script>
    partytown = {
      forward: ['shiraha'],
    }
  <\/script>
  <script>
    /* Inlined Partytown Snippet */
  <\/script>
</head>
\`\`\`
`;function s(n){return t.jsx(o,{children:i})}function M(n={}){const{wrapper:r}=Object.assign({},e(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(s,n)})):s()}export{M as default};
//# sourceMappingURL=shiraha-colors-3945efaa.js.map
