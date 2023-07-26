<script>
	import JoiningCwgQuestions from "../JoiningCwgQuestions.svelte";
    import CareersTestimoniesSlider from "./CareersTestimoniesSlider.svelte";
	import JobCategories from "./JobCategories.svelte";
</script>

<main>
    <header class="section-container py-10">
        <div class="text-center max-w-[876px] m-auto">
            <h1 class="header-txt text-[40px] sm:text-[64px] sm:leading-[77px]">Explore jobs and careers at CWG</h1>
            <p class="sm:text-[18px] mt-[10px]">
                CWG specializes in a wide range of IT services, such as communications and integration, 
                infrastructure, managed and support, cloud services, and software. We're seeking change
                makers who share our commitment to making a positive impact while excelling in their work
            </p>
        </div>
    </header>

    <section class="bg-midnight-blue sm:p-10 my-5">
        <div class="section-container relative testimonies-slider-wrapper py-10">
            <CareersTestimoniesSlider />
        </div>
    </section>

    <section class="section-container job-categories-wrapper pt-12 pb-20">
        <div class="lg:w-[80%] m-auto">
            <JobCategories />
        </div>
    </section>

    <JoiningCwgQuestions />
</main>
