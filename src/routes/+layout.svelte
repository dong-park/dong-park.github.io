<script lang="ts">
	import '../assets/global.scss';
	import Analytics from '$lib/components/Analytics.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import LocationBar from '$lib/components/layout/LocationBar.svelte';
	import { isHide, isMobile } from '$lib/store';

	export let data;

	let mainEl;

	$: width = $isMobile ? 'w-full' : 'w-[220px]';
	$: hidden = $isHide ? 'hidden' : '';

</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<Analytics />
<div class="flex h-full">
	<div class="h-[100vh]">
		<Sidebar posts="{data.posts}" />
		<LocationBar />
	</div>

	<div bind:this={mainEl} class="main pt-2 px-4 {($isMobile && $isHide) || !$isMobile ? 'w-full' : 'hidden'} mb-12"
			 data-animate data-animate-speed="slow"
	>
		<div class="mt-[52px]" />
		<slot />
	</div>

	<button class="fixed rounded-2xl z-30 bottom-7 right-7 bg-white shadow-2xl"
					on:click={() => mainEl.scrollIntoView({ behavior: 'smooth',  })}>
		<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
			<path fill="currentColor"
						d="M11 5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V13h-2zM11 18v-3h2v3zm0 4v-2h2v2z" />
		</svg>
	</button>
</div>


<style lang="scss">
  .main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--content-width);
  }
</style>
