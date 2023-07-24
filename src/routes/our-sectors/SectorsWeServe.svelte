<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { Sectors } from './types';

	export let sectors: Sectors;
</script>

{#each sectors.data as { attributes: { description, image, slug, title, content } }}
	<div class="sws-block bg-white dark:bg-black">
		<div class="sws-img-wrapper bg-midnight-blue relative min-h-[240px]">
			<img src={CMS_URL + image.data?.attributes.url} alt={title} class="sws-img" />
		</div>
		<div class="sws-block-title bg-midnight-blue text-white py-4 px-8 sm:px-10">
			{description}
		</div>
		<div class="sws-block-desc relative p-8 pb-30 sm:p-10 sm:pb-30">
			{@html content}
		</div>
		<a
			href={`/our-sectors/${slug}`}
			class="learn-more-link flex gap-5 text-lg max-w-[170px] mt-10"
		>
			<span>Learn more</span>
			<div class="arrow-right">
				<ArrowRightLong strokeClassName="stroke-blue" />
			</div>
		</a>
	</div>
{/each}
