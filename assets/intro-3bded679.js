import{j as e}from"./jsx-runtime-6eef64cc.js";import{u as o}from"./index-dc1d5b46.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";function c(n={}){const{wrapper:s}=Object.assign({},o(),n.components);return s?e.jsx(s,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const r=Object.assign({h1:"h1",h2:"h2",a:"a",p:"p",img:"img",pre:"pre",code:"code",h3:"h3",blockquote:"blockquote"},o(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(r.h1,{id:"-shiraha-docs",children:"❄ Shiraha Docs"}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"shiraha",children:e.jsx(r.a,{href:"/docs/stories-packages-shiraha--docs",children:"Shiraha"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://npmjs.com/package/shiraha",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(r.img,{src:"https://img.shields.io/npm/v/shiraha",alt:"npm"})}),`
`,e.jsx(r.img,{src:"https://img.badgesize.io/https:/unpkg.com/shiraha?compression=brotli",alt:"brotli size"})]}),`
`,e.jsx(r.p,{children:"Material 3-inspired Classless CSS Framework."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<link rel="stylesheet" href="https://unpkg.com/shiraha" />
`})}),`
`,e.jsx(r.h2,{id:"shiraha-colors",children:e.jsx(r.a,{href:"/docs/stories-packages-shiraha-colors--docs",children:"Shiraha Colors"})}),`
`,e.jsxs(r.p,{children:[e.jsx(r.a,{href:"https://npmjs.com/package/shiraha-colors",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(r.img,{src:"https://img.shields.io/npm/v/shiraha-colors",alt:"npm"})}),`
`,e.jsx(r.img,{src:"https://img.badgesize.io/https:/unpkg.com/shiraha-colors?compression=brotli",alt:"brotli size"})]}),`
`,e.jsx(r.p,{children:"Browser script to generate colors for Shiraha / Material Web."}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-html",children:`<script type="module" src="https://esm.run/shiraha-colors" async><\/script>
`})}),`
`,e.jsx(r.h2,{id:"notes",children:"Notes"}),`
`,e.jsx(r.h3,{id:"shiraha-bookmarklet",children:"Shiraha Bookmarklet"}),`
`,e.jsx(r.p,{children:"Inspired by sakura.css"}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Source"}),`
`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-ts",children:`// ( javascript:
;() => {
  const error = () => alert('error')
  const element = (e: string) => Array.from(window.document.querySelectorAll(e))
  const load = () => {
    const link = element('link').filter(
      (e) => 'stylesheet' === e.getAttribute('rel') && e !== n
    )
    const style = element('style')
    const o = link.concat(style)
    o.forEach((e) => e.parentElement?.removeChild(e))
  }
  const n = window.document.createElement('link')
  n.addEventListener('error', error)
  n.addEventListener('load', load)
  n.setAttribute('rel', 'stylesheet')
  n.setAttribute('href', 'https://unpkg.com/shiraha')
  window.document.head.appendChild(n)
}
// )()
`})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsx(r.p,{children:"Button"}),`
`]}),`
`,e.jsx("a",{href:'javascript:(()=>{let e=()=>alert("error"),t=e=>Array.from(window.document.querySelectorAll(e)),r=()=>{let e=t("link").filter(e=>"stylesheet"===e.getAttribute("rel")&&e!==l),r=t("style"),n=e.concat(r);n.forEach(e=>e.parentElement?.removeChild(e))},l=window.document.createElement("link");l.addEventListener("error",e),l.addEventListener("load",r),l.setAttribute("rel","stylesheet"),l.setAttribute("href","https://unpkg.com/shiraha"),window.document.head.appendChild(l)})();',children:e.jsx(r.p,{children:"Shiraha Bookmarklet"})})]})}}export{c as default};
//# sourceMappingURL=intro-3bded679.js.map
