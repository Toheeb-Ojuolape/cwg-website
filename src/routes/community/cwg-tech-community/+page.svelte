<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import '../../services/services-styles.css';
	import '../community-styles.css';
	import type { PageData } from './$types';
	import VideoSlider from './VideoSlider.svelte';

	export let data: PageData;

	$: pageData = data.pageData;
</script>

<main>
	<header
		class="header text-midnight-blue lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
		style={`background: linear-gradient(
            0deg,
            rgba(255, 255, 255, 0.41) 0%,
            rgba(255, 255, 255, 0.41) 100%
        ),
        url(${CMS_URL}${pageData.header.background_image.data?.attributes.url}), lightgray 50% / cover no-repeat;`}
	>
		<div class="section-container relative">
			<div class="flex gap-5 items-center">
				<div class="header-text-wrapper">
					<div class="header-top-title uppercase">{pageData.header.headline}</div>
					<h1 class="text-headline-2 header-title lg:text-headline-1">
						{pageData.header.title}
					</h1>

					<p class="mb-9 header-title-desc">
						{pageData.header.description}
					</p>

					<a
						href={`/${pageData.header.action.slug}`}
						class="flex items-center gap-2 header-link"
					>
						<span>{pageData.header.action.title}</span>
						<div class="arrow-right">
							<ArrowRightSolidIcon className="fill-blue" />
						</div>
					</a>
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

	<div id="section-wrapper" class="py-5">
		<section class="section-container grid-content-box pt-10 pb-15 sm:py-20 p-10">
			<div class="section-text-side">
				<h5 class="text-[20px] lg:text-[24px]">
					{pageData.videos_section.title}
				</h5>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{pageData.videos_section.description}
				</p>
			</div>
			<div class="section-img-side pt-2">
				<VideoSlider videos={pageData.videos_section.video_links} />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container py-10">
			<div class="text-center sm:mb-13 mb-7 m-auto section-header">
				<h2 class="text-headline-2 mb-2">
					Empowering women in tech. <br />
					<span class="text-headline-6 sm:text-headline-2">
						CWG Tech Cohort provides training and mentorship for success
					</span>
				</h2>
			</div>
			<div class="row grid-content-box bg-whitish-blue dark:bg-dark-highlight">
				<div class="section-text-side px-5 sm:px-10 py-5">
					<p class="text-body-s font-light lg:text-body-l my-2">
						{@html pageData.section_one.content}
					</p>
				</div>
				<div class="section-img-side relative order-first-xs">
					<img
						src={CMS_URL + pageData.section_one.image.data?.attributes.url}
						alt={pageData.section_one.image.data?.attributes.alternativeText}
						class="section-img bg-img-sm"
					/>
				</div>
			</div>
			<div class="row grid-content-box bg-whitish-blue dark:bg-dark-highlight">
				<div class="section-img-side relative">
					<img
						src={CMS_URL + pageData.section_two.image.data?.attributes.url}
						alt={pageData.section_two.image.data?.attributes.alternativeText}
						class="section-img bg-img-sm"
					/>
				</div>
				<div class="section-text-side px-5 sm:px-10 py-5">
					<p class="text-body-s font-light lg:text-body-l my-2">
						{@html pageData.section_two.content}
					</p>
					{#if pageData.section_two.action}
						<a
							href={`/${pageData.section_two.action.slug}`}
							class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]"
						>
							<span>{pageData.section_two.action.title}</span>
							<div class="arrow-right">
								<ArrowRightLong strokeClassName="stroke-blue" />
							</div>
						</a>
					{/if}
				</div>
			</div>
		</section>

		<section class="section-container py-10">
			<div class="label-patterned">
				<div class="lp-white-side relative">
					<h2 class="text-headline-4 lg:text-headline-2 mb-5">
						{pageData.register_section.title}
					</h2>
					<p class="my-2">
						{@html pageData.register_section.description}
					</p>
					<a
						href={`/${pageData.register_section.action.slug}`}
						class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]"
					>
						<span>{pageData.register_section.title}</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-blue" />
						</div>
					</a>

					<div class="cut-out-1" />
					<div class="cut-out-2" />
				</div>
				<div class="lp-blue-side relative">
					<div class="contact-items-wrapper text-white">
						<div class="contact-item">
							<img src="/images/share.svg" alt="share" class="contact-item-img" />
							<div class="contact-item-title">Share</div>
							<div class="contact-item-desc text-body-s font-light">
								{pageData.register_section.share_text}
							</div>
						</div>
						<div class="contact-item">
							<img src="/images/call.svg" alt="call" class="contact-item-img" />
							<div class="contact-item-title">Call for enquiries</div>
							<div class="contact-item-desc text-body-s font-light">
								{pageData.register_section.enquiries_phone}
							</div>
						</div>
						<div class="contact-item">
							<img src="/images/flag.svg" alt="flag" class="contact-item-img" />
							<div class="contact-item-title">
								{pageData.register_section.location_text}
							</div>
							<div class="contact-item-desc text-body-s font-light">
								{pageData.register_section.location}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	img.header-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: left;
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
