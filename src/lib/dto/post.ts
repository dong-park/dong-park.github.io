export class Post {
	private _title: string;
	private _slug: string;
	private _date: string;
	private _content: string;
	private _summary: string;
	private _path: string;

	get title(): string {
		return this._title;
	}

	set title(value: string) {
		this._title = value;
	}

	get slug(): string {
		return this._slug;
	}

	set slug(value: string) {
		this._slug = value;
	}

	get date(): string {
		return this._date;
	}

	set date(value: string) {
		this._date = value;
	}

	get content(): string {
		return this._content;
	}

	set content(value: string) {
		this._content = value;
	}

	get summary(): string {
		return this._summary;
	}

	set summary(value: string) {
		this._summary = value;
	}

	get path(): string {
		return this._path;
	}

	set path(value: string) {
		this._path = value;
	}

	constructor({ title, slug, date, content, summary, path }: {
		title: string,
		slug: string,
		date: string,
		content: string,
		summary: string,
		path: string
	}) {
		this._title = title;
		this._slug = slug;
		this._date = date;
		this._content = content;
		this._summary = summary;
		this._path = path;
	}
}
