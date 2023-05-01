import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Breadcrumb: StoryObj = {
  render: () => html`<nav>
    <ol>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <span>/</span>
      <li>
        <a href="#">Components</a>
      </li>
      <span>/</span>
      <li>
        <span>Breadcrumb</span>
      </li>
    </ol>
  </nav>`,
}

export const BreadcrumbWithIcon: StoryObj = {
  render: () => html`<nav>
    <ol>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <span class="material-symbols-outlined">chevron_right</span>
      <li>
        <a href="#">Components</a>
      </li>
      <span class="material-symbols-outlined">chevron_right</span>
      <li>
        <span>Breadcrumb</span>
      </li>
    </ol>
  </nav>`,
}

export default {
  title: 'components/Breadcrumb',
} as Meta
