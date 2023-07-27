<script>
	import YearlyDocumentsBlock from "./YearlyDocumentsBlock.svelte";

    let activeTab = 1;
	/**
	 * @param {number} id
	 */
	function setActiveTab(id) {
		activeTab = id;
	}
</script>

<ul class="tabs bg-whitish-blue dark:bg-dark-highlight pt-3">
    <div class="section-container flex gap-[50px]">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 1 ? 'active' : ''}" on:click={() => setActiveTab(1)}>
            2014
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 2 ? 'active' : ''}" on:click={() => setActiveTab(2)}>
            2015
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 3 ? 'active' : ''}" on:click={() => setActiveTab(3)}>
            2016
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 4 ? 'active' : ''}" on:click={() => setActiveTab(4)}>
            2017
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 5 ? 'active' : ''}" on:click={() => setActiveTab(5)}>
            2018
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 6 ? 'active' : ''}" on:click={() => setActiveTab(6)}>
            2019
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 7 ? 'active' : ''}" on:click={() => setActiveTab(7)}>
            2020
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 8 ? 'active' : ''}" on:click={() => setActiveTab(8)}>
            2021
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 9 ? 'active' : ''}" on:click={() => setActiveTab(9)}>
            2022
        </li>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="tab {activeTab === 10 ? 'active' : ''}" on:click={() => setActiveTab(10)}>
            2023
        </li>
    </div>
</ul>

<div class="tabs-content-wrapper section-container md:m-auto">
    {#if activeTab === 1}
        <div id="2014-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 2}
        <div id="2015-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 3}
        <div id="2016-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 4}
        <div id="2017-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 5}
        <div id="2018-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 6}
        <div id="2019-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 7}
        <div id="2020-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 8}
        <div id="2021-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 9}
        <div id="2022-block" class="py-7">
            <YearlyDocumentsBlock />
        </div>
    {/if}

    {#if activeTab === 10}
        <div id="2023-block" class="py-7">
            <YearlyDocumentsBlock />
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