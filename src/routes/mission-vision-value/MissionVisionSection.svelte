<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import LineIcon from '$lib/components/Svgs/LineIcon.svelte';
	import MissionCompass from '$lib/components/Svgs/MissionCompass.svelte';
	import VisionEye from '$lib/components/Svgs/VisionEye.svelte';
	import type { MissionPage } from '$lib/types/mission-page';

	export let data: MissionPage['mission_vision_section'];
</script>

<section class="section-container">
	{#each data as { title, subtitle, image }, i}
		<div>
			<img src={CMS_URL + image.data?.attributes.url} alt={title} />
			<h5 class="text-headline-6 lg:text-headline-5">{title}</h5>
			<p>{subtitle}</p>
		</div>

		{#if i < data.length - 1}
			<LineIcon />
		{/if}
	{/each}
</section>

<style>
	.section-container {
		padding: 0 16px;
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
	}

	.section-container > div > p {
		font-size: 15px;
		line-height: 24px;
	}

	@media (min-width: 1024px) {
		.section-container {
			padding: 0 128px;
			margin-bottom: 75px;
			flex-direction: row;
			align-items: center;
			gap: 104px;
		}

		.section-container > div {
			flex: 1;
		}

		.section-container > div > h5 {
			margin-bottom: 20px;
			margin-top: 30px;
		}

		.section-container > div > p {
			font-size: 18px;
			line-height: 26px;
		}
	}
</style>
