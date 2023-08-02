<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentGlobalSectionTextWithImage } from './types';

	export let section: ComponentGlobalSectionTextWithImage;
</script>

<section class="section-container grid-content-box-2 pb-10 pr-10 pt-20 sm:pt-0">
	<div class="section-img-side">
		<img
			src={CMS_URL + section.image.data?.attributes.url}
			alt={section.title}
			class="section-img m-auto"
		/>
	</div>
	<div class="section-text-side">
		<div class="lg:pl-10">
			<h2 class="text-headline-4 lg:text-headline-2">
				{section.title}
			</h2>
			<p class="text-body-s font-light lg:text-body-l my-2">
				{@html section.content}
			</p>
		</div>
	</div>
</section>
