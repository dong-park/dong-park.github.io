export function transformDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric', month: 'short', day: 'numeric'
	});
}
