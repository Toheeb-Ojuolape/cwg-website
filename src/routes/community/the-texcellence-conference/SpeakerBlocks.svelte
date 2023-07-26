<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { TExcellence } from './types';

	const DEFAULT_IMAGE = '/images/yet-to-be-confirmed.jpg';

	export let speakers: TExcellence['speakers']['data'];
</script>

{#each speakers as { attributes: { first_name, last_name, image, position, title } }}
	<div class="texellence-speaker-block">
		<div class="speaker-img-wrapper bg-midnight-blue">
			<img
				src={image.data?.attributes.url
					? `${CMS_URL}${image.data?.attributes.url}`
					: DEFAULT_IMAGE}
				alt="speaker"
				class="speaker-img bg-img"
			/>
		</div>
		<div class="speaker-details bg-burlywood text-white p-[20px]">
			<div class="speaker-name">{title} {first_name} {last_name}</div>
			<div class="speaker-job">{position}</div>
		</div>
	</div>
{/each}

<style>
	.speaker-img-wrapper {
		width: 100%;
		position: relative;
		padding-top: 91%;
	}
	.speaker-name {
		font-size: 18px;
		padding-bottom: 5px;
	}
	.speaker-job {
		font-size: 12px;
	}
</style>
