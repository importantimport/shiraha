import{x as l}from"./lit-element-9650d059.js";var i=Object.freeze,s=Object.defineProperty,c=(t,r)=>i(s(t,"raw",{value:i(r||t.slice())})),e;const o={render:()=>l(e||(e=c([`
    <button id=basis>
      Open the Basis dialog
    </button>

    <button id=icon>
      Open the icon dialog
    </button>

    <dialog aria-labelledby=b>
      <h2 id=b>Basic dialog title</h2>
      <form method=dialog>
        <p>A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.</p>
        <button>Action 2</button>
        <button type='submit'>Action 1</button>
      </form>
    </dialog>

    <dialog aria-labelledby=i>
      <span class="material-symbols-outlined">
      mobile_friendly
      </span>
      <h2 id=i>Dialog with hero icon</h2>
      <form method=dialog>
        <p>A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. </p>
        <button>Action 2</button>
        <button type='submit'>Action 1</button>
      </form>
    </dialog>

    <script>
      const basis = document.getElementById('basis');
      const icon = document.getElementById('icon');
      const d = document.querySelectorAll("dialog");

      basis.addEventListener('click', () => {
        d[0].showModal();
      });

      icon.addEventListener('click', () => {
        d[1].showModal();
      });
    <\/script>
  `])))},b={title:"addons/Dialog"};var a,n,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => html\`
    <button id=basis>
      Open the Basis dialog
    </button>

    <button id=icon>
      Open the icon dialog
    </button>

    <dialog aria-labelledby=b>
      <h2 id=b>Basic dialog title</h2>
      <form method=dialog>
        <p>A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.</p>
        <button>Action 2</button>
        <button type='submit'>Action 1</button>
      </form>
    </dialog>

    <dialog aria-labelledby=i>
      <span class="material-symbols-outlined">
      mobile_friendly
      </span>
      <h2 id=i>Dialog with hero icon</h2>
      <form method=dialog>
        <p>A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made. </p>
        <button>Action 2</button>
        <button type='submit'>Action 1</button>
      </form>
    </dialog>

    <script>
      const basis = document.getElementById('basis');
      const icon = document.getElementById('icon');
      const d = document.querySelectorAll("dialog");

      basis.addEventListener('click', () => {
        d[0].showModal();
      });

      icon.addEventListener('click', () => {
        d[1].showModal();
      });
    <\/script>
  \`
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};const m=["Dialog"];export{o as Dialog,m as __namedExportsOrder,b as default};
//# sourceMappingURL=dialog.stories-93392bde.js.map
