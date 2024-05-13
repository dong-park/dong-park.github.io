import { Post } from '$lib/model/post';

export class MarkDownPostLoader {
	modules;
	posts = [];
	tags = [];

	constructor() {
		this.modules = Object.entries(import.meta.glob(`/src/routes/wikis/**/*.{md,svx,svelte.md}`, { eager: true }));
	}

	public loadPosts(pathName: string = ''): Post[] {
		let posts: any[] = [];
		this.modules.forEach(([path, module]) => {
			// @ts-ignore
			let metadata = module.metadata;

			let post;
			if (path.includes(`src/routes/${pathName}`)) {
				metadata.path = this.getFileName(path);
				post = this.parseMarkdown(metadata);
			}

			posts.push(post);
		});

		posts = this.sortPosts(posts);
		posts.forEach(post => {
			if (post.parent !== '') {
				let parentPost = posts.find((v) => v.path === post.parent);
				if (parentPost !== undefined) {
					parentPost.childs.push(post);
				};
			}
		});

		return posts;
	}

	public loadPostsChildren(pathName: string = ''): Post[] {
		let posts: any[] = [];
		const regex = new RegExp(`^${pathName}/[^/]+$`);
		this.modules.forEach(([path, module]) => {
			// @ts-ignore
			let metadata = module.metadata;
			if (metadata.path.match(regex)) {
				posts.push(this.parseMarkdown(metadata));
			}
		});

		return this.sortPosts(posts).reverse();
	}

	public loadPostsByTag(tag: any): Post[] {
		let posts: Post[] = [];
		this.modules.forEach(([path, module]) => {
			// @ts-ignore
			let metadata = module.metadata;
			if (metadata.tags && metadata.tags.includes(tag)) {
				metadata.path = this.getFileName(path);
				let post = this.parseMarkdown(metadata);
				posts.push(post);
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
		return pathArray.slice(4, -1).join('/');
	}

	private parseMarkdown(metadata: any): Post {
		// console.log(metadata)
		let pathArray = metadata.path.split('/');
		metadata = new Post({
			title: metadata.title,
			slug: metadata.slug,
			date: metadata.date,
			content: metadata.content,
			summary: metadata.summary,
			path: metadata.path,
			isOrigin: pathArray.length == 1,
			parent: pathArray.slice(0, -1).join('/')
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

		let tagList: string[] = [];
		tags.forEach((value, key) => {
			tagList.push(key);
		});
		return tagList;
	}
}
