<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import '../../services/services-styles.css';
	import '../community-styles.css';
	import type { PageData } from './$types';
	import ContactForm from './ContactForm.svelte';
	import EvaluationCriteria from './EvaluationCriteria.svelte';
	import PanelOfJudgesBlocks from './PanelOfJudgesBlocks.svelte';
	import VideoSide from './VideoSide.svelte';

	export let data: PageData;

	$: pageData = data.pageData;
</script>

<main>
	<header
		class="header h-[450px] sm:h-[300px] lg:h-[477px] text-white mx-auto flex flex-col justify-center gap-[10px]"
		style={`background-image: url('${CMS_URL}${pageData.header.background_image.data?.attributes.url}');`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">{pageData.header.headline}</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{pageData.header.title}
				</h1>

				<p class="mb-9 header-title-desc">
					{pageData.header.description}
				</p>

				<a
					href={`${pageData.header.action.slug}`}
					class="flex items-center gap-2 header-link"
				>
					<span>{pageData.header.action.title}</span>
					<img src="/images/small-arrow-right.svg" alt="small-arrow-right" />
				</a>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="pt-5">
		<!--=== Enable-Future-Shapers ===-->
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">{pageData.videos_section.title}</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html pageData.videos_section.description}
				</p>

				<a
					href={pageData.videos_section.section_link.slug}
					class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]"
				>
					<span>{pageData.videos_section.section_link.title}</span>
					<div class="arrow-right">
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</a>
			</div>
			<div class="section-img-side pt-2">
				<VideoSide videos={pageData.videos_section.video_links} />
			</div>
		</section>
		<!--=== end of Enable-Future-Shakers ===-->

		<hr class="gray-line" />

		<!--=== Panel-of-Judges ===-->
		<section class="section-container py-10 pb-20">
			<div class="sm:mb-13 sm:mt-5 mb-7 max-w-[530px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.judges_panel_title}</h2>
				<p class="text-body-l font-normal">
					{pageData.judges_panel_subtitle}
				</p>
			</div>
			{#if pageData.panel_of_judges}
				<div class="judges-wrapper grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
					<PanelOfJudgesBlocks judges={pageData.panel_of_judges.data} />
				</div>
			{/if}
		</section>
		<!--=== end of Panel-of-Judges ===-->

		<hr class="gray-line" />

		<!--=== Challenge-Rounds ===-->
		<section class="section-container grid lg:grid-cols-2 py-20">
			<div class="section-title-side section-container">
				<div class="max-w-[548px]">
					<h2 class="text-headline-4 lg:text-headline-2">
						{pageData.transformation_champion_section.title}
					</h2>
					<a
						href={`${pageData.transformation_champion_section.action.slug}`}
						class="flex gap-5 text-lg pt-8 pb-10 lg:pb-5 max-w-[190px] mt-[15px] lg:mt-[30px]"
					>
						<span>{pageData.transformation_champion_section.action.title}</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-blue" />
						</div>
					</a>
				</div>
			</div>

			<div class="section-text-side">
				<p class="text-body-s font-light lg:text-body-l mb-2">
					{@html pageData.transformation_champion_section.body}
				</p>
				<div class="round-blocks-wrapper grid sm:grid-cols-3 gap-[30px] mt-[30px]">
					{#each pageData.transformation_champion_section.cards as { title, subtitle }}
						<div class="round-block bg-whitish-blue dark:bg-dark-highlight p-[20px]">
							<div class="round-block-title">{title}</div>
							<div class="round-block-desc">{subtitle}</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
		<!--=== end of Challenge-Rounds ===-->

		<hr class="gray-line" />

		<!--=== Evaluation-Criteria ===-->
		<section class="section-container pt-10 pb-20">
			<div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[530px] section-header">
				<h2 class="text-headline-2 mb-2">{pageData.evaluation_criteria_section.title}</h2>
				<p class="text-body-l font-normal">
					{pageData.evaluation_criteria_section.subtitle}
				</p>
			</div>

			<div class="evaluation-criteria-wrapper grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
				<EvaluationCriteria cards={pageData.evaluation_criteria_section.cards} />
			</div>
		</section>
		<!--=== end of Evaluation-Criteria ===-->

		<hr class="gray-line" />

		<!--=== Application-Procedure ===-->
		<section class="grid sm:grid-cols-2 items-center lg:p-0 sm:py-0 pt-10 section-container">
			<div class="section-title-side">
				<div class="max-w-[548px]">
					<h2 class="text-headline-4 lg:text-headline-2">
						{pageData.application_procedure_section.title}
					</h2>
					<a href="/" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px] mt-[50px]">
						<span>Apply now</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-blue" />
						</div>
					</a>
				</div>
			</div>

			<div class="section-text-side bg-whitish-blue dark:bg-dark-highlight p-10">
				<div class="py-2 Pitch__card-content">
					{@html pageData.application_procedure_section.content}
				</div>
			</div>
		</section>
		<!--=== end of Application-Procedure ===-->

		<hr class="gray-line" />

		<!--=== Eligibility-Section ===-->
		<section class="eligibility-section w-[90%] lg:w-[80%] max-w-[1440px] m-auto my-20">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">{pageData.block_quote.title}</h2>
				<p class="text-lg sm:text-2xl pt-[10px]">
					{@html pageData.block_quote.content}
				</p>
				<a
					href={`${pageData.block_quote.action.slug}`}
					class="flex gap-5 text-lg pt-8 pb-3 max-w-[354px] mt-[25px]"
				>
					<span>{pageData.block_quote.action.title}</span>
					<div class="arrow-right">
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</a>
			</div>
		</section>
		<!--=== end of Eligibility-Section ===-->

		<!--=== Contact-Us-Section ===-->
		<section class="bg-whitish-blue dark:bg-dark-highlight pt-10 pb-20">
			<div class="section-container sm:w-[90%] lg:w-[80%] sm:px-0 max-w-[1440px] m-auto">
				<div class="sm:mb-13 sm:mt-5 mb-7 section-header">
					<h2 class="text-headline-2 mb-2">Contact us</h2>
					<p class="text-body-l font-normal">
						If you would like to contact us to understand more about this or wish to
						contact us concerning any matter relating to it, send us a mail now
					</p>
				</div>

				<ContactForm />
			</div>
		</section>
		<!--=== end of Contact-Us-Section ===-->
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/the-pitch-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}

	.header-text-wrapper {
		max-width: 743px;
	}
	.header-title-desc {
		max-width: 572px;
	}
</style>
