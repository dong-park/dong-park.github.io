<script>
	import '../assets/global.scss';
	import Analytics from '$lib/components/Analytics.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<Analytics />
<div class="layout-container h-screen w-screen">
	<div class="flex flex-col justify-between h-[100vh]">
		<slot></slot>
		<footer class="w-full text-center py-2">
			<p class="text-xs">
				&copy; 2024 dongpark. Powered by SvelteKit.
			</p>
		</footer>
	</div>
</div>


<style lang="scss">
  .layout-container {
    width: 100%;
    padding-right: var(--body--margin-right);
    padding-left: var(--body--margin-left);

  }
</style>
