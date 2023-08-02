<script lang="ts">
	import TestimonySlider from './TestimonySlider.svelte';
	import type { ComponentProductPageCwgAcademySection } from './types';

	export let content: ComponentProductPageCwgAcademySection;
</script>

<section class="section-container grid-content-box p-10">
	<div class="section-text-side">
		<h2 class="text-headline-4 lg:text-headline-2">
			{content.title}
		</h2>
		<p class="text-body-s font-light lg:text-body-l my-2">{@html content.body}</p>
	</div>
	<div class="section-img-side pt-2">
		<TestimonySlider list={content.carousel} />
	</div>
</section>
