<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import type { PageData } from './$types';
	import CulturalAttributesSection from './CulturalAttributesSection.svelte';
	import CultureSection from './CultureSection.svelte';
	import ManifestoSection from './ManifestoSection.svelte';
	import MissionVisionItems from './MissionVisionItems.svelte';
	import MissionVisionSection from './MissionVisionSection.svelte';
	import OurValuesSection from './OurValuesSection.svelte';
	import WhyCwgSection from './WhyCWGSection.svelte';

	export let data: PageData;
	const {
		missionPage: {
			header,
			mission_vision_section,
			visions_section,
			culture_attributes_section_accordion,
			culture_attributes_section_image,
			culture_section_body,
			culture_section_subtitle,
			culture_section_title,
			manifesto_section,
			our_values_section,
			policy_section_items,
			policy_section_title,
			why_cwg_section_carousel,
			why_cwg_section_image
		}
	} = data;
</script>

<div>
	<header
		class="header h-[477px] box-container mx-auto px-4 lg:px-8"
		style={`background-image: url(${CMS_URL}${header.background_image.data?.attributes.url})`}
	>
		<h1 class="text-headline-2 lg:text-headline-1 w-1/2 text-white">
			{header.title}
		</h1>
	</header>

	<MissionVisionSection data={mission_vision_section} />
	<MissionVisionItems data={visions_section} />
	<ManifestoSection data={manifesto_section} />
	<OurValuesSection data={our_values_section} />
	<CultureSection
		title={culture_section_title}
		subtitle={culture_section_subtitle}
		body={culture_section_body}
	/>
	<CulturalAttributesSection
		section={culture_attributes_section_accordion}
		image={culture_attributes_section_image}
	/>
	<WhyCwgSection image={why_cwg_section_image} carousel={why_cwg_section_carousel} />
	<MoreAboutUs />
</div>

<style>
	.header {
		background-size: cover;
		display: flex;
		align-items: center;
		margin-bottom: 64px;
	}
</style>
