<script>
    import "../services-styles.css"
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
	import ImpactCards from "./ImpactCards.svelte";
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    Hardware Services
                </h1>

                <p class="mb-9 header-title-desc">
                    CWG's hardware services empower businesses with reliable, innovative technology solutions
                    for operational efficiency, growth, and cutting-edge advancements.
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    CWG offers reliable hardware services that drive operational efficiency and support
                    business growth
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's hardware services provide businesses with reliable, innovative, and scalable technology
                    solutions that drive operational efficiency, enhance productivity, and support growth. 
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    By leveraging CWG's extensive expertise, businesses can optimize their IT infrastructure, embrace
                    cutting-edge technologies, and achieve their strategic objectives with confidence. With a strong
                    commitment to customer satisfaction and a focus on delivering exceptional hardware
                    services, CWG is the ideal partner for businesses seeking reliable and impactful technology.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/circuit-board.jpg" alt="circuit-board" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    CWG's hardware services provide a diverse portfolio of reliable and
                    high-performance solutions tailored to meet businesses' specific needs
                </h2>
            </div>
            <div class="section-txt-side">
                <ul class="text-body-s font-light lg:text-body-l my-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            <div class="text-2xl font-normal">Wide Range of Hardware Solutions</div>
                            <span class="">
                                CWG's hardware services encompass a diverse portfolio of products tailored to meet
                                the specific needs of businesses. From servers and networking equipment to
                                storage systems, workstations, and peripherals, CWG offers a comprehensive range
                                of hardware solutions to support the infrastructure requirements of organizations
                                of all sizes and complexities.
                            </span>
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            <div class="text-2xl font-normal">Reliability and Performance</div>
                            <span class="">
                                CWG understands the critical role that reliable hardware plays in ensuring smooth
                                business operations. Therefore, the company partners with industry-leading hardware
                                manufacturers to offer high-quality products known for their reliability, 
                                durability, and performance. CWG's hardware solutions are meticulously tested
                                and configured to provide optimal performance, ensuring minimal downtime and maximum
                                productivity for businesses.
                            </span>
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            <div class="text-2xl font-normal">Innovative Technology Solutions</div>
                            <span class="">
                                CWG stays at the forefront of technology advancements to bring innovative hardware
                                solutions to its customers. The company continuously evaluates emerging technologies, 
                                trends, and industry best practices to provide businesses with the latest hardware solutions
                                that can drive their digital transformation journeys. Whether it's adopting cloud-ready
                                infrastructure, implementing advanced data storage solutions, or deploying state-of-the-art
                                networking equipment, CWG's hardware services enable businesses to embrace and leverage
                                the power of cutting-edge technologies.
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <hr class="gray-line" />

        <section class="mt-10 mb-20 box-container mx-auto lg:px-21 px-10 overflow-hidden">
            <div class="text-center mb-13 m-auto max-w-[950px] section-header">
                <h2 class="text-headline-2 mb-2">Impact of CWG's Hardware Services</h2>
            </div>
        
            <div id="benefiting-cards-wrapper" class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[60px] industries-wrapper">
                <ImpactCards />
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/hardware-services-banner.jpg');
		background-size: cover;
        background-position: center 20%;
	}
</style>