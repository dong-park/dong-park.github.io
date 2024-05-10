<script lang="ts">
	import '../assets/global.scss';
	import Analytics from '$lib/components/Analytics.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import LocationBar from '$lib/components/layout/LocationBar.svelte';
	import {isHide, isMobile} from '$lib/store';

	export let data;

</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<Analytics />
<div class="layout-container flex h-screen w-screen order-1 flex-shrink">
	<Sidebar posts="{data.posts}" />
	<div class="{($isMobile && $isHide) || !$isMobile ? 'w-full' : 'hidden'} overflow-scroll">
		<LocationBar />
		<div class="mt-[52px]">
			<slot />
		</div>
	</div>
</div>


<style lang="scss">
  .layout-container {
    width: 100%;
    padding-right: var(--body--margin-right);
    padding-left: var(--body--margin-left);
  }
</style>
