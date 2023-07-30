<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
    import '../services/services-styles.css'
	import BlogsBlocks from './BlogsBlocks.svelte';
	import Cwg30Video from './Cwg30Video.svelte';
	import DigitalMagazineWrapper from './DigitalMagazineWrapper.svelte';
    import './insights-style.css'
	import LeadersConversations from './LeadersConversations.svelte';
	import PressRelease from './PressRelease.svelte';
	import QuarterlyNewsletter from './QuarterlyNewsletter.svelte';

    let featuredURL = "https://cwg-website.netlify.app/insights/featured";

    let newsletterEmail = '';
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<div class="header-top-title uppercase">Giant strides from CWG</div>
				<h1 class="text-headline-2 header-title lg:text-headline-1">Insights from CWG</h1>

				<p class="mb-9 header-title-desc">
					Latest updates, press releases about CWG, conversations with our leaders and other articles
				</p>
			</div>
		</div>
	</header>

    <div id="sections-wrapper">
        <section class="bg-whitish-blue dark:bg-dark-highlight pt-10">
            <div class="section-container">
                <h2 class="section-title text-[40px] mb-[20px]">Featured</h2>

                <div class="grid-content-box lg:gap-[50px] mb-15">
                    <div class="section-img-side relative">
                        <img src="/images/featured-img.jpg" alt="featured-img" class="section-img">
                    </div>
                    <div class="section-txt-side">
                        <div class="author-date text-[14px] mb-[10px]">By CWG  ∙  3 mins ∙ May 18, 2022</div>
                        <div class="featured-section-title text-[32px] mb-[30px]">Building Resilience in the Hybrid World</div>
                        <p class="featured-txts my-[20px]">
                            Managing the Integrated Management System at CWG is a responsibility that involves
                            the implementation, maintenance, and continual improvement of our Business Continuity
                            and Information Security Management Systems.
                        </p>
                        <p class="featured-txts my-[20px]">
                            CWG is no doubt a resilient organization. Our existence and achievements in the last
                            30 years are proof of that. We rely on making intelligent and well-timed actions. Adversity
                            is a part of business, and how we overcome it shapes the success of our company and workers.
                        </p>

                        <a href="/insights/single-view" class="flex gap-5 text-lg max-w-[170px] mt-[50px]">
                            <span>Read more</span>
                            <div class="arrow-right">
                                <ArrowRightLong strokeClassName="stroke-blue" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="share-social-wrapper py-5 bg-white dark:bg-black">
                <div class="section-container flex gap-[10px] items-center">
                    <span class="text-[14px] uppercase">share</span>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${featuredURL}`} target="_blank" rel="noopener noreferrer">
                        <img src="/images/share-facebook.svg" alt="facebook">
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?url=${featuredURL}`} target="_blank" rel="noopener noreferrer">
                        <img src="/images/share-linkedin.svg" alt="linkedin">
                    </a>
                    <a href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${featuredURL}`} target="_blank" rel="noopener noreferrer">
                        <img src="/images/share-twitter.svg" alt="twitter">
                    </a>
                </div>
            </div>
        </section>

        <div class="tabs-wrapper">
            <ul class="tabs bg-whitish-blue dark:bg-dark-highlight pt-2">
                <div class="section-container flex gap-[50px]">
                    <li class="active">Newsroom</li>
                    <li>Perspectives</li>
                    <li>Press</li>
                    <li>Media/Gallery</li>
                    <li>Podcast</li>
                    <li>Events</li>
                </div>
            </ul>
        </div>

        <section id="" class="section-container py-10">
            <div class="section-header mb-10">
                <h2 class="text-[32px]">Insights from our blog</h2>
                <div class="text-[12px]">Learn more about the latest trends transforming the industry.</div>
            </div>

            <BlogsBlocks />            
        </section>

        <section id="" class="pt-20 pb-15 bg-midnight-blue text-white my-[10px]">
            <div class="section-container grid-content-box lg:gap-[50px]">
                <div class="">
                    <div class="img-wrapper">
                        <img src="/images/cwg-30.svg" alt="cwg-30" class="30-img">
                    </div>
                    <div class="text-[40px] mt-[30px] max-w-[555px]">
                        Celebrating 30 Years of positioning Africa to Maximise the Future
                    </div>
                    <a href="/insights/cwg-30.svg" class="flex gap-5 text-lg max-w-[170px] mt-[80px]">
                        <span>Read more</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-white" />
                        </div>
                    </a>
                </div>
                <div class="sm:mt-0 mt-[10px]">
                    <p class="text-[18px]">
                        CWG started life through our founder Mr. Austin Okere as Computer Warehouse Group in
                        1992, relatively unknown with normal challenges typical with new business. Some 30 years
                        later, CWG is now listed on the Nigerian Stock Exchange, now operational in about 17
                        countries in the world and has witnessed the emergence of 2 non-founder CEOs.
                    </p>
                     <div class="mt-[20px] mb-[10px]">
                        <Cwg30Video />
                     </div>
                    <div class="text-[40px]">Road to 30</div>
                </div>
            </div>
        </section>

        <section class="press-release py-10">
            <div class="section-container">
                <h2 class="text-headline-2">CWG Press</h2>
                <p class="text-[18px]">The CWG team has made significant progress.</p>
            </div>
    
            <div class="py-10">
                <PressRelease />
            </div>
        </section>

        <section class="leaders-conversations-section py-10">
            <div class="section-container">
                <h2 class="text-headline-2">Conversations with our leaders</h2>
            </div>
    
            <div class="section-container py-10">
                <LeadersConversations />
            </div>
        </section>

        <section class="digital-magazine-section py-10">
            <div class="section-container">
                <h2 class="text-headline-2">Digital Edge Magazine</h2>
                <p class="text-[18px]">
                    This is our yearly in-house publication, an additional platform to bond and share our values.
                </p>
            </div>
    
            <div class="section-container py-10">
                <DigitalMagazineWrapper />
            </div>
        </section>

        <section class="quarterly-newsletter-section pt-5 pb-10">
            <div class="section-container">
                <h2 class="text-headline-2">CWG Quarterly Newsletter</h2>
            </div>
    
            <div class="section-container py-10">
                <QuarterlyNewsletter />
            </div>
        </section>

        <section class="bg-midnight-blue text-white relative mt-[20px] mb-[50px]">
            <div class="sub-newsletter-section-bg">
                <img src="/images/newsletter-man.jpg" alt="man" class="bg-img">
            </div>
            <div class="section-container grid sm:grid-cols-2">
                <div></div>
                <div class="p-10">
                    <div class="max-w-[445px]">
                        <h2 class="text-[32px] mb-[5px]">Sign up for our newsletter</h2>
                        <div class="text-[15px]">
                            Enter your email to receive the latest news, updates  and  announcements from CWG!
                        </div>
                    </div>

                    <form action="#" id="sub-newsletter-form" class="my-[20px]">
                        <div class="relative w-[300px]">
                            <input
                                class="pl-4 pr-8 focus-within:outline focus-within:outline-white text-white peer h-11 w-full bg-transparent border border-black-600 placeholder:text-pewter-blue placeholder:text-button-s"
                                placeholder="My email..."
                                type="email"
                                bind:value={newsletterEmail}
                            />
                            <button class="absolute cursor-pointer right-3 top-[10px]">
                                <img src="/images/arrow-right-white.svg" alt="arrow-right-white">
                            </button>
                        </div>
                    </form>

                    <div class="follow-us mt-[35px]">
                        <div class="text-[18px] mb-[10px]">Follow us</div>
                        <div class="flex gap-[10px]">
                            <a href="https://twitter.com/cwgafrica" target="_blank" rel="noopener noreferrer">
                                <img src="/images/twitter-1.svg" alt="twitter">
                            </a>
                            <a href="https://www.linkedin.com/company/cwgafrica/" target="_blank" rel="noopener noreferrer">
                                <img src="/images/linkedln-1.svg" alt="linkedin">
                            </a>
                            <a href="https://instagram.com/cwgafrica" target="_blank" rel="noopener noreferrer">
                                <img src="/images/instagram-1.svg" alt="instagram">
                            </a>
                            <a href="https://www.facebook.com/CWGNigeria" target="_blank" rel="noopener noreferrer">
                                <img src="/images/facebook-1.svg" alt="facebook">
                            </a>
                            <a href="https://www.youtube.com/CWGAfrica" target="_blank" rel="noopener noreferrer">
                                <img src="/images/youtube-1.svg" alt="youtube">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</main>

<style>
	header.header {
		background-image: url('/images/insights-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}

    ul.tabs {
		border-bottom: 1px solid #ddd;
        float: left;
        overflow: auto;
        width: 100%;
	}
	.tabs li {
		padding: 5px 2px;
		cursor: pointer;
	}
	.tabs li.active {
		border-bottom: 3px solid var(--color-midnight-blue);
		padding-bottom: 5px;
	}

    @media(min-width: 640px) {
        .section-img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
</style>