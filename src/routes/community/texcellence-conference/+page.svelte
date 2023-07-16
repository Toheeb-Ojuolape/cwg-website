<script>
	import Countup from '$lib/components/Countup.svelte';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import DiagonalArrow from '$lib/components/Svgs/DiagonalArrow.svelte';
    import '../../services/services-styles.css'
    import '../community-styles.css'
	import FeaturedArtistsBlocks from './FeaturedArtistsBlocks.svelte';
	import SpeakerBlocks from './SpeakerBlocks.svelte';
	import TopicsBlocks from './TopicsBlocks.svelte';
</script>


<main>
    <header
		class="header text-white lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container relative">
			<div class="header-content-wrapper gap-5 items-center">
                <div class="header-text-wrapper">
                    <div class="header-top-title uppercase">
                        The Texcellence Conference 2023
                    </div>
                    <h1 class="text-headline-2 header-title lg:text-headline-1">
                        Innovating for the Future
                    </h1>
    
                    <p class="mb-9 header-title-desc">
                        Unleash innovation, embrace the future, and propel your <br class="hidden-xs"> business to new heights
                    </p>
                </div>

                <div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
                    <img src="/images/texcellence-banner-img.png" alt="texcellence-banner-img" class="header-img">
                </div>
            </div>
		</div>
	</header>

    <div class="marquee-text-wrapper overflow-hidden bg-midnight-blue text-white my-2 py-4">
        <div class="marquee-text flex gap-5 bg-red">
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
            <span>TEXcellence Conference 2023</span>
            <span>\\</span>
        </div>
    </div>

    <div id="section-wrapper" class="py-5">
        <section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h5 class="text-[20px] lg:text-[24px]">
					The TEXcellence Conference 2023, brought to you by CWG, is a platform for technology
                    experts, business leaders, and innovators to share insights on the latest
                    trends, developments, and solutions in the industry.
				</h5>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The TEXcellence Conference 2023 will also feature an exhibition where attendees can
                    explore innovative products, services, and solutions from leading technology providers.
                    This will be a great opportunity for businesses to connect and collaborate with like-minded
                    individuals, while also learning from the experts in the field.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					With the global pandemic and the increasing demand for digital solutions, the TEXcellence
                    Conference 2023 will address the challenges and opportunities that lie ahead in the technology
                    industry. Attendees can expect to learn from the best in the industry and take away valuable
                    insights that will enable them to drive innovation and achieve business excellence.
				</p>
			</div>
			<div class="section-img-side">
                <p class="text-body-s font-light lg:text-body-l my-2 mb-7">
					At this year's conference, participants will have the opportunity to attend engaging keynote
                    sessions, panel discussions, and technical workshops. The conference promises to offer a
                    wealth of knowledge and experience, covering topics such as cloud computing, cybersecurity,
                    digital transformation, and emerging technologies.
				</p>
				<img src="/images/texcellence-speaker.jpg" alt="texcellence-speaker" class="section-img" />
			</div>
		</section>

        <hr class="gray-line" />

        <!--=== Meet-Our-Speakers ===-->
        <section class="section-container">
            <div class="mb-10 mt-10 section-header">
				<h2 class="text-headline-2 mb-2">Meet our Speakers</h2>
			</div>

            <div class="speakers-block-wrapper grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[20px]">
                <SpeakerBlocks />
            </div>
        </section>
        <!--=== end of Meet-Our-Speakers ===-->

        <!--=== Event-Stats ===-->
        <section class="event-stats-section">
            <div class="max-w-[1179px] m-auto pt-20 pb-12 text-lg ess-txt-side">
                <p class="py-2">
                    Whether you're an entrepreneur, technology enthusiast, or a business executive, this
                    conference promises to offer an engaging and informative experience that will help you
                    stay ahead in the fast-evolving technology industry.
                </p>
                <p class="py-2">
                    Join us at the TEXcellence Conference 2023 and discover how you can leverage technology
                    to drive business growth and success.
                </p>
            </div>
            
            <section class="t-speaker text-white bg-midnight-blue">
                <div class="t-speaker-img-wrapper relative">
                    <img src="/images/texcellence-speaker-2.jpg" alt="texcellence-speaker" class="t-speaker-img">
                </div>

                <div class="w-full lg:w-[537px] grid grid-cols-2 gap-y-10 py-10 text-center">
                    <div class="p-5">
                        <p class="text-headline-3 lg:text-headline-1"><Countup value={2} /></p>
                        <p class="text-body-s font-light lg:text-body-l">Major activities </p>
                    </div>
                    <div class="p-5">
                        <p class="text-headline-3 lg:text-headline-1"><Countup value={28} suffix="+" /></p>
                        <p class="text-body-s font-light text-body-l">Speakers</p>
                    </div>
                    <div class="p-5">
                        <p class="text-headline-3 lg:text-headline-1"><Countup value={6} /></p>
                        <p class="text-body-s font-light text-body-l">Amazing topics</p>
                    </div>
                    <div class="p-5">
                        <p class="text-headline-3 lg:text-headline-1"><Countup value={26} suffix="+" /></p>
                        <p class="text-body-s font-light text-body-l">Countries</p>
                    </div>
                </div>
            </section>
        </section>
        <!--=== end of Event-Stats ===-->

        <!--=== Conference-Topics ===-->
        <section class="section-container py-20">
            <div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">Conference topics</h2>
				<p class="text-body-l font-normal">
			        This theme for this year’s conference is <b>‘Innovating for the Future’</b> and will focus on
				</p>
			</div>

            <div class="topics-wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                <TopicsBlocks />
            </div>
        </section>
        <!--=== end of Conference-Topics ===-->

        <!--=== Transformation-Pitch-Section ===-->
        <section class="transformation-pitch-section mt-5 pt-10 mb-20 lg:my-0 lg:pt-0">
            <div class="grid">
                <div class="section-title-side section-container">
                    <h2 class="text-headline-4 lg:text-headline-2">
                        The Pitch for Transformation
                    </h2>
                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>
                </div>
                <div class="section-text-side bg-whitish-blue dark:bg-dark-highlight p-4">
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        The Pitch for transformation challenge seeks to encourage new ideas in tech that can
                        transform and disrupt the new way of doing business. We aim to unite problem solvers
                        and developers in Africa, to design sustainable solutions and technology projects that
                        make a difference.
                    </p>
                    <h5 class="text-[20px] lg:text-[24px]">
                        It aspires to promote creative views and advanced technology solutions that can address
                        concerns of redundancies in business processes.  Participants stand a chance of winning
                        $10, 000.
                    </h5>
                </div>
                <div class="section-img-side relative">
                    <img src="/images/lady-pitiching.jpg" alt="lady-pitiching" class="bg-img">
                </div>
            </div>
        </section>
        <!--=== end of Transformation-Pitch-Section ===-->

        <!--=== The-Texcellence-Festival ===-->
        <section class="section-container">
            <div class="text-center sm:mb-13 sm:mt-10 mb-7 m-auto max-w-[1030px] section-header">
                <img src="/images/confetti.svg" alt="confetti" class="m-auto">
				<h2 class="text-headline-2 mb-2">The Texcellence Festival</h2>
				<p class="text-body-l font-normal">
			        A one-of-a-kind gathering to celebrate the growing tech community in Africa. We are
                    presenting an opportunity to unwind and network with a wealth of like-minded tech experts
				</p>
			</div>
        </section>
        <!--=== end of The-Texcellence-Festival ===-->

        <!--=== Featured-Artist ===-->
        <section class="section-container mb-20">
            <div class="text-center sm:mb-13 sm:mt-10 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">Featured artists</h2>
			</div>

            <div class="featured-artist-wrapper grid sm:grid-cols-2">
                <FeaturedArtistsBlocks />
            </div>
        </section>
        <!--=== end of Featured-Artist ===-->

        <hr class="gray-line" />

        <!--=== Explore-Past-Conference ===-->
        <section class="section-container py-10">
            <div class="sm:mb-13 sm:mt-10 mb-7 max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">Explore past conference</h2>
                <p class="text-body-l font-normal">
			        To get a sense of the talks, launches, and conversations from last year's Texcellence
                    Conference, check out the <a href="#!">2022 recap</a>. We also have a
                    <a href="#!">full library</a> of past talks for you to watch.
				</p>
			</div>
            <div class="col s12 pad0 sect-contents marquee-content dbs">
                <div class="marquee-item">
                    <img src="/images/texcellence-scrolling-banner.png" alt="full-img-gallery" class="w-full">
                </div>
                <div class="marquee-item">
                    <img src="/images/texcellence-scrolling-banner.png" alt="full-img-gallery" class="w-full">
                </div>
            </div>
        </section>
        <!--=== end of Explore-Past-Conference ===-->

        <!--=== More-Links ===-->
        <section class="more-links-wrapper section-container py-20 flex flex-wrap gap-y-5 justify-between">
            <a href="#!" class="flex items-center gap-2">
                <span>Register to Attend</span>
                <DiagonalArrow strokeClassName="stroke-blue" />
            </a>
            <a href="#!" class="flex items-center gap-2">
                <span>Become a Sponsor</span>
                <DiagonalArrow strokeClassName="stroke-blue" />
            </a>
            <a href="#!" class="flex items-center gap-2">
                <span>Pitch for transformation</span>
                <DiagonalArrow strokeClassName="stroke-blue" />
            </a>
        </section>
        <!--=== end of More-Links ===-->
    </div>
</main>

<style>
    .header-top-title {
        font-size: 24px;
    }

    header.header {
        background-color: var(--color-midnight-blue);
	}   
    img.header-img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        object-position: left;
    }

    .header-text-wrapper {
        max-width: none;
    }

    .section-header a {
        text-decoration: underline;
    }
    .dbs.marquee-content {
        animation: scrolling-3 25s linear infinite;
    }
    .dbs .marquee-item {
        flex: 0 0 200vw;
    }   
    @keyframes scrolling-3 {
        0% { transform: translateX(0); }
        100% { transform: translatex(-200vw); }
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