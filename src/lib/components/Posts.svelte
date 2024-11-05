<script lang="ts">
	import { goto } from '$app/navigation';
	import { transformDate } from '$lib/utils/dates';

	export let origin;
	export let posts;

	function gotoPost(title: string): boolean {
		goto(`/${origin}/${title}`);
		return true;
	}

</script>

<div class="mt-6 space-y-4">
	{#each posts as post}
		{#key post}
			<button
				class="text-[1.5em] sm:px-2 sm:py-3 sm:flex justify-between items-center
				sm:space-x-2 sm:hover:bg-gray-100 hover:cursor-pointer text-left w-full"
				on:click={() => gotoPost(post.path)}
			>
				<p class="font-serif title text-md">{post.title}</p>
				<p class="text-xs sm:text-sm mt-1">{transformDate(post.date)}</p>
			</button>
		{/key}
	{/each}
</div>

<style lang="scss">
  .title {
    font-weight: 600;
  }

  button {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
