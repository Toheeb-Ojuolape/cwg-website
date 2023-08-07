<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import '../services/services-styles.css';
	import type { PageData } from './$types';
	import CwgInitiatives from './CwgInitiatives.svelte';

	export let data: PageData;
	const {
		impactPage: { header, section_one, initiatives_section }
	} = data;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${CMS_URL}${header.background_image.data?.attributes.url})`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">{header.title}</h1>

				<p class="mb-9 header-title-desc">
					{header.description}
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{section_one.title}
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html section_one.content}
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img
					src={CMS_URL + section_one.image.data.attributes.url}
					alt={section_one.title}
					class="section-img"
				/>
			</div>
		</section>

		<hr class="gray-line" />

		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-13 m-auto max-w-[882px] section-header">
				<h2 class="text-headline-2 mb-2">{initiatives_section.title}</h2>
				<p class="text-body-l font-normal">
					{initiatives_section.subtitle}
				</p>
			</div>

			<div
				class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper"
			>
				<CwgInitiatives cards={initiatives_section.cards} />
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
