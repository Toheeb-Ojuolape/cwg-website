<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentProductPageSupportServicesSection } from './types';

	export let content: ComponentProductPageSupportServicesSection;
</script>

<section class="mt-10 mb-20 box-container mx-auto px-5 md:px-10 overflow-hidden">
	<div class="mb-13 section-header">
		<h2 class="text-headline-2 mb-2">{content.title}</h2>
		<p class="text-body-l font-light">{@html content.content}</p>
	</div>

	<div class="support-services-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-[1px]">
		{#each content.cards as { content: cardContent, image, title }}
			<div class="bg-whitish-blue dark:bg-dark-highlight support-services-block">
				<div class="img-box-wrapper w-full bg-midnight-blue mb-4">
					<img src={CMS_URL + image.data?.attributes.url} alt={title} />
				</div>
				<div class="px-5 pb-10">
					<h4 class="text-headline-6 mb-3 support-services-title">
						{title}
					</h4>
					<div class="text-body-m support-services-list text-m course-list">
						{@html cardContent}
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
