<script>
	import RegionBlocks from "./RegionBlocks.svelte";

    export let displayRegion = false;

    function toggleDisplayRegion() {
        displayRegion = !displayRegion;
    }

    // const commonClasses = "bg-white dark:bg-dark-highlight p-[20px]"
</script>

{#if displayRegion}
    <div id="our-regions" class="bg-white dark:bg-dark-highlight p-[20px]">
        <div class="section-container relative">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src="/images/close.svg" alt="close" class="close" on:click={toggleDisplayRegion}>
            <div class="section-text-side pt-[25px]">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Our Regions
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Discover job and career opportunities at CWG's several office locations throughout Africa. <br>
                    Join us in shaping the future of technology on the continent.
                </p>
            </div>
        
            <div class="regions-blocks-wrapper grid sm:grid-cols-2 lg:grid-cols-4 gap-[20px] py-[30px]">
                <RegionBlocks />
            </div>
        </div>
    </div>
{/if}