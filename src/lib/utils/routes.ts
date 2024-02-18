export function moveBack() {
	const pathArray = window.location.pathname.split('/').filter(Boolean);
	if (pathArray.length > 1) {
		pathArray.pop();
		let newPath = '/' + pathArray.join('/');

		if (pathArray.length === 1) {
			newPath = '/';
		}

		window.location.pathname = newPath;
	} else {
		// Optionally handle the case where there is no previous depth (e.g., navigate to home)
		console.log('No previous depth. Stay on the current page or navigate to a default page.');
	}
}
