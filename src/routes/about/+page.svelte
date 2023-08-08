<script lang="ts">
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import Celebrating30Years from './Celebrating30Years.svelte';
	import ChampioningSection from './ChampioningSection.svelte';
	import ExploreCwgSection from './ExploreCWGSection.svelte';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import OurJourneySection from './OurJourneySection.svelte';
	import PanAfricaSection from './PanAfricaSection.svelte';
	import TimelineSection from './TimelineSection.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	const about = data.aboutPage;
</script>

<div>
	<header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${CMS_URL}${about.header.bg_image.data[0].attributes.url});`}
	>
		<div class="section-container">
			<h1 class="text-headline-2 lg:text-headline-1">{about.header.title}</h1>
			<a href={about.header.link}
				><button class="arrow-button text-button-l group"
					>{about.header.link_text}
					<div class="arrow-right">
						<ArrowRightSolidIcon className="fill-white group-hover:fill-pewter-blue" />
					</div></button
				></a
			>
		</div>
	</header>

	<ChampioningSection data={about.section_one} />

	<ExploreCwgSection data={about.explore_cwg} />

	<TimelineSection data={about.history_section} />

	<OurJourneySection table={about.journey_section_table} title={about.journey_section_title} />

	<PanAfricaSection
		title={about.pan_african_title}
		link={about.pan_african_link}
		content={about.pan_african_content}
	/>

	<Celebrating30Years data={about.celebrating_30_section} />

	<MoreAboutUs content={about.more_about_us} />
</div>

<style>
	.header {
		background-size: cover;
	}
</style>
