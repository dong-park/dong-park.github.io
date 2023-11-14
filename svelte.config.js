import adapter from '@sveltejs/adapter-static';
import {mdsvex} from 'mdsvex'
import {vitePreprocess} from '@sveltejs/kit/vite';

import mdConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: ['.svelte', '.md'],
    preprocess: [vitePreprocess({sass: true}), mdsvex(mdConfig)],
    kit: {
        adapter: adapter()
    },
};

export default config;
