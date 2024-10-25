<script lang="ts">
	import { isHide } from '$lib/store';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function hide() {
		$isHide = !$isHide;
	}

	$: paths = decodeURIComponent($page.url.pathname).split('/').filter(Boolean);
	$: hidden = $isHide ? 'hidden' : '';

	function navigateTo(index: number) {
		const pathToNavigate = '/' + paths.slice(0, index + 1).join('/');
		goto(pathToNavigate);
	}
</script>

<div class="truncate fixed z-30 flex items-center bg-white w-full py-4 px-2 space-x-2">
	<div class="flex items-center w-full justify-between">
		<div class="flex space-x-2">
			<div class="flex text-sm px-2">
				<button class="px-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl font-sans"
								on:click={() => goto('/')}>
					home
				</button>
				<b>/</b>
				{#each paths as path, index}
					<button class="px-1 hover:cursor-pointer hover:bg-gray-100 hover:rounded-xl font-sans"
									on:click={() => navigateTo(index)}>
						{path}
					</button>
					{#if paths.length - 1 !== index }
						<b>/</b>
					{/if}
				{/each}
			</div>
		</div>
		<div>
			<button class="cursor-pointer hover:bg-gray-100 mr-4" on:click={() => navigateTo(paths.length - 2)}>
				<svg width="20px" height="20px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<path d="M15 7.5c0 3.033-2.467 5.5-5.5 5.5h-2.912l2.646 2.646-0.707 0.707-3.853-3.853 3.854-3.854 0.707 0.707-2.647 2.647h2.912c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5h-7.083v-1h7.083c3.033 0 5.5 2.467 5.5 5.5z" fill="#000000" />
				</svg>
			</button>
		</div>
	</div>
</div>
