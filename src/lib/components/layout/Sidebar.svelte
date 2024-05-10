<script lang="ts">
	import { goto } from '$app/navigation';
	import { isHide, isMobile } from '$lib/store';
	import { onMount } from 'svelte';
	import type { Post } from '$lib/model/post';

	export let posts: Post[];

	const title = '개발자 썰 모음집';
	// $: className = $isHide ? 'hidden fixed bg-white duration-300' : 'h-full p-3 bg-gray-100 overflow-scroll';

	function gotoPost(title: string) {
		if ($isMobile) {
			$isHide = true;
		}

		goto(`/wikis/${title}`);
	}


	function show(post: Post) {
		post.show = !post.show;
		posts = posts.map(p => p);
	}

	function getMediaQuery() {
		let mediaQuery = window.matchMedia('(max-width: 768px)');
		$isMobile = mediaQuery.matches;

		function updateMobileStatus(e: any) {
			$isMobile = e.matches;
		}

		mediaQuery.addEventListener('change', (e) => updateMobileStatus(e));
	}

	onMount(() => {
		getMediaQuery();
		posts = posts.map(p => {
			p.childs.reverse();
			return p;
		});
	});

	$: width = $isMobile ? 'w-full' : 'w-[240px]';
</script>

<nav class="{width} fixed flex-shrink-0 shadow bg-gray-100 h-full p-3">
	<div class="flex items-center justify-between">
		<h1>
			<a href="/">
				{title}
			</a>
		</h1>
		{#if $isMobile}
			<button on:click={() => {$isHide = true}}>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
					<path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z" />
				</svg>
			</button>
		{/if}
	</div>
	<ul>
		<li class="doc-group font-sans">
			<button on:click={() => goto("/wikis")}>
				<b>WIKI</b>
			</button>
		</li>
		{#each posts as post}
			{#key post}
				{#if post.isOrigin}
					<li class="doc">
						<button class="w-full flex items-center justify-between" on:click={() => gotoPost(post.path)}>
							<span class="flex">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
									<path fill="currentColor"
												d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />
								</svg>
								<span>
									{post.title}
								</span>
							</span>
							{#if post.childs.length > 0}
								<button on:click={() => show(post)}>
									{#if !post.show}
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
											<path fill="currentColor"
														d="M11 14.175V7q0-.425.288-.713T12 6q.425 0 .713.288T13 7v7.175l2.9-2.875q.275-.275.688-.288t.712.288q.275.275.275.7t-.275.7l-4.6 4.6q-.3.3-.7.3t-.7-.3l-4.6-4.6q-.275-.275-.288-.687T6.7 11.3q.275-.275.7-.275t.7.275l2.9 2.875Z" />
										</svg>
									{/if}
									{#if post.show}
										<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
											<path fill="currentColor" d="M11 18V9.825L7.4 13.4L6 12l6-6l6 6l-1.4 1.4L13 9.825V18h-2Z" />
										</svg>
									{/if}
								</button>
							{/if}
						</button>
					</li>
					{#if post.show === true}
						{#each post.childs as child}
							<li class="sub-doc">
								<button class="w-full" on:click={() => gotoPost(child.path)}>
									<span class="flex">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
											<path fill="currentColor"
														d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />
										</svg>
										{child.title}
									</span>
								</button>
							</li>
						{/each}
					{/if}
				{/if}
			{/key}
		{/each}
	</ul>
</nav>

<style lang="scss">
  @import "./layout.scss";
</style>
