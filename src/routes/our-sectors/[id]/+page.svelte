<script lang="ts">
	import type { PageData } from '../[id]/$types';
	import '../../services/services-styles.css';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: sector = data.sector;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white"
		style={`background-image: url(${CMS_URL}${sector.attributes.header.background_image.data?.attributes.url})`}
	>
		<div class="h-full w-full flex flex-col bg-black/50 justify-center gap-[10px]">
			<div class="section-container">
				<div class="header-text-wrapper">
					<div class="header-top-title uppercase">
						{sector.attributes.header.headline}
					</div>
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{sector.attributes.header.title}
					</h1>

					<p class="mb-9 header-title-desc">
						{sector.attributes.header.description}
					</p>
				</div>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{sector.attributes.sections[0].title}
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html sector.attributes.sections[0].content}
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img
					src={CMS_URL + sector.attributes.sections[0].image?.data?.attributes.url}
					alt={sector.attributes.sections[0].image?.data?.attributes.alternativeText}
					class="section-img"
				/>
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{sector.attributes.sections[1].swt_title}
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html sector.attributes.sections[1].swt_content}
				</p>
			</div>
		</section>

		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img
						src={CMS_URL + sector.attributes.sections[2].image?.data?.attributes.url}
						alt={sector?.attributes.sections[2].image?.data?.attributes.alternativeText}
					/>
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						{@html sector.attributes.sections[2].content}
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-size: cover;
		background-position: center 20%;
	}
</style>
