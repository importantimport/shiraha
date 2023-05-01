import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Details: StoryObj = {
  render: () => html`<h3>Details</h3>
    <details>
      <summary>Details and summary element</summary>
      <p>Example paragraph text.</p>
    </details>`,
}

export default {
  title: 'typography/Details',
} as Meta
