<script lang="ts">
	import PersonCard from '../PersonCard.svelte';
	import type { Leader } from '../leadership-types';

	export let leader: Leader;
	export let allLeaders: Leader[];

	$: otherLeaders = allLeaders
		.filter(
			(l) =>
				l.attributes.slug !== leader.attributes.slug &&
				l.attributes.leadership_types.data[0].attributes.title ===
					leader.attributes.leadership_types.data[0].attributes.title
		)
		.slice(0, 4);
</script>

<section
	class="section-container pt-5 lg:pt-8 border-t border-t-black-600 mt-16 pb-10 lg:pb-[70px] dark:border-t-black-900"
>
	<h2 class="text-headline-3 lg:text-headline-2 mb-8 lg:mb-14">
		Other {leader.attributes.leadership_types.data[0].attributes.title}
	</h2>

	<div class="grid lg:grid-cols-4 gap-4 lg:gap-5">
		{#each otherLeaders as otherLeader}
			<PersonCard leader={otherLeader} />
		{/each}
	</div>
</section>
