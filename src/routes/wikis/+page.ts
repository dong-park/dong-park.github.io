import { MarkDownFactory } from '$lib/utils/markdown';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';

export const load: PageLoad = async ({ url }) => {
    const loader = new MarkDownFactory();
    const searchParams = browser && url.searchParams;
    const selectedTag = searchParams ? searchParams.get('tag') : '';
    const posts = selectedTag ? loader.loadPostsByTag(selectedTag) : loader.loadPosts('wikis');

    return {
        postCount: posts.length,
        posts: posts,
        tags: loader.loadTags()
    };
};
