<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import Countup from '$lib/components/Countup.svelte';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import DiagonalArrow from '$lib/components/Svgs/DiagonalArrow.svelte';
	import '../../services/services-styles.css';
	import '../community-styles.css';
	import type { PageData } from './$types';
	import FeaturedArtistsBlocks from './FeaturedArtistsBlocks.svelte';
	import SpeakerBlocks from './SpeakerBlocks.svelte';
	import TopicsBlocks from './TopicsBlocks.svelte';

	export let data: PageData;

	$: pageData = data.pageData;
</script>

<main>
	<header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container relative">
			<div class="header-content-wrapper gap-5 items-center">
				<div class="header-text-wrapper">
					<div class="header-top-title uppercase">{pageData.header.headline}</div>
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{pageData.header.title}
					</h1>

					<p class="mb-9 header-title-desc">
						{pageData.header.description}
					</p>
				</div>

				<div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
					<img
						src={CMS_URL + pageData.header.right_image.data?.attributes.url}
						alt={pageData.header.right_image.data?.attributes.alternativeText}
						class="header-img"
					/>
				</div>
			</div>
		</div>
	</header>

	<div class="marquee-text-wrapper overflow-hidden bg-midnight-blue text-white my-2 py-4">
		<div class="marquee-text flex gap-5 bg-red">
			{#each Array(9) as _}
				<span>\\</span>
				<span>{pageData.marquee_text}</span>
			{/each}
			<span>\\</span>
		</div>
	</div>

	<div id="section-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h5 class="text-[20px] lg:text-[24px]">
					{pageData.section_one.left_title}
				</h5>
				<div class="text-body-s font-light lg:text-body-l my-2 flex flex-col gap-4">
					{@html pageData.section_one.left_body}
				</div>
			</div>
			<div class="section-img-side">
				<p class="text-body-s font-light lg:text-body-l my-2 mb-7">
					{@html pageData.section_one.right_body}
				</p>
				<img
					src={CMS_URL + pageData.section_one.right_image.data?.attributes.url}
					alt="texcellence-speaker"
					class="section-img"
				/>
			</div>
		</section>

		<hr class="gray-line" />

		<!--=== Meet-Our-Speakers ===-->
		<section class="section-container">
			<div class="mb-10 mt-10 section-header">
				<h2 class="text-headline-2 mb-2">{pageData.speakers_section_title}</h2>
			</div>

			<div
				class="speakers-block-wrapper grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[20px]"
			>
				<SpeakerBlocks speakers={pageData.speakers.data} />
			</div>
		</section>
		<!--=== end of Meet-Our-Speakers ===-->

		<!--=== Event-Stats ===-->
		<section class="event-stats-section">
			<div class="max-w-[1179px] m-auto pt-20 pb-12 text-lg ess-txt-side">
				<div class="py-2">
					{@html pageData.speakers_section_body}
				</div>
			</div>

			<section class="t-speaker text-white bg-midnight-blue">
				<div class="t-speaker-img-wrapper relative">
					<img
						src={CMS_URL + pageData.count_up_section_image.data?.attributes.url}
						alt={pageData.count_up_section_image.data?.attributes.alternativeText}
						class="t-speaker-img"
					/>
				</div>

				<div class="w-full lg:w-[537px] grid grid-cols-2 gap-y-10 py-10 text-center">
					{#each pageData.count_up as { title, value, suffix }}
						<div class="p-5">
							<p class="text-headline-3 lg:text-headline-1">
								<Countup {value} suffix={suffix ?? ''} />
							</p>
							<p class="text-body-s font-light lg:text-body-l">{title}</p>
						</div>
					{/each}
				</div>
			</section>
		</section>
		<!--=== end of Event-Stats ===-->

		<!--=== Conference-Topics ===-->
		<section class="section-container py-20">
			<div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.conference_section.title}</h2>
				<p class="text-body-l font-normal">
					{@html pageData.conference_section.description}
				</p>
			</div>

			<div class="topics-wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
				<TopicsBlocks topics={pageData.conference_topics.data} />
			</div>
		</section>
		<!--=== end of Conference-Topics ===-->

		<!--=== Transformation-Pitch-Section ===-->
		<section class="transformation-pitch-section mt-5 pt-10 mb-20 lg:my-0 lg:pt-0">
			<div class="grid">
				<div class="section-title-side section-container">
					<h2 class="text-headline-4 lg:text-headline-2">
						{pageData.pitch_transformation_section.left_title}
					</h2>
					<a
						href={`/${pageData.pitch_transformation_section.left_action.slug}`}
						class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]"
					>
						<span>{pageData.pitch_transformation_section.left_action.title}</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-blue" />
						</div>
					</a>
				</div>
				<div class="section-text-side bg-whitish-blue dark:bg-dark-highlight p-4">
					<div class="pitch mt-2 flex flex-col gap-2">
						{@html pageData.pitch_transformation_section.center_content}
					</div>
				</div>
				<div class="section-img-side relative">
					<img
						src={CMS_URL +
							pageData.pitch_transformation_section.right_image.data?.attributes.url}
						alt={pageData.pitch_transformation_section.right_image.data?.attributes
							.alternativeText}
						class="bg-img"
					/>
				</div>
			</div>
		</section>
		<!--=== end of Transformation-Pitch-Section ===-->

		<!--=== The-Texcellence-Festival ===-->
		<section class="section-container">
			<div class="text-center sm:mb-13 sm:mt-10 mb-7 m-auto max-w-[1030px] section-header">
				<img
					src={CMS_URL + pageData.texcellence_festival.image.data?.attributes.url}
					alt="confetti"
					class="m-auto"
				/>
				<h2 class="text-headline-2 mb-2">{pageData.texcellence_festival.title}</h2>
				<p class="text-body-l font-normal">
					{pageData.texcellence_festival.subtitle}
				</p>
			</div>
		</section>
		<!--=== end of The-Texcellence-Festival ===-->

		<!--=== Featured-Artist ===-->
		<section class="section-container mb-20">
			<div class="text-center sm:mb-13 sm:mt-10 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.featured_artists_section_title}</h2>
			</div>

			<div class="featured-artist-wrapper grid sm:grid-cols-2">
				<FeaturedArtistsBlocks artists={pageData.featured_artists} />
			</div>
		</section>
		<!--=== end of Featured-Artist ===-->

		<hr class="gray-line" />

		<!--=== Explore-Past-Conference ===-->
		<section class="section-container py-10">
			<div class="sm:mb-13 sm:mt-10 mb-7 max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.past_conference_title}</h2>
				<p class="text-body-l font-normal [&_a]:underline">
					{@html pageData.past_conference_description}
				</p>
			</div>
			<div class="col s12 pad0 sect-contents marquee-content dbs">
				{#each Array(2) as _}
					<div class="marquee-item">
						<img
							src={CMS_URL + pageData.past_conference_image.data?.attributes.url}
							alt={pageData.past_conference_image.data?.attributes.alternativeText}
							class="w-full"
						/>
					</div>
				{/each}
			</div>
		</section>
		<!--=== end of Explore-Past-Conference ===-->

		<!--=== More-Links ===-->
		<section
			class="more-links-wrapper section-container py-20 flex flex-wrap gap-y-5 justify-between"
		>
			{#each pageData.actions as { slug, title }}
				<a href={`/${slug}`} class="flex items-center gap-2">
					<span>{title}</span>
					<DiagonalArrow strokeClassName="stroke-blue" />
				</a>
			{/each}
		</section>
		<!--=== end of More-Links ===-->
	</div>
</main>

<style>
	.header-top-title {
		font-size: 24px;
	}

	header.header {
		background-color: var(--color-midnight-blue);
	}
	img.header-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: left;
	}

	.header-text-wrapper {
		max-width: none;
	}

	.dbs.marquee-content {
		animation: scrolling-3 25s linear infinite;
	}
	.dbs .marquee-item {
		flex: 0 0 200vw;
	}
	@keyframes scrolling-3 {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translatex(-200vw);
		}
	}

	@media (min-width: 1024px) {
		.header-content-wrapper {
			display: grid;
			grid-template-columns: minmax(586px, 1fr) 1fr;
			/* grid-template-columns: repeat(2, minmax(0, 1fr)); */
			gap: 30px;
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
