<script lang="ts">
	import DotPager from '$lib/components/DotPager.svelte';
	import { inview } from 'svelte-inview';
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import type { HomePageData } from './types';
	import { CMS_URL } from '$lib/api';

	let shouldShowSlide = false;

	let currentSlide = 0;

	let carousel: any;

	function gotoIndex(index: number) {
		carousel.goTo(index, { animated: true });
	}

	function onSelectDot(index: number) {
		gotoIndex(index);
		currentSlide = index;
	}

	export let content: HomePageData['industries_we_dominate_section'];
</script>

<section
	use:inview
	on:change={(e) => {
		// @ts-ignore
		if (e.detail.inView) {
			shouldShowSlide = true;
		}
	}}
	class="section-container mt-8 lg:mt-[105.65px]"
>
	<h2 class="text-headline-2 lg:text-headline-1 text-center mb-6 lg:mb-16">
		{content.title}
	</h2>

	<div class="min-h-[324px]">
		{#if browser}
			<Carousel
				arrows={false}
				autoplay={true}
				initialPageIndex={currentSlide}
				let:currentPageIndex
				let:pagesCount
				bind:this={carousel}
			>
				{#each content.cards as { content: cardContent, image, title }}
					<div class="grid lg:grid-cols-2 gap:4 lg:gap-[55.25px]">
						<div class="lg:h-[324px]">
							<img
								src={CMS_URL + image.data?.attributes.url}
								alt={image.data?.attributes.alternativeText}
							/>
						</div>

						<div class="flex flex-col justify-center">
							<h3
								class="text-headline-4 lg:text-headline-3 mb-6 mt-3 lg:mt-0 lg:mb-[37.5px]"
							>
								{title}
							</h3>
							<p
								class="text-body-m font-light lg:text-body-l max-w-[532px] overflow-hidden"
							>
								{@html cardContent}
							</p>
						</div>
					</div>
				{/each}

				<div slot="dots">
					<div class="flex justify-center mt-10 lg:mt-[72px]">
						<DotPager
							length={pagesCount}
							selected={currentPageIndex}
							on:onSelectDot={(e) => onSelectDot(e.detail.selected)}
						/>
					</div>
				</div>
			</Carousel>
		{/if}
	</div>
</section>
