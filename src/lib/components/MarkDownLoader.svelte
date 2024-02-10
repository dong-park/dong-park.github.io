<div class="post-content" data-animate="" data-animate-speed="slow">
	<slot />
</div>

<style lang="scss">
  $font-family: 'Helvetica', sans-serif;
  $base-font-size: 14.5px;
  $primary-color: #333;
  $secondary-color: #777;
  $link-color: #007bff;
  $header-font-weight: bold;
  $blockquote-background: #f9f9f9;
  $blockquote-border-color: #ccc;

  .post-content {
    :global(*) {
      font-family: $font-family;
      font-size: $base-font-size;
      color: $primary-color;
      line-height: 1.6;
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

    :global(h1) { font-size: 1.1em; }
    //:global(h2) { font-size: 1.75em; }
    //:global(h3) { font-size: 1.5em; }
    //:global(h4) { font-size: 1.25em; }
    //:global(h5) { font-size: 1em; }
    //:global(h6) { font-size: 0.875em; }

    // 인용문 스타일링
    :global(blockquote) {
      padding: 0.5em 10px;
      margin: 0;
      background-color: $blockquote-background;
      border-left: 5px solid $blockquote-border-color;
    }

    // 목록 스타일링
    :global(ul), :global(ol) {
      margin-top: 0;
      padding-left: 20px;
			@apply list-disc list-inside;
			// list 색깔 변경
		}
    // 코드 블록 스타일링
    :global(pre), :global(code) {
      font-family: monospace;
      background-color: #f5f5f5;
      padding: 5px;
      border-radius: 5px;
    }

    :global(pre) {
      overflow-x: auto;
    }

    // 테이블 스타일링
    :global(table) {
      width: 100%;
      border-collapse: collapse;
    }

    :global(th), :global(td) {
      padding: 0.5em;
      border: 1px solid $secondary-color;
    }

    // 링크 스타일링
    :global(a) {
      //color: $link-color;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    // 응답성
    @media (max-width: 600px) {
      :global(body) {
        font-size: 14px;
      }
    }

  }

</style>
