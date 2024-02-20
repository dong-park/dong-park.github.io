<script>
	import TitleBar from '$lib/components/TitleBar.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import Tags from '$lib/components/Tags.svelte';
	export let data;

</script>
<main class="p-4">
	<TitleBar />
	<Tags tags="{data.tags}" />
	<Posts posts="{data.posts}" />
</main>
