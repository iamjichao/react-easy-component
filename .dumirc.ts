import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-easy-component',
    prefersColor: {
      default: 'light',
      switch: false,
    },
    socialLinks: {
      github: 'https://github.com/',
    },
    footer: 'Copyright © 2023',
  },
});
