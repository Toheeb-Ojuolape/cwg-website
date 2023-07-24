<script lang="ts">
	import type { Leader } from './leadership-types';

	import PersonCard from './PersonCard.svelte';

	export let leaders: Leader[] = [];
</script>

<div class="grid lg:grid-cols-3">
	{#if leaders.length > 0}
		{#each leaders as leader}
			<PersonCard {leader} />
		{/each}
	{/if}
</div>

<style>
	.grid {
		row-gap: 40px;
		column-gap: 30px;
	}
</style>
