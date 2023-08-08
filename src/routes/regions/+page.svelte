<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import RegionBlocks from '$lib/components/OurRegions/RegionBlocks.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: regions = data.regions;
	$: pageData = data.regionPageData;
</script>

<main>
	<header
		style={`background-image: url(${CMS_URL}${pageData.header.background_image.data?.attributes.url})`}
	>
		<div
			class="header bg-black/50 h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		>
			<div class="section-container">
				<div class="header-text-wrapper">
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{pageData.header.title}
					</h1>

					<p class="mb-9 header-title-desc">
						{pageData.header.description}
					</p>
				</div>
			</div>
		</div>
	</header>

	<section class="section-container py-10">
		<div class="regions-blocks-wrapper grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] py-[30px]">
			<RegionBlocks {regions} />
		</div>
	</section>
</main>
