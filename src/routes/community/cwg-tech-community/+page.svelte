<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
    import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
    import '../../services/services-styles.css'
    import '../community-styles.css'
	import VideoSlider from './VideoSlider.svelte';
</script>

<main>
    <header
		class="header text-midnight-blue lg:h-[477px] py-10 mx-auto flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container relative">
			<div class="flex gap-5 items-center">
                <div class="header-text-wrapper">
                    <div class="header-top-title uppercase">CWG Community</div>
                    <h1 class="text-headline-2 header-title lg:text-headline-1">
                        The CWG Tech Community
                    </h1>
    
                    <p class="mb-9 header-title-desc">
                        CWG Tech Cohort for Women bridges the gender gap, providing training, mentorship, and
                        internships for impactful digital careers
                    </p>
    
                    <a href="#!" class="flex items-center gap-2 header-link">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightSolidIcon className="fill-blue" />
                        </div>
                        <!-- <img src="/images/small-arrow-right.svg" alt="small-arrow-right"> -->
                    </a>
                </div>

                <div class="header-img-wrapper h-[300px] lg:h-[477px] w-full relative">
                    <img src="/images/tech-community-header-img.png" alt="tech-community-header-img" class="header-img">
                </div>
            </div>
		</div>
	</header>

    <div id="section-wrapper" class="py-5">
        <section class="section-container grid-content-box pt-10 pb-15 sm:py-20 p-10">
			<div class="section-text-side">
				<h5 class="text-[20px] lg:text-[24px]">
					The CWG Tech Community is a CSR initiative aimed at empowering women and fresh
                    graduates with the knowledge and skills necessary to thrive in the digital era. For
                    over thirty years, CWG has been a driving force in the African technology
                    ecosystem, and this initiative is a continuation of our commitment to excellence
                    and impact.
				</h5>
				<p class="text-body-s font-light lg:text-body-l my-2">
					CWG's Tech Cohort for Women is an initiative aimed at bridging the gender gap in the
                    technology industry by providing targeted support to women who are passionate about
                    digital technology but lack the necessary support and capacity to learn about it. The
                    program is designed to provide training, mentorship, and internships to female-led
                    organizations, empowering them with knowledge that can be traded for economic value.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<VideoSlider />
			</div>
		</section>

        <hr class="gray-line" />

        <section class="section-container py-10">
            <div class="text-center sm:mb-13 mb-7 m-auto section-header">
				<h2 class="text-headline-2 mb-2">
                    Empowering women in tech. <br>
                    <span class="text-headline-6 sm:text-headline-2">
                        CWG Tech Cohort provides training and mentorship for success
                    </span>
                </h2>
			</div>
            <div class="row grid-content-box bg-whitish-blue dark:bg-dark-highlight">
                <div class="section-text-side px-5 sm:px-10 py-5">
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        The training component of the program is aimed at providing women with the necessary
                        technical skills to operate and maintain digital technology solutions. This includes
                        training in areas such as coding, software development, data analysis, and digital
                        transformation. The training is provided in a supportive environment that fosters
                        collaboration and encourages creativity.
                    </p>
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        Mentorship is a key component of the program, providing participants with guidance and
                        support as they navigate the challenges of the technology industry. The program offers
                        mentorship opportunities from industry leaders, who can share their experiences and provide
                        advice on how to succeed in the industry. The mentorship component of the program is
                        designed to help participants develop the soft skills necessary for success in the
                        industry, including communication, collaboration, and problem-solving.
                    </p>
                </div>
                <div class="section-img-side relative order-first-xs">
                    <img src="/images/empowering-women-1.jpg" alt="empowering-women" class="section-img bg-img-sm" />
                </div>
            </div>
            <div class="row grid-content-box bg-whitish-blue dark:bg-dark-highlight">
                <div class="section-img-side relative">
                    <img src="/images/empowering-women-2.jpg" alt="empowering-women" class="section-img bg-img-sm" />
                </div>
                <div class="section-text-side px-5 sm:px-10 py-5">
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        Finally, the program offers internship opportunities to participants, allowing them
                        to gain practical experience in the technology industry. The internship component of
                        the program is designed to provide participants with the opportunity to apply the
                        knowledge and skills they have acquired through training and mentorship in a real-world
                        environment. This experience not only enhances their technical skills but also prepares
                        them for the challenges of the industry.
                    </p>
                    <p class="text-body-s font-light lg:text-body-l my-2">
                        Overall, the CWG Tech Cohort for Women is a comprehensive program that addresses the
                        gender gap in the technology industry by providing targeted support to women. Through
                        training, mentorship, and internships, the program empowers women with the necessary
                        skills and knowledge to succeed in the industry, ultimately contributing to economic
                        growth and development.
                    </p>
                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <section class="section-container py-10">
            <div class="label-patterned">
                <div class="lp-white-side relative">
                    <h2 class="text-headline-4 lg:text-headline-2 mb-5">
                        Tech Community for Fresh Graduates
                    </h2>
                    <p class="my-2">
                        CWG's Tech Community for Fresh Graduates is an initiative aimed at equipping new
                        graduates with the skills and knowledge required to solve real-world problems in
                        the digital era. The program offers immersive training that exposes participants
                        to technology solutions, products, and networks, allowing them to develop professionally
                        and expand their capabilities.
                    </p>
                    <p class="my-2">
                        The Tech Community for Fresh Graduates is designed to address the challenges facing
                        young graduates in Nigeria, including unemployment and a lack of experience, by
                        providing them with practical training and mentorship. The program is designed to
                        support young graduates in their career development and help them to succeed in the
                        technology industry.
                    </p>
                    <p class="my-2">
                        Through the program, participants gain hands-on experience working with industry
                        experts and mentors, who provide guidance, advice, and support throughout the
                        training process. Participants are also given the opportunity to work on real-world
                        projects, which provides them with the practical experience they need to succeed in
                        the technology industry.
                    </p>
                    <p class="my-2">
                        The Tech Community for Fresh Graduates initiative aims to empower young graduates
                        to take control of their career paths, by providing them with the tools and knowledge
                        they need to succeed in the technology industry. Ultimately, the program seeks to
                        contribute to the growth and development of the technology industry in Nigeria by
                        building a pipeline of skilled and talented young professionals who can drive
                        innovation and growth in the sector.
                    </p>
                    <a href="/#!" class="flex gap-5 text-lg pt-8 pb-5 max-w-[190px]">
                        <span>Register now</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>

                    <div class="cut-out-1"></div>
                    <div class="cut-out-2"></div>
                </div>
                <div class="lp-blue-side relative">
                    <div class="contact-items-wrapper text-white">
                        <div class="contact-item">
                            <img src="/images/share.svg" alt="share" class="contact-item-img">
                            <div class="contact-item-title">Share</div>
                            <div class="contact-item-desc text-body-s font-light">Copy link and share with friends</div>
                        </div>
                        <div class="contact-item">
                            <img src="/images/call.svg" alt="call" class="contact-item-img">
                            <div class="contact-item-title">Call for enquiries</div>
                            <div class="contact-item-desc text-body-s font-light">+234 810 0000 000 </div>
                        </div>
                        <div class="contact-item">
                            <img src="/images/flag.svg" alt="flag" class="contact-item-img">
                            <div class="contact-item-title">CWG Building </div>
                            <div class="contact-item-desc text-body-s font-light">
                                Block 54A, Plot 10, Off Rufus Giwa Street, Off Adebayo Doherty Road, Off
                                Admiralty Way, Lekki Phase 1, Lagos
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
    header.header {
        background: linear-gradient(0deg, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0.41) 100%), url(/images/tech-community-header-bg.png), lightgray 50% / cover no-repeat;
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