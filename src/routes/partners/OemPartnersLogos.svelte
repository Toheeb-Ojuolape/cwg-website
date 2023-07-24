<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import { theme } from '$lib/stores/theme-store';
	import type { OEMPartner } from '$lib/types/oem-partner';

	export let logos: OEMPartner[];
	let showMore = true;

	function toggleSeeMore() {
		showMore = !showMore;
	}

	const commonClasses =
		'logos-wrapper flex flex-wrap gap-[40px] max-w-[1380px] m-auto justify-center px-5 dark:dark-wrapper';
	const commonToggleBtnClass = 'flex items-center gap-3 toggle-see-more-btn text-bright-blue';
</script>

<div class={showMore ? `${commonClasses} show-more` : `${commonClasses}`}>
	{#each logos as { attributes: { logo, logo_dark } }}
		<img
			src={CMS_URL +
				($theme === 'light' ? logo.data.attributes.url : logo_dark.data.attributes.url)}
			alt=""
			class="partner-logo"
		/>
	{/each}
</div>

<!--=== Toggle Button ===-->
<button
	on:click={toggleSeeMore}
	class={showMore ? `${commonToggleBtnClass} see-more` : `${commonToggleBtnClass}`}
>
	<span>{showMore ? 'See More' : 'See Less'}</span>
	<img src="/images/blue-arrow-down.svg" alt="blue-arrow-down" class="arrow-down" />
</button>

<style>
	.logos-wrapper {
		max-height: 10000px;
		transition: max-height 0.5s ease-out;
	}
	.logos-wrapper.show-more {
		max-height: 200px; /* Adjust this value based on the height you want to show initially */
		overflow: hidden;
		position: relative;
	}

	button.toggle-see-more-btn {
		position: absolute;
		bottom: 0;
		left: 50%;
		border-bottom: 1px solid var(--color-bright-blue);
		padding: 10px 20px;
		transform: translateX(-50%);
	}
	button img.arrow-down {
		transform: rotate(180deg);
		transition: transform 1s;
	}
	button.see-more img.arrow-down {
		transform: rotate(0deg);
	}
</style>
