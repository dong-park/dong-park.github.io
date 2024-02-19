<script>
	import { onMount } from 'svelte';
	import { moveBack } from '$lib/utils/routes.ts';

	let headings = [];
	let activeSection = '';

	function initHeadings() {
		const h2Elements = Array.from(document.querySelectorAll('h2, h3'));
		headings = h2Elements.map((el, index) => ({
			id: `heading-${index}`,
			text: el.innerText,
			text_: el.innerText.toLowerCase().replace(/ /g, '-'),
			tagName: el.tagName,
			top: el.offsetTop + 225,
			el: el
		}));
	}

	function addScrollEvent() {
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
	}

	onMount(() => {
		initHeadings();
		addScrollEvent();
	});
</script>


<nav data-animate data-animate-speed="slow" class="fixed -translate-x-[230px] max-w-[200px] mt-6">
	<button class="text-sm" on:click={moveBack}>
		<img src="/back.svg" alt="back" class="w-4 h-4 inline-block mr-2" />
	</button>
	<ul>
		{#each headings as { id, text, text_, tagName, top, el }}
			<li class="truncate">
				<a class="text-sm cursor-pointer {activeSection === text_ ? 'font-bold' : ''}"
					 on:click={() => el.scrollIntoView({ behavior: 'smooth' })}
				>
					{text}
				</a>
			</li>
		{/each}
	</ul>
</nav>
<button class="back-button" on:click={moveBack}>⬅</button>


<style lang="scss">
  .back-button {
    @apply px-4 text-xs;

    @media (min-width: 1250px) {
      display: none;
    }
  }

  nav {
    @media (max-width: 1250px) {
      display: none;
    }
  }
</style>
