<script>
	import '../assets/global.scss';
</script>

<div class="layout-container">
	<slot></slot>
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
      //padding-bottom: var(--page-top);
    }
  }
</style>
