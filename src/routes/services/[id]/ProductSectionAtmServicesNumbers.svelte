<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentProductPageAtmServicesNumbers } from './types';

	export let content: ComponentProductPageAtmServicesNumbers;
</script>

<section class="section-container mx-auto py-20 pb-15">
	<div class="text-center mb-13 m-auto max-w-[818px] section-header">
		<h2 class="text-headline-2 mb-2">{content.title}</h2>
	</div>
	<div class="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 pt-2 management-items-wrapper">
		{#each content.service_numbers as { title, content: serviceNumberContent, image }}
			<div class="management-item sm:p-10 p-5">
				<img
					src={CMS_URL + image.data?.attributes.url}
					alt={title}
					class="management-item-img"
				/>
				<h5 class="text-headline-3 lg:text-headline-1 pt-5 pb-3">{title}</h5>
				<p>{@html serviceNumberContent}</p>
			</div>
		{/each}
	</div>
</section>
