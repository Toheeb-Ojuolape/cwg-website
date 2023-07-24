<script>
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
                    Financial Service Institutions
                </h1>

				<p class="mb-9 header-title-desc">
					CWG empowers financial services with comprehensive solutions to optimise
                    operations, cut costs, and enhance customer experiences.
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Cutting-Edge Financial Technology Solutions
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG provides a range of offerings to the financial services industry, including
                    software solutions, managed services, infrastructure, and more. These offerings
                    are designed to help financial services companies streamline their operations, reduce
                    costs, and improve customer experiences. 
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					One key area where CWG supports the financial services industry is with its software
                    solutions. These include core banking systems, payment platforms, fraud management
                    tools, and more. These solutions are designed to help financial services companies
                    manage their operations more efficiently and effectively, while also ensuring compliance
                    with regulations and security standards.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/office-man.jpg" alt="office-man" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG empowers financial services with comprehensive solutions, optimizing
                    operations and driving technological advancement.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG also offers managed services to the financial services industry. This includes
                    managed IT services, managed security services, and more. These services help
                    financial services companies to reduce their IT infrastructure costs, while also
                    improving their security posture and reducing the risk of cyberattacks.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Another key area where CWG supports the financial services industry is with its infrastructure
                    offerings. This includes data centers, colocation services, and cloud services. These
                    offerings help financial services companies to store and manage their data securely, while
                    also enabling them to scale their infrastructure as needed.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    In addition to these offerings, CWG also provides training and consulting services to the
                    financial services industry. This includes training on new technologies and best
                    practices, as well as consulting on specific projects and initiatives.
                </p>
			</div>
		</section>

		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img src="/images/server-room.jpg" alt="server-room" />
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						The impact of CWG's offerings to the financial services industry can be significant. By
                        implementing CWG's software solutions, financial services companies can streamline their
                        operations and reduce costs, while also improving the customer experience. Managed
                        services can help companies to reduce the risk of cyberattacks and data breaches, while
                        also ensuring compliance with regulations and security standards. Infrastructure offerings
                        can help companies to store and manage their data securely, while also enabling them to
                        scale their operations as needed. 
					</p>
					<p class="text-body-m max-w-[515px] w-full my-2">
						Finally, training and consulting services can help companies to stay up-to-date on the
                        latest technologies and best practices, ensuring that they are able to compete effectively
                        in an ever-changing market.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/financial-service-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
