<script lang="ts">
	import YearlyDocumentsBlock from './YearlyDocumentsBlock.svelte';
	import type { CompanyYear } from './types';

	let activeTab = 0;

	function setActiveTab(id: number) {
		activeTab = id;
	}

	export let data: CompanyYear[];

	$: sortedData = data.sort((a, b) => Number(b.attributes.year) - Number(a.attributes.year));

	$: list = data[activeTab].attributes.presentations_and_videos.data;
</script>

<ul class="tabs bg-whitish-blue dark:bg-dark-highlight pt-3">
	<div class="section-container flex gap-[50px]">
		{#each sortedData as { attributes: { year } }, i}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li class="tab {activeTab === i ? 'active' : ''}" on:click={() => setActiveTab(i)}>
				{year}
			</li>
		{/each}
	</div>
</ul>

<div class="tabs-content-wrapper section-container md:m-auto">
	{#if list.length > 0}
		<div id="2014-block" class="py-7">
			<YearlyDocumentsBlock {list} />
		</div>
	{/if}
</div>

<style>
	ul.tabs {
		border-bottom: 1px solid #ddd;
	}
	.tabs li {
		padding: 5px 2px;
		cursor: pointer;
	}
	.tabs li.active {
		border-bottom: 3px solid var(--color-midnight-blue);
		padding-bottom: 5px;
	}
</style>
