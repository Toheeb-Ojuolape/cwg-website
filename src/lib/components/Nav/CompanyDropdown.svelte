<script lang="ts">
	const list = [
		{ title: 'About CWG', subtitle: 'CWG at a glance', link: '/about' },
		{ title: 'Awards', subtitle: 'Award-winning solutions, powering pan-Africa', link: '/' },
		{
			title: 'Partners',
			subtitle: 'Empowering growth through expert insights and advisory',
			link: '/'
		},
		{
			title: 'Mission, Vision & Value',
			subtitle: 'Supporting Innovation and a Forward Thinking Africa',
			link: '/mission-vision-value'
		},
		{ title: 'Regions', subtitle: 'Our companies, our success', link: '/' },
		{ title: 'Impact', subtitle: 'Empowering tech frontiers', link: '/' },
		{ title: 'Careers', subtitle: 'Join the amazing team', link: '/' },
		{
			title: 'Leadership',
			subtitle: 'Collaborative expertise driving positive impact',
			link: '/leadership'
		},
		{
			title: 'Investor Relations',
			subtitle: "Invest with confidence in CWG's tech-driven opportunities",
			link: '/'
		}
	];
</script>

<div>
	<div
		class="link-container bg-white dark:bg-black-1000 lg:pt-9 grid lg:grid-cols-3 lg:pb-8 px-4 lg:px-8 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10"
	>
		{#each list as { link, subtitle, title }}
			<a
				class="text-body-medium-s lg:text-body-medium-l hover:scale-110 transition-all duration-300"
				href={link}
				aria-label={title}
			>
				<p>{title}</p>
				<p class="text-body-xs text-pewter-blue">{subtitle}</p>
			</a>
		{/each}
	</div>

	<div class="hidden lg:block caret left-14">
		<span />
	</div>
</div>

<style>
	.link-container {
		background-image: url(../../images/services_bg.svg);
		background-repeat: no-repeat;
		background-position: left top;
		background-attachment: fixed;
		row-gap: 12px;
		column-gap: 30px;
		max-width: 787px;
	}

	@media (max-width: 1024px) {
		.link-container {
			background-image: none;
			background-color: transparent;
			max-width: 100%;
			column-gap: 0px;
		}
	}
</style>
