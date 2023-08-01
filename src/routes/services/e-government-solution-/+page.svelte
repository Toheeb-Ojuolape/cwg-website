<script>
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
    import "../services-styles.css"
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    E-Government Solution
                </h1>

                <p class="mb-9 header-title-desc">
                    Empowering governments with efficient digital services, transparency, and cost reduction
                    for improved citizen engagement.
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Streamlined digital services for efficient government operations and enhanced citizen experience.
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's E-Government solution is a comprehensive suite of software and services designed to enable
                    governments at all levels to provide citizens with efficient and effective digital services. The
                    solution includes a wide range of tools and applications that enable government agencies to
                    streamline their operations, increase efficiency, and reduce costs.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    The solution covers various areas, including tax collection, revenue management, land
                    management, e-procurement, and more. CWG's E-Government solution enables government agencies
                    to automate their processes, reduce paperwork, and improve service delivery to citizens. With
                    this solution, governments can provide citizens with easy and secure access to services from
                    anywhere and at any time.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/working-woman.jpg" alt="working-woman" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    CWG's Software Services: <br> Quality assurance, support, and expert consulting for
                    superior software performance.
                </h2>
            </div>
            <div class="section-txt-side">
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's E-Government solution has had a significant impact on the public sector. It has
                    helped governments to increase transparency, accountability, and citizen participation.
                    The solution has also helped governments to reduce corruption, streamline processes, and
                    reduce costs. The following are some of the key impacts of CWG's E-Government solution:
                </p>
                <ul class="text-body-s font-light lg:text-body-l my-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Improved Service Delivery: CWG's E-Government solution has enabled governments to
                            provide citizens with efficient and effective digital services. This has resulted in
                            improved service delivery, increased citizen satisfaction, and reduced waiting times.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Increased Transparency and Accountability: The solution has made it easier for citizens
                            to access government information and services, increasing transparency and accountability.
                            Citizens can now track government activities and expenditures, monitor projects, and
                            report corruption.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Reduced Costs: The solution has helped governments to reduce costs by automating
                            processes, reducing paperwork, and eliminating the need for manual interventions.
                            This has led to increased efficiency and productivity, and reduced administrative
                            costs.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Improved Revenue Collection: CWG's E-Government solution has helped governments to
                            improve revenue collection by automating tax collection processes and reducing leakages.
                            The solution has also made it easier for citizens to pay their taxes, resulting in
                            increased compliance.
                        </span>
                    </li>
                </ul>
            </div>
        </section>

        <section class="box-container mx-auto py-10">
            <div class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19">
                <div class="flex-1">
                    <img src="/images/man-and-woman-1.jpg" alt="man-and-woman-1">
                </div>
                <div class="flex-1 p-5 pb-8 sm:p-0">
                    <p class="text-body-m max-w-[515px] w-full my-2">
                        In summary, CWG's E-Government solution is a powerful tool for modernizing government
                        operations and improving citizen services. It has had a significant impact on the public
                        sector, increasing efficiency, transparency, and accountability, while reducing costs
                        and improving service delivery.
                    </p>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/e-government-banner.jpg');
		background-size: inherit;
        background-position: center 20%;
	}
</style>