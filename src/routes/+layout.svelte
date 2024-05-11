<script lang="ts">
	import '../assets/global.scss';
	import Analytics from '$lib/components/Analytics.svelte';
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import LocationBar from '$lib/components/layout/LocationBar.svelte';
	import {isHide, isMobile} from '$lib/store';

	export let data;

	$: width = $isMobile ? 'w-full' : 'w-[240px]';
	$: hidden = $isHide ? 'hidden' : '';

</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon.ico" />
</svelte:head>

<Analytics />
<div class="flex h-full">
	<div class="h-[100vh]">
		<div class="z-40 {width} {hidden}">
			<Sidebar posts="{data.posts}" />
		</div>
		<div class="z-30">
			<LocationBar />
		</div>
	</div>

	<div class="{($isMobile && $isHide) || !$isMobile ? 'w-full' : 'hidden'}">
		<div class="mt-[52px]"/>
		<slot />
	</div>
</div>
