<script lang="ts">
	import ComponentSectionWithCard from './ComponentSectionWithCard.svelte';
	import type { ComponentGlobalSectionWithCards } from './types';

	export let content: ComponentGlobalSectionWithCards;
</script>

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

	<div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper">
		{#each content.cards as { title, content: cardContent, image }}
			<ComponentSectionWithCard {title} {cardContent} {image} />
		{/each}
	</div>
</section>
