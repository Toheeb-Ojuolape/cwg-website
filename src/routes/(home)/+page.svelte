<script lang="ts">
	import type { PageData } from './$types';
	import Hero from './Hero.svelte';
	import IndustriesSection from './IndustriesSection.svelte';
	import InvestorAnnualCareerSection from './InvestorAnnualCareerSection.svelte';
	import NewsSection from './NewsSection.svelte';
	import QualityPolicySection from './QualityPolicySection.svelte';
	import SectionOne from './SectionOne.svelte';
	import SectionTwo from './SectionTwo.svelte';

	export let data: PageData;

	$: home = data.home;
</script>

<div>
	<Hero />
	<SectionOne data={home.section_one} />
	<SectionTwo data={home.shares_highlight} />
	<InvestorAnnualCareerSection list={home.home_highlight_cards} />
	<IndustriesSection content={home.industries_we_dominate_section} />
	<QualityPolicySection content={home.quality_policy_section} />
	<NewsSection />
</div>
