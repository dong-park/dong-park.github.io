<script>
	import { isHide } from '$lib/store.js';
	import { page } from '$app/stores';

	$: currentPath = decodeURIComponent($page.url.pathname);

	function hide() {
		$isHide = !$isHide;
	}

</script>

<div class="flex items-center 	bg-white w-full p-4">
	<button class="{$isHide ? '' : 'hidden'}" on:click="{hide}">
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
			<path fill="currentColor" d="M3 3h18v2H3zm0 16h18v2H3zm0-8h18v2H3z" />
		</svg>
	</button>
	<b class="{$isHide ? 'ml-4' : ''}">
		{currentPath}
	</b>
</div>
