<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import '../services/services-styles.css';
	import type { PageData } from './$types';
	import './careers-style.css';

	export let data: PageData;

	$: careersPage = data.careersPage;
</script>

<main>
	<header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px] relative"
	>
		<div class="section-container relative">
			<div class="header-content-wrapper gap-5 items-center">
				<div class="header-text-wrapper text-midnight-blue dark:text-white">
					<div class="header-top-title uppercase">{careersPage.header.headline}</div>
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{careersPage.header.title}
					</h1>

					<p class="mb-9 header-title-desc">
						{careersPage.header.description}
					</p>
				</div>

				<div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
					<img
						src={CMS_URL + careersPage.header.right_image.data.attributes.url}
						alt={careersPage.header.right_image.data.attributes.alt}
						class="header-img"
					/>
				</div>
			</div>
		</div>
	</header>

	<section class="explore-opportunities-section py-10">
		<div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[1048px] section-header">
			<h2 class="text-headline-2 mb-2">{careersPage.explore_opportunity_title}</h2>
			<p class="text-body-l font-normal">
				{careersPage.explore_opportunity_subtitle}
			</p>
		</div>
		<div class="opportunities-wrapper grid sm:grid-cols-2 lg:grid-cols-3">
			{#each careersPage.opportunities.data as { attributes: { title, slug, image } }}
				<a
					href={`/${slug}`}
					class="opportunities-block relative text-white bg-midnight-blue"
				>
					<div class="flex relative justify-between items-center">
						<span>{title}</span>
						<img
							src="/images/white-long-arrow.svg"
							alt="white-long-arrow"
							class="long-white-arrow"
						/>
					</div>
					<img
						src={CMS_URL + image.data.attributes.url}
						alt={title}
						class="opportunities-block-bg bg-img"
					/>
				</a>
			{/each}
		</div>
	</section>

	<section class="section-container py-10">
		<div class="jobs-categories-wrapper grid sm:grid-cols-2 lg:grid-cols-4">
			{#each careersPage.departments.data as { attributes: { icon, slug, title } }}
				<a href={`/careers/${slug}`} class="job-category-block">
					<div class="job-icon-wrapper mb-[100px]">
						<img
							src={CMS_URL + icon.data.attributes.url}
							alt={title}
							class="job-icon dark:brightness-0 dark:invert"
						/>
					</div>
					<div class="flex items-center justify-between">
						<span class="sm:truncate">{title}</span>
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</a>
			{/each}
		</div>
	</section>

	<section class="section-container mx-auto py-10">
		<div
			class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
		>
			<div class="flex-1">
				<img src="/images/global-region.jpg" alt="global-region" />
			</div>
			<div class="flex-1 p-5 pb-8 pt-10 sm:p-0 sm:pt-5">
				<h2 class="text-headline-3 lg:text-[64px]">
					{careersPage.our_regions_section.title}
				</h2>
				<p class="sm:text-[20px] lg:text-[24px] max-w-[515px] w-full my-6">
					{@html careersPage.our_regions_section.content}
				</p>
				<a
					href={`/${careersPage.our_regions_section.action.slug}`}
					class="flex gap-5 text-lg pt-5 pb-5 max-w-[190px]"
				>
					<span>{careersPage.our_regions_section.action.title}</span>
					<div class="arrow-right">
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</a>
			</div>
		</div>
	</section>
</main>

<style>
	header.header {
		border-bottom: 1px solid #dddddd;
	}
	.header-top-title {
		font-size: 24px;
	}
	img.header-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: right;
	}
	.header-text-wrapper {
		max-width: none;
	}
	.header-img-wrapper img {
		object-position: top;
	}

	@media (min-width: 1024px) {
		.header-content-wrapper {
			display: grid;
			grid-template-columns: minmax(586px, 1fr) 1fr;
			/* grid-template-columns: repeat(2, minmax(0, 1fr)); */
			gap: 30px;
		}
		.header-img-wrapper {
			position: absolute;
			height: 100%;
			width: 50%;
			right: 0;
			top: 0;
		}
		header.header > .section-container {
			position: initial;
		}
	}

	@media (max-width: 640px) {
		.header-text-wrapper {
			position: relative;
			z-index: 1;
		}
		.header-img-wrapper {
			position: absolute;
			opacity: 0.08;
			left: 0;
			top: 0;
		}
	}
</style>
