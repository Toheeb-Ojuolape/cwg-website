<script lang="ts">
	const list = [
		{
			title: 'The Texcellence Conference',
			subtitle: 'Unleash innovation, embrace the future',
			link: '/'
		},
		{ title: 'Digital Banking Summit', subtitle: 'Transforming customer engagement', link: '/' },
		{ title: 'The CWG Tech Community', subtitle: 'Cohort for Women and fresh graduate', link: '/' },
		{ title: 'Pitch for transformation', subtitle: "Empowering Africa's future shapers", link: '/' }
	];
</script>

<div>
	<div class="py-8 flex flex-col gap-2 px-6 bg-white border border-black-500 rounded-10">
		{#each list as { title, subtitle, link }}
			<a
				href={link}
				class="transition duration-300 pb-5 border-b-[0.5px] border-b-pewter-blue last:border-b-0 last:pb-0 hover:scale-110"
			>
				<p class="text-body-medium-l">{title}</p>
				<p class="text-body-xs text-pewter-blue dark:text-white/50">{subtitle}</p>
			</a>
		{/each}
	</div>
	<div class="caret left-20">
		<span />
	</div>
</div>
