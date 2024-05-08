<script>
	import { goto } from '$app/navigation';
	import { isHide } from '$lib/store';
	import { onMount } from 'svelte';

	export let posts;


	function gotoPost(title) {
		goto(`/posts/${title}`);
	}

	function hide() {
		$isHide = !$isHide;
	}

	function show(post) {
		post.show = !post.show;
		posts = posts.map(p => p);
	}

	onMount(() => {
		posts = posts.map(p => {
			p.childs.reverse();
			return p;
		});
	});
	// Reactive statement to check hide state
	$: className = $isHide ? '-translate-x-[290px] fixed bg-white duration-300' : '';
</script>

<nav
	class="{className} transition z-20 h-full w-[290px] p-3 bg-gray-100 overflow-scroll">
	<div class="flex items-center p-1 justify-between">
		<h1>
			<a href="/">
				개발자 썰 모음집
			</a>
		</h1>
		<button on:click="{hide}">
			<svg
				class="hover:bg-gray-100"
				xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="m14 17l-5-5l5-5z" />
			</svg>
		</button>
	</div>
	<ul>
		<li class="doc-group font-sans">
			<p>WIKI</p>
		</li>
		{#each posts as post}
			{#key post}
				{#if post.isOrigin}
					<li class="doc" on:click={gotoPost(post.path)}>
						<span class="flex">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
								<path fill="currentColor"
											d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />
							</svg>
							<p>{post.title}</p>
						</span>
						{#if post.childs.length > 0}
							<p on:click={show(post)}>
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
							</p>
						{/if}
					</li>
					{#if post.show === true}
						{#each post.childs as child}
							<li class="sub-doc" on:click={gotoPost(child.path)}>
									<span class="flex">
										<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
											<path fill="currentColor"
														d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />
										</svg>
										<p>{child.title}</p>
									<span>
							</li>
						{/each}
					{/if}
				{/if}
			{/key}
		{/each}

	</ul>
</nav>


<style lang="scss">
  ul {
    @apply space-y-2;
    @apply list-none;
  }

  li {
    @apply p-1;
  }

  .doc-group {
    @apply text-xs;
  }

  .doc {
    @apply flex justify-between space-x-1.5 items-center;
    @apply text-sm font-bold;
    @apply hover:bg-gray-100;
    @apply cursor-pointer;

    p {
      @apply truncate;
    }

  }

  .sub-doc {
    @apply doc;
    @apply pl-3;
  }
</style>
