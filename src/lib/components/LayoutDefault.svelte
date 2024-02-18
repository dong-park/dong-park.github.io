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

	function back_page() {
		const pathArray = window.location.pathname.split('/').filter(Boolean);
		if (pathArray.length > 1) {
			pathArray.pop();
			let newPath = '/' + pathArray.join('/');

			if (pathArray.length === 1) {
				newPath = '/';
			}

			window.location.pathname = newPath;
		} else {
			// Optionally handle the case where there is no previous depth (e.g., navigate to home)
			console.log("No previous depth. Stay on the current page or navigate to a default page.");
		}
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
			top: el.offsetTop + 225,
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
	<nav data-animate data-animate-speed="slow" class="fixed -translate-x-[180px] max-w-[150px] mt-6">
		<button class="text-xs" on:click={back_page}>⬅</button>
		<ul>
			{#each headings as { id, text, text_, tagName, top, el }}
				<li class="truncate">
					<a class="text-xs cursor-pointer {activeSection === text_ ? 'font-bold' : ''}"
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

	nav {
		@media (max-width: 1250px) {
			display: none;
		}
	}
</style>
