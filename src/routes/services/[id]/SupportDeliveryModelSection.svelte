<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentProductPageDeliveryModelSection } from './types';

	export let content: ComponentProductPageDeliveryModelSection;
</script>

<section class="mt-8 sm:mt-10 mb-20 box-container mx-auto px-5 md:px-10 overflow-hidden">
	<div class="text-center mb-13 m-auto max-w-[1160px] section-header">
		<h2 class="text-headline-2 mb-2">{content.title}</h2>
		<p class="text-body-l font-light">{@html content.content}</p>
	</div>

	<div class="new-model-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[1px] gap-y-[10px]">
		{#each content.cards as { content: cardContent, image, title }}
			<div class="new-model-block bg-pewter-blue dark:bg-dark-highlight">
				<div class="model-img-wrapper">
					<img src={CMS_URL + image.data?.attributes.url} alt={title} class="model-img" />
				</div>
				<div class="model-txt text-white py-7 px-5 md:px-10">
					<div class="model-title text-2xl pb-2">{title}</div>
					<p class="model-desc">
						{@html cardContent}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
