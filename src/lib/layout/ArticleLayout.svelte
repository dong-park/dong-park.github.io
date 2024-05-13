<script lang="ts">
	import MarkDownLoader from '$lib/components/markdown/MarkDownArea.svelte';
	import { transformDate } from '$lib/utils/dates';
	import IndexNavigationBar from '$lib/components/markdown/NavigationBar.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { MarkDownPostLoader } from '$lib/markDownPostLoader';
	import { each } from 'svelte/internal';
	import { onMount } from 'svelte';

	export let title, summary, date, data, form, tags, path;

	const rootPage = `https://dong-park.github.io`;

	let element;
	let favicon = rootPage + '/imgs/favicon.png';
	let childrenPosts = [];

	$: canonical = rootPage + decodeURIComponent($page.url.pathname);

	afterNavigate(() => {
		element.scrollIntoView({ behavior: 'smooth' });
		childrenPosts = new MarkDownPostLoader().loadPostsChildren(path);
	});

	onMount(() => {
		childrenPosts = new MarkDownPostLoader().loadPostsChildren(path);
	});

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
	<meta name="keyword" content="{tags}" />
	<link rel="canonical" href="{canonical}">
	<meta property="og:title" content={title} />
	<meta property="og:description" content={summary} />
	<meta property="og:url" content="{canonical}" />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="dongpark.land" />
	<meta property="og:image" content="{favicon}" />
	<meta name="twitter:card" content="summary">
</svelte:head>

<main class="flex flex-col main-height">
	<article id="slot" class="relative bg-white pt-2 px-4" data-animate data-animate-speed="slow">
		<h1 bind:this={element}>{title}</h1>
		<div class="text-sm">{transformDate(date)}</div>
		<IndexNavigationBar />
		<MarkDownLoader>
			<slot />
		</MarkDownLoader>
		<ul class="children space-y-1 mt-2">
			{#each childrenPosts as children}
				<li class="cursor-pointer hover:bg-gray-100">
					<button on:click={() => goto(children.path)}>
						{children.path}
					</button>
				</li>
			{/each}
		</ul>
	</article>
	<Comments />
</main>


<style lang="scss">
  h1 {
    margin-top: -60px;
    padding-top: 60px;
  }

  main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--content-width);
  }

  .main-height {
    height: calc(100vh - 52px);
    min-height: -webkit-fill-available;
  }

  .children li {
    text-decoration-line: underline;
    text-decoration-color: var(--border);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  .children li::after {
    margin: 0;
    content: "";
    display: inline-block;
    width: 0.85rem;
    height: 0.85rem;
    background: url(/icons/link.svg);
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0.25rem;
    text-align: center;
  }

</style>
