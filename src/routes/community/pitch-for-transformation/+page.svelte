<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
    import ArrowRightSolidIcon from "$lib/components/Svgs/ArrowRightSolidIcon.svelte";
    import '../../services/services-styles.css'
    import '../community-styles.css'
	import ContactForm from './ContactForm.svelte';
	import EvaluationCriteria from './EvaluationCriteria.svelte';
	import PanelOfJudgesBlocks from './PanelOfJudgesBlocks.svelte';
	import VideoSide from './VideoSide.svelte';
</script>

<main>
    <header
		class="header h-[450px] sm:h-[300px] lg:h-[477px] text-white mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">CWG Community</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">The Pitch for Transformation Challenge</h1>

				<p class="mb-9 header-title-desc">
					Enabling Future Shapers, Supporting people and industries that will shape the Future of
                    Africa through Technology
				</p>

                <a href="#!" class="flex items-center gap-2 header-link">
                    <span>Register now</span>
                    <img src="/images/small-arrow-right.svg" alt="small-arrow-right">
                </a>
			</div>
		</div>
	</header>

    <div id="sections-wrapper" class="py-5">
        <!--=== Enable-Future-Shakers ===-->
        <section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Enabling Future Shapers
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG, a leading technology solutions company in Africa launches the Pitch for Transformation
                    challenge for current and aspiring tech startups. <br> The pitch for transformation challenge
                    seeks to encourage new ideas in tech that can transform and disrupt the new way of doing
                    business. We aim to unite problem solvers and developers in Africa, to design sustainable
                    solutions and technology projects that make a difference.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					The maiden edition aspires to promote creative views and advanced technology solutions that
                    can address concerns of redundancies in business processes. The buzz for application for the
                    Pitch for Transformation Challenge is on and participants stand a chance of winning  $10,000.
				</p>
                
                <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]">
                    <span>Register now</span>
                    <div class="arrow-right">
                        <ArrowRightLong strokeClassName="stroke-blue" />
                    </div>
                </a>
			</div>
			<div class="section-img-side pt-2">
				<VideoSide />
			</div>
		</section>
        <!--=== end of Enable-Future-Shakers ===-->

        <hr class="gray-line" />

        <!--=== Panel-of-Judges ===-->
        <section class="section-container py-10 pb-20">
            <div class="sm:mb-13 sm:mt-5 mb-7 max-w-[530px] section-header">
				<h2 class="text-headline-2 mb-2">Meet our Panels of Judges</h2>
				<p class="text-body-l font-normal">
			        Our judges were carefully selected to teach, listen and help you be a better entrepreneur
				</p>
			</div>
            <div class="judges-wrapper grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
                <PanelOfJudgesBlocks />
            </div>
        </section>
        <!--=== end of Panel-of-Judges ===-->

        <hr class="gray-line" />

        <!--=== Challenge-Rounds ===-->
        <section class="section-container grid lg:grid-cols-2 py-20">
            <div class="section-title-side section-container">
                <div class="max-w-[548px]">
                    <h2 class="text-headline-4 lg:text-headline-2">
                        Be a Champion of Transformation in Africa
                    </h2>
                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-10 lg:pb-5 max-w-[190px] mt-[15px] lg:mt-[30px]">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>
                </div>
            </div>

            <div class="section-text-side">
                <p class="text-body-s font-light lg:text-body-l mb-2">
                    Do you have what it takes to transform the Education, Finance, Agriculture, Hospitality
                    and Health Industries through Tech? Start building your solution for the 2023 Pitch for
                    Transformation Challenge for the chance to win over $10, 000 and receive support to see
                    your solution deployed.
                </p>
                <div class="round-blocks-wrapper grid sm:grid-cols-3 gap-[30px] mt-[30px]">
                    <div class="round-block bg-whitish-blue dark:bg-dark-highlight p-[20px]">
                        <div class="round-block-title">Round 1</div>
                        <div class="round-block-desc">Shortlist 20 SMEs</div>
                    </div>
                    <div class="round-block bg-whitish-blue dark:bg-dark-highlight p-[20px]">
                        <div class="round-block-title">Round 2</div>
                        <div class="round-block-desc">Shortlist 10 SMEs</div>
                    </div>
                    <div class="round-block bg-whitish-blue dark:bg-dark-highlight p-[20px]">
                        <div class="round-block-title">Round 3</div>
                        <div class="round-block-desc">Shortlist 5 SMEs</div>
                    </div>
                </div>
            </div>
        </section>
        <!--=== end of Challenge-Rounds ===-->

        <hr class="gray-line" />

        <!--=== Evaluation-Criteria ===-->
        <section class="section-container pt-10 pb-20">
            <div class="text-center sm:mb-13 sm:mt-5 mb-7 m-auto max-w-[530px] section-header">
				<h2 class="text-headline-2 mb-2">Evaluation Criteria</h2>
				<p class="text-body-l font-normal">
			        Evaluation Criteria is split into three parts, Judges will grade SMEs by this criteria
				</p>
			</div>

            <div class="evaluation-criteria-wrapper grid lg:grid-cols-4 sm:grid-cols-2 gap-[20px]">
                <EvaluationCriteria />
            </div>
        </section>
        <!--=== end of Evaluation-Criteria ===-->

        <hr class="gray-line" />

        <!--=== Application-Procedure ===-->
        <section class="grid sm:grid-cols-2 items-center sm:p-0 pt-10">
            <div class="section-title-side section-container">
                <div class="max-w-[548px]">
                    <h2 class="text-headline-4 lg:text-headline-2">
                        Application procedure
                    </h2>
                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px] mt-[50px]">
                        <span>Apply now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>
                </div>
            </div>

            <div class="section-text-side section-container bg-whitish-blue dark:bg-dark-highlight py-10">
                <ul class="py-2">
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            To apply, complete this form on or before (new date to be determine).
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            You can apply through a PowerPoint Presentation or a video pitch.
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            Your presentation or video should highlight how your idea plans to transform
                            Education, Finance, Agriculture, Hospitality and Health Industries through Tech.
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            Upload the link to your presentation or video on your application form.
                        </div>
                    </li>
                    <li class="flex gap-3 py-[5px]">
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <div>
                            Your entry must be followed by proof of registration.
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <!--=== end of Application-Procedure ===-->

        <hr class="gray-line" />

        <!--=== Eligibility-Section ===-->
        <section class="eligibility-section w-[90%] lg:w-[80%] max-w-[1440px] m-auto my-20">
            <div class="section-title-side">
                <h2 class="text-headline-4 lg:text-headline-2">
                    Eligibility
                </h2>
                <p class="text-lg sm:text-2xl pt-[10px]">
                    Current or aspiring tech start ups in Nigeria. <br>
                    Your idea has solid proof of concept, a social or commercial purpose, and a clear
                    roadmap to scale
                </p>
                <a href="/#!" class="flex gap-5 text-lg pt-8 pb-3 max-w-[354px] mt-[25px]">
                    <span>Read terms and condition</span>
                    <div class="arrow-right">
                        <ArrowRightLong strokeClassName="stroke-blue" />
                    </div>
                </a>
            </div>
        </section>
        <!--=== end of Eligibility-Section ===-->

        <!--=== Contact-Us-Section ===-->
        <section class="bg-whitish-blue dark:bg-dark-highlight pt-10 pb-20">
            <div class="section-container sm:w-[90%] lg:w-[80%] sm:px-0 max-w-[1440px] m-auto ">
                <div class="sm:mb-13 sm:mt-5 mb-7 section-header">
                    <h2 class="text-headline-2 mb-2">Contact us</h2>
                    <p class="text-body-l font-normal">
                        If you would like to contact us to understand more about this or wish to contact
                        us concerning any matter relating to it, send us a mail now
                    </p>
                </div>

                <ContactForm />
            </div>
        </section>
        <!--=== end of Contact-Us-Section ===-->
    </div>
</main>

<style>
	header.header {
		background-image: url('/images/the-pitch-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}

    .header-text-wrapper {
        max-width: 743px;
    }
    .header-title-desc {
        max-width: 572px;
    }
</style>