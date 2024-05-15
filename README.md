# dong-park.github.io

## 목차

- [소개](#소개)
- [기능](#기능)
- [설치](#설치)
- [사용법](#사용법)
- [프로젝트 구조](#프로젝트-구조)
- [기여](#기여)
- [라이센스](#라이센스)

## 소개

이 프로젝트는 SvelteKit을 사용하여 간단하지만 강력한 정적 위키 페이지를 제공하는 것을 목표로 합니다. SvelteKit은 정적 사이트를 만들기 위한 빠르고 유연한 프레임워크로, 정적 위키를 생성하는 데
적합한 선택입니다.

## 기능

- 빠르고 반응형 디자인
- 마크다운을 사용한 위키 페이지 생성 및 편집 지원
- 최적의 성능을 위한 정적 사이트 생성
- 쉬운 네비게이션 및 검색 기능
- 커스터마이징 가능한 테마 및 레이아웃

## 설치

이 프로젝트를 시작하려면 Node.js와 npm(또는 yarn)이 설치되어 있어야 합니다. 다음 단계에 따라 프로젝트를 설정하십시오:

1. 저장소를 클론합니다:
2. 종속성을 설치합니다.

```bash
npm install
# 또는
yarn install
```

3. 개발 서버를 시작합니다:

```bash
npm run dev
# 또는
yarn dev
```

4. 브라우저를 열고 http://localhost:5173으로 이동하여 위키를 확인합니다.

## 사용법

### 새로운 위키 페이지 추가

src/routes/wiki 디렉토리에 새로운 마크다운 파일을 생성합니다.
마크다운 문법을 사용하여 내용을 작성합니다.
파일을 저장하면 자동으로 위키에 표시됩니다.

### 정적 사이트 빌드

배포를 위해 정적 사이트를 빌드하려면 다음 명령을 실행하십시오:
정적 파일은 docs 디렉토리에 생성됩니다. 이러한 파일을 정적 호스팅 서비스에 배포할 수 있습니다.

### 프로젝트 구조

다음은 프로젝트 구조에 대한 개요입니다:

```
blog
├── .github/
├── .svelte-kit/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── global.scss
│   ├── lib/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── model/
│   │   └── utils/
│   │       ├── markDownPostLoader.ts
│   │       └── store.ts
│   ├── routes/
│   │   ├── resume/
│   │   ├── wikis/
│   │   ├── +layout.svelte
│   │   ├── +layout.ts
│   │   ├── +page.svelte
│   │   └── +page.ts
│   ├── app.d.ts
│   └── app.html
├── static/
│   ├── icons/
│   ├── imgs/
│   ├── .nojekyll
│   └── favicon.ico
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── .npmrc
├── .prettierignore
├── .prettierrc
├── mdsvex.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── svelte.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 기여

이 프로젝트에 기여를 환영합니다! 새로운 기능에 대한 아이디어가 있거나 버그를 발견하셨다면 이슈를 등록하거나 풀 리퀘스트를 제출해 주세요.

## 기여하는 방법

1. 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다 (git checkout -b feature/your-feature).
3. 변경 사항을 커밋합니다 (git commit -m 'Add some feature').
4. 브랜치에 푸시합니다 (git push origin feature/your-feature).
5. 풀 리퀘스트를 엽니다.

## 라이센스

이 프로젝트는 MIT 라이센스 하에 라이센스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요. 이 `README.md` 파일은 제공된 디렉토리 구조를 반영하여 업데이트되었습니다. 프로젝트의 특성에 맞게
필요에 따라 추가 수정할 수 있습니다.
