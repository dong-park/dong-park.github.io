import { MarkDownFactory } from '$lib/utils/markdown';
import { browser } from '$app/environment';
import type { PageLoad } from '../../../.svelte-kit/types/src/routes/$types';

export const load: PageLoad = async ({ url }) => {
    const loader = new MarkDownFactory();
    const searchParams = browser && url.searchParams;
    const selectedTag = searchParams ? searchParams.get('tag') : '';
    const posts = selectedTag ? loader.loadPostsByTag(selectedTag) : loader.loadPosts('journal');

    return {
        postCount: posts.length,
        posts: posts,
        tags: loader.loadTags()
    };
};
