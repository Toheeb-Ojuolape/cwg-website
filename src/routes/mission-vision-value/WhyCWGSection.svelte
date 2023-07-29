<script lang="ts">
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from 'svelte-hero-icons';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import type { MissionPage } from '$lib/types/mission-page';
	import { CMS_URL } from '$lib/api';

	export let carousel: MissionPage['why_cwg_section_carousel'];
	export let image: MissionPage['why_cwg_section_image'];

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

<section
	class="box-container mt-25 mx-auto flex lg:flex-row gap-20 bg-whitish-blue dark:bg-dark-highlight"
>
	<div class="flex-1 h-[390px]">
		<img
			src={CMS_URL + image.data?.attributes.url}
			alt={image.data?.attributes.alternativeText}
			class="h-full w-full object-cover"
		/>
	</div>
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
				{#each carousel as { content, title, subtitle }}
					<div class="flex w-full min-w-full flex-col gap-5 pr-8">
						<h2 class="text-headline-2">{title}</h2>
						<h6 class="text-headline-6">{subtitle}</h6>
						<p class="text-body-m">
							{@html content ?? ''}
						</p>
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
					solid={Array(3).length - 1 > scrollValue}
					class="h-10 w-10"
				/></button
			>
		</div>
	</div>
</section>
