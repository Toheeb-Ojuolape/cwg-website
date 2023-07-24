<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import '../services/services-styles.css';
	import type { PageData } from './$types';
	import './awards-styles.css';
	import AwardsBlock from './AwardsBlock.svelte';

	export let data: PageData;

	const pageData = data.awardsPage;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url('${CMS_URL}${pageData.header.background_image.data.attributes.url}');`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				{#if pageData.header.title}
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{pageData.header.title}
					</h1>
				{/if}
				{#if pageData.header.description}
					<p class="mb-9 header-title-desc">
						{pageData.header.description}
					</p>
				{/if}
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-5 m-auto max-w-[550px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.page_title}</h2>
				<p class="text-body-l font-normal">
					{pageData.page_subtitle}
				</p>
			</div>

			<div class="flex gap-[25px] flex-wrap justify-center">
				{#each pageData.award_companies.data as { attributes: { logo, name } }}
					<img
						src={CMS_URL + logo.data.attributes.url}
						alt={name}
						class="awards-company dark:bg-white"
					/>
				{/each}
			</div>
		</section>

		<section class="awards-blocks-wrapper section-container">
			<AwardsBlock awards={pageData.awards.data} />
		</section>
	</div>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}
</style>
