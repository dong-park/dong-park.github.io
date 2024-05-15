<script lang="ts">
	import { page } from '$app/stores';

	const isDev = process.env.NODE_ENV === 'development';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'MEASUREMENT_ID', {
				page_title: document.title,
				page_path: $page.url.pathname
			});
		}
	}
</script>

<svelte:head>
	{#if (!isDev)}
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-7WELFQJ9KV"></script>
		<script>
			window.dataLayer = window.dataLayer || [];

			function gtag() {
				dataLayer.push(arguments);
			}

			gtag('js', new Date());
			gtag('config', 'G-7WELFQJ9KV');
		</script>
	{/if}
</svelte:head>
