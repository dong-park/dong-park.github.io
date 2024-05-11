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

<div class="truncate fixed z-30 flex items-center bg-white w-full p-4 space-x-2 ">
	<div class="w-[220px] {hidden}" style="min-width: 220px">
	</div>
	<button class="hover:bg-gray-100" on:click={(e) => {hide()}}>
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
			<path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z" />
		</svg>
	</button>
	<div class="ml-{isHide ? '4' : ''} flex space-x-1 items-center text-sm">
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
