<script lang="ts">
	import type { ComponentGlobalSectionWithText } from './types';

	export let section: ComponentGlobalSectionWithText;
	export let slug: string;
</script>

<section class="section-container grid-content-box p-10">
	<div class="section-title-side">
		<h2 class="text-headline-4 lg:text-headline-2">
			{section.sectionWithTextTitle}
		</h2>
	</div>
	<div class="section-txt-side" class:Pitch__card-content={slug !== 'hardware-services'}>
		<p class="text-body-s font-light lg:text-body-l">
			{@html section.sectionWithTextContent}
		</p>
	</div>
</section>
