import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Headings: StoryObj = {
  render: () => html`
    <main>
      <h1>Heading 1</h1>
      <h2><a href="#">Heading 2 with Anchor</a></h2>
      <h2><a href="/test">Heading 2 with Relative Link</a></h2>
      <h2><a href="https://example.com">Heading 2 with Absolute Link</a></h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </main>
  `,
}

export default {
  title: 'typography/Headings',
} as Meta
