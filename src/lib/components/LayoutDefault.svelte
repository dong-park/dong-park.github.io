<script>
	import MarkDownLoader from './MarkDownLoader.svelte';
	import { onMount } from 'svelte';

	export let title = '';
	export let summary = '';
	export let date = '';
	export let thumbnail = '';
	export let nextContent = '클린코드 2장';

	const commentOptions = {
		src: "https://utteranc.es/client.js",
		repo: "dong-park/dong-park.github.io",
		'issue-term': "pathname",
		theme: "github-light",
		crossOrigin: "anonymous",
	};
	let headings = [];
	let activeSection = '';


	function transformDate() {
		// trans Dec 31, 2021 format
		const options = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en-US', options);
	}

	onMount(() => {
		const h2Elements = Array.from(document.querySelectorAll('h2, h3'));
		const utteranceScript = document.createElement('script');
		const targetTag = document.getElementById('utterances-comments');
		headings = h2Elements.map((el, index) => ({
			id: `heading-${index}`,
			text: el.innerText,
			text_: el.innerText.toLowerCase().replace(/ /g, '-'),
			tagName: el.tagName,
			top: el.offsetTop + 160,
			el: el
		}));

		window.addEventListener('scroll', () => {
			const scrollPosition = window.pageYOffset;
			let lastPassedSection = '';
			headings.forEach(heading => {
				if (scrollPosition >= heading.top - window.innerHeight * 0.1) {
					lastPassedSection = heading.text_;
				}
			});

			activeSection = lastPassedSection;
		});

		// Loop over the options & apply each property as an attribute
		for (const prop in commentOptions) {
			utteranceScript.setAttribute(prop, commentOptions[prop]);
		}

		targetTag.appendChild(utteranceScript);

	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={summary} />
</svelte:head>
<main>
	<nav class="fixed -translate-x-[250px] max-w-[230px] mt-6">
		<ul data-animate data-animate-speed="slow">
			{#each headings as { id, text, text_, tagName, top, el }}
				<li class="truncate">
					<a class="text-sm cursor-pointer {activeSection === text_ ? 'font-bold' : ''}"
						 href={`#${text_}`}
						 on:click={() => el.scrollIntoView({ behavior: 'smooth' })}
					>
						{text}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<article class="content-wrapper" data-animate data-animate-speed="slow">
		<h1>{title}</h1>
		<div class="text-sm">{transformDate()}</div>
		<MarkDownLoader>
			<slot />
		</MarkDownLoader>
	</article>
<!--	<div class="similar-posts">-->
<!--		<p>비슷한 태그의 글</p>-->
<!--	</div>-->
	<div id="utterances-comments" class="content-wrapper"/>
</main>

<style lang="scss">
  h1 {
    font-family: var(--font-serif);
    @apply font-bold;
  }

  .content-wrapper {
    @apply relative bg-white py-6 px-4;
    @apply flex flex-col;
  }

  header {
    @apply mb-2;
  }

  .font-bold {
    font-weight: bold; // This might be redundant if using Tailwind CSS or similar
  }

	// nav는 화면이 800px 이상일 때만 보이도록 함
	nav {
		@media (max-width: 800px) {
			display: none;
		}
	}
</style>
