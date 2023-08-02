<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentGlobalSectionTextWithImage } from './types';

	export let section: ComponentGlobalSectionTextWithImage;
</script>

<section class="section-container grid-content-box p-10">
	<div class="section-text-side">
		{#if section.title}
			<h2 class="text-headline-4 lg:text-headline-2">
				{section.title}
			</h2>
		{/if}
		<p class="text-body-s font-light lg:text-body-l my-2">
			{@html section.content}
		</p>
	</div>
	<div class="section-img-side pt-2">
		<img
			src={CMS_URL + section.image.data?.attributes.url}
			alt={section.image.data?.attributes.alternativeText}
			class="section-img"
		/>
	</div>
</section>
