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
			el: el
		}));
	}

	onMount(() => {
		initHeadings();
	});


</script>

<nav class="mt-6">
	<ul class="mt-1 space-y-1 text-sm underline">
		{#each headings as { id, text, text_, tagName, top, el }}
			<li class="truncate font-sans cursor-pointer {activeSection === text_ ? 'font-bold' : ''}">
				<button
					class="hover:bg-gray-100 w-full text-left"
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
