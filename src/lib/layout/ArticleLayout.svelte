<script lang="ts">
	import MarkDownLoader from '$lib/components/markdown/MarkDownArea.svelte';
	import { transformDate } from '$lib/utils/dates';
	import IndexNavigationBar from '$lib/components/markdown/NavigationBar.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { MarkDownPostLoader } from '$lib/markDownPostLoader';
	import { onMount } from 'svelte';

	export let title, summary, date, data, form, tags, path;

	const rootPage = `https://dong-park.github.io`;

	let element;
	let favicon = rootPage + '/imgs/favicon.png';
	let childrenPosts = [];

	$: canonical = rootPage + decodeURIComponent($page.url.pathname);
	$: parentPost = path.split("/").slice(0, -1).join("/");

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
		<div class="flex w-full justify-between">
			<h1 bind:this={element}>{title}</h1>
<!--			<button class="cursor-pointer hover:bg-gray-100" on:click={() => goto('/wikis/' + parentPost)}>-->
<!--				<svg width="16px" height="16px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">-->
<!--					<path d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5h-2.912l2.646 2.646-0.707 0.707-3.853-3.853 3.854-3.854 0.707 0.707-2.647 2.647h2.912c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5h-7.083v-1h7.083c3.033 0 5.5 2.467 5.5 5.5z" fill="#000000" />-->
<!--				</svg>-->
<!--			</button>-->
		</div>
		<div class="text-sm">{transformDate(date)}</div>
		<IndexNavigationBar />
		<MarkDownLoader>
			<slot />
		</MarkDownLoader>
		<ul class="children space-y-1 mt-4">
			{#each childrenPosts as children}
				<li class="">
					<button class="link w-full text-left cursor-pointer hover:bg-gray-100" on:click={() => goto('/wikis/' + children.path)}>
						{children.path.split('/').slice(-1)}
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

  .link {
    text-decoration-line: underline;
    text-decoration-color: var(--border);
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  .link::after {
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
