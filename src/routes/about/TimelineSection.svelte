<script lang="ts">
	import TimelineCard from './TimelineCard.svelte';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import type { AboutPage } from '$lib/types/about-page';

	export let data: AboutPage['history_section'];

	let emblaApi: EmblaCarouselType;

	let scrollValue = 0;

	let carousels = Array(8);

	function onEmblaScroll() {
		scrollValue = emblaApi.scrollSnapList()[emblaApi.selectedScrollSnap()];
	}

	$: if (emblaApi) {
		emblaApi.on('select', () => {
			onEmblaScroll();
		});
	}
</script>

<section class="box-container mx-auto pt-8 lg:pt-9">
	<h2
		class="text-headline-4 text-center lg:text-left lg:text-headline-2 mb-9 ml-4 mx-4 lg:mx-0 lg:ml-8 2xl:ml-0"
	>
		{data.title}
	</h2>

	<div
		class="overflow-hidden"
		use:emblaCarouselSvelte={{
			options: { containScroll: 'trimSnaps', align: 'start', dragFree: false },
			plugins: [Autoplay({ delay: 2000 })]
		}}
		on:emblaInit={(ev) => (emblaApi = ev.detail)}
	>
		<div class="flex gap-8 lg:gap-11">
			{#each data.histories as item, index}
				<TimelineCard
					{...item}
					{index}
					isFirstItem={index === 0}
					isLastItem={index === carousels.length - 1}
				/>
			{/each}
		</div>
	</div>

	<div class="h-[1px] bg-black-600 dark:bg-black-900 ml-8 lg:ml-[128px] mt-15">
		<div
			style={`width: calc(100% * ${scrollValue})`}
			class="bg-bright-blue h-full transition-[width] duration-300"
		/>
	</div>
</section>
