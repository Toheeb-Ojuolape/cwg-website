<script>
    import "../services-styles.css"
	import BanksLogos from "./BanksLogos.svelte";
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">ATM Management</h1>

				<p class="mb-9 header-title-desc">
					CWG's ATM Management service: Enhancing ATM performance, security, and customer experience.
				</p>
			</div>
		</div>
	</header>

    <div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Maximizing ATM uptime and performance for businesses.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's ATM Management service provides a comprehensive solution for financial institutions,
                    retail organizations, and other businesses that operate ATM machines. The service includes
                    ATM installation, maintenance, monitoring, and reporting to ensure maximum uptime and
                    optimal performance of the machines.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's ATM Management service offers a range of benefits to businesses that operate ATMs.
                    One of the key benefits is increased uptime and availability of the machines. By
                    performing regular maintenance and monitoring, CWG can detect and address issues
                    before they become major problems that cause the machine to be out of service. This
                    helps to minimize downtime and ensures that customers can access their funds when
                    they need them.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/woman-with-atm-card.jpg" alt="woman-with-atm-card" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG's ATM Management service enhances security, provides valuable insights, and
                    improves operational efficiency for businesses operating ATMs.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					Another benefit of CWG's ATM Management service is increased security. ATMs are
                    a common target for criminals, and security breaches can be costly for businesses.
                    CWG's service includes regular security audits and updates to ensure that the
                    machines are protected against the latest threats. This helps to reduce the
                    risk of fraud and other security breaches.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's ATM Management service also provides businesses with valuable insights into
                    ATM usage patterns and customer behavior. The service includes detailed reporting
                    that can be used to analyze ATM transactions, monitor performance, and identify
                    opportunities for improvement. This information can be used to optimize the placement
                    and configuration of ATMs to better serve customers and increase revenue.
				</p>
			</div>
		</section>

        <section class="box-container mx-auto py-10">
            <div class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19">
                <div class="flex-1">
                    <img src="/images/atm-card-lock.jpg" alt="atm-card-lock">
                </div>
                <div class="flex-1 p-5 pb-8 sm:p-0">
                    <p class="text-body-m max-w-[515px] w-full my-2">
                        Overall, CWG's ATM Management service helps businesses to operate ATMs more efficiently
                        and effectively, while also improving customer satisfaction and reducing the risk
                        of security breaches. By outsourcing ATM management to CWG, businesses can focus on
                        their core operations while leaving the technical details of ATM maintenance and
                        management to the experts.
                    </p>
                </div>
            </div>
        </section>

        <section class="section-container mx-auto py-20 pb-15">
            <div class="text-center mb-13 m-auto max-w-[818px] section-header">
                <h2 class="text-headline-2 mb-2">ATM Management Services in Numbers</h2>
            </div>
            <div class="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 pt-2 management-items-wrapper">
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/atm.svg" alt="atm" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1 pt-5 pb-3">1063</h5>
                    <p>Numbers of ATMs managed in West Africa</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/holding-card.svg" alt="holding-card" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">11.6M</h5>
                    <p>Supported Daily Transations</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/bank.svg" alt="bank" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">22</h5>
                    <p>No of Banks</p>
                </div>
                <div class="management-item sm:p-10 p-5">
                    <img src="/images/atm-managers.svg" alt="atm-managers" class="management-item-img">
                    <h5 class="text-headline-3 lg:text-headline-1  pt-5 pb-3">2000</h5>
                    <p>Number of ATMS Managers</p>
                </div>
            </div>
        </section>

        <section class="box-container mx-auto pt-10 pb-20">
            <!-- <div class="px-5">
                <img src="/images/banks.png" alt="banks" class="full-width">
            </div> -->
            <BanksLogos />
        </section>
	</div>
</main>

<style>
    header.header {
		background-image: url('/images/atm-management-banner.jpg');
		background-size: cover;
        background-position: center 20%;
	}
</style>