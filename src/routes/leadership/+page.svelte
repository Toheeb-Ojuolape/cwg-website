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
		class="header bg-midnight-blue text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px] relative"
	>
		<div class="section-container">
			<div class="header-text-wrapper flex-1 mx-4 lg:mx-0 py-10 lg:py-0">
				<h1 class="text-headline-2 lg:text-headline-1">
					{leadershipPage.attributes.header.title}
				</h1>
				<p class="text-body-s lg:text-body-m w-full max-w-[567px]">
					{leadershipPage.attributes.header.description}
				</p>
			</div>

			<div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
				<img
					src={CMS_URL +
						leadershipPage.attributes.header.right_image.data?.attributes.url}
					alt=""
					class="header-img bg-pewter-blue"
				/>
			</div>
			<!-- <div
				class="lg:flex-1 bg-cover bg-no-repeat h-[300px] lg:h-[477px] w-full header-img-side"
				style={`background-image: url(${CMS_URL}${leadershipPage.attributes.header.right_image.data?.attributes.url})`}
			/> -->
		</div>
	</header>

	<section class="section-container lg:px-33 mx-auto pt-16">
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

<style>
	.header-img-side {
		position: absolute;
		top: 0;
		right: 0;
		width: 50%;
		height: 100%;
	}
	img.header-img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: cover;
		object-position: top right;
	}

	@media (min-width: 1024px) {
		.header-img-wrapper {
			position: absolute;
			height: 100%;
			width: 50%;
			right: 0;
			top: 0;
		}
		header.header > .section-container {
			position: initial;
		}
	}

	@media (max-width: 640px) {
		.header-text-wrapper {
			position: relative;
			z-index: 1;
		}
		.header-img-wrapper {
			position: absolute;
			opacity: 0.08;
			left: 0;
			top: 0;
		}
	}
</style>
