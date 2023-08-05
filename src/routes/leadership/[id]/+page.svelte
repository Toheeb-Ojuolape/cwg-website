<script lang="ts">
	import { page } from '$app/stores';
	import { error } from '@sveltejs/kit';
	import type { LayoutData } from '../$types';
	import LeaderBioSection from './LeaderBioSection.svelte';
	import LeaderCardHeader from './LeaderCardHeader.svelte';
	import OtherLeadersSection from './OtherLeadersSection.svelte';

	export let data: LayoutData;

	$: leader = data.allLeaders.find((leader) => leader.attributes.slug === $page.params.id);

	$: if (!leader) {
		throw error(404, 'Leader not found');
	}
</script>

{#if leader}
	<div>
		<LeaderCardHeader {leader} />
		<LeaderBioSection {leader} />
		<OtherLeadersSection {leader} allLeaders={$page.data.allLeaders} />
	</div>
{/if}
