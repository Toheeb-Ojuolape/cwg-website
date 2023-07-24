<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { OEMPartner } from '$lib/types/oem-partner';

	export let logos: OEMPartner['attributes']['logo']['data'];
	let showMore = true;

	function toggleSeeMore() {
		showMore = !showMore;
	}

	const commonClasses =
		'logos-wrapper flex flex-wrap gap-[40px] max-w-[1380px] m-auto justify-center px-5 dark:dark-wrapper';
	const commonToggleBtnClass = 'flex items-center gap-3 toggle-see-more-btn text-bright-blue';
</script>

<div class={showMore ? `${commonClasses} show-more` : `${commonClasses}`}>
	{#each logos as { attributes: { url } }}
		<img src={CMS_URL + url} alt="" class="partner-logo" />
	{/each}
	<img src="/images/oem/infosys.svg" alt="infosys" class="partner-logo" />
	<img src="/images/oem/ameyo.svg" alt="ameyo" class="partner-logo" />
	<img src="/images/oem/hitachi.svg" alt="hitachi" class="partner-logo dark:hidden block" />
	<img src="/images/oem/hitachi-white.svg" alt="hitachi" class="partner-logo dark:block hidden" />
	<img src="/images/oem/ibm.svg" alt="ibm" class="partner-logo" />
	<img src="/images/oem/veritas.svg" alt="veritas" class="partner-logo" />
	<img src="/images/oem/cisco.svg" alt="cisco" class="partner-logo" />
	<img src="/images/oem/f5.svg" alt="f5" class="partner-logo" />
	<img src="/images/oem/nutanix.svg" alt="nutanix" class="partner-logo" />
	<img src="/images/oem/newgen.svg" alt="newgen" class="partner-logo" />
	<img src="/images/oem/vmware.svg" alt="vmware" class="partner-logo" />
	<img
		src="/images/oem/check-point.svg"
		alt="check-point"
		class="partner-logo dark:hidden block"
	/>
	<img
		src="/images/oem/check-point-white.svg"
		alt="check-point"
		class="partner-logo dark:block hidden"
	/>
	<img src="/images/oem/dell-emc.svg" alt="dell-emc" class="partner-logo" />
	<img src="/images/oem/netapp.svg" alt="netapp" class="partner-logo dark:hidden block" />
	<img src="/images/oem/netapp-white.svg" alt="netapp" class="partner-logo dark:block hidden" />
	<img src="/images/oem/microsoft.svg" alt="microsoft" class="partner-logo" />
	<img src="/images/oem/redhat.svg" alt="redhat" class="partner-logo dark:hidden block" />
	<img src="/images/oem/redhat-white.svg" alt="redhat" class="partner-logo dark:block hidden" />
	<img src="/images/oem/zadara.svg" alt="zadara" class="partner-logo dark:hidden block" />
	<img src="/images/oem/zadara-white.svg" alt="zadara" class="partner-logo dark:block hidden" />
</div>

<!--=== Toggle Button ===-->
<button
	on:click={toggleSeeMore}
	class={showMore ? `${commonToggleBtnClass} see-more` : `${commonToggleBtnClass}`}
>
	<span>{showMore ? 'See More' : 'See Less'}</span>
	<img src="/images/blue-arrow-down.svg" alt="blue-arrow-down" class="arrow-down" />
</button>

<style>
	.logos-wrapper {
		max-height: 10000px;
		transition: max-height 0.5s ease-out;
	}
	.logos-wrapper.show-more {
		max-height: 200px; /* Adjust this value based on the height you want to show initially */
		overflow: hidden;
		position: relative;
	}

	button.toggle-see-more-btn {
		position: absolute;
		bottom: 0;
		left: 50%;
		border-bottom: 1px solid var(--color-bright-blue);
		padding: 10px 20px;
		transform: translateX(-50%);
	}
	button img.arrow-down {
		transform: rotate(180deg);
		transition: transform 1s;
	}
	button.see-more img.arrow-down {
		transform: rotate(0deg);
	}
</style>
