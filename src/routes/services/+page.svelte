<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { PageData } from './$types';
	import './services-styles.css';

	export let data: PageData;

	$: content = data.servicePage;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${
			CMS_URL + content.header.background_image.data?.attributes.url
		}`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{content.header.title}
				</h1>

				<p class="mb-9 header-title-desc">{content.header.description}</p>
			</div>
		</div>
	</header>

	<div class="services-content">
		<div class="section-container">
			<div class="services-grid-wrapper">
				{#each content.services.data as { attributes: { image, slug, title } }}
					<a href={`/services/${slug}`} class="services-block bg-greyish-blue">
						<div class="services-img">
							<img src={CMS_URL + image.data?.attributes.url} alt={slug} />
						</div>
						<div class="services-text flex justify-between">
							<span>{title}</span>
							<div class="arrow-right">
								<ArrowRightLong fillClassName="fill-white" />
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}
</style>
