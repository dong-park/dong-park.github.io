import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: './src/components',
			$stores: './src/stores',
			$assets: './src/assets',
			$static: './static',
		}
	}
};

export default config;
