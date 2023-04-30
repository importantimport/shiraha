import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const List: StoryObj = {
  render: () => html` <h3>Definition list</h3>
    <dl>
      <dt>Definition List Title</dt>
      <dd>This is a definition list division.</dd>

      <dt>Definition List Title 2</dt>
      <dd>This is a definition list division item with a lot more to say.</dd>
    </dl>
    <h3>Ordered List</h3>
    <ol>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ol>
    <h3>Unordered List</h3>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
    </ul>`,
}

export default {
  title: 'typography/List',
} as Meta
