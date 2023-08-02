<script lang="ts">
	import '../services/services-styles.css';
	import './sectors-style.css';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import SectorsWeServe from './SectorsWeServe.svelte';
	import CwgPolices from './CwgPolices.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { header, sectors, sectors_section_title, policies_section_title, policies } =
		data.sectorsPage;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">{header.title}</h1>

				<p class="mb-9 header-title-desc">
					{header.sub_title}
				</p>
			</div>
		</div>
	</header>

	<section class="py-20 bg-whitish-blue dark:bg-dark-highlight">
		<div class="section-container">
			<div class="section-header">
				<h2 class="text-headline-2 mb-4">{sectors_section_title}</h2>
			</div>
			<div class="sectors-we-serve-wrapper grid md:grid-cols-2 gap-[30px] md:gap-[40px]">
				<SectorsWeServe {sectors} />
			</div>
		</div>
	</section>

	<section class="section-container py-20">
		<div class="section-header text-center">
			<h2 class="text-headline-2 mb-4">{policies_section_title}</h2>
		</div>
		<div
			class="cwg-policies-wrapper grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[40px] mt-10"
		>
			<CwgPolices policies={policies.data} />
		</div>
	</section>

	<MoreAboutUs />
</main>

<style>
	header.header {
		background-image: url('/images/sectors-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
