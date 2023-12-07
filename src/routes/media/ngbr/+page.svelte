<script>
    export let title = 'dongpark.land | Brand'
    export let summary = ''
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary}/>
</svelte:head>

<main>
    <h1>Project</h1>
    <div class="company" data-animate="" data-animate-speed="slow">
        <a href="media/ngbr" rel="noopener noreferrer" class="media-section">
            <div>
                <img src="ngbr.png" class="">
            </div>
            <div class="media-summary">
                <h1 class="">공부 하는데 필요한 건 다 만들어 드립니다.</h1>
                <h2>우리는 수험생의 시험 시작부터 합격 까지 함께하는 서비스를 만듭니다. "수험 기간 절반으로".</h2>
            </div>
        </a>

    </div>
</main>

<style lang="scss">

  .media-section {
    & {
      img:hover{
        filter: blur(1px);
        cursor: pointer;
      }

      .media-summary {
        @apply inline-block;
      }
      .media-summary:hover{
        text-decoration: underline;
      }

    }
  }
</style>
