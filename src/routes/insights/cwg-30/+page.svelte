<script lang="ts">
	import CwgJourney from './CwgJourney.svelte';
	import VideoSide from './VideoSide.svelte';
	import VideoSide2 from './VideoSide2.svelte';

	import '../../services/services-styles.css';
	import '../insights-style.css';
	import EventsBlocks from './EventsBlocks.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: content = data.pageData;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex justify-center gap-[10px] bg-midnight-blue relative mb-10"
	>
		<div class="section-container flex justify-between items-center relative">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">{content.header.sub_headline}</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{content.header.title}
				</h1>

				<p class="mb-9 header-title-desc">
					{content.header.sub_title}
				</p>
			</div>
			<div class="cwg-30-img">
				<img src={CMS_URL + content.header.right_image.data?.attributes.url} alt="cwg-30" />
			</div>
		</div>
	</header>

	<section class="section-container grid-content-box p-10">
		<div class="section-text-side">
			<p class="text-[20px] sm:text-[28px]">
				{@html content.road_to_30_section.content}
			</p>
		</div>
		<div class="section-img-side pt-2">
			<VideoSide content={content.road_to_30_youtube} />
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<!-- <CwgJourney /> -->

	<section class="section-container text-[18px] lg:w-[90%] lg:m-auto">
		<div class="[&_p]:py-[10px]">{@html content.journey_text}</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="my-5 p-5 sm:p-10 management-statement-block">
		<div class="section-container bg-midnight-blue text-white">
			<div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
				<div class="management-block bg-pewter-blue">
					<div class="management-img-wrapper relative">
						<img
							src={CMS_URL +
								content.md_section.leadership.data.attributes?.image.data
									?.attributes.url}
							alt={content.md_section.leadership.data.attributes.name}
							class="bg-img"
						/>
					</div>
					<div class="management-name-role p-[15px]">
						<div class="text-[32px]">
							{content.md_section.leadership.data.attributes?.name}
						</div>
						<div class="text-[16px]">
							{content.md_section.leadership.data.attributes?.position}
						</div>
					</div>
				</div>

				<div
					class="text-side relative grid sm:grid-cols-2 text-[18px] gap-[40px] lg:gap-[80px]"
				>
					<div>
						<div class="[&_p]:pb-[40px]">{@html content.md_section.middle_content}</div>
					</div>
					<div>
						<p class="[&_p]:pb-[40px]">{@html content.md_section.right_content}</p>
					</div>
					<hr class="vertical-line" />
				</div>
			</div>
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="section-container">
		<div class="grid-box-1-2 items-center">
			<h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px]">
				{content.first_30_section.title}
			</h2>
			<div class="text-[18px]">{@html content.first_30_section.content}</div>
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="my-5 p-5 sm:p-10 management-statement-block">
		<div class="section-container bg-midnight-blue text-white">
			<div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
				<div class="management-block bg-pewter-blue">
					<div class="management-img-wrapper relative">
						<img
							src={CMS_URL +
								content.founder_section.leadership.data.attributes.image.data
									?.attributes.url}
							alt={content.founder_section.leadership.data.attributes.name}
							class="bg-img"
						/>
					</div>
					<div class="management-name-role p-[15px]">
						<div class="text-[32px]">
							{content.founder_section.leadership.data.attributes.name}
						</div>
						<div class="text-[16px]">
							{content.founder_section.leadership.data.attributes.position}
						</div>
					</div>
				</div>

				<div class="text-side text-[18px]">
					<h2
						class="sm:text-[64px] text-[38px] sm:leading-[77px] leading-[51px] mb-[40px]"
					>
						{content.founder_section.title}
					</h2>
					<p class="text-[18px]">{@html content.founder_section.content}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="my-5 p-5 sm:p-10 management-statement-block">
		<div class="section-container bg-pewter-blue text-white">
			<div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
				<div class="management-block bg-greyish-blue">
					<div class="management-img-wrapper relative">
						<img
							src={CMS_URL + content.former_ceo.image.data?.attributes.url}
							alt={content.former_ceo.name}
							class="bg-img"
						/>
					</div>
					<div class="management-name-role p-[15px]">
						<div class="text-[32px]">{content.former_ceo.name}</div>
						<div class="text-[16px]">{content.former_ceo.position}</div>
					</div>
				</div>

				<div class="text-side text-[18px] former-ceo">
					{@html content.former_ceo.content}
				</div>
			</div>
		</div>
	</section>

	<section class="section-container">
		<div class="text-[18px] lg:w-[90%] lg:m-auto">{@html content.random_content}</div>
	</section>

	<section class="my-5 p-5 sm:p-10 management-statement-block">
		<div class="section-container bg-pewter-blue text-white">
			<div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
				<div class="management-block bg-greyish-blue">
					<div class="management-img-wrapper relative">
						<img
							src={CMS_URL +
								content.former_business_director.image.data?.attributes.url}
							alt={content.former_business_director.name}
							class="bg-img"
						/>
					</div>
					<div class="management-name-role p-[15px]">
						<div class="text-[32px]">{content.former_business_director.name}</div>
						<div class="text-[16px]">{content.former_business_director.position}</div>
					</div>
				</div>

				<div class="text-side text-[18px] former-ceo">
					{@html content.former_business_director.content}
				</div>
			</div>
		</div>
	</section>

	<section class="pan-african-brand-section my-5 p-2">
		<div class="section-container grid-box-1-2">
			<h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px] mt-5">
				{content.pan_african_section.title}
			</h2>

			<div
				class="text-side relative bg-midnight-blue text-white text-[18px] p-[20px] sm:p-[30px] lg:px-[50px] lg:py-[30px]"
			>
				<div class="[&_p]:my-5">{@html content.pan_african_section.content}</div>
			</div>
		</div>
	</section>

	<section class="section-container my-20">
		<div class="relative quote-block pl-[40px] sm:pl-[60px] text-[24px] sm:w-[90%] sm:m-auto">
			<img src="/images/quote.svg" alt="quote" class="quote-icon" />
			<div class="quote-text">{@html content.founder_quote.content}</div>
			<div class="text-pewter-blue mt-[40px]">– {content.founder_quote.source}</div>
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section
		class="section-container grid md:grid-cols-2 gap-[30px] lg:gap-[50px] pb-0 sm:pb-10 p-10 pt-5"
	>
		<div class="section-text-side text-[18px]">
			<div class="[&_p]:my-4">{@html content.fifth_lab_section.content}</div>
		</div>
		<div class="section-img-side order-first md:order-2">
			<h2 class="text-[40px] mb-[25px]">{content.fifth_lab_section.title}</h2>
			<VideoSide2 content={content.fifthlab_youtube} />
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="section-container my-20">
		<div class="relative quote-block pl-[40px] sm:pl-[60px] text-[24px] sm:w-[90%] sm:m-auto">
			<img src="/images/quote.svg" alt="quote" class="quote-icon" />
			<div class="quote-text">{@html content.founder_quote_2.content}</div>
			<div class="text-pewter-blue mt-[40px]">
				– {content.founder_quote_2.source}
			</div>
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="section-container my-[60px]">
		<div class="grid-box-1-2 items-center">
			<h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px]">
				{content.next_30_section.title}
			</h2>
			<div class="text-[18px]">
				<div class="[&_p]:mb-5">{@html content.next_30_section.content}</div>
			</div>
		</div>
	</section>

	<hr class="gray-line my-[40px]" />

	<section class="section-container my-15">
		<h2 class="text-[40px]">Events of the CWG@30</h2>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-[50px]">
			<EventsBlocks list={content.cwg_30_events.data} />
		</div>
	</section>
</main>

<style>
	header.header::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-image: url('/images/pattern-bg-2.png');
		background-size: cover;
		background-position: center 20%;
		opacity: 0.05;
	}
	.header-text-wrapper {
		max-width: 420px;
	}

	.grid-box-1-2 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: 50px;
	}

	.former-ceo :global(p) {
		font-size: 18px;
	}

	@media (min-width: 1024px) {
		.former-ceo :global(h2) {
			font-size: 40px;
			line-height: 52px;
			margin-bottom: 40px;
		}
	}

	@media (max-width: 1023px) {
		.former-ceo :global(h2) {
			font-size: 28px;
			line-height: 40px;
			margin-bottom: 30px;
		}
	}

	@media (max-width: 768px) {
		.grid-box-1-2 {
			grid-template-columns: 100%;
			gap: 30px;
		}
		.management-statement-block .section-container {
			padding: 0;
		}
		.management-statement-block .section-container .text-side {
			padding: 10px 32px 32px;
		}
		.pan-african-brand-section .section-container {
			padding: 20px 16px 60px;
		}
	}
</style>
