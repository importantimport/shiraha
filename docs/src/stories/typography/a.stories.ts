import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Link: StoryObj = {
  render: () => html`
    <ul>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <li>
        <a href="#">Shiraha</a>
      </li>
      <li>
        <a href="#">Shiraha</a>
      </li>
    </ul>
  `,
}

export default {
  title: 'typography/Link',
} as Meta
