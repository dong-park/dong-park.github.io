<script>
    export let title = ''
    export let summary = ''
    export let publishedAt = ''
    export let thumbnail = ''
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary}/>
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
            <div class="post-content" data-animate="" data-animate-speed="slow">
                <slot/>
            </div>
        </div>
    </article>
</main>


<style lang="scss">
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
    @apply relative bg-white p-12;
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
    @apply mt-4 mb-6 h-[1px] bg-gray-300;
  }

  h1 {
    @apply text-4xl font-bold;
  }

  h3 {
    @apply text-2xl font-bold;
  }

  .post-content {

    & > :global(h1) {
      @apply text-4xl font-bold;
      @apply mt-8 mb-4;
    }

    & > :global(h2) {
      @apply text-3xl font-bold;
    }

    & > :global(h3) {
      @apply text-2xl font-bold;
    }

    & > :global(ul) {
      @apply list-disc list-inside;
    }

    & > :global(pre) {
      @apply bg-gray-100 p-4 rounded-md;
      @apply overflow-x-auto;

      @media (max-width: 700px) {
        @apply overflow-x-auto;
      }
    }
  }
</style>
