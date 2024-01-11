<script>
    export let title = 'dongpark.land | Brand'
    export let summary = ''
    const stacks = [
        'Java', 'Spring', 'Spring Boot', 'Python', 'Django', 'JavaScript', 'Node'
    ]
    const histories = [
        {
            company: '이랜드리테일',
            position: '선임 백엔드개발자',
            period: '2022.04 ~ 재직중',
            projects: [
                {
                    title: '이랜드 옥션 / 갤러리',
                    stacks: ['Python', 'Django', 'AWS'],
                    keyword: '옥션 데이터 모델 설계및 API 구현',
                    contents: [
                        'API 설계 및 구현, 어드민 페이지 구현',
                        '입찰처리를 위해 Redis와 Celery를 이용한 실시간 데이터 전송 처리 기능 개발',
                        '그룹사 SSO를 활용하여 OAuth 컨셉을 이용하여 연동 및 인증 체계 구현',
                        '개인정보 암호화, 클라우드 환경구축 및 파이프라인 구성'
                    ]
                },
                {
                    title: '미술품 조각투자 플랫폼 WillWill',
                    stacks: ['Python', 'Django', 'AWS'],
                    keyword: '미술품 데이터 모델 설계및 API 구현',
                    contents: [
                        'API 설계 및 구현, 어드민 페이지 구현',
                        '미술품의 색깔별 카테고리화를 머신러닝 기술을 이용하여 자동화하는 기능을 개발',
                        '관리자 페이지를 개선하고 엑셀 입력/출력, 맞춤법 검사와 간편한 이미지 업로드 위젯 등 사용성 개선에 기여'
                    ]
                }
            ]
        },
        {
            company: '글로카로카',
            position: '선임 백엔드개발자',
            period: '2021.05 ~ 2022.02',
            projects: [
                {
                    title: '공유 주거 플랫폼',
                    stacks: ['Java', 'Spring Boot', 'Jenkins', 'AWS'],
                    keyword: '호텔 예약 및 객실 정보 관리 API',
                    contents: [
                        '프로젝트를 실행하기 위한 클라우드 서버 환경을 구축하고 어플리케이션 배포를 위한 파이프라인을 구축',
                        '세금계산거 발행 및 예약 결제를 위한 외부 플랫폼 API와 연동하는 기능을 개발'
                    ]
                },
            ],
        },
        {
            company: '캐럿글로벌',
            position: '주임 연구원',
            period: '2020.06 ~ 2021.05',
            projects: [
                {
                    title: '당근농장',
                    stacks: ['Java', 'Spring Boot', 'Ionic', 'Vue.js', 'AWS'],
                    keyword: '자사에서 서비스하는 영여교육 유/무료 컨텐츠를 통합하여 제공하는 어플리케이션',
                    contents: [
                        '컨텐츠를 제공하기 위한 Spring Boot 기반 API를 개발',
                        'Ionic 환경에 맞춰 모바일 어플리케이션 개발에 참여',
                        '데일리라이팅, 로이터통신 뉴스와 같은 이용한 Vue.js기반의 웹뷰 어플리케이션 개발',
                        '프로젝트를 실행하기 위한 클라우드 서버 환경을 구축하고 어플리케이션 배포를 위한 파이프라인을 구축'
                    ]
                },
                {
                    title: '삼성물산 용어 사전',
                    stacks: ['Java', 'Spring Boot', 'Ionic', 'Vue.js', 'AWS'],
                    keyword: '삼성물산에서 제공하는 영어 학습 컨텐츠를 제공하는 어플리케이션',
                    contents: [
                        '컨텐츠를 제공하기 위한 Spring Boot 기반 API를 개발',
                        'Ionic Vue3 환경으로 크로스플랫폼 어플리케이션 개발'
                    ]
                },
            ]
        },
        {
            company: '주식회사 위메스',
            position: '사원 백엔드개발자',
            period: '2018.11 ~ 2020.06',
            projects: [
                {
                    title: '난공매니저',
                    stacks: ['Java', 'Spring', 'PHP', 'Laravel', 'Vue.js', 'AWS'],
                    keyword: '독서실 원생관리를 위한 LMS 웹 어플리케이션',
                    contents: [
                        '원생의 납부 이력과 좌석 이용 이력을 관리하는 기능을 개발',
                        '상용 솔루션에서 자사로 데이터 마이그레이션을 진행',
                        'QR코드를 활용한 출결관리용 라즈베리파이 디바이스와 API개발',
                        '난공매니저 시스템과 연동가능한 키오스크 디바이스에 VAN사 카드결제 연동',
                        '기타 PHP 기반 원생 커뮤니티 사이트의 Redis를 활용한 댓글알림 기능을 개발'
                    ]
                },
                {
                    title: '성적관리 자동화',
                    stacks: ['Java', 'Spring', 'PHP', 'Laravel', 'Vue.js', 'AWS'],
                    keyword: '솔루션 비용 절감을 위해 스파르타 독서실 성적관리를 위한 웹 어플리케이션',
                    contents: [
                        'OMR리더기에서 산출되는 데이터를 파싱하여 데이터베이스에 저장하는 기능을 개발',
                        '원생별로 월간,주간,일간 성적을 조회할 수 있는 기능을 개발'
                    ]
                },
            ]
        }
    ]
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary}/>
</svelte:head>

<main class="space-y-2 resume">
    <div class="paragraphs">
        <h1>박동환</h1>
        <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.875 0-1.65-.375t-1.3-1.075q-.725.725-1.638 1.088T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .65.425 1.1T18.5 15q.65 0 1.075-.45t.425-1.1V12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"></path>
            </svg>
            <p class="text-sm">
                rakddh@gmail.com
            </p>
        </div>
        <p>
            환경에 구애받지 않고 다양한 프로그래밍 언어와 기술을 활용한 개발 경력을 가지고 있습니다.
            Java, Spring, JavaScript 등 다양한 도구와 기술을 사용하여 사용자 경험과 성능을 고려한 효율적이고 유지보수가 쉬운 코드를 작성하는 경험이 있습니다.
            또한, 새로운 기술에 대한 학습과 창의적인 문제 해결에도 열정적으로 접근합니다. 소통과 협업을 통해 팀의 목표를 달성하는 데에도 기여하고자 합니다.
        </p>
        <p>
            프레임워크 보다는 프로그래밍 언어와 같이 일하는 방식을 더 고민합니다.
            사람들이 많이 사용하는 서비스를 만들며 보람을 느끼고, 비즈니스 요구사항을 빠르게 구현하는데 익숙합니다.
            백엔드 엔지니어 보다는, 서비스에 오너십을 가지고 가꾸는 사람이 되고자 합니다.
        </p>
    </div>
    <div class="paragraphs block-underline">
        <div class="paragraph">
            <h2 class="title">기술스택</h2>
            <div class="stacks">
                {#each stacks as stack}
                    <span class="stack">{stack}</span>
                {/each}
            </div>
        </div>
    </div>
    <div class="paragraphs">

        <h2 class="title">
            경력
        </h2>
        <div class="histories">
            {#each histories as history}
                <div class="history">
                    <div class="flex justify-between">
                        <h3 class="subtitle font-bold">
                            {history.company}
                        </h3>
                        <div class="content text-xs text-gray-400">
                            {history.position} / {history.period}
                        </div>
                    </div>

                    <div class="projects">
                        {#each history.projects as project}
                            <div class="project">
                                <div class="project-title">
                                    <h4>{project.title}</h4>
                                    <div class="stacks">
                                        {#each project.stacks as stack}
                                            <span class="stack">{stack}</span>
                                        {/each}
                                    </div>
                                </div>
                                <div class="content">
                                    <b>{project.keyword}</b>
                                    <ul>
                                        {#each project.contents as content}
                                            <li>{content}</li>
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
</main>

<style lang="scss">
  .resume {
    @apply px-4 py-8;
    @apply mt-1;
    @apply bg-white;
    @apply rounded-lg;
    @apply shadow-md;
    // a4사이즈 210mm x 297mm
    max-width: 210mm;

  }

  .stacks {
    @apply space-x-1;
  }

  .stack {
    // mouse hover pointer
    @apply hover:bg-gray-100;
    @apply cursor-pointer;

    display: inline-block;
    @apply px-2 py-1 text-xs text-gray-700;
    border-radius: 0.5rem;
    @apply border border-gray-300;

  }

  .histories {
    @apply space-y-12;
    .history {

    }
  }

  .paragraphs {
    @apply pb-2;

    .title {
      @apply text-lg font-bold;
    }

    .subtitle {

    }

    .paragraph {
    }
  }

  .block-underline {
    @apply border-b border-gray-300;
  }

  .content {
    @apply text-sm;
  }

  .projects {
    @apply space-y-4;

    .project {
      @apply flex;

      .project-title {

        h4 {
          @apply italic;
          @apply text-sm;
        }

        @apply w-[30%]
      }

      .content {
        @apply w-[70%]
      }
    }
  }
</style>
