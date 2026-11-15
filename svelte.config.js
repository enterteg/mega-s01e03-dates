import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  extensions: ['.svelte', '.svx'],
  preprocess: [vitePreprocess({ script: true }), mdsvex({ extensions: ['.svx'], layout: { runbook: './src/lib/layouts/runbook.svelte' } })],
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build', strict: false }),
    alias: { '#lib': 'src/lib' },
    prerender: { entries: ['/kb', '/kb/triage/dedupe', '/kb/decisions/0001-dedupe-by-subject', '/kb/incidents/4471', '/kb/incidents/4471-split'] },
  },
};
