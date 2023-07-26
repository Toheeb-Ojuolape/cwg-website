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
                    Public Sector
                </h1>

				<p class="mb-9 header-title-desc">
					CWG empowers the public sector with digital solutions for enhanced service
                    delivery and citizen engagement.
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Transforming public sector through digital innovation
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG offers a range of solutions to the public sector, including federal, state, and
                    local government agencies. These solutions are designed to help government entities
                    better serve their constituents and achieve their goals.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					One of CWG's key offerings to the public sector is its e-Government solution. This
                    solution enables government agencies to improve the delivery of public services
                    through the use of digital technologies. It includes features such as online
                    portals, mobile applications, and automated systems for services such as payment
                    processing, permit applications, and citizen feedback.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/sitting-people.jpg" alt="sitting-people" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG revolutionizes public sector services with comprehensive solutions, driving
                    digital transformation and efficient governance.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's e-Government solution also includes tools for data analytics and reporting, enabling
                    government agencies to gain insights into their operations and better track their progress
                    towards key performance indicators. This can help agencies to identify areas where they can
                    improve service delivery and optimize resource allocation.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
					Another key offering from CWG to the public sector is its Managed Services. This includes
                    a range of IT services such as hardware and software support, network management, and data
                    center hosting. These services can help government agencies to reduce IT costs and improve
                    the reliability and security of their systems.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
					CWG also offers Infrastructure services to the public sector, including the design and
                    implementation of physical and virtual infrastructure solutions. This can include everything
                    from server and storage solutions to network design and implementation.
				</p>
			</div>
		</section>

		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img src="/images/staff-woman.jpg" alt="staff-woman" />
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						Finally, CWG's Training services can help government agencies to build the skills and
                        knowledge of their staff in areas such as IT and project management. This can help agencies
                        to improve their performance and deliver better outcomes for their constituents.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/public-sector-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
