<script>
	import MarkDownLoader from './MarkDownArea.svelte';
	import Comments from './Comments.svelte';
	import { transformDate } from '$lib/utils/dates.ts';
	import IndexNavigationBar from '$lib/components/NavigationBar.svelte';
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
	<IndexNavigationBar />
	<article class="relative bg-white py-6 px-4 " data-animate data-animate-speed="slow">
		<h1>{title}</h1>
		<div class="text-sm">{transformDate(date)}</div>
		<MarkDownLoader>
			<slot />
		</MarkDownLoader>
	</article>
	<Comments />
</main>

<style lang="scss">
</style>
