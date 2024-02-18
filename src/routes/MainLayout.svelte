<div class="layout-container h-screen w-screen">
	<div class="flex flex-col justify-between h-[100vh]">
		<slot></slot>
		<footer class="w-full text-center py-2">
			<p class="text-xs">
				&copy; 2024 dongpark. Powered by SvelteKit.
			</p>
		</footer>
	</div>
</div>


<style lang="scss">
  .layout-container {
    width: 100%;
    padding-right: var(--body--margin-right);
    padding-left: var(--body--margin-left);

    & > :global(*) {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--content-width);
      padding-top: var(--page-top);
    }
  }
</style>
