import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Dialog: StoryObj = {

  render: () => html`
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
    </script>
  `,
}

export default {
  title: 'components/Dialog',
} as Meta
