import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://pravda.klara.works',
	integrations: [mdx(), sitemap()],
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
});
