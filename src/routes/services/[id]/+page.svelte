<script lang="ts">
	import type { PageData } from './$types';
	import ServiceHeader from './ServiceHeader.svelte';

	export let data: PageData;

	$: service = data.service;
</script>

{#each service.content as content}
	{#if content.__typename === 'ComponentGlobalPageHeader'}
		<ServiceHeader header={content} />
	{/if}
{/each}
