<script>
    import "../services-styles.css"
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
	import BenefitingIndustriesCards from "./BenefitingIndustriesCards.svelte";
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    Cloud Services
                </h1>

                <p class="mb-9 header-title-desc">
                    Empower your business with CWG's Cloud Services: Seamless data management, optimal
                    scalability, and ironclad security.
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Power your business with CWG's Cloud Services: Flexible, Scalable, Secure.
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Cloud Services offer a suite of flexible and scalable cloud computing solutions
                    designed to meet the unique needs of businesses of all sizes. These services provide
                    a cost-effective and efficient way to store, manage, and access data and applications
                    on a secure, reliable, and high-performance cloud platform.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Cloud Services include Infrastructure as a Service (IaaS), Platform as a Service
                    (PaaS), and Software as a Service (SaaS) solutions, which can be customized to meet
                    specific business requirements. These services are delivered through a pay-as-you-go
                    model, enabling businesses to reduce capital expenditure and increase operational
                    efficiency.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Cloud Services are built on state-of-the-art infrastructure, including
                    servers, storage, and networking equipment, that is maintained and managed by a team of
                    experienced professionals. The infrastructure is designed to ensure high availability,
                     scalability, and security, with multiple layers of protection, including firewalls,
                     intrusion detection systems, and encryption.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/cloud-server.jpg" alt="cloud-server" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Cost savings, scalability, flexibility, security, reliability, and agility for businesses. <br>
                    Optimize performance now.
                </h2>
            </div>
            <div class="section-txt-side">
                <p class="text-body-s font-light lg:text-body-l my-2">
                    The impact of CWG's Cloud Services is significant. They offer businesses a range of
                    benefits, including:
                </p>
                <ul class="text-body-s font-light lg:text-body-l my-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Cost Savings: CWG's Cloud Services eliminate the need for businesses to invest in
                            expensive hardware and software. Instead, they pay only for what they use, enabling
                            them to reduce capital expenditures and improve cash flow.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Scalability: CWG's Cloud Services are highly scalable, allowing businesses to add or
                            remove resources as needed to accommodate fluctuations in demand.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Flexibility: CWG's Cloud Services are highly flexible, enabling businesses to customize
                            solutions to meet their unique requirements.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Security: CWG's Cloud Services are built on a secure infrastructure, ensuring the
                            confidentiality, integrity, and availability of data and applications.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Reliability: CWG's Cloud Services are designed to ensure high availability, with
                            multiple layers of protection against downtime and data loss.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Agility: CWG's Cloud Services enable businesses to respond quickly to changing market
                            conditions, with fast deployment and seamless integration with existing systems.
                        </span>
                    </li>
                </ul>
            </div>
        </section>

        <hr class="gray-line" />

        <section class="mt-10 mb-20 section-container mx-auto overflow-hidden">
            <div class="text-center mb-13 m-auto max-w-[950px] section-header">
                <h2 class="text-headline-2 mb-2">Industries Benefiting from CWG's Cloud Services</h2>
                <p class="text-body-l font-normal">
                    CWG's Cloud Services cater to a wide range of industries that require cloud-based solutions
                    for their operations. Some of the industries that use CWG's Cloud Services include:
                </p>
            </div>
        
            <div id="benefiting-cards-wrapper" class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[60px] industries-wrapper">
                <BenefitingIndustriesCards />
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/cloud-services-banner.jpg');
		background-size: inherit;
        background-position: center 20%;
	}
</style>