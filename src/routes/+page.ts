import { MarkDownLoader } from '$lib/markDownLoader';
import { browser } from '$app/environment';
import type { Post } from '$lib/model/post';

export const load: ({ e }: { e: any }) => Promise<{ postCount: number; posts: Post[]; tags: string[] }> = async ({ e }: { e: any }) => {
    const loader = new MarkDownLoader();
    const searchParams = browser && e.url.searchParams;
    const selectedTag = searchParams ? searchParams.get('tag') : '';
    const posts = selectedTag ? loader.loadPostsByTag(selectedTag) : loader.loadPosts();

    return {
        postCount: posts.length,
        posts: posts,
        tags: loader.loadTags()
    };
};
