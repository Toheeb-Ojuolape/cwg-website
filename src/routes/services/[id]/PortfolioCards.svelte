<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ServiceCard } from './types';

	export let cards: ServiceCard[];
</script>

{#each cards as { content, image, title, subtitle }}
	<div class="pts-portfolio-block bg-whitish-blue dark:bg-dark-highlight">
		<div class="pts-portfolio-header flex gap-[10px] bg-midnight-blue text-white">
			<img src={CMS_URL + image.data?.attributes.url} alt={title} class="portfolio-icon" />
			<span>{title}</span>
		</div>
		<div class="pts-portfolio-desc p-10">
			{@html content}
		</div>
	</div>
{/each}
