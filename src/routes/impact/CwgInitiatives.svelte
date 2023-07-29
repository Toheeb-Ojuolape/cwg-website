<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { Card } from './types';

	export let cards: Card[];
</script>

{#each cards as { content, image, title }}
	<div class="pt-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
		<div class="flex-1 px-5 pb-15">
			<div class="img-box-wrapper w-full bg-midnight-blue mb-4">
				<img src={CMS_URL + image.data.attributes.url} alt="transform-school-initiative" />
			</div>
			<h4 class="text-headline-6 mb-3 industry-block-title">{title}</h4>
			<div class="text-body-m industry-block-desc">
				{@html content}
			</div>
		</div>
	</div>
{/each}
