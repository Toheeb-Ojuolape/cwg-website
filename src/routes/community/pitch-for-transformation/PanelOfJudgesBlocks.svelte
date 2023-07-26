<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { Judge } from './types';

	export let judges: Judge[];

	const DEFAULT_IMAGE = '/images/yet-to-be-confirmed.jpg';
</script>

{#each judges as { attributes: { image, last_name } }}
	<div class="judges-block flex items-end">
		<div class="judges-img-wrapper relative bg-midnight-blue">
			<img
				src={image.data?.attributes.url
					? CMS_URL + image.data?.attributes.url
					: DEFAULT_IMAGE}
				alt={last_name}
				class="judges-picture bg-img"
			/>
		</div>
		<div class="side-blue bg-whitish-blue dark:bg-dark-highlight" />
	</div>
{/each}

<style>
	.judges-img-wrapper {
		width: calc(100% - 30px);
		padding-top: 100%;
	}
	.side-blue {
		border-top: 1px solid var(--color-greyish-blue);
		border-right: 1px solid var(--color-greyish-blue);
		width: 30px;
		height: calc(100% - 2px);
	}
</style>
