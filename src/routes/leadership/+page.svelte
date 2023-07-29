<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import type { LayoutData } from './$types';
	import LeadershipCardList from './LeadershipCardList.svelte';

	export let data: LayoutData;
	const { leadershipTypes, leadershipPage } = data;

	let activeTab: string = leadershipTypes[0].attributes.key;

	$: leaders = leadershipTypes.find((type) => type.attributes.key === activeTab)?.attributes
		.leaderships.data;

	const activeTabClasses =
		'bg-whitish-blue border-x border-t border-black-500 dark:border-black-900 dark:bg-dark-highlight';
</script>

<div>
	<header
		class="text-white box-container bg-midnight-blue mx-auto pl-0 lg:pl-8 lg:flex lg:flex-row lg:items-center lg:justify-between"
	>
		<div class="flex-1 mx-4 lg:mx-0 py-10 lg:py-0">
			<h1 class="text-headline-2 lg:text-headline-1">
				{leadershipPage.attributes.header.title}
			</h1>
			<p class="text-body-s lg:text-body-m w-full max-w-[567px]">
				{leadershipPage.attributes.header.description}
			</p>
		</div>

		<div
			class="lg:flex-1 bg-cover bg-no-repeat h-[300px] lg:h-[477px] w-full"
			style={`background-image: url(${CMS_URL}${leadershipPage.attributes.header.right_image.data?.attributes.url})`}
		/>
	</header>

	<section class="box-container mx-auto lg:px-33 pt-16">
		<div class="flex -mb-[1px]">
			{#each leadershipTypes as { attributes: { title, key } }}
				<button
					on:click={() => (activeTab = key)}
					class:text-black-800={activeTab !== key}
					class={`text-headline-6 px-6 pb-5 pt-4 ${
						activeTab === key ? activeTabClasses : ''
					}`}>{title}</button
				>
			{/each}
		</div>
		<div
			class="bg-whitish-blue dark:bg-dark-highlight px-4 lg:px-16 pt-10 lg:pt-21 pb-10 lg:pb-20 border border-black-500 dark:border-black-900"
		>
			<LeadershipCardList {leaders} />
		</div>
	</section>

	<MoreAboutUs />
</div>
