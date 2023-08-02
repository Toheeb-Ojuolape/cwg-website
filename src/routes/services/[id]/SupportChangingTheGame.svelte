<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentProductPageChangingTheGameSection } from './types';

	export let content: ComponentProductPageChangingTheGameSection;
</script>

<section class="section-container p-10">
	<div class="section-text-side lg:px-20">
		<h2 class="text-headline-4 lg:text-headline-2 mb-4">
			{content.title}
		</h2>
		<p class="text-body-s font-light lg:text-body-l mt-2">
			{@html content.content}
		</p>
	</div>
</section>

<section class="py-10">
	<img src={CMS_URL + content.image.data?.attributes.url} alt={content.title} class="w-full" />
</section>
