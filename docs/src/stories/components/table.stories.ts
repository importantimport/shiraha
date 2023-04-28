import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

export const Table: StoryObj = {
  render: () => html`
    <table>
      <caption>
        Default values (enabled state)
      </caption>
      <thead>
        <tr>
          <th>Element</th>
          <th>Design attribute</th>
          <th>Role</th>
          <th>Token or value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowspan="3">
            <p>1. Container</p>
          </th>
          <td>
            <p>Color</p>
          </td>
          <td>
            <p>Surface container</p>
          </td>
          <td>
            <p>
              <a href="#">md.sys.color.surface-container</a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Elevation</p>
          </td>
          <td>
            <p>Level 2</p>
          </td>
          <td>
            <p>
              <a href="#">md.sys.elevation.level2</a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p>Shape</p>
          </td>
          <td>
            <p>None</p>
          </td>
          <td>
            <p>
              <a href="#">md.sys.shape.corner.none</a>
            </p>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Element</td>
          <td>Design attribute</td>
          <td>Role</td>
          <td>Token or value</td>
        </tr>
      </tfoot>
    </table>
  `,
}

export default {
  title: 'components/Table',
} as Meta
