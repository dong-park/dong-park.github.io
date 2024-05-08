<script>
	import TitleBar from '$lib/components/TitleBar.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import Tags from '$lib/components/Tags.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { onMount } from 'svelte';
	export let data;


</script>
<main class="p-4">
<!--	<TitleBar />-->
<!--	<Tags tags="{data.tags}" />-->
<!--	<Posts posts="{data.posts}" />-->
</main>

<style lang="scss">
  main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--content-width);
    padding-top: var(--page-top);

    @media (min-width: 768px) {
      padding-top: var(--page-top-desktop);
    }
  }
</style>
