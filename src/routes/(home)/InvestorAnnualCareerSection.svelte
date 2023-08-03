<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import { sub } from 'date-fns';
	import type { HomePageData } from './types';

	export let list: HomePageData['home_highlight_cards'];
</script>

<section class="box-container mx-auto grid lg:grid-cols-3">
	{#each list as { image, title, subtitle }}
		<div
			class="Section__card"
			style={`background-image: url('${CMS_URL}${image.data?.attributes.url}')`}
		>
			<div>
				<div class="Section__card__header">
					<p class="text-headline-3 lg:text-headline-2">{title}</p>
					<ArrowRightLong />
				</div>
				<p class="text-body-m font-light lg:text-body-l">
					{subtitle}
				</p>
			</div>
		</div>
	{/each}
</section>

<style>
	.Section__card {
		height: 384px;
		background-position: center;
		background-size: cover;
		position: relative;
		color: white;
	}

	.Section__card > div {
		height: 100%;
		padding: 84.84px 33.5px 44.16px 33.5px;
	}

	.Section__card__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 129px;
	}

	@media (max-width: 1024px) {
		.Section__card {
			height: 250px;
		}

		.Section__card > div {
			padding: 20px 16px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.Section__card__header {
			margin-bottom: 0px;
		}
	}
</style>
