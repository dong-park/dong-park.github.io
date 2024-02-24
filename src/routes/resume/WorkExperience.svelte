<script>
	import { histories} from './datas.ts';

	let isMobile = false;

	function handleResize() {
		isMobile = window.innerWidth < 800;
	}
</script>

<svelte:window on:resize={handleResize} />

<div>
	<h1 class="text-4xl font-sans font-light mb-3">Work Experience.</h1>
	<div class="space-y-1">
		{#each histories as history}
			<div class="history flex w-full">
				<div class="company w-[25%]" class:hidden = {isMobile}>
					<h2 class="font-2xl subtitle font-bold font-sans">
						{history.company}
					</h2>
					<div class="content text-sm text-gray-400 font-sans">
						{history.period}
					</div>
				</div>
				<div class="projects mb-8" class:w-[75%] = {!isMobile}>
					{#if isMobile}
						<div class="company">
							<h2 class="subtitle font-bold font-sans">
								{history.company}
							</h2>
							<div class="content text-xs text-gray-400 font-sans">
								{history.period}
							</div>
						</div>
					{/if}
					<div class="space-y-4">
						{#each history.projects as project}
							<div class="project">
								<div class="content">
									<h3 class="font-sans">{project.title}</h3>
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
			</div>
		{/each}
	</div>

</div>

<style lang="scss">

	h3 {
		font-weight: 500;
	}

	li {
		@apply pl-4;
	}

  li::before {
    content: "•";
    color: #888888;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

</style>
