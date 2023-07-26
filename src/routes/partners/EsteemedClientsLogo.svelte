<script>
    let showMore = true;

    function toggleSeeMore() {
        showMore = !showMore;
    }

    const commonClasses = "logos-wrapper flex flex-wrap gap-[40px] max-w-[1380px] m-auto justify-center px-5";
    const commonToggleBtnClass = "flex items-center gap-3 toggle-see-more-btn text-bright-blue"
</script>


<div class={showMore ? `${commonClasses} show-more` : `${commonClasses}`}>
    <img src="/images/clients/taj-bank.svg" alt="taj-bank" class="partner-logo">
    <img src="/images/clients/sterling.svg" alt="sterling" class="partner-logo">
    <img src="/images/clients/polaris-bank.svg" alt="polaris-bank" class="partner-logo">
    <img src="/images/clients/titan-trust.svg" alt="titan-trust" class="partner-logo">
    <img src="/images/clients/tolaram.svg" alt="tolaram" class="partner-logo">
    <img src="/images/clients/suntrust.svg" alt="suntrust" class="partner-logo">
    <img src="/images/clients/nbc.svg" alt="nbc" class="partner-logo">
    <img src="/images/clients/fidelity-bank.svg" alt="fidelity-bank" class="partner-logo">
    <img src="/images/clients/network-ips.svg" alt="network-ips" class="partner-logo">
    <img src="/images/clients/standard-chartered.svg" alt="standard-chartered" class="partner-logo">
    <img src="/images/clients/gtbank.svg" alt="gtbank" class="partner-logo">
    <img src="/images/clients/swiftng.svg" alt="swiftng" class="partner-logo">
    <img src="/images/clients/ihs.svg" alt="ihs" class="partner-logo">
    <img src="/images/clients/ives.svg" alt="ives" class="partner-logo">
    <img src="/images/clients/wipro.svg" alt="wipro" class="partner-logo">
    <img src="/images/clients/mtn.svg" alt="mtn" class="partner-logo">
    <img src="/images/clients/zenith.svg" alt="zenith" class="partner-logo">
    <img src="/images/clients/frigoglass.svg" alt="frigoglass" class="partner-logo">
    <img src="/images/clients/providus-bank.svg" alt="providus-bank" class="partner-logo">
    <img src="/images/clients/9mobile.svg" alt="9mobile" class="partner-logo">
    <img src="/images/clients/total-energies.svg" alt="total-energies" class="partner-logo">
    <img src="/images/clients/uba.svg" alt="uba" class="partner-logo">
    <img src="/images/clients/ekiti-state.svg" alt="ekiti-state" class="partner-logo">
    <img src="/images/clients/enugu-state.svg" alt="enugu-state" class="partner-logo">
    <img src="/images/clients/keystone.svg" alt="keystone" class="partner-logo">
    <img src="/images/clients/ecobank.svg" alt="ecobank" class="partner-logo">
    <img src="/images/clients/jaiz.svg" alt="jaiz" class="partner-logo">
    <img src="/images/clients/access.svg" alt="access" class="partner-logo">
    <img src="/images/clients/ibedc.svg" alt="ibedc" class="partner-logo">
    <img src="/images/clients/heritage-bank.svg" alt="heritage-bank" class="partner-logo">
    <img src="/images/clients/wema.svg" alt="wema" class="partner-logo">
    <img src="/images/clients/ubc.svg" alt="ubc" class="partner-logo">
    <img src="/images/clients/amcon.svg" alt="amcon" class="partner-logo">
    <img src="/images/clients/mx1.svg" alt="mx1" class="partner-logo dark:bg-white">
    <img src="/images/clients/stanbic-ibtc.svg" alt="stanbic-ibtc" class="partner-logo">
    <img src="/images/clients/nigeria-lng.svg" alt="nigeria-lng" class="partner-logo">
    <img src="/images/clients/unity-bank.svg" alt="unity-bank" class="partner-logo">
</div>

<!--=== Toggle Button ===-->
<button on:click={toggleSeeMore} class={showMore ? `${commonToggleBtnClass} see-more` : `${commonToggleBtnClass}`}>
    <span>{showMore ? 'See More' : 'See Less'}</span>
    <img src="/images/blue-arrow-down.svg" alt="blue-arrow-down" class="arrow-down">
</button>

<style>
    .logos-wrapper {
        max-height: 10000px;
        transition: max-height 1.2s ease-out;
    }
    .logos-wrapper.show-more {
        max-height: 300px; /* Adjust this value based on the height you want to show initially */
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