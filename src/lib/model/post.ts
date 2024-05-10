export class Post {
	private _title: string;
	private _slug: string;
	private _date: string;
	private _content: string;
	private _summary: string;
	private _path: string;
	private _isOrigin: boolean;
	private _parent: string;
	private _childs: Post[];
	private _show: boolean;

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

	get isOrigin(): boolean {
		return this._isOrigin;
	}

	set isOrigin(value: boolean) {
		this._isOrigin = value;
	}

	get parent(): string {
		return this._parent;
	}

	set parent(value: string) {
		this._parent = value;
	}

	get childs(): Post[] {
		return this._childs;
	}

	set childs(value: Post[]) {
		this._childs = value;
	}

	get show(): boolean {
		return this._show;
	}

	set show(value: boolean) {
		this._show = value;
	}

	constructor({ title, slug, date, content, summary, path, isOrigin, parent }: {
		title: string,
		slug: string,
		date: string,
		content: string,
		summary: string,
		path: string,
		isOrigin: boolean,
		parent: string
	}) {
		this._title = title;
		this._slug = slug;
		this._date = date;
		this._content = content;
		this._summary = summary;
		this._path = path;
		this._isOrigin = isOrigin;
		this._parent = parent;
		this._childs = [];
		this._show = false;
	}
}
