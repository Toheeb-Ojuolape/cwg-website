<script>
	import DirectionRightIcon from '$lib/components/Svgs/DirectionRightIcon.svelte';

	const links = [
		{ title: 'Our Polices & Sector', link: '/' },
		{ title: 'The Mission, Vision, Value and Culture', link: '/' },
		{ title: 'Our Partners', link: '/' },
		{ title: 'Leadership', link: '/leadership' },
		{ title: 'Awards', link: '/' },
		{ title: 'Impact', link: '/' },
		{ title: 'Our Product', link: '/' },
		{ title: 'Investor Relations', link: '/' }
	];
</script>

<section
	class="box-container mx-auto flex items-center gap-13 pl-4 lg:pl-8 2xl:pl-0 border-y-[1.5px] border-y-black-600 dark:border-y-black-900"
>
	<div class="text-body-l flex flex-col gap-4 flex-1">
		<p>
			As a leading provider of IT services across Africa, CWG operates a firmly established
			partnership network which connects businesses, enterprises, governments, customers, and
			consumers, utilizing value-added services to help them efficiently drive processes, and
			improve across their respective activities.
		</p>

		<p>
			With over two decades of immense contribution to the Information Communication and
			Technology Sector, CWG has continuously remained a benchmark for excellence in Africa.
			We believe in and pursue an excellent service culture, and deliver our operations
			through global best practices using its ISO9001 certification process across the entire
			group.
		</p>
		<p>
			Over time, we have received a number of accolades from our partners, clients, customers,
			media and professional bodies as a result of our service excellence and increased
			performance. Most recently, The World Economic Forum (WEF) recognized CWG as a Global
			Growth Company.
		</p>
	</div>

	<div
		class="py-[10px] pr-4 lg:pr-8 bg-whitish-blue dark:bg-white/10 flex flex-col items-end w-[354px]"
	>
		<h2 class="mb-8 text-headline-2">Explore CWG</h2>
		<div class="flex flex-col gap-[10px] items-end">
			{#each links as { link, title }, i}
				<a
					href={link}
					class="flex text-button-s py-[10px] items-center gap2 hover:scale-110 transition-all duration-300`"
					class:link={i !== links.length - 1}
					>{title}
					<div class="mt-[2px]"><DirectionRightIcon /></div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.link {
		border-bottom: 1px solid var(--color-black-600);
	}
</style>
