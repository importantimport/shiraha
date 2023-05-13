import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const List: StoryObj = {
  render: () => html`
    <main>
      <h3>Definition list</h3>
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
        <li>
          List Item 4
          <ol>
            <li>List Item 5</li>
          </ol>
        </li>
      </ol>
      <h3>Unordered List</h3>
      <ul>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>
          List Item 4
          <ul>
            <li>List Item 5</li>
          </ul>
        </li>
      </ul>
    </main>
  `,
}

export default {
  title: 'typography/List',
} as Meta
