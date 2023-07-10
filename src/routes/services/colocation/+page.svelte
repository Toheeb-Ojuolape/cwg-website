<script>
    import "../services-styles.css"
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
	import BenefitingIndustriesCards from "./BenefitingIndustriesCards.svelte";
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    Data Center <br> Colocation Service
                </h1>

                <p class="mb-9 header-title-desc">
                    CWG's Colocation Services: Reliable, cost-effective data center
                    solutions for businesses in various industries.
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Providing secure and cost-effective data center solutions for businesses of all sizes.
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Colocation Services offer businesses a cost-effective solution to house their
                    IT infrastructure in a secure and reliable environment. Colocation, also known as "colo,"
                    allows businesses to lease space in a data center where they can install their
                    servers, storage devices, and networking equipment. By doing so, they can take advantage
                    of the data center's robust infrastructure and connectivity, without the need to invest
                    in building and maintaining their own data center.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Colocation Services are designed to meet the needs of businesses of all sizes and
                    types, including startups, small and medium-sized enterprises, and large corporations.
                    The company offers colocation services in its own data centers, which are equipped with
                    state-of-the-art facilities such as power backup, cooling systems, security systems, and
                    high-speed internet connectivity.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/it-engineer-man.jpg" alt="it-engineer-man" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    CWG's Colocation Services provide businesses with significant benefits, including
                    reduced costs, improved reliability, enhanced security, and scalable IT infrastructure.
                </h2>
            </div>
            <div class="section-txt-side">
                <p class="text-body-s font-light lg:text-body-l my-2">
                    The impact of CWG's Colocation Services can be significant for businesses. By leveraging
                    the company's colocation services, businesses can enjoy the following benefits:
                </p>
                <ul class="text-body-s font-light lg:text-body-l my-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Reduced Cost: One of the most significant benefits of colocation is the cost
                            savings. Building and maintaining a data center can be expensive, especially
                            for small and medium-sized businesses. With CWG's colocation services, businesses
                            can avoid these costs and benefit from the economies of scale that come with
                            sharing a data center.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Improved Reliability: CWG's data centers are equipped with backup power and cooling
                            systems, as well as redundant network connections, which ensure high levels of
                            uptime and availability for businesses. This is critical for businesses that require
                            24/7 access to their IT infrastructure.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Enhanced Security: Data centers are designed to provide high levels of physical and
                            network security to protect businesses' IT infrastructure. CWG's data centers are
                            equipped with advanced security systems, including surveillance cameras, access
                            controls, and intrusion detection systems, which ensure the highest level of
                            security for businesses.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Scalability: Colocation services offer businesses the flexibility to scale their IT
                            infrastructure as needed without the need for additional capital investment. With
                            CWG's colocation services, businesses can quickly and easily add or remove IT
                            equipment as needed, without having to worry about capacity constraints.
                        </span>
                    </li>
                </ul>
            </div>
        </section>

        <hr class="gray-line" />

        <section class="mt-10 mb-20 section-container mx-auto">
            <div class="text-center mb-13 m-auto max-w-[818px] section-header">
                <h2 class="text-headline-2 mb-2">Industries benefiting from CWG's Colocation Services</h2>
                <p class="text-body-l font-normal">
                    CWG's Colocation Services can be utilized by various industries that require secure and
                    reliable data center facilities to host their mission-critical IT infrastructure. Some
                    of the industries that use CWG's Colocation Services include
                </p>
            </div>
        
            <div id="benefiting-cards-wrapper" class="grid lg:grid-cols-4 sm:grid-cols-2 gap-x-[20px] gap-y-[60px] industries-wrapper">
                <BenefitingIndustriesCards />
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/colocation-banner.jpg');
		background-size: inherit;
        background-position: center 20%;
	}
</style>