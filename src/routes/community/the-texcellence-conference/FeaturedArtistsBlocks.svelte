<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { TExcellence } from './types';

	const DEFAULT_IMAGE = '/images/yet-to-be-confirmed-2.jpg';
	export let artists: TExcellence['featured_artists'];
</script>

{#if artists}
	{#each artists.data as { attributes: { artist_type, image, name, uuid } }}
		<div class="featured-artist-block flex bg-whitish-blue dark:bg-dark-highlight">
			<div class="artist-img-wrapper w-[120px] lg:w-[212px] h-[142px] lg:h-[234px] relative">
				<img
					src={image.data ? CMS_URL + image.data.attributes.url : DEFAULT_IMAGE}
					alt="artist"
					class="artist-img bg-img"
				/>
			</div>
			<div class="aritist-details-block relative flex-1">
				<div class="artist-details">
					<div class="artist-name">{name}</div>
					<div class="artist-role">{artist_type}</div>
				</div>
			</div>
		</div>
	{/each}
{:else}
	<div />
{/if}

<style>
	.artist-img-wrapper {
		border-bottom: 1px solid var(--color-midnight-blue);
	}
	.aritist-details-block {
		border-bottom: 1px solid var(--color-greyish-blue);
	}
	.artist-name {
		font-size: 22px;
	}
	.artist-details {
		position: absolute;
		bottom: 25px;
		left: 25px;
	}

	@media (min-width: 1024px) {
		.artist-name {
			font-size: 22px;
		}
	}

	@media (max-width: 640px) {
		.artist-name {
			font-size: 20px;
		}
		.artist-role {
			font-size: 13px;
		}
	}
</style>
