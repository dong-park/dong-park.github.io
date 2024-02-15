

<div class="post-content">
	<slot>
	</slot>
</div>

<style lang="scss">
  //$font-family: var(--font-sans), sans;
  $base-font-size: 16px;
  $primary-color: #333;
  $secondary-color: #777;
  $link-color: #007bff;
  $header-font-weight: bold;
  $blockquote-background: #f9f9f9;
  $blockquote-border-color: #ccc;

	:global(li::marker) {
		// list 색깔 변경 tailwind
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
      font-family: var(--font-sans);
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      color: $primary-color;
      font-weight: $header-font-weight;
    }

    :global(h1) { font-size: 1em; }
    :global(h2) { font-size: 1.1em; }
    :global(h3) { font-size: 1em; }
    //:global(h4) { font-size: 1.25em; }
    //:global(h5) { font-size: 1em; }
    //:global(h6) { font-size: 0.875em; }

		:global(strong) {
			font-size: 1em;
			font-weight: 600;
		}

		:global(p), :global(li) {
			font-family: var(--font-sans);
			font-weight: 200;
		}

    // 인용문 스타일링
    :global(blockquote) {
      padding: 0.5em 10px;
      margin: 0;
      background-color: $blockquote-background;
      border-left: 5px solid $blockquote-border-color;
    }

		// 코드 스타일링
		:global(pre) {
			@apply font-mono;
			@apply text-sm;
			@apply bg-gray-100;
			@apply p-4;
			@apply rounded-md;
			@apply overflow-x-auto;
		}

		// ul, li
		:global(ul) {
			@apply list-disc;
			@apply pl-4;
		}

		// ol, li
		:global(ol) {
			@apply list-decimal;
			@apply pl-4;
		}

		// a
		:global(a) {
			@apply underline;
		}
  }

</style>
