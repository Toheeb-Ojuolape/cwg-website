<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import CwgLogo from '$lib/components/Svgs/CwgLogo.svelte';
	import sr from 'date-fns/locale/sr';
	import '../../services/services-styles.css';
	import '../community-styles.css';
	import type { PageData } from './$types';
	import VideoSlider from './VideoSlider.svelte';
	import { theme } from '$lib/stores/theme-store';

	export let data: PageData;

	$: pageData = data.pageData;
</script>

<main>
	<header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
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
							<ArrowRightSolidIcon className="fill-white" />
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

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{pageData.banking_summit_section.title}
				</h2>
				<div class="flex items-center logo-div-wrapper mt-10">
					{#if pageData.banking_summit_section.images.data}
						{#each pageData.banking_summit_section.images.data as { attributes: { url } }, i}
							{#if $theme === 'light' && i < 2}
								<div class="logo-div p-5">
									<img src={CMS_URL + url} alt="logo" />
								</div>
							{/if}
							{#if $theme === 'dark' && i >= 2}
								<div class="logo-div p-5">
									<img src={CMS_URL + url} alt="logo" />
								</div>
							{/if}
						{/each}
					{/if}
				</div>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html pageData.banking_summit_section.content}
				</p>
			</div>
		</section>

		<section class="dbs py-10">
			<div class="col s12 pad0 sect-contents marquee-content">
				{#each Array(2) as _}
					<div class="marquee-item">
						<img
							src={CMS_URL + pageData.conference_image.data.attributes.url}
							alt="full-img-gallery"
							class="w-full"
						/>
					</div>
				{/each}
			</div>
		</section>

		<hr class="gray-line" />

		<section class="dbs section-container py-10">
			<div class="label-patterned">
				<div class="lp-white-side relative">
					<h2 class="text-headline-4 lg:text-headline-2 mb-5">
						{pageData.registration_section.title}
					</h2>

					<a
						href={`/${pageData.registration_section.action.slug}`}
						class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]"
					>
						<span>{pageData.registration_section.action.title}</span>
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
								{pageData.registration_section.share_text}
							</div>
						</div>
						<div class="contact-item">
							<img src="/images/call.svg" alt="call" class="contact-item-img" />
							<div class="contact-item-title">Call for enquiries</div>
							<div class="contact-item-desc text-body-s font-light">
								{pageData.registration_section.enquiries_phone}
							</div>
						</div>
						<div class="contact-item">
							<img src="/images/flag.svg" alt="flag" class="contact-item-img" />
							<div class="contact-item-title">
								{pageData.registration_section.location_text ?? 'N/A'}
							</div>
							<div class="contact-item-desc text-body-s font-light">
								{pageData.registration_section.location ?? 'Yet to be confirmed'}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
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
