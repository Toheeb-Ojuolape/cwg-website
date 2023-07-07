<script>
    import "../services-styles.css"
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">our product</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">
                    Software Services
                </h1>

                <p class="mb-9 header-title-desc">
                    CWG's Software Services: Customized solutions for businesses' unique requirements.
                </p>
            </div>
        </div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
            <div class="section-text-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Unleashing Innovation through Tailored Software Solutions.
                </h2>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    CWG's Software Services is a comprehensive offering that provides innovative
                    software solutions to businesses and organizations in various industries. The
                    services include custom software development, software testing and quality
                    assurance, software maintenance and support, and software consulting.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Custom software development is the process of creating software tailored to meet
                    specific business needs. This service includes requirements gathering, software
                    design and development, testing, and deployment. CWG's software development team
                    comprises experienced professionals who have the skills and expertise to deliver
                    high-quality software solutions that meet the client's specific requirements.
                </p>
            </div>
            <div class="section-img-side pt-2">
                <img src="/images/tech-guys.jpg" alt="tech-guys" class="section-img">
            </div>
        </section>

        <hr class="gray-line" />

        <section class="section-container grid-content-box p-10">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    CWG's Software Services: <br> Quality assurance, support, and
                    expert consulting for superior software performance.
                </h2>
            </div>
            <div class="section-txt-side">
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Software testing and quality assurance ensure that software products meet the
                    requiredquality standards before deployment. CWG's software testing and quality
                    assurance team use modern tools and techniques to ensure that software products
                    meet functional, performance, and security requirements.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Software maintenance and support ensure that software products continue to function
                    optimally after deployment. CWG's software maintenance and support team provides
                    regular software updates, bug fixes, and technical support to ensure that clients'
                    software products remain up-to-date, secure, and reliable.
                </p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    Software consulting involves working with clients to identify their software
                    needs, develop software strategies, and provide recommendations for software
                    solutions that meet their business needs. CWG's software consulting team comprises
                    experienced professionals who have the expertise to provide valuable insights and
                    recommendations to clients to help them make informed decisions regarding their
                    software needs.
                </p>
            </div>
        </section>

        <section class="box-container mx-auto py-10">
            <div class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19">
                <div class="flex-1">
                    <img src="/images/working-staff.jpg" alt="working-staff">
                </div>
                <div class="flex-1 p-5 pb-8 sm:p-0">
                    <p class="text-body-m max-w-[515px] w-full my-2">
                        The impact of CWG's Software Services is significant in various industries. By providing
                        innovative and reliable software solutions, businesses can streamline their
                        operations, increase efficiency, and enhance customer satisfaction. Custom software
                        solutions provide businesses with a competitive edge by addressing specific business
                        needs, such as improving productivity, reducing costs, and improving customer service.
                    </p>
                    <p class="text-body-m max-w-[515px] w-full my-2">
                        Software testing and quality assurance ensure that software products are of high
                        quality, reducing the risk of software failures that can negatively impact business
                        operations. Software maintenance and support services ensure that software products
                        remain up-to-date and secure, reducing the risk of security breaches and ensuring
                        that software products continue to function optimally.
                    </p>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
		background-image: url('/images/software-services-banner.jpg');
		background-size: inherit;
        background-position: center 20%;
	}
</style>