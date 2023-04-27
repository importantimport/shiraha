import type { StorybookConfig } from '@storybook/web-components-vite'

export const title = 'Shiraha'

export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    'storybook-addon-pseudo-states',
    '@whitespace/storybook-addon-html',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: { builder: '@storybook/builder-vite' },
  docs: { autodocs: 'tag' },
} as StorybookConfig
