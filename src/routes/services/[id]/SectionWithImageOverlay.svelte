<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentProductPageSectionWithImageOverlay } from './types';

	export let content: ComponentProductPageSectionWithImageOverlay;
</script>

<section class="section-container grid-content-box p-10">
	<div class="section-text-side">
		<h2 class="text-headline-4 lg:text-headline-2">
			{content.title}
		</h2>
		<p class="text-body-s font-light lg:text-body-l my-2">
			{@html content.left_body}
		</p>
	</div>
	<div class="section-img-side pt-2 text-center">
		<img
			src={CMS_URL + content.underlay_image.data?.attributes.url}
			alt={content.underlay_image.data?.attributes.alternativeText}
			class="section-img cwg-txt-img m-auto dark:brightness-0 dark:invert"
		/>
	</div>
</section>
