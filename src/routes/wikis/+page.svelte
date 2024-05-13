<script>
	import Posts from '$lib/components/Posts.svelte';
	import Tags from '$lib/components/Tags.svelte';

	export let data;
</script>
<main class="p-4 h-full overflow-scroll">
		<Tags tags="{data.tags}" />
		<Posts posts="{data.posts}" />
</main>

<style lang="scss">
  main {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: var(--content-width);
  }
</style>
