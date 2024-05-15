import { MarkDownFactory } from '$lib/utils/markdown';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';

export const load: PageLoad = async (e) => {
    const loader = new MarkDownFactory();
    const searchParams = browser && e.url.searchParams;
    const selectedTag = searchParams ? searchParams.get('tag') : '';
    const posts = selectedTag ? loader.loadPostsByTag(selectedTag) : loader.loadPosts();

    return {
        postCount: posts.length,
        posts: posts,
        tags: loader.loadTags()
    };
};
