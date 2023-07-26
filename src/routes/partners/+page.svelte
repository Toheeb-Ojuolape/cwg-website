<script>
	import CwgLogo from '$lib/components/Svgs/CwgLogo.svelte';
	import '../services/services-styles.css';
    import '../community/community-styles.css';
    import './partners-styles.css'
	import OemPartnersLogos from './OemPartnersLogos.svelte';
	import EsteemedClientsLogo from './EsteemedClientsLogo.svelte';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">Our Partners</h1>

				<p class="mb-9 header-title-desc">
					Empowering Growth Through Expert Insights and Advisory
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
        <!--=== CWG-PWC Section ===-->
		<section id="cwg-pwc-section" class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					In order to effectively drive value services to our customers, CWG signed on to Gartner
                    consulting services in 2019 to equip us with insights delivered directly by experienced
                    advisors and informed by an unmatched combination of expert-led, practitioner sourced, and
                    data-driven research. 
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					To fulfill our Africa growth organization award by the World Economic Forum, CWG engaged
                    PWC not only as it’s internal auditor, but consultants on people and process
                    optimization, innovation advisory.
				</p>
			</div>
			<div class="flex items-center justify-center logo-div-wrapper">
                <div class="logo-div p-5 cwg-img-wrapper">
                    <CwgLogo />
                </div>
                <div class="logo-div p-5 pwc-img-wrapper">
                    <img src="/images/pwc.svg" alt="pwc" class="dark:hidden block">
                    <img src="/images/pwc-white.svg" alt="pwc" class="dark:block hidden">
                </div>
            </div>
		</section>
        <!--=== end of CWG-PWC Section ===-->

        <!--=== OEM-Partners Section ===-->
        <section class="section-container py-20">
            <div class="text-center mb-13 m-auto max-w-[800px] section-header">
				<h2 class="text-headline-2 mb-2">Meet our OEM Partners</h2>
				<p class="text-body-l font-normal">
					We're partners with countless major organisations around the globe
				</p>
			</div>

            <div class="oem-partners-wrapper relative pb-20">
                <OemPartnersLogos />
            </div>
        </section>
        <!--=== end of OEM-Partners Section ===-->

        <!--=== ATM-Support-Coverage Section ===-->
        <section class="section-container mx-auto pt-20 pb-15 bg-whitish-blue dark:bg-dark-highlight">
            <div class="text-center mb-13 m-auto max-w-[818px] section-header">
                <h2 class="text-headline-2 mb-2">CWG ATM Support Coverage</h2>
            </div>
            <div class="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 pt-2 management-items-wrapper">
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/atm.svg" alt="atm" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1 pt-5 pb-3">1063</h5>
                    <p>Numbers of ATMs managed in West Africa</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/holding-card.svg" alt="holding-card" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">11.6M</h5>
                    <p>Supported Daily Transations</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/bank.svg" alt="bank" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">22</h5>
                    <p>No. of Banks</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/atm-managers.svg" alt="atm-managers" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">2000</h5>
                    <p>Number of ATMs Managers</p>
                </div>
            </div>
        </section>
        <!--=== end of ATM-Support-Coverage Section ===-->

        <!--=== Esteemed-Clients Section ===-->
        <section class="esteemed-clients-section section-container grid-content-box-3 pt-20 pb-10">
            <div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Our Esteemed Clients
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					You are in good company
				</p>
			</div>
			<div class="section-img-side pt-2 pb-15 relative">
				<EsteemedClientsLogo />
			</div>
        </section>
        <!--=== end of Esteemed-Clients Section ===-->

        <!--=== More-About-Us Section ===-->
        <MoreAboutUs />
        <!--=== end of More-About-Us Section ===-->
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/partners-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
    #cwg-pwc-section {
        background-image: url(/images/pattern-bg.png);
    }
</style>
