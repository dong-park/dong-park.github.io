import {Post} from "$lib/dto/post";

export class MarkDownLoader {
    modules;
    posts = [];

    constructor() {
        this.modules = Object.entries(import.meta.glob(`/src/routes/posts/*/*.{md,svx,svelte.md}`, {eager: true}));
    }

    public loadPosts(): any[] {
        let posts: any[] = [];
        this.modules.forEach(([path, module]) => {
            // @ts-ignore
            let metadata = module.metadata;
            metadata.path = this.getFileName(path);
            posts.push(this.parseMarkdown(metadata));
        });
        return posts;
    }

    public getFileName(path: string): string {
        let pathArray = path.split('/');
        return pathArray[pathArray.length - 2];
    }

    private parseMarkdown(metadata: any) {
        metadata = new Post({
            title: metadata.title,
            slug: metadata.slug,
            date: metadata.date,
            content: metadata.content,
            summary: metadata.summary,
            path: metadata.path
        });
        return metadata;
    }
}
