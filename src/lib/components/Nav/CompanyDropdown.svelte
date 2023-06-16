<script lang="ts">
	const list = [
		{ title: 'About CWG', subtitle: 'CWG at a glance', link: '/' },
		{ title: 'Awards', subtitle: 'Award-winning solutions, powering pan-Africa', link: '/' },
		{
			title: 'Partners',
			subtitle: 'Empowering growth through expert insights and advisory',
			link: '/'
		},
		{
			title: 'Mission, Vision & Value',
			subtitle: 'Supporting Innovation and a Forward Thinking Africa',
			link: '/'
		},
		{ title: 'Regions', subtitle: 'Our companies, our success', link: '/' },
		{ title: 'Impact', subtitle: 'Empowering tech frontiers', link: '/' },
		{ title: 'Careers', subtitle: 'Join the amazing team', link: '/' },
		{ title: 'Leadership', subtitle: 'Collaborative expertise driving positive impact', link: '/' },
		{
			title: 'Investor Relations',
			subtitle: "Invest with confidence in CWG's tech-driven opportunities",
			link: '/'
		}
	];
</script>

<div>
	<div class="link-container pt-9 grid grid-cols-3 pb-8 px-8 border border-black-500 rounded-10">
		{#each list as { link, subtitle, title }}
			<a
				class="text-body-medium-l hover:scale-110 transition-all duration-300"
				href={link}
				aria-label={title}
			>
				<p>{title}</p>
				<p class="text-body-xs text-pewter-blue">{subtitle}</p>
			</a>
		{/each}
	</div>

	<div class="caret left-14">
		<span />
	</div>
</div>

<style>
	.link-container {
		background-color: white;
		background-image: url(../../images/services_bg.svg);
		background-repeat: no-repeat;
		background-position: left top;
		background-attachment: fixed;
		row-gap: 12px;
		column-gap: 30px;
		max-width: 787px;
	}
</style>
