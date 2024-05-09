import { writable } from 'svelte/store';

function persist(key, value) {
	// Initialize the store with the default value
	const store = writable(value);

	// Function to run only on the client side
	if (typeof window !== 'undefined') {
		const storedValue = localStorage.getItem(key);
		const data = storedValue ? JSON.parse(storedValue) : value;
		store.set(data);

		// Subscribe to changes in the store to update localStorage
		store.subscribe($value => {
			localStorage.setItem(key, JSON.stringify($value));
		});
	}

	return store;
}

export const isHide = persist('isHide', false);
export const currentPath = persist('currentPath', '');