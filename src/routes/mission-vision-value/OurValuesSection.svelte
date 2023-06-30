<script>
	import ValueCard from './ValueCard.svelte';
</script>

<section class="mt-27 box-container mx-auto px-21">
	<div class="text-center mb-8">
		<h2 class="text-headline-2 mb-2">Our Values</h2>
		<p class="text-body-l">
			When you work with us, we guarantee you’ll see how these core values<br /> drive every interaction
			and decision.
		</p>
	</div>

	<div class="grid grid-cols-3 gap-[30px]">
		{#each Array(6) as _}
			<ValueCard />
		{/each}
	</div>
</section>
