<script>
	import { onMount } from 'svelte';

	const commentOptions = {
		src: 'https://utteranc.es/client.js',
		repo: 'dong-park/dong-park.github.io',
		'issue-term': 'pathname',
		theme: 'github-light',
		crossOrigin: 'anonymous'
	};

	onMount(() => {
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');

		// Loop over the options & apply each property as an attribute
		for (const prop in commentOptions) {
			utteranceScript.setAttribute(prop, commentOptions[prop]);
		}
		targetTag.appendChild(utteranceScript);
	})
</script>

<div id="utterances-comments" class="content-wrapper" />
