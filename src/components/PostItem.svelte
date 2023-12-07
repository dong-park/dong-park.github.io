<div class="post-item">
    <slot/>
</div>

<style lang="scss">
  .post-item {
    @apply mt-6 space-y-2;

    & :global(h1) {
      @apply text-2xl;
      @apply font-bold;
    }

    & :global(h3) {
      @apply text-2xl;
      @apply font-bold;
    }

    & :global(p) {
      @apply mb-4;
    }

    & :global(h4) {
      @apply font-bold;
      // italics
      @apply italic underline;
    }
  }
</style>
