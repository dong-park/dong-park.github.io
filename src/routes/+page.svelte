<script lang="ts">
	import { onMount } from 'svelte';
	import { isHide } from '$lib/store';

	onMount(() => {
		$isHide = false;
	})

</script>
<main class="p-4">
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
