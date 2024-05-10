<script lang="ts">
	import { onMount } from 'svelte';

	let headings: any[] = [];
	let activeSection = '';

	function initHeadings() {
		const h2Elements = Array.from(document.querySelectorAll('h2, h3'));
		headings = h2Elements.map((el, index) => ({
			id: `heading-${index}`,
			text: el.innerText,
			text_: el.innerText.toLowerCase().replace(/ /g, '-'),
			tagName: el.tagName,
			top: el.offsetTop + 220,
			el: el
		}));
	}

	function addScrollEvent() {
		window.addEventListener('scroll', () => {
			const scrollPosition = window.pageYOffset;
			let lastPassedSection = '';
			headings.forEach((heading) => {
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

<nav class="mt-6">
	<ul class="mt-1 space-y-1 text-sm underline">
		{#each headings as { id, text, text_, tagName, top, el }}
			<li class="truncate font-sans cursor-pointer hover:bg-gray-100 {activeSection === text_ ? 'font-bold' : ''}">
				<button on:click={() => el.scrollIntoView({ behavior: 'smooth' })}>
					{text}
				</button>
			</li>
		{/each}
	</ul>
</nav>
