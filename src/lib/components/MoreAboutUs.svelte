<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { PageMoreAboutUs } from '$lib/types/common-types';

	export let content: PageMoreAboutUs;
</script>

{#if content}
	<section class="section-container mt-8 lg:mt-15 mb-15 lg:mb-[114px]">
		<div class="flex items-center gap-6 mb-8 lg:mb-11">
			<h3 class="text-headline-5 lg:text-headline-3">{content.title}</h3>
			<hr class="border-t mt-3 border-t-black-600 dark:border-t-black-900 flex-1" />
		</div>

		<div class="flex flex-col lg:flex-row gap-8 lg:gap-10">
			{#each content.cards as { image, slug, title }, i}
				<a
					href={slug}
					class="w-full group"
					class:lg:w-[380px]={i !== 1}
					class:flex-1={i === 1}
				>
					<div class="h-[180px] overflow-hidden mb-3 lg:mb-7">
						<img
							src={CMS_URL + image.data?.attributes.url}
							alt={title}
							class="AboutImage__block"
						/>
					</div>
					<div
						class="text-body-l font-medium lg:font-normal lg:text-headline-6 flex items-center justify-between"
					>
						{title}
						<ArrowRightLong strokeClassName="stroke-midnight-blue dark:stroke-white" />
					</div>
				</a>
			{/each}
		</div>
	</section>
{:else}
	<div class="mb-15 lg:mb-[114px]" />
{/if}

<style>
	.AboutImage__block {
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: all 0.3s;
	}

	.group:hover .AboutImage__block {
		transform: scale(1.25);
	}
</style>
