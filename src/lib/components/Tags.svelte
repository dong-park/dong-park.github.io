<script>
	import { goto } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';

	export let tags;
	let currentTag;

	function getTags(tag) {
		if (tag === currentTag) {
			goto('?tag=');
			return;
		} else {
			goto(`?tag=${tag}`);
		}
	}

	afterUpdate(() => {
		// query params
		const urlParams = new URLSearchParams(window.location.search);
		currentTag = urlParams.get('tag');
	});
</script>

<div class="">
	{#if tags}
		<div class="flex gap-1">
			{#each tags as tag}
				{#key tag}
					<span class="text-xs rounded p-1 cursor-pointer"
								class:bg-blue-500={tag === currentTag} class:text-white={tag === currentTag} class:hover:bg-blue-400={tag === currentTag}
								class:bg-gray-200={tag !== currentTag} class:text-gray-700={tag !== currentTag} class:hover:bg-gray-300={tag !== currentTag}
								on:click={getTags(tag)}>
						#{tag}
					</span>
				{/key}
			{/each}
		</div>
	{/if}
</div>
