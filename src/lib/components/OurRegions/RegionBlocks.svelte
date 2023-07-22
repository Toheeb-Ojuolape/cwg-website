<script>
	import ArrowRightLong from "../Svgs/ArrowRightLong.svelte";
    import Connection from "../Svgs/Connection.svelte";
	import Pin from "../Svgs/Pin.svelte";

    let showModal = false;

    const openModal = () => {
      showModal = true;
    };
    const closeModal = () => {
      showModal = false;
    };
</script>

<div class="region-block relative bg-whitish-blue dark:bg-black">
    <div class="region-block-img h-[185px] w-full relative">
        <img src="/images/region-nigeria.jpg" alt="Nigeria" class="bg-img">
    </div>
    <div class="bg-midnight-blue text-white px-[30px] py-[15px]">
        <div class="region-name text-[18px]">CWG Nigeria</div>
        <a href="mailto:info@cwg-plc.com" class="region-email text-[14px] text-pewter-blue">info@cwg-plc.com</a>
    </div>
    <div class="more-region-details text-[15px] pt-5 pb-20 px-3">
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Pin />
            </div>
            <div class="text-deep-blue dark:text-white">
                Block 54A, Plot 10, Off Rufus Giwa Street, Off Adebayo Doherty Road, Off Admiralty
                Way, Lekki Phase 1, Lagos
            </div>
        </div>
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Connection />
            </div>
            <div>012809800</div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="read-more-div text-[18px] flex justify-between" on:click={() => openModal()}>
            <span>Read more</span>
            <ArrowRightLong strokeClassName="stroke-blue" />
        </div>
    </div>
</div>

<div class="region-block relative bg-whitish-blue dark:bg-black">
    <div class="region-block-img h-[185px] w-full relative">
        <img src="/images/region-ghana.jpg" alt="Ghana" class="bg-img">
    </div>
    <div class="bg-midnight-blue text-white px-[30px] py-[15px]">
        <div class="region-name text-[18px]">CWG Ghana</div>
        <a href="mailto:info.cwgghana@cwg-plc.com" class="region-email text-[14px] text-pewter-blue">info.cwgghana@cwg-plc.com</a>
    </div>
    <div class="more-region-details text-[15px] pt-5 pb-20 px-3">
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Pin />
            </div>
            <div class="text-deep-blue dark:text-white">
                B2A/2, Agostino Neto Close, Agostino Neto Road Opposite The Cocoshie Building Airport Residential
                Area, Ghana P.O. Box: KD 247 Kanda, Ghana
            </div>
        </div>
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Connection />
            </div>
            <div>+234-1 -2809800 Ext. 6000 233-302772793</div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="read-more-div text-[18px] flex justify-between" on:click={() => openModal()}>
            <span>Read more</span>
            <ArrowRightLong strokeClassName="stroke-blue" />
        </div>
    </div>
</div>

<div class="region-block relative bg-whitish-blue dark:bg-black">
    <div class="region-block-img h-[185px] w-full relative">
        <img src="/images/region-cameroon.jpg" alt="Cameroon" class="bg-img">
    </div>
    <div class="bg-midnight-blue text-white px-[30px] py-[15px]">
        <div class="region-name text-[18px]">CWG Cameroon</div>
        <a href="mailto:info.cwgcameroon@cwg-plc.com" class="region-email text-[14px] text-pewter-blue">info.cwgcameroon@cwg-plc.com</a>
    </div>
    <div class="more-region-details text-[15px] pt-5 pb-20 px-3">
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Pin />
            </div>
            <div class="text-deep-blue dark:text-white">
                3rd floor –Door 9, Ecobank Building Bonamoussadi <br>
                P.O. Box: 1316 Douala – Cameroon
            </div>
        </div>
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Connection />
            </div>
            <div>+237 71844761, 233-696057449</div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="read-more-div text-[18px] flex justify-between" on:click={() => openModal()}>
            <span>Read more</span>
            <ArrowRightLong strokeClassName="stroke-blue" />
        </div>
    </div>
</div>

<div class="region-block relative bg-whitish-blue dark:bg-black">
    <div class="region-block-img h-[185px] w-full relative">
        <img src="/images/region-uganda.jpg" alt="Uganda" class="bg-img">
    </div>
    <div class="bg-midnight-blue text-white px-[30px] py-[15px]">
        <div class="region-name text-[18px]">CWG Uganda</div>
        <a href="mailto:info.uganda@cwg-plc.com" class="region-email text-[14px] text-pewter-blue">info.uganda@cwg-plc.com</a>
    </div>
    <div class="more-region-details text-[15px] pt-5 pb-20 px-3">
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Pin />
            </div>
            <div class="text-deep-blue dark:text-white">
                Plot 5, Clement Hill Road, Nakasero, Kampala Uganda. 
                P.O BOX 72098
            </div>
        </div>
        <div class="flex gap-[5px] pb-5">
            <div class="mrd-icon-wrapper">
                <Connection />
            </div>
            <div>256393202011, +256774245169</div>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="read-more-div text-[18px] flex justify-between" on:click={() => openModal()}>
            <span>Read more</span>
            <ArrowRightLong strokeClassName="stroke-blue" />
        </div>
    </div>
</div>


<!--=== Region-Modal ====-->
{#if showModal}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="modal" on:click={closeModal}>
        <div class="modal-content relative overflow-auto max-h-[80%] w-[90%] sm:w-[80%] max-w-[920px] p-5 pt-20 lg:p-10 lg:pr-15 bg-whitish-blue dark:bg-black">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <img src="/images/close.svg" alt="close" class="close" on:click={closeModal}>

            <div class="modal-region-contents grid lg:grid-cols-2 gap-[30px]">
                <div class="modal-region-img-side lg:flex lg:flex-col">
                    <div class="region-block-img h-[185px] w-full relative flex-1">
                        <img src="/images/zuma-rock.jpg" alt="zuma-rock" class="bg-img">
                    </div>
                    <div class="bg-midnight-blue text-white px-[30px] py-[15px]">
                        <div class="region-name text-[18px]">CWG Nigeria</div>
                        <a href="mailto:info@cwg-plc.com" class="region-email text-[14px] text-pewter-blue">info@cwg-plc.com</a>
                    </div>
                </div>
                <div class="modal-region-txt-side text-[15px]">
                    <p class="pb-2">
                        The company commenced operations in Nigeria on September 26th, 1992, as Computer Warehouse
                        Limited principally catering to Computer hardware projects.
                    </p>
                    <p class="py-2">
                        As we progressed, the company consistently developed and distributed technology solutions
                        that predominantly addressed the needs of businesses; thus enabling the growth of Conglomerates
                        and SMEs. Our commitment has positioned us as formidable and an advocate for powering several
                        businesses – providing technology solutions that ensures organizational efficiency and
                        effectiveness.
                    </p>
                    <p class="py-2">
                        Through our understanding that effective technology solutions are the engines that drive
                        business growth, we help organizations improve customer service, secure assets/information
                        and achieve global presence. We offer a depth of business perspective and a wealth of
                        experience that helps businesses in diverse sectors and industries achieve their business
                        goals with ease, while we focus on their technology needs.
                    </p>
                </div>
            </div>
        </div>
    </div>
{/if}


<style>
    .region-block {
        border-bottom: 10px solid var(--color-midnight-blue);
        position: relative;
    }
    .region-block::before {
        position: absolute;
        content: "";
        width: 35%;
        height: 10px;
        bottom: -10px;
        right: 0;
    }
    .region-block:nth-child(4n+1)::before {
        background-color: var(--color-light-green);
    }
    .region-block:nth-child(4n+2)::before {
        background-color: var(--color-vivid-burgundy);
    }
    .region-block:nth-child(4n+3)::before {
        background-color: var(--color-naples-yellow);
    }
    .region-block:nth-child(4n+4)::before {
        background-color: var(--color-burlywood);
    }

    .read-more-div {
        cursor: pointer;
    }

    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 999;
      padding: 10px;
    }
    .modal img.close {
        right: 20px;
        top: 20px;
        width: 55px;
    }
</style>