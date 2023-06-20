<script lang="ts">
	import DotPager from '$lib/components/DotPager.svelte';
	import { inview } from 'svelte-inview';
	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';

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
</script>

<section
	use:inview
	on:change={(e) => {
		if (e.detail.inView) {
			shouldShowSlide = true;
		}
	}}
	class="section-container mt-[105.65px]"
>
	<h2 class="text-headline-1 text-center mb-16">Industries we dominate</h2>

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
				{#each [1, 2, 3] as _, i}
					<div class="grid grid-cols-2 gap-[55.25px]">
						<div class="h-[324px] bg-burlywood" />

						<div class="flex flex-col justify-center">
							<h3 class="text-headline-3 mb-[37.5px]">
								Financial Service Institutions
							</h3>
							<p class="text-body-l max-w-[532px] overflow-hidden">
								Globally, Financial Services Institutions are constantly undergoing
								technological upgrades. CWG supports this drive in Financial
								Technology platforms and provides cloud services and software
								solutions to about 60% of all financial institutions in Nigeria and
								has successfully implemented and supported Finacle which is the
								foremost core banking application in Nigerian banking system.
							</p>
						</div>
					</div>
				{/each}

				<div slot="dots">
					<div class="flex justify-center mt-[72px]">
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
