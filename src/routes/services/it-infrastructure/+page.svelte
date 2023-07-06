<script>
	import '../services-styles.css';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">IT Infrastructure</h1>

				<p class="mb-9 header-title-desc">
					CWG's Essential Infrastructure Solutions for Business Success
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					The essential foundation for seamless technology operations.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Infrastructure services encompass a range of offerings that provide businesses
                    with the essential building blocks needed for their technology systems to operate
                    smoothly and efficiently. This includes everything from hardware and networking to
                    security and data management.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Infrastructure services can be broken down into four main categories: Data
                    Center Infrastructure, Network Infrastructure, Security Infrastructure, and Storage
                    Infrastructure.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Data Center Infrastructure: CWG's Data Center Infrastructure services provide businesses
                    with secure, scalable, and reliable data centers to host their critical applications and
                    data. This includes facilities management, power and cooling, and disaster recovery services.
                </p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/it-cables.jpg" alt="it-cables" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG's Infrastructure services: <br> Connectivity, Security, and Data Management
                    for seamless operations.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					Network Infrastructure: CWG's Network Infrastructure services offer businesses the
                    connectivity and networking solutions needed to keep their systems running smoothly. This
                    includes network design, installation, and management services, as well as WAN and
                    LAN solutions.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Security Infrastructure: CWG's Security Infrastructure services provide businesses
                    with the peace of mind that their systems and data are secure from potential threats.
                    This includes firewall management, intrusion detection and prevention, and security
                    audits.
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Storage Infrastructure: CWG's Storage Infrastructure services offer businesses a range
                    of options for managing their data, from on-premises storage solutions to cloud-based
                    storage solutions. This includes data backup and recovery services, as well as storage
                    area network (SAN) and network-attached storage (NAS) solutions.
                </p>
			</div>
		</section>

		<section class="section-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img src="/images/it-engineer-man-2.jpg" alt="it-engineer-man-2" />
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0">
					<p class="text-body-m max-w-[515px] w-full my-2">
						The impact of CWG's Infrastructure services is significant, as businesses rely
                        heavily on technology to operate and compete in today's marketplace. By
                        providing reliable, secure, and efficient infrastructure solutions, CWG helps
                        businesses to reduce downtime, increase productivity, and minimize risk. CWG's
                        Infrastructure services also help businesses to scale their systems and
                        operations as needed, without having to invest in costly hardware and
                        infrastructure upgrades.
					</p>
					<p class="text-body-m max-w-[515px] w-full my-2">
						Overall, CWG's Infrastructure services enable businesses to focus on their
                        core competencies and goals, while leaving the complexities of technology
                        infrastructure management to the experts.
					</p>
				</div>
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/it-infrastructure-banner.jpg');
		background-size: cover;
		background-position: center 20%;
	}
</style>
