<script lang="ts">
	import '../assets/global.scss';
	import Analytics from '$lib/components/Analytics.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import LocationBar from '$lib/components/layout/LocationBar.svelte';

	export let data;

</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<Analytics />
<div class="layout-container flex h-screen w-screen order-1 flex-shrink">
	<Sidebar posts="{data.posts}" />
	<div class="w-full overflow-hidden">
		<LocationBar />
		<slot />
	</div>
</div>


<style lang="scss">
  .layout-container {
    width: 100%;
    padding-right: var(--body--margin-right);
    padding-left: var(--body--margin-left);
  }
</style>
