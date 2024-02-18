<script>
	import '../assets/global.scss';
	import Analytics from '$lib/Analytics.svelte';
	import MainLayout from './MainLayout.svelte';
</script>

<Analytics />
<MainLayout>
	<slot />
</MainLayout>
