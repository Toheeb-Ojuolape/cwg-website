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
	class="section-container pt-5 lg:pt-8 border-t border-t-black-600 mt-16 pb-10 lg:pb-[70px] dark:border-t-black-900"
>
	<h2 class="text-headline-3 lg:text-headline-2 mb-8 lg:mb-14">Other Board of Directors</h2>

	<div class="grid lg:grid-cols-4 gap-4 lg:gap-5">
		{#each leaders as leader}
			<PersonCard {leader} />
		{/each}
	</div>
</section>
