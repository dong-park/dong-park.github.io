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
    <h2>주요 프로젝트를 소개합니다.</h2>
    <div class="projects py-10">
        <div class="company" data-animate="" data-animate-speed="slow">
            <a href="media/elandnext" rel="noopener noreferrer" class="media-section">
                <div>
                    <img src="elandnext.avif" class="">
                </div>
                <div class="media-summary">
                    <h1 class="">모두가 누리는 예술의 가치와 수집의 즐거움</h1>
                    <h2>연 매출 1조 6천억의 리테일 그룹에서 본격 아트 플랫폼 만드는 프로젝트에 합류하기</h2>
                </div>
            </a>
        </div>
        <div class="company" data-animate="" data-animate-speed="slow">
            <a href="media/ngbr" rel="noopener noreferrer" class="media-section">
                <div>
                    <img src="/ngbr.png" class="">
                </div>
                <div class="media-summary">
                    <h1 class="">공부 하는데 필요한 건 다 만들어 드립니다.</h1>
                    <h2>우리는 수험생의 시험 시작부터 합격 까지 함께하는 서비스를 만듭니다. "수험 기간 절반으로".</h2>
                </div>
            </a>
        </div>
        <div class="company" data-animate="" data-animate-speed="slow">
            <a href="media/ngbr" rel="noopener noreferrer" class="media-section">
                <div>
                    <img src="elandnext.avif" class="">
                </div>
                <div class="media-summary">
                    <h1 class="">당근영어 캐치프레이즈 넣기</h1>
                    <h2>당근영어는 영어를 즐겁게 배우는 어플리케이션입니다. 영어를 즐겁게 배우는 방법을 찾고 계시다면 당근영어를 만나보세요.</h2>
                </div>
            </a>
        </div>
    </div>
</main>

<style lang="scss">
  .projects {
    @apply space-y-10;
  }

  .media-section {
    h1 {
        @apply text-2xl;
    }

    & {
      img {
        @apply w-full;
        @apply h-64;
        @apply object-cover;
        @apply object-center;
        @apply rounded-lg;
        @apply shadow-lg;
        margin-bottom: 1rem;
      }

      img:hover {
        filter: blur(1px);
        cursor: pointer;
      }

      .media-summary {
        @apply inline-block;
        @apply py-2;
      }

      .media-summary:hover {
        text-decoration: underline;
      }

    }
  }
</style>
