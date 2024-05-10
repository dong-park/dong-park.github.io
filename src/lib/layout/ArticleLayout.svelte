<script lang="ts">
	import MarkDownLoader from '$lib/components/markdown/MarkDownArea.svelte';
	import { transformDate } from '$lib/utils/dates';
	import IndexNavigationBar from '$lib/components/markdown/NavigationBar.svelte';
	import { afterNavigate } from '$app/navigation';
	import Comments from '$lib/components/Comments.svelte';

	export let title, summary, date;

	let element;

	afterNavigate(() => {
		element.scrollIntoView();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="dongpark.land" />
</svelte:head>

<main  bind:this={element}>
	<article class="relative bg-white pt-2 px-4" data-animate data-animate-speed="slow">
		<h1>{title}</h1>
		<div class="text-sm">{transformDate(date)}</div>
		<IndexNavigationBar />
		<MarkDownLoader>
			<slot />
		</MarkDownLoader>
	</article>
	<Comments />
</main>


<style lang="scss">
  main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--content-width);
  }
</style>
