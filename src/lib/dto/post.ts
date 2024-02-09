export class Post {
    private title: string;
    private slug: string;
    private date: string;
    private content: string;
    private summary: string;
    private path: string;

    constructor({title, slug, date, content, summary, path}: {
        title: string,
        slug: string,
        date: string,
        content: string,
        summary: string,
        path: string
    }) {
        this.title = title;
        this.slug = slug;
        this.date = date;
        this.content = content;
        this.summary = summary;
        this.path = path;
    }
}
