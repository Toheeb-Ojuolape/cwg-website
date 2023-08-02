<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentGlobalSectionTextWithImage } from './types';

	export let section: ComponentGlobalSectionTextWithImage;
</script>

<section class="section-container grid-content-box-2 pl-10">
	<div class="section-text-side">
		<div class="lg:pr-10">
			<h2 class="text-headline-4 lg:text-headline-2">{section.title}</h2>
			<p class="text-body-s font-light lg:text-body-l my-2">
				{@html section.content}
			</p>
		</div>
	</div>
	<div class="section-img-side pt-2">
		<img
			src={CMS_URL + section.image.data?.attributes.url}
			alt={section.title}
			class="section-img m-auto"
		/>
	</div>
</section>
