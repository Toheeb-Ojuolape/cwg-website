<script lang="ts">
	import '../services-styles.css';
	import { CMS_URL } from '$lib/api';
	import type { PageData } from './$types';
	import ServiceHeader from './ServiceHeader.svelte';
	import { Position } from './types';

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

	<hr class="gray-line" />

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.left}
		<section class="section-container grid-content-box p-10">
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
		</section>
	{/if}

	<hr class="gray-line" />

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.left}
		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{content.sectionWithTextTitle}
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html content.sectionWithTextContent}
				</p>
			</div>
		</section>
	{/if}

	<hr class="gray-line" />

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.right}
		<section class="section-container grid-content-box p-10">
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
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

	<hr class="gray-line" />
{/each}
