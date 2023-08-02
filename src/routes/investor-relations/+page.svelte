<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import DividendsBlocks from './DividendsBlocks.svelte';
	import PressRelease from './PressRelease.svelte';
	import UpcomingEventBlock from './UpcomingEventBlock.svelte';
	import YearlyDocumentsWrapper from './YearlyDocumentsWrapper.svelte';
    import './investor-relations-styles.css'

    let userEmail = '';
    let pressReleases = false;
    let events = false;
    let presentations = false;
    let generalAnnouncements = false;

</script>

<main>
    <header class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]">
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">Investor Relations</h1>

				<p class="mb-9 header-title-desc">
					Invest with Confidence: CWG's Investor Relations Offers Insight and Support for
                    Capitalizing on Tech-driven Opportunities
				</p>
			</div>
		</div>
	</header>

    <section class="section-container">
        <div class="text-center mb-13 mt-15 m-auto max-w-[1170px] section-header">
            <h2 class="text-headline-2 mb-3 max-w-[775px] mx-auto">
                Enhancing Investor Engagement and Valuation: CWG's Commitment to Transparent
                Communication and Disclosure
            </h2>
            <p class="text-body-l font-normal">
                At CWG, we have established a well-defined strategy aimed at positioning ourselves as leaders
                in the IT industry across Africa. Our network and partnerships are integral to achieving this
                goal, as we seek to leverage their strengths and expertise to drive innovation and growth in
                the region. Through our focused approach and collaborative efforts, we are confident in our
                ability to shape the future of technology in Africa and beyond.
            </p>
        </div>
    </section>

    <section class="bg-midnight-blue relative text-white my-10">
        <div class="half-bg">
            <img src="/images/skyscrapper.jpg" alt="skyscrapper" class="bg-img">
        </div>
        <div class="section-container grid lg:grid-cols-2">
            <div></div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-[50px] sm:gap-[0] pl-10 pr-5 py-12">
                <div class="flex flex-col justify-between dotted-right-border">
                    <div class="text-[18px]">CWG:NL</div>
                    <div class="text-[70px] my-[40px]">₦0.96</div>
                    <div class="text-[18px]">Share Price • 26/03/2023</div>
                </div>
                <div class="flex flex-col justify-between sm:pl-[50px]">
                    <div class="text-[18px] pb-[10px]">FY 2021 Highlights</div>
                    <div class="grid grid-cols-2 gap-[45px]">
                        <div>
                            <div class="text-[28px]">₦11.7b</div>
                            <div class="text-[12px] text-burlywood">Revenue</div>
                        </div>
                        <div>
                            <div class="text-[28px]">₦616m</div>
                            <div class="text-[12px] text-burlywood">Profit Before Tax</div>
                        </div>
                        <div>
                            <div class="text-[28px]">₦2.9b</div>
                            <div class="text-[12px] text-burlywood">Gross Profit</div>
                        </div>
                        <div>
                            <div class="text-[28px]">₦497m</div>
                            <div class="text-[12px] text-burlywood">Profit After Tax</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="dividend-block section-container grid sm:grid-cols-3 lg:grid-cols-4 my-20">
        <DividendsBlocks />
    </section>

    <section class="yearly-block">
        <YearlyDocumentsWrapper />
    </section>

    <hr class="gray-line" />

    <section class="press-release py-10 section-container">
        <div class="flex flex-col sm:flex-row justify-between">
            <h2 class="text-headline-2">Press Releases</h2>
            <a href="#!" class="text-bright-blue flex items-center gap-[20px] text-[16px]">
                <span>View all press release</span>
                <img src="/images/blue-arrow-right.svg" alt="blue-arrow-right">
            </a>
        </div>

        <div class="py-10">
            <PressRelease />
        </div>
    </section>

    <hr class="gray-line" />

    <section class="upcoming-events-setion section-container py-10">
        <div class="section-header">
            <h2 class="text-headline-2">Upcoming Events</h2>
        </div>

        <div class="upcoming-event-wrapper my-15">
            <UpcomingEventBlock />
        </div>

        <a href="#!" class="flex items-center gap-2 mt-5 text-[18px]">
            <span>Show all events</span>
            <div class="arrow-right">
                <ArrowRightLong strokeClassName="stroke-blue" />
            </div>
        </a>
    </section>

    <hr class="gray-line" />

    <section class="section-container pt-10 pb-20">
        <div class="grid sm:grid-cols-2 gap-[20px]">
            <div class="form-sub-side">
                <div class="section-header">
                    <h2 class="text-headline-2">Email Alerts and Contact Info</h2>
                </div>

                <form action="#" id="contact-subscription-form">
                    <div class="form-group my-[25px]">
                        <input type="email" bind:value={userEmail} placeholder="Email address" class="inp-field" required>
                    </div>
                    <div class="form-group checkbox-group grid gap-[10px] max-w-[210px]">
                        <label class="cursor-pointer flex gap-[20px]">
                            <input type="checkbox" bind:checked={pressReleases} />
                            <span>Press Releases</span>
                        </label>
                        <label class="cursor-pointer flex gap-[20px]">
                            <input type="checkbox" bind:checked={events} />
                            <span>Events</span>
                        </label>
                        <label class="cursor-pointer flex gap-[20px]">
                            <input type="checkbox" bind:checked={presentations} />
                            <span>Presentations</span>
                        </label>
                        <label class="cursor-pointer flex gap-[20px]">
                            <input type="checkbox" bind:checked={generalAnnouncements} />
                            <span>General Announcements</span>
                        </label>
                    </div>

                    <button class="submit-btn text-bright-blue mt-[30px] px-[24px] py-[10px] text-[14px]">
                        Submit
                    </button>
                </form>
            </div>

            <div class="contact-details-side">
                <div class="max-w-[444px]">
                    <div class="mb-[30px] text-[18px]">
                        Questions for the Investor Relations department can be emailed to
                        <a href="mailto:investors@cwg-plc.com">investors@cwg-plc.com</a>
                        or submitted by clicking on the button below.
                    </div>
    
                    <a href="#!" class="flex items-center gap-2 mt-5 text-[18px]">
                        <span>Contact us</span>
                        <div class="arrow-right">
                            <ArrowRightLong strokeClassName="stroke-blue" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
	header.header {
		background-image: url('/images/investors-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}

    input.inp-field {
        width: 300px;
        padding: 10px 16px;
        border: 1px solid var(--color-midnight-blue);
    }
    input[type=checkbox] {
        width: 27px;
        height: 27px;
    }
    button.submit-btn {
        border: 1px solid var(--color-bright-blue);
    }
    button.submit-btn:hover {
        color: white;
        background-color: var(--color-bright-blue);
    }
</style>
