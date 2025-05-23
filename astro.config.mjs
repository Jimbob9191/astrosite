import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  integrations: [
    tailwind(),
    prefetch({
      throttle: 3
    })
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});