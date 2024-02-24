<script>

	import { techs } from './datas.ts';

</script>

<div class="paragraphs">
	<div class="projects">
		<h1 class="text-4xl font-sans font-light mb-2">Tech Experience.</h1>
		<div class="space-y-8">
			{#each techs as tech}
				<div class="">
					<h2 class="title font-bold">{tech.title}</h2>
					<ul class="">
						{#each tech.contents as content}
							<li class="content">{content}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
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
