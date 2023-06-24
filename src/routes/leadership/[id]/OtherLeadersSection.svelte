<script>
	import PersonCard from '../PersonCard.svelte';

	let leaders = [
		...Array(4)
			.fill(undefined)
			.map((_) => ({
				name: 'Austin Okere',
				position: 'Non-Executive Director (Chairman, Risk Management and Audit Committee)',
				bio: 'string',
				image: '/images/leadership-hero.png'
			}))
	];
</script>

<section
	class="section-container pt-8 border-t border-t-black-600 mt-16 pb-[70px] dark:border-t-black-900"
>
	<h2 class="text-headline-2 mb-14">Other Board of Directors</h2>

	<div class="grid grid-cols-4 gap-5">
		{#each leaders as leader}
			<PersonCard {leader} />
		{/each}
	</div>
</section>
