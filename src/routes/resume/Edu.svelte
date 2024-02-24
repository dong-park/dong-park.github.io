<script>
	import { educations } from './datas.ts';
</script>

<div class="paragraphs">
	<div class="">
		<h1 class="text-4xl font-sans font-light mb-2">Education.</h1>
		<div class="space-y-6">
			{#each educations as education}
				<div class="flex-col justify-between items-center space-y-2">
					<h3 class="">
						{education.title}
					</h3>
					<div class="content text-md">
						{education.content}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
