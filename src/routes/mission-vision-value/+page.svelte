<script>
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import CulturalAttributesSection from './CulturalAttributesSection.svelte';
	import CultureSection from './CultureSection.svelte';
	import ManifestoSection from './ManifestoSection.svelte';
	import MissionVisionItems from './MissionVisionItems.svelte';
	import MissionVisionSection from './MissionVisionSection.svelte';
	import OurValuesSection from './OurValuesSection.svelte';
	import WhyCwgSection from './WhyCWGSection.svelte';
</script>

<div>
	<header class="header h-[477px] box-container mx-auto px-4 lg:px-8">
		<h1 class="text-headline-2 lg:text-headline-1 w-1/2 text-white">
			Supporting Innovation and a Forward - Thinking Africa
		</h1>
	</header>

	<MissionVisionSection />
	<MissionVisionItems />
	<ManifestoSection />
	<OurValuesSection />
	<CultureSection />
	<CulturalAttributesSection />
	<WhyCwgSection />
	<MoreAboutUs />
</div>

<style>
	.header {
		background-size: cover;
		background-image: url('/images/mission-vision-value.png');
		display: flex;
		align-items: center;
		margin-bottom: 64px;
	}
</style>
