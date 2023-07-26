<script lang="ts">
	import '../services/services-styles.css';
	import './fifthlab-style.css';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import FifthlabBar from '$lib/components/Svgs/FifthlabBar.svelte';

	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import FifthlabProducts from './FifthlabProducts.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: fifthlab = data.fifthlab;

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

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${
			CMS_URL + fifthlab.header.bg_image.data[0].attributes.url
		})`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">{fifthlab.header.sub_headline}</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{fifthlab.header.title}
				</h1>

				<p class="mb-9 header-title-desc">
					{fifthlab.header.sub_title}
				</p>

				<a href={fifthlab.header.link} class="flex items-center gap-2 header-link">
					<span>{fifthlab.header.link_text}</span>
					<img src="/images/small-arrow-right.svg" alt="small-arrow-right" />
				</a>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{fifthlab.sections[0].title}
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html fifthlab.sections[0].content}
				</p>
			</div>
			<div class="section-img-side pt-2">
				<div class="section-img bar-img-wrapper">
					<img
						src={CMS_URL + fifthlab.sections[0].image.data.attributes.url}
						alt={fifthlab.sections[0].image.data.attributes.alt}
					/>
				</div>
			</div>
		</section>

		<section class="box-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img
						src={CMS_URL + fifthlab.sections[1].image.data.attributes.url}
						alt={fifthlab.sections[1].image.data.attributes.alt}
					/>
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0 sm:py-5 md:py-0">
					<p class="text-body-s lg:text-body-m max-w-[515px] w-full my-2">
						{@html fifthlab.sections[1].content}
					</p>

					<a
						href={`/${fifthlab.sections[1].action?.slug}`}
						class="flex items-center gap-2 header-link mt-5"
					>
						<span>{fifthlab.sections[1].action?.title}</span>
						<div class="arrow-right">
							<ArrowRightSolidIcon className="fill-blue" />
						</div>
					</a>
				</div>
			</div>
		</section>

		<hr class="gray-line" />

		<section class="max-w-[1005px] mx-auto pt-8 lg:pt-9">
			<div class="text-center sm:mb-13 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">{fifthlab.product_section_title}</h2>
				<p class="text-body-l font-normal">
					{fifthlab.product_section_description}
				</p>
			</div>

			<div
				class="overflow-hidden"
				use:emblaCarouselSvelte={{
					options: { containScroll: 'trimSnaps', align: 'start', dragFree: false },
					plugins: [Autoplay({ delay: 10000 })]
				}}
				on:emblaInit={(ev) => (emblaApi = ev.detail)}
			>
				<div class="fifthlab-products-wrapper flex gap-8 lg:gap-11">
					<FifthlabProducts products={fifthlab.fifthlab_products.data} />
				</div>
			</div>

			<div class="h-[1px] bg-black-600 dark:bg-black-900 mt-15">
				<div
					style={`width: calc(100% * ${scrollValue})`}
					class="bg-bright-blue h-full transition-[width] duration-300"
				/>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}
</style>
