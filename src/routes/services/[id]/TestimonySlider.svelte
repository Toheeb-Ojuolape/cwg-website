<script lang="ts">
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from 'svelte-hero-icons';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import type { ComponentProductPageCwgAcademySection } from './types';

	export let list: ComponentProductPageCwgAcademySection['carousel'];

	let emblaApi: EmblaCarouselType;

	let scrollValue = 0;

	function onEmblaScroll() {
		scrollValue = emblaApi.selectedScrollSnap();
	}

	$: if (emblaApi) {
		emblaApi.on('select', () => {
			onEmblaScroll();
		});
	}
</script>

<div class="flex-1 flex flex-col justify-center">
	<div
		class="overflow-hidden w-full"
		use:emblaCarouselSvelte={{
			options: { containScroll: 'trimSnaps', align: 'start' },
			plugins: []
		}}
		on:emblaInit={(ev) => (emblaApi = ev.detail)}
	>
		<div class="flex">
			{#each list as { content, title }}
				<div
					class="flex w-full min-w-full flex-col gap-5 pr-8 pb-5 relative testimony-block"
				>
					<img src="/images/quote.svg" alt="quote" class="quote-icon" />
					<div class="text-body-m relative lg:text-2xl z-10 mt-[25px] testimony-text">
						{@html content}
					</div>
					<div class="testifier sm:text-lg">{title}</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex items-center gap-3 mt-14">
		<button on:click={() => emblaApi.scrollPrev()}
			><Icon src={ArrowLeftCircle} solid={scrollValue > 0} class="h-10 w-10" /></button
		>
		<button on:click={() => emblaApi.scrollNext()}
			><Icon
				src={ArrowRightCircle}
				solid={Array(2).length - 1 > scrollValue}
				class="h-10 w-10"
			/></button
		>
	</div>
</div>
