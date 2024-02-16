<div class="post-content">
	<div class="mt-[1.5em]"/>
	<slot>
	</slot>
</div>

<style lang="scss">
  //$font-family: var(--font-sans), sans;
  $base-font-size: 16px;
  $primary-color: #333;
  $secondary-color: #777;
  $link-color: #007bff;
  $header-font-weight: 500;
  $blockquote-background: #f9f9f9;
  $blockquote-border-color: #ccc;

  :global(li::marker) {
    color: var(--gray-300);
  }

  .post-content {
    :global(*) {
      @apply font-sans;
      @apply text-black;
      letter-spacing: 0px;
      line-height: 1.75;
    }

    :global(h1),
    :global(h2),
    :global(h3),
    :global(h4),
    :global(h5),
    :global(h6) {
			margin-top: 1.5em;
      font-family: var(--font-sans);
      margin-bottom: 0.5em;
      color: $primary-color;
    }

    :global(strong) {
      font-size: 1em;
      font-weight: 500;
    }

    :global(h1) {
      font-size: 1em;
    }

    :global(h2) {
      font-size: 1.1em;
			//font-weight: 900;
    }

    :global(h3) {
      font-size: 1em;
      //font-weight: 700;
    }

    :global(h4) { font-size: 1em; }
    :global(h5) { font-size: 1em; }
    :global(h6) { font-size: 1em; }



    :global(p), :global(li) {
      font-family: var(--font-sans);
      font-weight: 200;
    }

    :global(blockquote) {
      padding: 0.5em 10px;
      margin: 0;
      background-color: $blockquote-background;
      border-left: 5px solid $blockquote-border-color;
    }

    :global(pre) {
      @apply font-mono;
      @apply text-sm;
      @apply bg-gray-100;
      @apply p-4;
      @apply rounded-md;
      @apply overflow-x-auto;
    }

    :global(ul) {
      @apply list-disc;
      @apply pl-4;
    }

    :global(ol) {
      @apply list-decimal;
      @apply pl-4;
    }

    :global(ul) > :global(li) > :global(a) {
      @apply underline;
    }
  }

</style>
