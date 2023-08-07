<script lang="ts">
	import LeaderBioSection from './LeaderBioSection.svelte';
	import LeaderCardHeader from './LeaderCardHeader.svelte';
	import OtherLeadersSection from './OtherLeadersSection.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: leader = data.leader;
</script>

{#if leader}
	<div>
		<LeaderCardHeader {leader} />
		<LeaderBioSection {leader} />
		<OtherLeadersSection {leader} allLeaders={data.allLeaders} />
	</div>
{/if}
