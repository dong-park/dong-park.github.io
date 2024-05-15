<script lang="ts">
	import { page } from '$app/stores';

	const isDev = process.env.NODE_ENV === 'development';
	const G_TAG = import.meta.env.VITE_G_TAG;

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', G_TAG, {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	{#if (!isDev)}
		<!-- Google tag (gtag.js) -->
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${G_TAG}`}></script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', '${G_TAG}');
		</script>
	{/if}
</svelte:head>
