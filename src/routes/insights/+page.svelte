<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import '../services/services-styles.css';
	import BlogsBlocks from './BlogsBlocks.svelte';
	import Cwg30Video from './Cwg30Video.svelte';
	import DigitalMagazineWrapper from './DigitalMagazineWrapper.svelte';
	import './insights-style.css';
	import LeadersConversations from './LeadersConversations.svelte';
	import PressRelease from './PressRelease.svelte';
	import QuarterlyNewsletter from './QuarterlyNewsletter.svelte';
	import GalleryMedia from './GalleryMedia.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';
	import { format } from 'date-fns';

	let featuredURL = 'https://cwg-website.netlify.app/insights/featured';

	let newsletterEmail = '';

	let origin = '';

	let activeSection: string | null;

	// Function to update the active section based on scroll position
	function updateActiveSection() {
		const sections = document.querySelectorAll('section.scrollspy');
		const scrollPosition = window.scrollY;

		// @ts-ignore
		sections.forEach((section, index) => {
			// @ts-ignore
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			const sectionId = section.getAttribute('id');

			if (
				scrollPosition >= sectionTop - sectionHeight * 0.25 &&
				scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25
			) {
				activeSection = sectionId;
			}
		});
	}

	// Call the updateActiveSection function on mount and add scroll event listener
	onMount(() => {
		updateActiveSection();
		window.addEventListener('scroll', updateActiveSection);
		origin = window.location.origin;
	});

	export let data: PageData;

	$: content = data.insightsPage;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url('${CMS_URL}${content.header.background_image.data?.attributes.url}')`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">{content.header.headline}</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{content.header.title}
				</h1>

				<p class="mb-9 header-title-desc">{content.header.description}</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper">
		<section class="bg-whitish-blue dark:bg-dark-highlight pt-10">
			<div class="section-container">
				<h2 class="section-title text-[40px] mb-[20px]">
					{content.featured_section_title}
				</h2>

				<div class="grid-content-box lg:gap-[50px] mb-15">
					<div class="section-img-side relative">
						<img
							src={CMS_URL +
								content.featured_blog.data.attributes.cover_image.data?.attributes
									.url}
							alt="featured-img"
							class="section-img"
						/>
					</div>
					<div class="section-txt-side">
						<div class="author-date text-[14px] mb-[10px]">
							By {content.featured_blog.data.attributes.blog_author.data.attributes
								.name} ∙ {content.featured_blog.data.attributes.read_duration_mins} mins
							∙ {format(
								new Date(content.featured_blog.data.attributes.date_published),
								'MMMM dd, yyyy'
							)}
						</div>
						<div class="featured-section-title text-[32px] mb-[30px]">
							{content.featured_blog.data.attributes.title}
						</div>
						<p class="featured-txts my-[20px]">
							{content.featured_blog.data.attributes.preface}
						</p>

						<a
							href={`/blog/${content.featured_blog.data.attributes.slug}`}
							class="flex gap-5 text-lg max-w-[170px] mt-[50px]"
						>
							<span>Read more</span>
							<div class="arrow-right">
								<ArrowRightLong strokeClassName="stroke-blue" />
							</div>
						</a>
					</div>
				</div>
			</div>

			<div class="share-social-wrapper py-5 bg-white dark:bg-black">
				<div class="section-container flex gap-[10px] items-center">
					<span class="text-[14px] uppercase">share</span>
					<a
						href={`https://www.facebook.com/sharer/sharer.php?u=${
							origin + `/blog/${content.featured_blog.data.attributes.slug}`
						}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/images/share-facebook.svg" alt="facebook" />
					</a>
					<a
						href={`https://www.linkedin.com/shareArticle?url=${origin}/blog/${content.featured_blog.data.attributes.slug}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/images/share-linkedin.svg" alt="linkedin" />
					</a>
					<a
						href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${origin}/blog/${content.featured_blog.data.attributes.slug}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="/images/share-twitter.svg" alt="twitter" />
					</a>
				</div>
			</div>
		</section>

		<div class="tabs-wrapper">
			<ul class="tabs bg-whitish-blue dark:bg-dark-highlight pt-2">
				<div class="section-container flex gap-[50px]">
					{#each content.insights_tab_list as { link_to_section, name }}
						<li class:active={activeSection === `${link_to_section}Main`}>
							<a href={`#${link_to_section}`}>{name}</a>
						</li>
					{/each}
				</div>
			</ul>
		</div>

		<span id="perspectives" class="dummy-id" />
		<section id="perspectivesMain" class="section-container py-10 scrollspy">
			<div class="section-header mb-10">
				<h2 class="text-[32px]">{content.blogs_section.title}</h2>
				<div class="text-[12px]">{content.blogs_section.description}</div>
			</div>

			<BlogsBlocks list={content.blogs_section.blogs.data} />
		</section>

		<span id={content.event_section.section_id} class="dummy-id" />
		<section
			id={`${content.event_section.section_id}Main`}
			class="pt-20 pb-15 bg-midnight-blue text-white my-[10px] scrollspy"
		>
			<div class="section-container grid-content-box lg:gap-[50px]">
				<div class="">
					<div class="img-wrapper">
						<img src="/images/cwg-30.svg" alt="cwg-30" class="30-img" />
					</div>
					<div class="text-[40px] mt-[30px] max-w-[555px]">
						{content.event_section.left_title}
					</div>
					<a
						href={`${content.event_section.left_link}`}
						class="flex gap-5 text-lg max-w-[170px] mt-[80px]"
					>
						<span>Read more</span>
						<div class="arrow-right">
							<ArrowRightLong strokeClassName="stroke-white" />
						</div>
					</a>
				</div>
				<div class="sm:mt-0 mt-[10px]">
					<p class="text-[18px]">{@html content.event_section.right_content}</p>
					<div class="mt-[20px] mb-[10px]">
						<Cwg30Video
							videoId={content.event_section.youtube_video_id}
							thumbnail={content.event_section.video_thumbnail}
						/>
					</div>
					<div class="text-[40px]">{content.event_section.right_caption}</div>
				</div>
			</div>
		</section>

		<span id={content.press_release_section.section_id} class="dummy-id" />
		<section
			id={`${content.press_release_section.section_id}Main`}
			class="press-release section-container py-10 scrollspy"
		>
			<div class="">
				<h2 class="text-headline-2">{content.press_release_section.title}</h2>
				<p class="text-[18px]">{content.press_release_section.description}</p>
			</div>

			<div class="py-10">
				<PressRelease newsThumbails={content.press_release_section.articles.data} />
			</div>
		</section>

		<span id="podcast" class="dummy-id" />
		<section id="podcastMain" class="leaders-conversations-section py-10 scrollspy">
			<div class="section-container">
				<h2 class="text-headline-2">{content.podcast_section.title}</h2>
			</div>

			<div class="section-container py-10">
				<LeadersConversations
					conversationsThumbails={content.podcast_section.podcasts.data}
				/>
			</div>
		</section>

		<span id={content.magazine_section.section_id} class="dummy-id" />
		<section
			id={`${content.magazine_section.section_id}Main`}
			class="digital-magazine-section py-10 scrollspy"
		>
			<div class="section-container">
				<h2 class="text-headline-2">{content.magazine_section.title}</h2>
				<p class="text-[18px]">{content.magazine_section.description}</p>
			</div>

			<div class="section-container py-10">
				<DigitalMagazineWrapper magazineCovers={content.magazine_section.content.data} />
			</div>
		</section>

		<span id={content.newsroom_section.section_id} class="dummy-id" />
		<section
			id={`${content.newsroom_section.section_id}Main`}
			class="quarterly-newsletter-section pt-5 pb-10 scrollspy"
		>
			<div class="section-container">
				<h2 class="text-headline-2">{content.newsroom_section.title}</h2>
			</div>

			<div class="section-container py-10">
				<QuarterlyNewsletter newsletters={content.newsroom_section.content.data} />
			</div>
		</section>

		<span id={content.media_section.section_id} class="dummy-id" />
		<section
			id={`${content.media_section.section_id}Main`}
			class="scrollspy section-container pt-10 pb-20"
		>
			<div class="section-container">
				<h2 class="text-headline-2">{content.media_section.title}</h2>
			</div>
			<div class="grid grid-cols-2 lg:grid-cols-4 gap-[50px] pt-10">
				<GalleryMedia mediaDetails={content.media_section.content.data} />
			</div>
		</section>

		<section class="bg-midnight-blue text-white relative mt-[20px] mb-[50px]">
			<div class="sub-newsletter-section-bg">
				<img
					src={CMS_URL + content.send_newsletter_section.image.data?.attributes.url}
					alt="man"
					class="bg-img"
				/>
			</div>
			<div class="section-container grid sm:grid-cols-2">
				<div />
				<div class="p-10">
					<div class="max-w-[445px]">
						<h2 class="text-[32px] mb-[5px]">
							{content.send_newsletter_section.title}
						</h2>
						<div class="text-[15px]">{content.send_newsletter_section.description}</div>
					</div>

					<form action="#" id="sub-newsletter-form" class="my-[20px]">
						<div class="relative w-[300px]">
							<input
								class="pl-4 pr-8 focus-within:outline focus-within:outline-white text-white peer h-11 w-full bg-transparent border border-black-600 placeholder:text-pewter-blue placeholder:text-button-s"
								placeholder="My email..."
								type="email"
								bind:value={newsletterEmail}
							/>
							<button class="absolute cursor-pointer right-3 top-[10px]">
								<img src="/images/arrow-right-white.svg" alt="arrow-right-white" />
							</button>
						</div>
					</form>

					<div class="follow-us mt-[35px]">
						<div class="text-[18px] mb-[10px]">Follow us</div>
						<div class="flex gap-[10px]">
							{#each content.send_newsletter_section.socials.data as { attributes: { icon, link, name } }}
								<a href={link} target="_blank" rel="noopener noreferrer">
									<img src={CMS_URL + icon.data?.attributes.url} alt={name} />
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}

	.tabs-wrapper {
		position: sticky;
		top: 116px;
		z-index: 1;
	}

	ul.tabs {
		border-bottom: 1px solid #ddd;
		float: left;
		overflow: auto;
		width: 100%;
	}
	.tabs li {
		padding: 5px 2px;
		cursor: pointer;
	}
	.tabs li.active {
		border-bottom: 3px solid var(--color-midnight-blue);
		padding-bottom: 5px;
	}
	.dark .tabs li.active {
		border-color: var(--color-pewter-blue);
	}

	@media (max-width: 1023px) {
		.tabs-wrapper {
			top: 100px;
		}
	}

	@media (min-width: 640px) {
		.section-img {
			position: absolute;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
</style>
