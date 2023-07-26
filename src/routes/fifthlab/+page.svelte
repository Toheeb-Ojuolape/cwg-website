<script lang="ts">
    import '../services/services-styles.css';
    import './fifthlab-style.css'
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
    import FifthlabBar from '$lib/components/Svgs/FifthlabBar.svelte';

    import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';
	import Autoplay from 'embla-carousel-autoplay';
	import FifthlabProducts from './FifthlabProducts.svelte';

	let emblaApi: EmblaCarouselType;

	let scrollValue = 0;

	function onEmblaScroll() {
		scrollValue = emblaApi.scrollSnapList()[emblaApi.selectedScrollSnap()];
	}

	$: if (emblaApi) {
		emblaApi.on('select', () => {
			onEmblaScroll();
		});
	}
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">CWG Community</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">Fifthlab</h1>

				<p class="mb-9 header-title-desc">
					Ecosystem of Solutions that work; User-centric solutions that make life and business easy.
				</p>

                <a href="#!" class="flex items-center gap-2 header-link">
                    <span>Explore Fifthlab</span>
                    <img src="/images/small-arrow-right.svg" alt="small-arrow-right">
                </a>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Fifthlab was launched by CWG in 2022
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					Fifthlab is a technology consulting firm that specializes in providing businesses
                    with innovative solutions to complex challenges. With a team of experienced
                    professionals, Fifthlab offers a range of services that include digital strategy, user
                    experience design, software development, and data analytics.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					At Fifthlab, the focus is on delivering high-quality solutions that help businesses meet
                    their goals and stay ahead of the competition. The team works closely with clients to
                    understand their unique needs and challenges, and then develops customized solutions that
                    are tailored to their specific requirements.
				</p>
			</div>
			<div class="section-img-side pt-2">
                <div class="section-img bar-img-wrapper">
                    <FifthlabBar />
                </div>
			</div>
		</section>

		<section class="box-container mx-auto py-10">
			<div
				class="flex flex-col sm:flex-row bg-whitish-blue dark:bg-dark-highlight items-center sm:gap-19"
			>
				<div class="flex-1">
					<img src="/images/people-talking.jpg" alt="people-talking" />
				</div>
				<div class="flex-1 p-5 pb-8 sm:p-0 sm:py-5 md:py-0">
					<p class="text-body-s lg:text-body-m max-w-[515px] w-full my-2">
						With a proven track record of success, Fifthlab has helped numerous businesses across
                        various industries achieve their goals and drive growth. Whether it's developing a
                        new software application or improving an existing one, the team at Fifthlab has the
                        expertise and experience to deliver results.
					</p>
					<p class="text-body-s lg:text-body-m max-w-[515px] w-full my-2">
						At Fifthlab, the goal is not just to solve problems, but to help businesses unlock new
                        opportunities and achieve their full potential. With a commitment to excellence and a
                        focus on innovation, Fifthlab is the partner of choice for businesses looking to stay
                        ahead in today's fast-paced digital landscape.
					</p>

                    <a href="#!" class="flex items-center gap-2 header-link mt-5">
                        <span>Learn more</span>
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                    </a>
				</div>
			</div>
		</section>

        <hr class="gray-line" />

        <section class="max-w-[1005px] mx-auto pt-8 lg:pt-9">
            <div class="text-center sm:mb-13 mb-7 m-auto max-w-[690px] section-header">
				<h2 class="text-headline-2 mb-2">Products of Fifthlab</h2>
				<p class="text-body-l font-normal">
			        Fifthlab see simplified products and solutions as the foundation for growth and
                    progress in commerce and society.
				</p>
			</div>
        
            <div
                class="overflow-hidden"
                use:emblaCarouselSvelte={{
                    options: { containScroll: 'trimSnaps', align: 'start', dragFree: false },
                    plugins: [Autoplay({ delay: 10000 })]
                }}
                on:emblaInit={(ev) => (emblaApi = ev.detail)}
            >
                <div class="fifthlab-products-wrapper flex gap-8 lg:gap-11">
                    <FifthlabProducts />
                </div>
            </div>
        
            <div class="h-[1px] bg-black-600 dark:bg-black-900 mt-15">
                <div
                    style={`width: calc(100% * ${scrollValue})`}
                    class="bg-bright-blue h-full transition-[width] duration-300"
                />
            </div>
        </section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/fifthlab-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
