<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentGlobalSectionTextWithImage } from './types';

	export let section: ComponentGlobalSectionTextWithImage;
</script>

<section class="section-container mx-auto py-10">
	<div
		class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
	>
		<div class="flex-1">
			<img
				src={CMS_URL + section.image.data?.attributes.url}
				alt={section.image.data?.attributes.alternativeText}
			/>
		</div>
		<div class="flex-1 p-5 pb-8 sm:p-0">
			<p class="text-body-m max-w-[515px] w-full my-2">
				{@html section.content}
			</p>
		</div>
	</div>
</section>
