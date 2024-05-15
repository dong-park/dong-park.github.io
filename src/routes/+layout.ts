import { MarkDownFactory } from '$lib/utils/markdown';
import type { PageLoad } from '../../.svelte-kit/types/src/routes/$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const loader = new MarkDownFactory();
	const posts = loader.loadPosts();

	return {
		postCount: posts.length,
		posts: posts,
		tags: loader.loadTags()
	};

}
