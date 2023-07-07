<script>
	import '../services-styles.css';
	import ServicedIndustriesCards from './ServicedIndustriesCards.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">Airtime Vending</h1>

				<p class="mb-9 header-title-desc">
					Transforming mobile recharge with real-time convenience and financial inclusion.
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Real-time mobile recharge and convenience without physical cards or restrictions.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Airtime Vending Services is a cutting-edge technology that enables the distribution
                    of airtime and other value-added services to customers in real-time, using mobile
                    devices or point-of-sale terminals. With this service, customers can easily purchase
                    airtime, data, and other related products on-the-go, without the need for physical
                    recharge cards or vouchers.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The Airtime Vending Services is designed to provide a seamless experience for
                    customers, enabling them to purchase airtime and related products from any
                    location, at any time of the day. With this service, customers no longer have to
                    worry about running out of airtime or data, as they can easily top-up their accounts
                    using their mobile devices or any of the point-of-sale terminals located across
                    various locations.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/man-recharging-phone.jpg" alt="man-recharging-phone" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="section-container grid-content-box p-10">
			<div class="section-title-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					CWG's Airtime Vending Services: <br> Revolutionizing telecom and financial
                    inclusion with convenient access to airtime and mobile transactions.
				</h2>
			</div>
			<div class="section-txt-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Airtime Vending Services has had a significant impact on the telecommunications
                    industry, revolutionizing the way airtime and other value-added services are distributed
                    to customers. The service has made it easier for telecommunications companies to
                    reach customers in remote and underserved locations, as it enables them to set
                    up airtime vending points in these areas, without the need for expensive physical
                    infrastructure.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Furthermore, the Airtime Vending Services has also had a significant impact on financial
                    inclusion, as it enables customers to perform financial transactions using their mobile
                    devices, without the need for a bank account. With this service, customers can easily
                    top-up their mobile accounts, pay bills, and transfer funds to other users, all from the
                    convenience of their mobile devices.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					In conclusion, CWG's Airtime Vending Services is a game-changer in the telecommunications
                    industry, providing customers with a seamless and convenient way to purchase airtime and
                    related products, while also promoting financial inclusion and expanding access to
                    essential services.
				</p>
			</div>
		</section>

		<hr class="gray-line" />

		<section class="mt-10 mb-20 box-container mx-auto lg:px-21 px-10">
			<div class="text-center mb-13 m-auto max-w-[850px] section-header">
				<h2 class="text-headline-2 mb-2">Industries we have offer airtime vending services</h2>
				<p class="text-body-l font-normal">
					CWG's airtime vending services are used by various industries, including:
				</p>
			</div>

			<div
				class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper"
			>
				<ServicedIndustriesCards />
			</div>
		</section>

        <section class="section-container p-10 pb-20">
            <div class="quote-box max-w-[1180px] md:w-[85%] m-auto p-3 pl-[30px]">
                Overall, CWG's airtime vending services are used by a diverse range of industries and
                businesses that seek to provide their customers with an easy and convenient way to recharge
                their mobile phones.
            </div>
        </section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/airtime-vending-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
