<script lang="ts">
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from 'svelte-hero-icons';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';

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

<section class="box-container mt-25 mx-auto flex lg:flex-row gap-20 bg-whitish-blue">
	<div class="flex-1 h-[390px] bg-burlywood" />
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
				{#each Array(3) as _}
					<div class="flex w-full min-w-full flex-col gap-5 pr-8">
						<h2 class="text-headline-2">Why CWG?</h2>
						<h6 class="text-headline-6">Work-Life Balance & Gender Equity</h6>
						<p class="text-body-m">
							Our labor relations are based on equal opportunities, non-discrimination
							and respect for diversity. At CWG we are committed to our employees as
							an active part of our success, and our workplace model promotes
							professional excellence, and quality of life for our employees.
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
