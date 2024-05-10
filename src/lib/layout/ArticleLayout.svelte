<script>
	import MarkDownLoader from '$lib/components/markdown/MarkDownArea.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import { transformDate } from '$lib/utils/dates';
	import IndexNavigationBar from '$lib/components/markdown/NavigationBar.svelte';

	export let title, summary, date;

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={summary} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="dongpark.land" />
</svelte:head>

<main>
	<article class="relative bg-white mt-2 py-6 px-4" data-animate data-animate-speed="slow">
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
