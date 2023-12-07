<svelte:head>
    <title>{title}</title>
    <meta name="description" content={summary}/>
</svelte:head>

<script xmlns:svelte="http://www.w3.org/1999/html">
    import LayoutDefault from "../../../components/LayoutDefault.svelte";
    import PostItem from "../../../components/PostItem.svelte";
    import Slider from "../../../components/Slider.svelte";

    export let title = '모두가 누리는 예술의 가치와 수집의 즐거움'
    export let summary = '이랜드넥스트 에서 아트플랫폼 개발 도전기'
    export let publishedAt = ''
    export let thumbnail = '/elandnext.avif'
</script>

<main>
    <LayoutDefault
            title="{title}"
            summary="{summary}"
            publishedAt="{publishedAt}"
            thumbnail="{thumbnail}"
    >
        <div class="space-y-8">
            <PostItem>
                <div class="flex space-x-4 items-center">
                    <img src="https://jangwonseok.com/static/media/image/company/eland-next.svg"
                         class="w-[20%] object-contain">
                    <div class="text-sm">
                        이랜드넥스트는 이랜드리테일의 아트 플랫폼으로, NFT 기반의 분할소유권과 온라인 경매 서비스 및 갤러리를 운영 하고있습니다.
                    </div>
                </div>
            </PostItem>
            <PostItem>
                <h3>
                    경매,갤러리 플랫폼 마이그레이션 및 개발
                </h3>
                <p>
<!--                    옥션을 진행하기 위한 데이터 <b>모델</b>을 설계하고, 해당 데이터를 처리하는 <b>API</b>를 구현했습니다.<br>-->
<!--                    입찰을 하는 과정을 처리하기 위해 Redis Pubsub과 Celery를 이용하여 <b>실시간 데이터 전송</b> 기능을 개발했습니다.<br>-->
<!--                    그룹사 내에서 통합적으로 로그인할 수 있도록 OAuth 컨셉을 이용하여 <b>인증 체계</b>를 구현했습니다.<br>-->
<!--                    개인정보 유출을 방지하기 위해 <b>개인정보를 단방향으로 암호화</b>하고, 애플리케이션 내에서 복호화하는 기능을 구현했습니다.<br>-->
<!--                    프로젝트를 실행하기 위한 <b>클라우드 서버 환경</b>을 구축하고 어플리케이션 배포를 위한 <b>파이프라인</b>을 구축했습니다.<br>-->
                    그룹사에서 기존에 사용하던 갤러리 사이트를 이랜드넥스트로 마이그레이션하는 작업을 진행했습니다.<br>
                    이를 위해 기존에 사용하던 갤러리 사이트의 데이터베이스 및 엔드포인트를 이랜드넥스트에 맞게 변경을 진행했는데<br>
                    문제점은 기존에 레거시에 관리되고 있어서 변경을 진행할 때마다 레거시 관리자에게 요청을 해야 했습니다.<br>
                    이를 위해 레거시 관리자와 소통을 통해 데이터베이스 및 어플리케이션 통파일을 이관받아 마이그레이션 작업을 진행했습니다.<br>
                    마이그레이션 작업을 진행하면서 기존에 사용하던 스택이 php codeigniter에서 일부 기능을 django로 마이그레이션하는 작업을 진행했습니다.<br>

                </p>
            </PostItem>

            <!--
                note: 이미지가 많지 않아서 슬라이더를 사용하지 않음
                <PostItem>
                    <div class="flex justify-around">
                        <Slider
                                images="{[
                               '/elandnext.avif',
                               '/blank.png',
                               '/ngbr.png',
                            ]}"
                                widthPer="45"
                        />
                        <Slider
                                images="{[
                               '/elandnext.avif',
                               '/blank.png',
                               '/ngbr.png',
                            ]}"
                                widthPer="45"
                        />
                    </div>
                </PostItem>
            -->
            <PostItem>
                <h3>
                    실시간 경매입찰 처리 구현
                </h3>
                <p>
                    경매를 진행하기 위해 Redis Pubsub과 Celery를 이용하여 실시간 데이터 전송 기능을 개발했습니다.<br>
                    Redis Pubsub을 이용해 입찰 정보를 실시간으로 전송하고, Celery를 이용해 입찰 정보를 처리하는 작업을 비동기로 처리했습니다.<br>
                    Celery를 이용해 비동기로 처리하는 작업을 구현하기 위해 Celery Worker를 실행하는 Worker 서버를 구축했습니다.<br>
                    Celery Worker를 실행하는 Worker 서버는 Celery Beat를 이용해 주기적으로 실행되도록 구현했습니다.<br>
                </p>

            </PostItem>
            <PostItem>
                <h3>
                    그룹사 로그인 연동 및 개인정보 암호화
                </h3>
                <p>
                    그룹사 내에서 통합적으로 로그인할 수 있도록 OAuth 컨셉을 이용하여 인증 체계를 구현했습니다.<br>
                    연동작업을 진행하던중 docs에 있는 내용과 연동과정이 합치되지 않아 문제가 발생했습니다.<br>
                    이를 위해 response에 나와있는 내용및 개발단에서 디버깅 작업을 통해 문제를 유추하고 관리자와 소통을 통해 문제를 해결했습니다.<br>
                    Django Crypto Fields를 이용해 개인정보를 단방향으로 암호화하고, 애플리케이션 내에서 복호화하는 기능을 구현했습니다.<br>
                    암호화된 데이터를 복호화하기 위해 암호화에 사용된 키를 애플리케이션 내에 저장하고 있어야 했습니다.<br>
                    이를 위해 Django의 settings.py에 키를 저장하고, 애플리케이션 내에서 settings.py를 import하여 키를 사용했습니다.
                </p>
            </PostItem>
            <PostItem>
                <h3>
                    CI/CD 파이프라인 구축
                </h3>
                <p>

                </p>
            </PostItem>

            <PostItem>
                <div class="bg-gray-100 py-4 px-2 space-y-4">
                    <div>
                        <h4>기대한 것</h4>
                        <p class="text-sm pt-1 pl-2">
                            - 모바일 환경에서도 쉽게 경매에 참여할 수 있는 쉬운 경매/갤러리 플랫폼 개발.<br>
                            - Django를 이용한 서버 개발 경험.<br>
                            - Celery를, Redis Pubsub을 이용한 실시간 데이터 전송 기능 구현.<br>
                            - OAuth를 이용한 인증 체계 구현 및 개인정보 암호화<br>
                            - 클라우드 서버 환경 구축 및 어플리케이션 배포를 위한 파이프라인 구축.<br>
                            - 레거시 갤러리 사이트의 데이터베이스 및 엔드포인트 마이그레이션 작업.<br>
                        </p>
                    </div>
                    <div>
                        <h4>이룬 것</h4>
                        <p class="text-sm pt-1 pl-2">
                            - 기존에 사용하던 스택에서 spring framework -> django 환경 경험<br>
                            - pubsub을 이용해 실시간 데이터 전송 기능 구현및 실제 경매진행 성공<br>
                            - 생각보다 빠르게 개발환경 구축 및 배포환경 구축 성공<br>
                            - 기존에 구성해봤던 Oauth 인증체계는 java프로젝트와 자주 쓰던 형태로 포팅해봤는데 생각보다 쉽게 구성 성공<br>
                        </p>
                    </div>
                    <div>
                        <h4>생각보다 잘 안된 것</h4>
                        <p class="text-sm pt-1 pl-2">
                            - 프레임워크 전환으로 인한 생산성 저하, 러닝커브 소화<br>
                            - pubsub을 이용해 실시간 데이터 전송 기능 구현시 이해도 부족으로 인한 시간 소요<br>
                            - 클라우드 배포환경 구성시 스펙변경을 고려한 설계가 부족해 실제 변경시<br>
                            - spring framework에서 사용하던 기능들을 django에서 사용할 수 없어서 새로운 방법을 찾아야 했음<br>
                            - serializer를 이용하여 view를 구성시 오버헤드가 자주 발생하여 성능이슈가 있었음<br>
                        </p>
                    </div>
                    <div>
                        <h4>문제 해결</h4>
                        <p class="text-sm pt-1 pl-2">
                            - django 공식문서 및 stackoverflow및 노마드코더 강의 등을 통해 러닝커브 소화<br>
                            - pubsub을 이용한 경매 시나리오 및 실제 환경과 최대한 비슷한 환경에서 끊임없는 테스트 진행<br>
                            - 선임 개발자와 소통을 통해 serializer 구성에 피드백을 꾸준히 받음<br>
                        </p>
                    </div>
                </div>
            </PostItem>
        </div>
    </LayoutDefault>
</main>


