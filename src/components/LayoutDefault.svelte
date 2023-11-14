<script>
    export let title = ''
    export let summary = ''
    export let publishedAt = ''
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary}/>
</svelte:head>

<main>
    <article class="post">
        <div class="cover">
            <h1 class="cover-title">{title}</h1>
            <h2 class="cover-subtitle">{summary}</h2>
            <p class="info">
                <time>{publishedAt}</time>
            </p>
        </div>
        <div class="cover-line"></div>
        <div class="post-content" data-animate="" data-animate-speed="slow">
            <slot/>
        </div>

    </article>
</main>


<style lang="scss">
  .cover {
    @apply h-[var(--cover-height)] flex flex-col justify-end;
    @apply flex flex-col justify-end;
  }

  .cover-line {
    @apply mt-4 mb-6 h-[1px] bg-gray-300;
  }

  h1 {
    @apply text-4xl font-bold;
  }

</style>
