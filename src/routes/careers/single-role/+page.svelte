<script>
	// @ts-nocheck

	import JoiningCwgQuestions from "../JoiningCwgQuestions.svelte";
	import Application from "./Application.svelte";
	import RoleOverview from "./RoleOverview.svelte";

	let activeTab = 1;
	/**
	 * @param {number} id
	 */
	function setActiveTab(id) {
		activeTab = id;
	}
</script>

<main>
    <header class="header h-[300px] lg:h-[477px] flex flex-col justify-center gap-[10px]">
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">NIGERIA</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
                    QA Audit <br> Analyst
                </h1>

				<p class="mb-9 header-title-desc">
					We're seeking change makers who share our commitment to making a positive impact
                    while excelling in their work
				</p>
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
					<RoleOverview />
				</div>
			{/if}

			{#if activeTab === 2}
				<div id="application" class="py-5">
					<Application />
				</div>
			{/if}
		</div>
	</section>

    <JoiningCwgQuestions />
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
	
	@media(min-width: 1024px) {
		.tabs-content-wrapper.section-container {
			width: 85%;
			padding: 0 !important;
		}
	}
</style>
