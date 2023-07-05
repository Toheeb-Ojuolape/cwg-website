<script lang="ts">
    import '../services-styles.css';
	import CoursesBlocks from './CoursesBlocks.svelte';
	import TestimonySlider from './TestimonySlider.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white mx-auto px-4 lg:px-8 flex flex-col justify-center gap-[10px]"
	>
		<div class="box-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">our product</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">Training</h1>

				<p class="mb-9 header-title-desc">
					CWG Academy offers transformative courses to develop world-class IT professionals
                    and entrepreneurs.
				</p>

                <a href="#!" class="flex items-center gap-2 header-link">
                    <span>Start Learning</span>
                    <img src="/images/small-arrow-right.svg" alt="small-arrow-right">
                </a>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Everyday we create opportunities for professional development.
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The CWG academy was built on the understanding that education and training lies
                    at the heart of development efforts, and without human capacity development, most
                    development interventions will be ineffective. Our programs are designed to transform
                    graduates into world class IT professionals, or entrepreneurs. Preparing them to be
                    part of the innovation world, and teaching them structure, and ethics.
				</p>
			</div>
			<div class="section-img-side pt-2 text-center">
				<img src="/images/cwg-txt.png" alt="cgw-txt" class="section-img cwg-txt-img m-auto" />
			</div>
		</section>

        <section class="py-10">
            <div class="col s12 pad0 sect-contents marquee-content">
                <div class="marquee-item">
                    <img src="/images/big-scrolling-banner.png" alt="full-img-gallery" class="w-full">
                </div>
                <div class="marquee-item">
                    <img src="/images/big-scrolling-banner.png" alt="full-img-gallery" class="w-full">
                </div>
            </div>
        </section>

        <section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Belong at <br> CWG Academy
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					At CWG, we recognize that fostering diversity within our teams is essential to driving
                    innovation and ensuring inclusivity across our global community. We are committed to
                    welcoming employees who come from diverse backgrounds, possess different perspectives
                    and ideas, and identify with various cultures and identities. 
				</p>
                <p class="text-body-s font-light lg:text-body-l my-2">
                    We understand that each individual is unique, just like every listing we offer, and we
                    strive to create a workplace culture that fosters a sense of belonging and empowers
                    everyone to succeed.
                </p>
			</div>
			<div class="section-img-side pt-2">
                <TestimonySlider />
			</div>
		</section>

        <section class="section-container pt-10 pb-20">
            <div class="text-center mb-13 m-auto max-w-[800px] section-header">
				<h2 class="text-headline-2 mb-2">Our Courses</h2>
				<p class="text-body-l font-normal">
					Here are some of the courses available at our academy
				</p>
			</div>

            <div class="courses-blocks-wrapper grid lg:grid-cols-4 sm:grid-cols-2">
                <CoursesBlocks />
            </div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/training-banner.jpg');
		background-size: cover;
		background-position: center 20%;
	}
</style>
