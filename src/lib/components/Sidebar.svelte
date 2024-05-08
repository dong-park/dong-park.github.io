<script>
	import { goto } from '$app/navigation';
	import { isHide } from '$lib/store'

	export let posts;


	function gotoPost(title) {
		goto(`/posts/${title}`);
	}

	function hide() {
		$isHide = !$isHide;
	}
</script>

<nav
	class="transition z-20 h-full w-[290px] p-3 bg-gray-100 {$isHide ? '-translate-x-[290px] fixed bg-white duration-300' : ''}">
	<div class="flex items-center p-1 justify-between">
		<h1>
			개발자 썰 모음집
		</h1>
		<button on:click="{hide}">
			<svg
				class="hover:bg-gray-100"
				xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
				<path fill="currentColor" d="m14 17l-5-5l5-5z" />
			</svg>
		</button>
	</div>
	<ul class="">
		<li class="doc-group font-sans">
			<p>WIKI</p>
		</li>
		{#each posts as post}
			{#key post}
				<li class="doc" on:click={gotoPost(post.path)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
						<path fill="currentColor"
									d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />
					</svg>
					<p>{post.title}</p>
				</li>
			{/key}
		{/each}
<!--		<li class="sub-doc">-->
<!--			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">-->
<!--				<path fill="currentColor"-->
<!--							d="M8 13h8v-2H8Zm0 3h8v-2H8Zm0 3h5v-2H8Zm-2 3q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8l6 6v12q0 .825-.587 1.413Q18.825 22 18 22Zm7-13h5l-5-5Z" />-->
<!--			</svg>-->
<!--			<p>dongpark.study</p>-->
<!--		</li>-->
	</ul>
</nav>


<style lang="scss">
  ul {
    @apply space-y-2;
    @apply list-none;
  }

  li {
    @apply p-1 cursor-pointer;
  }

  .doc-group {
    @apply text-xs;
  }

  .doc {
    @apply flex space-x-1.5 items-center;
    @apply text-sm font-bold;
    @apply hover:bg-gray-100;

    p {
      @apply truncate;
    }

  }

  .sub-doc {
    @apply doc;
    @apply pl-3;
  }
</style>
