<script lang="ts">
	import '../services-styles.css';
	import { CMS_URL } from '$lib/api';
	import type { PageData } from './$types';
	import ServiceHeader from './ServiceHeader.svelte';
	import { Position } from './types';
	import { theme } from '$lib/stores/theme-store';

	export let data: PageData;

	$: service = data.service;
</script>

{#each service.content as content}
	{#if content.__typename === 'ComponentGlobalPageHeader'}
		<ServiceHeader header={content} />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.right}
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				{#if content.title}
					<h2 class="text-headline-4 lg:text-headline-2">
						{content.title}
					</h2>
				{/if}
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html content.content}
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img
					src={CMS_URL + content.image.data?.attributes.url}
					alt={content.image.data?.attributes.alternativeText}
					class="section-img"
				/>
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.left}
		<!-- <section class="section-container grid-content-box p-10">
			<div class="section-img-side pt-2">
				<img
					src={CMS_URL + content.image.data?.attributes.url}
					alt={content.image.data?.attributes.alternativeText}
					class="section-img"
				/>
			</div>
			<div class="section-text-side">
				{#if content.title}
					<h2 class="text-headline-4 lg:text-headline-2">
						{content.title}
					</h2>
				{/if}
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html content.content}
				</p>
			</div>
		</section> -->
		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img
						src={CMS_URL + content.image.data?.attributes.url}
						alt={content.image.data?.attributes.alternativeText}
					/>
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						{@html content.content}
					</p>
				</div>
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage'}
		<hr class="gray-line" />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.left}
		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{content.sectionWithTextTitle}
				</h2>
			</div>
			<div class="section-txt-side Pitch__card-content">
				<p class="text-body-s font-light lg:text-body-l">
					{@html content.sectionWithTextContent}
				</p>
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.right}
		<section class="section-container grid-content-box p-10">
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l Pitch__card-content">
					{@html content.sectionWithTextContent}
				</p>
			</div>
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{content.sectionWithTextTitle}
				</h2>
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText'}
		<hr class="gray-line" />
	{/if}

	{#if content.__typename === 'ComponentGlobalBlockQuote'}
		<section class="section-container p-10 pb-20">
			<div class="quote-box max-w-[1180px] md:w-[85%] m-auto p-3 pl-[30px]">
				{@html content.content}
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithCards'}
		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-13 m-auto max-w-[850px] section-header">
				{#if content.sectionWithCardsTitle}
					<h2 class="text-headline-2 mb-2">
						{content.sectionWithCardsTitle}
					</h2>
				{/if}

				{#if content.subtitle}
					<p class="text-body-l font-normal">
						{content.subtitle}
					</p>
				{/if}
			</div>

			<div
				class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper"
			>
				{#each content.cards as { title, content: cardContent, image, link_slug, link_title, subtitle: cardSubtitle }}
					<div
						class="pt-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block"
					>
						<div class="flex-1 px-5 pb-15">
							<div class="img-box-wrapper w-full bg-midnight-blue mb-4">
								<img src={CMS_URL + image.data?.attributes.url} alt={title} />
							</div>
							<h4 class="text-headline-4 mb-3 industry-block-title">{title}</h4>
							<div class="text-body-m industry-block-desc">
								<p>
									{@html cardContent}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>
	{/if}

	{#if content.__typename === 'ComponentProductPageAtmServicesNumbers'}
		<section class="section-container mx-auto py-20 pb-15">
			<div class="text-center mb-13 m-auto max-w-[818px] section-header">
				<h2 class="text-headline-2 mb-2">{content.title}</h2>
			</div>
			<div
				class="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 pt-2 management-items-wrapper"
			>
				{#each content.service_numbers as { title, content: serviceNumberContent, image }}
					<div class="management-item sm:p-10 p-5">
						<img
							src={CMS_URL + image.data?.attributes.url}
							alt={title}
							class="management-item-img"
						/>
						<h5 class="text-headline-3 lg:text-headline-1 pt-5 pb-3">{title}</h5>
						<p>{@html serviceNumberContent}</p>
					</div>
				{/each}
			</div>
		</section>
	{/if}
{/each}

{#if service.should_show_esteemed_clients}
	<section class="box-container mx-auto pt-10 pb-20">
		<div class="flex flex-wrap gap-[40px] max-w-[1380px] m-auto justify-center px-5">
			{#each service.esteemed_clients.data as { attributes: { logo, logo_dark, name } }}
				<img
					src={CMS_URL +
						($theme === 'light'
							? logo.data?.attributes?.url
							: logo_dark.data?.attributes?.url ?? logo.data?.attributes?.url)}
					alt={name}
					class="bank-img"
				/>
			{/each}
		</div>
	</section>
{/if}
