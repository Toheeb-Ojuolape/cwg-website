<script lang="ts">
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import type { PitchForTransformation } from './types';

	export let cards: PitchForTransformation['evaluation_criteria_section']['cards'];
</script>

{#each cards as { content, image, title }}
	<div>
		<div class="p-4 bg-whitish-blue dark:bg-dark-highlight flex flex-col industry-block">
			<h4 class="text-headline-5 mb-3 industry-block-title">{title}</h4>
			<div class="text-body-m industry-block-desc">
				<div class="py-2 Pitch__card-content">{@html content}</div>
			</div>
		</div>
	</div>
{/each}

<style>
	div:nth-child(4n) .industry-block::before {
		background-color: var(--color-vivid-burgundy);
	}

	div:nth-child(4n + 1) .industry-block::before {
		background-color: var(--color-naples-yellow);
	}
	div:nth-child(4n + 2) .industry-block::before {
		background-color: var(--color-burlywood);
	}
	div:nth-child(4n + 3) .industry-block::before {
		background-color: var(--color-pewter-blue);
	}
	div:nth-child(4n + 4) .industry-block::before {
		background-color: var(--color-light-green);
	}
</style>
