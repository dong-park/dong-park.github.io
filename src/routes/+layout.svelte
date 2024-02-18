<script>
	import '../assets/global.scss';
	import Analytics from '$lib/Analytics.svelte';
	import MainLayout from './MainLayout.svelte';
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<Analytics />
<MainLayout>
	<slot />
</MainLayout>
