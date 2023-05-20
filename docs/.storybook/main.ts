import type { StorybookConfig } from '@storybook/web-components-vite'

export const title = 'Shiraha'

export default {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
    '@whitespace/storybook-addon-html',
  ],
  core: { builder: '@storybook/builder-vite' },
  docs: { autodocs: 'tag' },
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  // shiraha body style fix
  previewBody: body => /* html */ `
    <style>
      body {
        max-width: inherit;
      }
      #root-inner {
        max-width: var(--shiraha-content-width);
        padding: var(--shiraha-content-padding);
        margin: 0 auto;
      }
    </style>
    ${body}
  `,
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
} as StorybookConfig
