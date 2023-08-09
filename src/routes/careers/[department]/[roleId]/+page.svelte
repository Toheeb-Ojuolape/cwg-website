<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import Application from './Application.svelte';
	import RoleOverview from './RoleOverview.svelte';

	let activeTab = 1;

	export let data: PageData;
	export let form: ActionData;

	$: content = data.role.attributes;

	function setActiveTab(id: number) {
		activeTab = id;
	}

	function onApplyClick() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		setActiveTab(2);
	}
</script>

<main>
	<header class="header h-[300px] lg:h-[477px] flex flex-col justify-center gap-[10px]">
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">
					{content.countries.data.flatMap((c) => c.attributes.name).join(', ')}
				</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{content.title}
				</h1>

				{#if content.description}
					<p class="mb-9 header-title-desc">{content.description}</p>
				{/if}
			</div>
		</div>
	</header>

	<section class="tabs-wrapper">
		<ul class="tabs">
			<div class="md:w-[85%] lg:m-auto flex gap-[50px]">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="tab {activeTab === 1 ? 'active' : ''}" on:click={() => setActiveTab(1)}>
					Role Overview
				</li>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<li class="tab {activeTab === 2 ? 'active' : ''}" on:click={() => setActiveTab(2)}>
					Application
				</li>
			</div>
		</ul>

		<div class="tabs-content-wrapper section-container md:m-auto">
			{#if activeTab === 1}
				<div id="role-overview" class="py-10">
					<RoleOverview
						overview={content.overview ?? ''}
						on:onApplyClick={onApplyClick}
					/>
				</div>
			{/if}

			{#if activeTab === 2}
				<div id="application" class="py-5">
					<Application {form} />
				</div>
			{/if}
		</div>
	</section>

	<!-- <JoiningCwgQuestions /> -->
</main>

<style>
	ul.tabs {
		border-bottom: 1px solid #ddd;
	}
	.tabs li {
		padding: 5px 10px;
		cursor: pointer;
	}
	.tabs li.active {
		border-bottom: 3px solid var(--color-burlywood);
		padding-bottom: 5px;
	}

	@media (min-width: 1024px) {
		.tabs-content-wrapper.section-container {
			width: 85%;
			padding: 0 !important;
		}
	}
</style>
