<script>
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import Celebrating30Years from './Celebrating30Years.svelte';
	import ChampioningSection from './ChampioningSection.svelte';
	import ExploreCwgSection from './ExploreCWGSection.svelte';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import OurJourneySection from './OurJourneySection.svelte';
	import PanAfricaSection from './PanAfricaSection.svelte';
	import TimelineSection from './TimelineSection.svelte';
</script>

<div>
	<header
		class="header h-[477px] text-white box-container mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<h1 class="text-headline-1">About CWG</h1>
		<a href="/"
			><button class="arrow-button text-button-l group"
				>Explore CWG @ 30
				<div class="arrow-right">
					<ArrowRightSolidIcon className="fill-white group-hover:fill-pewter-blue" />
				</div></button
			></a
		>
	</header>

	<ChampioningSection />

	<ExploreCwgSection />

	<TimelineSection />

	<OurJourneySection />

	<PanAfricaSection />

	<Celebrating30Years />

	<MoreAboutUs />
</div>

<style>
	.header {
		background-image: url('../../lib/images/about-hero.png');
		background-size: cover;
	}
</style>
