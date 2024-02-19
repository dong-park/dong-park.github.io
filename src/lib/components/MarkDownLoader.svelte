<script>

	import { onMount } from 'svelte';

	function addCodeLangName() {
		document.querySelectorAll('.post-content pre > code').forEach((code) => {
			const lang = code.className.match(/language-(\w+)/);
			if (lang) {
				let langName = lang[1];
				langName = langName[0].toUpperCase() + langName.slice(1);
				const langEl = document.createElement('div');
				langEl.className = 'language-name';
				langEl.textContent = langName;
				code.parentElement.insertBefore(langEl, code);
			}
		});
	}

	function deleteATag() {
		document.querySelectorAll('.post-content a').forEach((a) => {
			// 리터럴 링크는 삭제한다
			if (a.href === a.textContent) {
				a.remove();
			}
		});
	}

	onMount(() => {
		addCodeLangName();
		deleteATag();
	});

</script>

<div class="post-content">
	<div class="mt-[1.5em]"/>
	<slot/>
</div>

<style lang="scss">
  @import '../../assets/note.scss';
</style>
