<script>

	import Introduce from './Introduce.svelte';
	import WorkExperience from './WorkExperience.svelte';
	import Teches from './Teches.svelte';
	import Edu from './Edu.svelte';

	export let title = 'dongpark.land | Brand';
	export let summary = '';

</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
</svelte:head>
 =-
<main class="space-y-6 resume">
	<Introduce />
	<WorkExperience />
	<Teches />
	<Edu/>
</main>

<style lang="scss">
  .resume {
    //@apply px-6 mt-1;

    & > :global(*) {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--resume-width);
      padding-top: var(--page-top);
    }
  }
</style>
