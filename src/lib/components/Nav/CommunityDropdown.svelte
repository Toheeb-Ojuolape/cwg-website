<script lang="ts">
	const list = [
		{
			title: 'The Texcellence Conference',
			subtitle: 'Unleash innovation, embrace the future',
			link: '/'
		},
		{ title: 'Digital Banking Summit', subtitle: 'Transforming customer engagement', link: '/' },
		{ title: 'The CWG Tech Community', subtitle: 'Cohort for Women and fresh graduate', link: '/community/cwg-tech-community' },
		{ title: 'Pitch for transformation', subtitle: "Empowering Africa's future shapers", link: '/' }
	];
</script>

<div>
	<div
		class="lg:py-8 flex flex-col gap-2 px-4 lg:px-6 lg:bg-white dark:lg:bg-black-1000 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10"
	>
		{#each list as { title, subtitle, link }}
			<a
				href={link}
				class="transition duration-300 pb-3 lg:pb-5 lg:border-b-[0.5px] lg:border-b-pewter-blue dark:lg:border-b-white/30 last:border-b-0 last:pb-0 hover:scale-110"
			>
				<p class="text-body-medium-s lg:text-body-medium-l">{title}</p>
				<p class="text-body-xs text-pewter-blue">{subtitle}</p>
			</a>
		{/each}
	</div>
	<div class="hidden lg:block caret left-20">
		<span />
	</div>
</div>
