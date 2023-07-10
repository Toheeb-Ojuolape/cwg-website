<script>
    import "../services-styles.css"
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
	import PtsBenefits from "./PtsBenefits.svelte";
	import PortfolioCards from "./PortfolioCards.svelte";
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    Payment Terminal Solution
                </h1>

                <p class="mb-9 header-title-desc">
                    CWG's Payment Terminal Solution: Seamless, secure, and data-driven payment
                    processing for businesses
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Secure, convenient, and customer-centric electronic payment processing for businesses
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG understands the importance of seamless and secure payment processing for businesse
                    across various industries. To cater to this critical need, CWG offers a comprehensive
                    Payment Terminal Solution that enables businesses to accept electronic payments
                    conveniently and securely. With advanced technology, robust security features, and a
                    user-friendly interface, CWG's Payment Terminal Solution provides businesses with a
                    reliable and efficient means to process transactions and enhance the overall customer
                    experience.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/sales-man.jpg" alt="sales-man" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container p-10">
            <div class="quote-box quote-box-2 m-auto p-3 pl-[30px] mb-[50px]">
                CWG's hardware services provide a diverse portfolio of reliable and high-performance solutions
                tailored to meet businesses' specific needs
            </div>
            <div class="pts-portfolio-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[40px] mb-12">
                <PortfolioCards />
            </div>
        </section>

        <hr class="gray-line" />

        <section class="mt-10 mb-20 section-container mx-auto overflow-hidden">
            <div class="text-center mb-13 m-auto max-w-[950px] section-header">
                <h2 class="text-headline-2 mb-2">Benefits of CWG's Payment Terminal Solution</h2>
            </div>
        
            <div id="benefiting-cards-wrapper" class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[60px] industries-wrapper">
                <PtsBenefits />
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/payment-terminal-solution-banner.jpg');
		background-size: inherit;
        background-position: center 20%;
	}
</style>