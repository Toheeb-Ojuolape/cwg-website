<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import Autoplay from 'embla-carousel-autoplay';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import { ArrowRight, Icon } from 'svelte-hero-icons';
	import type { HomeService } from './types';

	export let list: HomeService[];

	let emblaApi: EmblaCarouselType;

	let scrollValue = 0;

	function onEmblaScroll() {
		scrollValue = emblaApi.scrollSnapList()[emblaApi.selectedScrollSnap()];
	}

	$: if (emblaApi) {
		emblaApi.on('select', () => {
			onEmblaScroll();
		});
	}
</script>

<section class="bg-black-400 dark:bg-black">
	<div class="section">
		<div class="section-container py-22">
			<div
				class="overflow-hidden"
				use:emblaCarouselSvelte={{
					options: { containScroll: 'trimSnaps', align: 'start', dragFree: false },
					plugins: [Autoplay({ delay: 5000 })]
				}}
				on:emblaInit={(ev) => (emblaApi = ev.detail)}
			>
				<div class="fifthlab-products-wrapper flex gap-8 lg:gap-11">
					{#each list as { attributes: { content, description, image, slug, title } }}
						<div class="fifthlab-product-block m-auto">
							<div
								class="grid gap-10 lg:gap-15 bg-white dark:bg-dark-highlight max-w-[1040px] py-5 px-7 mx-auto w-full"
							>
								<div
									class="w-full min-w-[324px] lg:w-[324px] h-[324px] bg-midnight-blue"
								>
									<img
										class="h-full w-full object-cover"
										src={CMS_URL + image.data?.attributes.url}
										alt={title}
									/>
								</div>

								<div class="">
									<p class="text-body-l mb-8 text-pewter-blue">
										- Solutions across Africa
									</p>

									<h2 class="text-headline-2">{title}</h2>

									<p class="text-body-l font-normal max-w-[478px] mb-7">
										{description ?? content[0].description}
									</p>

									<a
										href={`/services/${slug}`}
										class="text-button-l flex items-center gap-1"
									>
										Explore all <Icon
											src={ArrowRight}
											solid={true}
											class="h-4 w-4 fill-midnight-blue dark:fill-white"
										/>
									</a>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.fifthlab-product-block {
		flex: 0 0 100%;
	}
	.fifthlab-product-block > .grid {
		grid-template-columns: 1.2fr 1.8fr;
	}

	.section {
		background-image: url('/images/services_bg.svg');
		background-repeat: no-repeat;
		background-position: top right;
		background-size: auto;
	}

	@media (max-width: 767px) {
		.fifthlab-product-block > .grid {
			grid-template-columns: 100%;
		}
	}
</style>
