<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import Announcement from '$lib/components/Svgs/jobs/Announcement.svelte';
	import BookHelp from '$lib/components/Svgs/jobs/BookHelp.svelte';
	import ChartArrowUp from '$lib/components/Svgs/jobs/ChartArrowUp.svelte';
	import ChartPie from '$lib/components/Svgs/jobs/ChartPie.svelte';
    import Chip from '$lib/components/Svgs/jobs/Chip.svelte';
	import Compass from '$lib/components/Svgs/jobs/Compass.svelte';
	import CuboidOnPlane from '$lib/components/Svgs/jobs/CuboidOnPlane.svelte';
	import FountainPen from '$lib/components/Svgs/jobs/FountainPen.svelte';
	import Headphones from '$lib/components/Svgs/jobs/Headphones.svelte';
	import Learning from '$lib/components/Svgs/jobs/Learning.svelte';
	import Ledger from '$lib/components/Svgs/jobs/Ledger.svelte';
	import NotesEdit from '$lib/components/Svgs/jobs/NotesEdit.svelte';
	import Shield from '$lib/components/Svgs/jobs/Shield.svelte';
	import Training from '$lib/components/Svgs/jobs/Training.svelte';
	import Users from '$lib/components/Svgs/jobs/Users.svelte';
    import '../services/services-styles.css'
    import './careers-style.css'
</script>

<main>
    <header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container relative">
			<div class="header-content-wrapper gap-5 items-center">
                <div class="header-text-wrapper text-midnight-blue dark:text-white">
                    <div class="header-top-title uppercase">
                        CAREERS WITH CWG
                    </div>
                    <h1 class="text-headline-2 header-title lg:text-headline-1">
                        Define your career with CWG
                    </h1>
    
                    <p class="mb-9 header-title-desc">
                        We value curiosity and support self-paced exploration for continuous learning. Join
                        us to discover endless possibilities.
                    </p>
                </div>

                <div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
                    <img src="/images/career-woman.jpg" alt="career-woman" class="header-img">
                </div>
            </div>
		</div>
	</header>

    <section class="explore-opportunities-section py-10">
        <div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[1048px] section-header">
            <h2 class="text-headline-2 mb-2">Explore Opportunities</h2>
            <p class="text-body-l font-normal">
                CWG powers an inclusive digital economy that benefits everyone, everywhere. We're a
                pan-African tech company in the IT space, seeking change makers committed to doing well
                by doing good. Join us in making a positive impact across the continent.
            </p>
        </div>
        <div class="opportunities-wrapper grid sm:grid-cols-2 lg:grid-cols-3">
            <a href="/#!" class="opportunities-block relative text-white bg-midnight-blue">
                <div class="flex relative justify-between items-center">
                    <span>CWG Academy</span>
                    <img src="/images/white-long-arrow.svg" alt="white-long-arrow" class="long-white-arrow">
                </div>
                <img src="/images/cwg-academy.jpg" alt="cwg-academy" class="opportunities-block-bg bg-img">
            </a>
            <a href="#!" class="opportunities-block relative text-white bg-midnight-blue">
                <div class="flex relative justify-between items-center">
                    <span>CWG’s Culture </span>
                    <img src="/images/white-long-arrow.svg" alt="white-long-arrow" class="long-white-arrow">
                </div>
                <img src="/images/cwg-culture.jpg" alt="cwg-culture" class="opportunities-block-bg bg-img">
            </a>
            <a href="#!" class="opportunities-block relative text-white bg-midnight-blue">
                <div class="flex relative justify-between items-center">
                    <span>Students/Internship </span>
                    <img src="/images/white-long-arrow.svg" alt="white-long-arrow" class="long-white-arrow">
                </div>
                <img src="/images/student-internship.jpg" alt="student-internship" class="opportunities-block-bg bg-img">
            </a>
        </div>
    </section>

    <section class="section-container py-10">
        <div class="jobs-categories-wrapper grid sm:grid-cols-2 lg:grid-cols-4">
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Chip />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Software Engineering</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <ChartPie />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Analytics</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <NotesEdit />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Project & Program Management</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Announcement />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Marketing & Comms.</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Ledger />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Sales</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <ChartArrowUp />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Finance </span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <BookHelp />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Legal & Compliance </span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Training />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Consulting </span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Headphones />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Customer Success </span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Shield />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Cyber & Corporate Security </span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <FountainPen />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Design</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Users />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Human Resources</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Compass />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">IT</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <Learning />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Product Management</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
            <a href="/careers/careers-category" class="job-category-block">
                <div class="job-icon-wrapper mb-[100px]">
                    <CuboidOnPlane />
                </div>
                <div class="flex items-center justify-between">
                    <span class="sm:truncate">Others</span>
                    <ArrowRightLong strokeClassName="stroke-blue" />
                </div>
            </a>
        </div>
    </section>

    <section class="section-container mx-auto py-10">
        <div
            class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
        >
            <div class="flex-1">
                <img src="/images/global-region.jpg" alt="global-region" />
            </div>
            <div class="flex-1 p-5 pb-8 pt-10 sm:p-0 sm:pt-5">
                <h2 class="text-headline-3 lg:text-[64px]">
					Our Regions
				</h2>
                <p class="sm:text-[20px] lg:text-[24px] max-w-[515px] w-full my-6">
                    Explore job and career opportunities at several of CWG's office locations worldwide.
                </p>
                <a href="/#!" class="flex gap-5 text-lg pt-5 pb-5 max-w-[190px]">
                    <span>Learn more</span>
                    <div class="arrow-right">
                        <ArrowRightLong strokeClassName="stroke-blue" />
                    </div>
                </a>
            </div>
        </div>
    </section>
</main>

<style>
    header.header {
        border-bottom: 1px solid #dddddd;
    }
    .header-top-title {
        font-size: 24px;
    }
    img.header-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: right;
    }
    .header-text-wrapper {
        max-width: none;
    }

    @media(min-width: 1024px) {
        .header-content-wrapper {
            display: grid;
            grid-template-columns: minmax(586px, 1fr) 1fr;
            /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
            gap: 30px;
        }
    }

    @media(max-width: 640px) {
        .header-text-wrapper {
            position: relative;
            z-index: 1;
        }
        .header-img-wrapper {
            position: absolute;
            opacity: 0.08;
            left: 0;
            top: 0;
        }
    }
</style> 