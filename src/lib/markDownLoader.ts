import {Post} from "$lib/dto/post";

export class MarkDownLoader {
    modules;
    posts = [];
    tags = [];

    constructor() {
        this.modules = Object.entries(import.meta.glob(`/src/routes/posts/*/*.{md,svx,svelte.md}`, {eager: true}));
    }

    public loadPosts(): Post[] {
        let posts: any[] = [];
        this.modules.forEach(([path, module]) => {
            // @ts-ignore
            let metadata = module.metadata;
            metadata.path = this.getFileName(path);
            posts.push(this.parseMarkdown(metadata));
        });
        return this.sortPosts(posts);
    }

    public loadPostsByTag(tag: any): Post[] {
        let posts: Post[] = [];
        this.modules.forEach(([path, module]) => {
            // @ts-ignore
            let metadata = module.metadata;
            if (metadata.tags && metadata.tags.includes(tag)) {
                metadata.path = this.getFileName(path);
                posts.push(this.parseMarkdown(metadata));
            }
        });
        return this.sortPosts(posts);
    }

    private sortPosts(posts: Post[]): Post[] {
        return posts.sort((a, b) => {
            // @ts-ignore
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    }

    public getFileName(path: string): string {
        let pathArray = path.split('/');
        return pathArray[pathArray.length - 2];
    }

    private parseMarkdown(metadata: any): Post {
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

    public loadTags() {
        let tags = new Map<string, number>();
        this.modules.forEach(([path, module]) => {
            // @ts-ignore
            let metadata = module.metadata;
            if (metadata.tags) {
                metadata.tags.forEach((tag: string) => {
                    if (tags.has(tag)) {
                        // @ts-ignore
                        tags.set(tag, tags.get(tag) + 1);
                    } else {
                        tags.set(tag, 1);
                    }
                });
            }
        });

        // tag를 list로 변환
        let tagList:string[] = [];
        tags.forEach((value, key) => {
            tagList.push(key);
        });
        return tagList;
    }

    public loadMarkdownFiles() :Post[] {
        return [];
    }
}
