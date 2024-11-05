<script lang="ts">
	import { onMount } from 'svelte';

	let headings: any[] = [];
	let activeSection = '';

	function initHeadings() {
		const h2Elements = Array.from(document.querySelectorAll('h2'));
		headings = h2Elements.map((el, index) => ({
			id: `heading-${index}`,
			text: el.innerText,
			text_: el.innerText.toLowerCase().replace(/ /g, '-'),
			tagName: el.tagName,
			el: el
		}));
	}

	onMount(() => {
		initHeadings();
	});
</script>

<nav class="relative z-20 mt-6">
	<ul class="mt-1 space-y-1 text-sm underline">
		{#each headings as { id, text, text_, tagName, top, el }}
			<li class="truncate font-sans cursor-pointer {activeSection === text_ ? 'font-bold' : ''}">
				<button
					class="sm:hover:bg-gray-100 w-full text-left {tagName}"
					on:click={() =>{
						el.scrollIntoView({ behavior: 'smooth',  })
					}}
				>
					{text}
				</button>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	.H2 {
		@apply ml-0;
	}

	.H3:before {
    content: "•";
			color: #888888;
			//display: inline-block;
			width: 1em;
			//margin-left: -1em;
	}
</style>
