<script>
	import '../services-styles.css';
	import ServicedIndustriesCards from './ServicedIndustriesCards.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">Managed Services</h1>

				<p class="mb-9 header-title-desc">
					CWG's Managed Services: Streamlined IT management, enhanced security, and cost
					savings for organizations across industries.
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Outsourced IT management and support for improved efficiency and cost savings.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Managed Services refer to the outsourcing of the management and support of
					an organization's IT infrastructure and systems to a third-party provider. CWG
					offers a range of managed services to help organizations improve their
					operational efficiency, reduce costs, and focus on their core business
					activities.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The Managed Services offered by CWG include network and infrastructure
					management, data center management, security management, application management,
					and cloud management. CWG has a team of highly skilled and experienced
					professionals who work closely with clients to provide customized solutions that
					meet their unique business needs.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/happy-it-lady.jpg" alt="happy-it-lady" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG's Managed Services: <br /> Enabling organizations to focus on core activities,
					increase operational efficiency, enhance security, and achieve cost savings in IT
					management.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					One of the key benefits of CWG's Managed Services is that it allows
					organizations to focus on their core business activities, while leaving the
					management and support of their IT systems to experts. This can result in
					significant cost savings for organizations, as they no longer need to invest in
					expensive hardware, software, and personnel to manage their IT systems.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Another benefit of CWG's Managed Services is that it can help organizations to
					improve their operational efficiency. CWG's team of experts uses
					industry-leading tools and processes to manage and monitor clients' IT systems,
					ensuring that they are operating at peak efficiency and availability.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Managed Services also help organizations to reduce the risk of cyber
					threats and data breaches. CWG's team of security experts works closely with
					clients to identify and mitigate potential vulnerabilities in their IT systems,
					ensuring that they are protected against cyber threats.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The impact of CWG's Managed Services on organizations can be significant. By
					outsourcing the management and support of their IT systems to CWG, organizations
					can achieve greater operational efficiency, reduce costs, and improve the
					security and reliability of their IT systems. This can result in increased
					productivity, improved customer satisfaction, and a stronger bottom line.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Overall, CWG's Managed Services are a valuable solution for organizations
					looking to improve their IT infrastructure and systems while focusing on their
					core business activities. With a team of highly skilled professionals and
					industry-leading tools and processes, CWG is well positioned to provide
					customized managed services solutions that meet the unique needs of its clients.
				</p>
			</div>
		</section>

		<hr class="gray-line" />

		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-13 m-auto max-w-[818px] section-header">
				<h2 class="text-headline-2 mb-2">Industries we have offer manage services</h2>
				<p class="text-body-l font-normal">
					CWG's Managed Services are used by a variety of industries that rely heavily on
					technology to run their operations. Some of the key industries include:
				</p>
			</div>

			<div
				class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper"
			>
				<ServicedIndustriesCards />
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/managed-services-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
