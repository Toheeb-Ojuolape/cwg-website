<script lang="ts">
    import '../services-styles.css';
	import NewModelCard from './NewModelCard.svelte';
	import SupportServicesCard from './SupportServicesCard.svelte';
	// import CoursesBlocks from './CoursesBlocks.svelte';
	// import TestimonySlider from './TestimonySlider.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
                    Support Hub
                </h1>

				<p class="mb-9 header-title-desc">
					CWG's Support Hub in Nigeria offers flexible IT staffing options and helps organizations
                    embrace agile systems for business success.
				</p>

                <a href="#!" class="flex items-center gap-2 header-link">
                    <span>Start Learning</span>
                    <img src="/images/small-arrow-right.svg" alt="small-arrow-right">
                </a>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG's Support Hub: <br> Agile IT Solutions.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Our support hub in Nigeria boasts of over three-hundred (300) skilled technical staff.
                    We extend our services to cover the sub-Saharan Africa region leveraging our network
                    of partners.
				</p>
			</div>
			<div class="section-img-side pt-2 text-center">
				<img src="/images/cwg-txt-2.png" alt="cgw-txt" class="section-img cwg-txt-img m-auto" />
			</div>
		</section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box-2 pl-10">
			<div class="section-text-side">
				<div class="lg:pr-10">
                    <h2 class="text-headline-4 lg:text-headline-2">
                        Strategy, Cost and Talent
                    </h2>
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        To successfully win the turns introduced by the global pandemic, every organization is
                        presently reviewing the three cores of its business operations namely: Strategy, Cost, and
                        Talent. Business executives are looking at these three pillars and implementing strategies
                        to realign business objectives. CWG Plc believes that the experience and output from this
                        period is a key element for future business strategy.
                    </p>
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        Informed by current technology trends and customer priorities, the Support Hub is a revitalized
                        CWG offering relating to the provision of IT service resources on-premise and off-premise. CWG
                        Support Hub gives your organization dynamic Information Technology (IT) unit staffing options.
                        These options provided by the CWG Support Hub address the three cores of your business
                        operations.
                    </p>
                </div>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/woman-making-call.jpg" alt="woman-making-call" class="section-img m-auto" />
			</div>
		</section>

        <section class="section-container grid-content-box-2 pb-10 pr-10 pt-20 sm:pt-0">
            <div class="section-img-side">
				<img src="/images/fleet-buildings.jpg" alt="fleet-buildings" class="section-img m-auto" />
			</div>
			<div class="section-text-side">
				<div class="lg:pl-10">
                    <h2 class="text-headline-4 lg:text-headline-2">
                        Our objective
                    </h2>
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        To help organizations embrace change by moving away from large scale, inflexible project deployment
                        towards more agile systems that meet the demands of today’s fast-moving business environments.
                    </p>
                </div>
			</div>
		</section>
        
        <section class="section-container p-10">
			<div class="section-text-side lg:px-20">
				<h2 class="text-headline-4 lg:text-headline-2 mb-4">
					Changing the Game
				</h2>
				<p class="text-body-s font-light lg:text-body-l mt-2">
                    Many challenges are influencing the way organizations use technology. Cost optimization is as
                    important as efficiency, right-sizing, predictive budgets, and agile scalability. The COVID-19
                    global pandemic has also introduced the New Normal – massive re-adjustments in working
                    practices. Our objective is to help organizations embrace change by moving away from large
                    scale, inflexible project deployment towards more agile systems that meet the demands of
                    today’s fast-moving business environments. The CWG Support Hub will help an enterprise
                    leverage the expertise we have created conveniently and cost-effectively.
                </p>
                <p class="text-body-s font-light lg:text-body-l mt-4">
                    Our established Service Delivery Methodology and track record over the years is guaranteed to
                    give the service availability and peace of mind required to focus and grow the core
                    business. As an option, we have included in the delivery package our full outsourcing and
                    on-demand outsourcing model and also created a framework where we can easily interface with
                    your various application owners while providing comfort as a single responsibility partner to
                    ensure we deliver an ‘Always on’ IT environment.
                </p>
			</div>
		</section>

        <section class="py-10">
            <img src="/images/big-banner.jpg" alt="big-banner" class="w-full">
        </section>

        <section class="mt-8 sm:mt-10 mb-20 box-container mx-auto px-5 md:px-10 overflow-hidden">
            <div class="text-center mb-13 m-auto max-w-[1160px] section-header">
                <h2 class="text-headline-2 mb-2">Our Delivery Model</h2>
                <p class="text-body-l font-light">
                    The objective of our service model is to offer service flexibility that gives the customer
                    measurable business outcomes. Our delivery model offers any or a combination of remote
                    support services, on-site call resolution, and dedicated administration and support services. <br>
                    Starting from the degree to which the issue is known to the peculiarity of the client’s
                    environment, we ensure that our services give clients options that are tailored to them.
                </p>
            </div>
        
            <div class="new-model-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[1px] gap-y-[10px]">
                <NewModelCard />
            </div>
        </section>

        <section class="mt-10 mb-20 box-container mx-auto px-5 md:px-10 overflow-hidden">
            <div class="mb-13 section-header">
                <h2 class="text-headline-2 mb-2">Support Services</h2>
                <p class="text-body-l font-light">
                    The services that can be accessed from CWG Support Hub range from End User Support services
                    to Enterprise Server, Storage, Operating Systems, database, and backup services with
                    24/7/365 data center capability mapped to stringent service level agreements. Our pool of
                    consultants and experienced IT architects are also available to you as you formulate
                    your IT strategy and roadmap.
                </p>
            </div>
        
            <div class="support-services-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-[1px]">
                <SupportServicesCard />
            </div>
        </section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/support-hub-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
