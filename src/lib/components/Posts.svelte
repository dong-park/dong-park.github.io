<script lang="ts">
	import { goto } from '$app/navigation';
	import { transformDate } from '$lib/utils/dates';

	export let posts;

	function gotoPost(title: string): boolean {
		goto(`/wikis/${title}`);
		return true;
	}

</script>

<div class="mt-6 space-y-5">
	{#each posts as post}
		{#key post}
			<button class="hover:bg-gray-100 hover:cursor-pointer block text-left w-full py-1"
							data-animate="" data-animate-speed="fast"
							on:click={() => gotoPost(post.path)}
			>
				<p class="font-serif title text-md">{post.title}</p>
				<p class="text-sm">{post.summary}</p>
				<p class="text-sm">{transformDate(post.date)}</p>
			</button>
		{/key}
	{/each}
</div>

<style lang="scss">
	.title {
		font-weight: 600;
	}

	button {
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
	}
</style>
