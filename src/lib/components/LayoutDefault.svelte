<script>
	import MarkDownLoader from './MarkDownLoader.svelte';

	export let title = '';
	export let summary = '';
	export let publishedAt = '';
	export let thumbnail = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
</svelte:head>

<main>
	<article class="post">
		<img src="/auction.png" alt="" class="background-image">
		<div class="content-wrapper">
			<div class="cover" style="">
				<h1 class="cover-title">{title}</h1>
				<h2 class="cover-subtitle">{summary}</h2>
				<p class="info">
					<time>{publishedAt}</time>
				</p>
			</div>
			<div class="cover-line"></div>
			<MarkDownLoader>
				<slot />
			</MarkDownLoader>
		</div>
	</article>
</main>


<style lang="scss">
  :global(body) {
    font-family: var(--font-family);
    font-size: var(--base-font-size);
    color: var(--primary-color);
    line-height: 1.6;
  }

  .background-image {
    @apply absolute w-full h-[45%] top-0 left-0;
    @apply object-cover;
    @apply z-0;

    @media (min-width: 700px) {
      @apply h-[50%];
      @apply filter blur-[10px];
    }
  }

  .content-wrapper {
    @apply relative bg-white py-6 px-4;
    @apply h-[var(--cover-height)] flex flex-col justify-end;
    @apply flex flex-col justify-end;
    @apply mt-[70px];

    @media (max-width: 700px) {
      @apply mt-[120px];
    }
  }

  .cover {
    @apply h-[var(--cover-height)] flex flex-col justify-end;
    @apply flex flex-col justify-end;
  }

  .cover-title {
    @apply text-3xl font-bold mt-3;
  }

  .cover-line {
    @apply mt-4 mb-4 h-[1px] bg-gray-300;
  }

  h1 {
    @apply text-4xl font-bold;
  }

  h3 {
    @apply text-2xl font-bold;
  }

  :global(pre) {
    @apply bg-gray-100 p-4 rounded-md;
    @apply overflow-x-auto;
    @apply text-xs;

    @media (max-width: 700px) {
      @apply overflow-x-auto;
    }
  }
</style>
