<script lang="ts">
	import type { MissionPage } from '$lib/types/mission-page';
	import ValueCard from './ValueCard.svelte';

	export let data: MissionPage['our_values_section'];

	const { subtitle, title, values } = data;
</script>

<section class="mt-27 box-container mx-auto px-21">
	<div class="text-center mb-8">
		<h2 class="text-headline-2 mb-2">{title}</h2>
		<p class="text-body-l">{subtitle}</p>
	</div>

	<div class="grid grid-cols-3 gap-[30px]">
		{#each values as value}
			<ValueCard {value} />
		{/each}
	</div>
</section>
