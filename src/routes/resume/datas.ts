export const histories = [
	{
		company: '이랜드',
		position: '선임 백엔드개발자',
		period: '2022.04 ~ 재직중',
		summary: [
			'이랜드 옥션 및 갤러리 서비스의 백엔드 개발을 담당했습니다',
			'Python, Django, AWS를 활용하여 서비스를 구축하고 운영했습니다',
			'데이터 모델 설계 및 API 구현을 담당했습니다'
		],
		projects: [
			{
				title: '이랜드 갤러리',
				stacks: ['Python', 'Django', 'AWS'],
				keyword: '옥션 데이터 모델 설계및 API 구현',
				contents: [
					'입찰처리를 위해 Redis와 Celery를 이용한 실시간 데이터 전송 처리 기능 개발',
					'그룹사 SSO를 활용하여 OAuth 컨셉을 이용하여 연동 및 인증 체계 구현',
					'개인정보 암호화, 클라우드 환경구축 및 파이프라인 구성'
				],
				link: 'https://www.auction.co.kr/'
			},
			{
				title: '미술품 조각투자 플랫폼 WillWill',
				stacks: ['Python', 'Django', 'AWS'],
				keyword: '미술품 데이터 모델 설계및 API 구현',
				contents: [
					'API 설계 및 구현, 어드민 페이지 구현',
					'색깔별 카테고리화 및 자동화하는 기능을 개발',
					'어드민 개발 및 사용성 개선'
				]
			}
		]
	},
	{
		company: '글로카로카',
		position: '선임 백엔드개발자',
		period: '2021.05 ~ 2022.02',
		summary: [
			'프롭테크 도메인의 서비스 구성중 단독 백엔드 개발 파트를 담당했습니다',
			'Spring Boot및 Jenkins를 활용하여 API 및 CI/CD 환경을 구성했습니다',
			'하위 피처로 빠른 개발을 위해 nest.js를 활용해 API 환경구성을 경험 했습니다'
		],
		projects: [
			{
				title: '공유 주거 플랫폼',
				stacks: ['Java', 'Spring Boot', 'Jenkins', 'AWS'],
				keyword: '호텔 예약 및 객실 정보 관리 API',
				contents: [
					'프로젝트를 실행하기 위한 클라우드 서버 환경을 구축하고 어플리케이션 배포를 위한 파이프라인을 구축',
					'세금계산거 발행 및 예약 결제를 위한 외부 플랫폼 API와 연동하는 기능을 개발'
				]
			}
		]
	},
	{
		company: '캐럿글로벌',
		position: '주임 연구원',
		period: '2020.06 ~ 2021.05',
		summary: [
			'Spring Framework, PHP 레거시, Ionic 다양한 환경에서 개발경험을 했습니다.',
			'네이버클라우드 및 IDC 환경에서 서버 장애 대처 및 하드웨어 교체 및 신설경험을 했습니다.',
			'안드로이드, IOS 모바일 어플리케이션 배포 및 출시까지 A-Z를 경험했습니다.'
		],
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
			}
		]
	},
	{
		company: '위메스',
		position: '사원 백엔드개발자',
		period: '2018.11 ~ 2020.06',
		summary: [
			'Spring Framework를 이용해 신설 서비스를 구성하고, PHP 환경에 기존 서비스에 피처 개발을 담당했습니다',
			'WebRTC 프로토콜 기반에 화상서비스 프로토타입 개발을 담당했습니다',
			'라즈베리파이를 활용한 키오스크 및 출석모듈 개발을 담당했습니다'
		],
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
			}
		]
	}
];
export const stacks = [
	'Java', 'Spring', 'Spring Boot', 'Python', 'Django', 'JavaScript', 'Node'
];
export const techs = [
	{
		title: 'Java',
		contents: [
			'Spring Framework를 활용한 3년 이상의 프로젝트 참여',
			'Spring Boot의 JPA, QueryDSL, Security, Thymeleaf 등을 이용한 다양한 프로젝트 수행',
			'SMS, 세금계산서, 회원인증 등 외부 서비스와의 연동 경험',
			'기존 레거시 프로젝트를 Spring Framework로 전환'
		]
	},
	{
		title: 'Python',
		contents: [
			'CI 기반 사이트를 Django로 전환하여 개선',
			'카테고리라이징을 위한 ML모델 연동으로 프로젝트 향상',
			'Redis를 활용한 SSE모듈 개발 참여'
		]
	},
	{
		title: 'Javascript',
		contents: [
			'nest.js, express 를 활용한 REST API 서버 개발',
			'Vue.js를 활용한 어드민 시스템 개발',
			'Ionic을 이용한 크로스플랫폼 모바일 어플리케이션 개발'
		]
	},
	{
		title: 'Cloud',
		contents: [
			'AWS(EC2, IAM, ECR, RDS, Route53 등)를 사용한 서버 인프라 구축',
			'네이버 클라우드와 자체 온프레미스 환경에서 서버 관리',
			'Github, Gitlab Action/Runner를 통한 배포 스크립트 작성 및 Slack을 통한 배포상태 공유'
		]
	}
];


export const educations = [
	{
		title: '인덕대학교 컴퓨터소프트웨어학과',
		period: '',
		content: '컴퓨터소프트웨어학과에서 4년간 공부하며 컴퓨터구조, 자료구조, 컴퓨터네트워크, 웹 프로그래밍 등의 과목을 우수한 성적으로 이수하였습니다.'
	},
	{
		title: '비트캠프 자바 웹 개발자 양성과정',
		period: '',
		content: '자바 스프링 및 데이터베이스, html 위주로 진행된 부트캠프 입니다. 마지막 조별과제를 통해 취직전 협업 능력을 키웠습니다.'
	}
];
