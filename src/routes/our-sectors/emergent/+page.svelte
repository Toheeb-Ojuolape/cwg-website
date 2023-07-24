<script>
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import '../../services/services-styles.css';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our Sector</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">
                    Emergent
                </h1>

				<p class="mb-9 header-title-desc">
					CWG empowers the emerging industry with innovative solutions and incubation services.
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Incubation services fuel startup growth and technological ecosystem expansion
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG offers a range of innovative solutions and services to the emerging industry, which
                    refers to startups and small to medium-sized enterprises (SMEs) that are disrupting
                    traditional business models and creating new markets.One of the key offerings for the
                    emerging industry is CWG's incubation services.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
                    Through its incubation program, CWG provides support to startups and entrepreneurs in
                    various ways, including mentorship, business development, funding, and access to its
                    network of partners and customers. This program is designed to help startups and SMEs
                    grow and scale their businesses, with the aim of contributing to the growth of the overall 
                    technology ecosystem.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/smiling-lady.jpg" alt="smiling-lady" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG fuels emerging industry growth with innovative solutions and incubation services, driving
                    entrepreneurship and technological advancement.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					In addition to incubation services, CWG offers various software services and solutions
                    tailored to the needs of the emerging industry. These include:
				</p>
                <ul class="text-body-s font-light lg:text-body-l my-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Custom Software Development: CWG develops custom software solutions for startups and
                            SMEs, using the latest technologies and best practices to create scalable, secure, and
                            user-friendly applications that meet their specific needs.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            Cloud Services: CWG's cloud services provide startups and SMEs with on-demand access
                            to computing resources, storage, and applications, without the need for upfront
                            investment in IT infrastructure.
                        </span>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <span>
                            E-Commerce Solutions: CWG provides e-commerce solutions that enable startups and
                            SMEs to set up and manage online stores, accept online payments, and manage
                            inventory and shipping.
                        </span>
                    </li>
                </ul>
			</div>
		</section>

		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img src="/images/working-team.jpg" alt="working-team" />
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						The impact of CWG's offerings to the emerging industry is significant. By providing
                        startups and SMEs with the support they need to grow and scale their businesses, CWG
                        is helping to create new jobs, drive innovation, and contribute to the development of
                        the overall technology ecosystem. In addition, CWG's software services and solutions
                        help startups and SMEs improve their operations, increase their efficiency, and better
                        serve their customers, which ultimately leads to increased revenue and profitability.
                         Overall, CWG's offerings to the emerging industry are helping to accelerate the growth
                        and development of the technology sector in Nigeria and beyond.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/emergent-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
