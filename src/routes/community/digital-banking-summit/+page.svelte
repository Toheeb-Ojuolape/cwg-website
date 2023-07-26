<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
    import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import CwgLogo from '$lib/components/Svgs/CwgLogo.svelte';
    import '../../services/services-styles.css'
    import '../community-styles.css'
	import VideoSlider from './VideoSlider.svelte';
</script>

<main>
    <header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container relative">
			<div class="flex gap-5 items-center">
                <div class="header-text-wrapper">
                    <div class="header-top-title uppercase">CWG Community</div>
                    <h1 class="text-headline-2 header-title lg:text-headline-1">
                        Digital Banking Summit
                    </h1>
    
                    <p class="mb-9 header-title-desc">
                        Unlock the future of digital banking at the Digital Banking Summit with CWG's
                        revolutionary platform for seamless customer engagement.
                    </p>
    
                    <a href="#!" class="flex items-center gap-2 header-link">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-white" />
                        </div>
                        <!-- <img src="/images/small-arrow-right.svg" alt="small-arrow-right"> -->
                    </a>
                </div>

                <div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
                    <img src="/images/digital-bank.png" alt="digital-bank" class="header-img">
                </div>
            </div>
		</div>
	</header>

    <div id="section-wrapper" class="py-5">
        <section class="section-container grid-content-box pt-10 pb-15 sm:py-20 p-10">
			<div class="section-text-side">
				<h5 class="text-[20px] lg:text-[24px]">
					In today's fast-paced world, where technology has become an integral part of
                    our lives, the way we bank has also undergone a significant transformation. Digital
                    banking has emerged as a game-changer for the financial industry, providing customers
                    with a seamless and secure banking experience.
				</h5>
				<p class="text-body-s font-light lg:text-body-l my-2">
					At the Digital Banking Summit, we bring together industry experts, thought leaders, and
                    stakeholders to discuss the latest trends and advancements in digital banking. The summit
                    will showcase CWG's end-to-end digital banking platform, providing financial institutions
                    with the capability to transform the way they engage with their customers.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<VideoSlider />
			</div>
		</section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					1st Annual Digital Banking <br class="hidden-xs"> Submit 2022
				</h2>
                <div class="flex items-center logo-div-wrapper mt-10">
                    <div class="logo-div p-5">
                        <CwgLogo />
                    </div>
                    <div class="logo-div p-5">
                        <img src="/images/vericash.svg" alt="vericash" class="dark:hidden block">
                        <img src="/images/vericash-white.svg" alt="vericash" class="dark:block hidden">
                    </div>
                </div>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					The first summit took place on June 2, 2022, at the prestigious Oriental Hotel
                    and Radisson Blu in Lagos. We hosted large MFBs and Tier 2 banks who were upgrading
                    their banking license to become full-fledged commercial banks and were in the
                    process of shopping for a core banking platform with digital banking.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Our keynote speakers, including Dr. Ayo. Teriba, CEO of Economic Associates, Mr. Bayo
                    Olugbemi, Chairman of the Chartered Institute of Bankers of Nigeria, and Mr. Taiwo
                    Adesina Joda, MD and CEO of Accion MFB, shared their insights on the latest
                    trends, challenges, and opportunities in digital banking.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
					Additionally, CWG's experts, Magdi El-azhari, Adewale Adeyipo, Moradeke Akintola, Olatunji
                    Kehinde, and Ashraf Zaki, shared their expertise and knowledge on the end-to-end digital
                    banking platform. <br>
                    Our aim was to drive the uptake of CWG's digital banking platform for MFBs and Tier 2
                    banks, enabling them to stay competitive and meet the evolving needs of their customers.
				</p>
			</div>
		</section>

        <section class="dbs py-10">
            <div class="col s12 pad0 sect-contents marquee-content">
                <div class="marquee-item">
                    <img src="/images/digital-submit-scrolling-img.png" alt="full-img-gallery" class="w-full">
                </div>
                <div class="marquee-item">
                    <img src="/images/digital-submit-scrolling-img.png" alt="full-img-gallery" class="w-full">
                </div>
            </div>
        </section>

        <hr class="gray-line" />

        <section class="dbs section-container py-10">
            <div class="label-patterned">
                <div class="lp-white-side relative">
                    <h2 class="text-headline-4 lg:text-headline-2 mb-5">
                        Don't miss this opportunity to learn and network with industry leaders and
                        peers. Register today to secure your spot at the Digital Banking Summit!
                    </h2>

                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>

                    <div class="cut-out-1"></div>
                    <div class="cut-out-2"></div>
                </div>
                <div class="lp-blue-side relative">
                    <div class="contact-items-wrapper text-white">
                        <div class="contact-item">
                            <img src="/images/share.svg" alt="share" class="contact-item-img">
                            <div class="contact-item-title">Share</div>
                            <div class="contact-item-desc text-body-s font-light">Copy link and share with friends</div>
                        </div>
                        <div class="contact-item">
                            <img src="/images/call.svg" alt="call" class="contact-item-img">
                            <div class="contact-item-title">Call for enquiries</div>
                            <div class="contact-item-desc text-body-s font-light">+234 810 0000 000 </div>
                        </div>
                        <div class="contact-item">
                            <img src="/images/flag.svg" alt="flag" class="contact-item-img">
                            <div class="contact-item-title">N/A </div>
                            <div class="contact-item-desc text-body-s font-light">
                                Yet to be confirmed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
        background-color: var(--color-midnight-blue);
	}
    img.header-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: left;
    }

    @media(max-width: 640px) {
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