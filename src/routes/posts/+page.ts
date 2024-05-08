import { MarkDownLoader } from '$lib/markDownLoader';
import type { PageLoad } from './$types';
import { browser } from '$app/environment';

export const load: PageLoad = async ({ url }) => {
    const loader = new MarkDownLoader();
    const searchParams = browser && url.searchParams;
    const selectedTag = searchParams ? searchParams.get('tag') : '';
    const posts = selectedTag ? loader.loadPostsByTag(selectedTag) : loader.loadPosts();

    return {
        postCount: posts.length,
        posts: posts,
        tags: loader.loadTags()
    };
};
