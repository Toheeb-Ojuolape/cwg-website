<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import './awards-styles.css';
	import type { Awards } from './types';

	export let awards: Awards['data'];

	let isButtonVisible = awards.length > 21;

	function addShowClass() {
		const sharedElements = document.querySelectorAll('.award-block');
		sharedElements.forEach((element) => {
			element.classList.add('show-awards');
		});

		isButtonVisible = false;
	}
</script>

<div class="pb-10 grid sm:grid-cols-3 lg:grid-cols-4">
	{#each awards as { attributes: { image, title, description } }}
		<div class="award-block">
			<div class="award-img-wrapper">
				<img src={CMS_URL + image.data?.attributes.url} alt={title} class="bg-img" />
			</div>
			<div class="award-title">{title}</div>
			<div class="award-desc">{description}</div>
		</div>
	{/each}
</div>

{#if isButtonVisible}
	<button
		on:click={addShowClass}
		class="show-awards-trigger-wrapper flex gap-2 justify-center items-center text-bright-blue cursor-pointer mx-auto my-10"
	>
		<span>View {awards.length - 21} more </span>
		<img src="/images/bright-blue-caret.svg" alt="bright-blue-caret" />
	</button>
{/if}
