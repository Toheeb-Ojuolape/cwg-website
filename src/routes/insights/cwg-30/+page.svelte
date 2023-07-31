<script>
	import CwgJourney from "./CwgJourney.svelte";
    import VideoSide from "./VideoSide.svelte";
    import VideoSide2 from "./VideoSide2.svelte";

    import '../../services/services-styles.css';
    import '../insights-style.css';
	import EventsBlocks from "./EventsBlocks.svelte";
</script>

<main>
    <header
        class="header h-[300px] lg:h-[477px] text-white flex justify-center gap-[10px] bg-midnight-blue relative mb-10"
    >
        <div class="section-container flex justify-between items-center relative">
            <div class="header-text-wrapper">
                <div class="header-top-title uppercase">Insight</div>
                <h1 class="text-headline-2 header-title lg:text-headline-1">CWG @30</h1>

                <p class="mb-9 header-title-desc">
                    Celebrating 30 Years of positioning Africa to Maximise the Future
                </p>
            </div>
            <div class="cwg-30-img">
                <img src="/images/cwg-30-2.svg" alt="cwg-30">
            </div>
        </div>
    </header>

    <section class="section-container grid-content-box p-10">
        <div class="section-text-side">
            <p class="text-[20px] sm:text-[28px]">
                CWG started life through our founder Mr. Austin Okere as Computer Warehouse Group in
                1992, relatively unknown with normal challenges typical with new business. Some 30 years
                later, CWG is now listed on the Nigerian Stock Exchange, now operational in about 17 countries
                in the world and has witnessed the emergence of 2 non-founder CEOs.
            </p>
        </div>
        <div class="section-img-side pt-2">
            <VideoSide />
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <CwgJourney />

    <section class="section-container text-[18px] lg:w-[90%] lg:m-auto">
        <p class="py-[10px]">
            As we reflect our history, showcasing our humble beginnings, our victories, our losses and above
            all our learning as a knowledge-driven organisation. These experiences have produced the opportunity
            to refine our corporate strategy and values, eventually birthing our CWG.2.0 roadmap as well as the
            establishment of our training academy, cementing learning as an integral part of our ethos and culture.
        </p>
        <p class="py-[10px]">
            In those three decades, we have taken advantage of openings in the technology industry in Africa by
            leveraging the power of collaborative thinking to build strategic partnerships, encourage
            co-creation, develop our in-house capabilities as well as give back to communities where we operate
            and serve.
        </p>
        <p class="py-[10px]">
            As I look back on the covid 19 pandemic through the lens of our company, I am mindful of the pivotal
            role our people, products and services played in enabling families to have access to funds through
            our platforms to meet their primary needs in those standstill days. I remain proud of our ability
            to contribute to the wellbeing of our people, customers, end users and nation in such a profound
            way. We anticipate that as we evolve and move on from such a dynamic period of change, a few
            questions will come to mind.
        </p>
        <p class="py-[10px]">
            What remains fundamentally crucial for us is our commitment to our shareholders and investors, attracting
            the right partnerships and value creation in various communities. Therefore, I recognize that in this
            era of economic crisis and challenging business environments, the ability to solve the right problems
            with the right people, has become a focal point for us as a business.
        </p>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="my-5 p-5 sm:p-10 management-statement-block">
        <div class="section-container bg-midnight-blue text-white">
            <div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
                <div class="management-block bg-pewter-blue">
                    <div class="management-img-wrapper relative">
                        <img src="/images/adewale-adeyipo.jpg" alt="Adewale Adeyipo" class="bg-img">
                    </div>
                    <div class="management-name-role p-[15px]">
                        <div class="text-[32px]">Adewale Adeyipo</div>
                        <div class="text-[16px]">Group MD/CEO, CWG Plc</div>
                    </div>
                </div>
    
                <div class="text-side relative grid sm:grid-cols-2 text-[18px] gap-[40px] lg:gap-[80px]">
                    <div>
                        <p class="pb-[40px]">
                            Consequently, at CWG we have made it our priority to invest and reinvest in our
                            people, ensuring they are trained to industry level standards as well as creating a
                            fun and enabling environment encouraging creativity and innovation.
                        </p>
                        <p>
                            In the near term, we are in the process of creating our own IIPs in response to
                            tackling some of the challenges that come with off the shelf solutions for the local
                            markets. We remain committed to serving our customers, deepening our relationships
                            with our partners and stakeholders and keeping our board informed at every point.
                        </p>
                    </div>
                    <div>
                        <p class="pb-[40px]">
                            As we look back on how far we have come and the many great memories, and to the
                            future, I have no doubt in my mind that the next 30 years will see us living out
                            and transcending our version of a truly great and exceptional organisation with a
                            great team.
                        </p>
                        <p>
                            I look to the future with anticipation, and it gives me great pleasure to invite
                            you on this journey of greatness with us.
                        </p>
                    </div>
                    <hr class="vertical-line">
                </div>
            </div>
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="section-container">
        <div class="grid-box-1-2 items-center">
            <h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px]">The First 30…</h2>
            <div class="text-[18px]">
                On September 26, 1992, we launched our activities in Nigeria under the name Computer Warehouse
                Limited, focusing primarily on computer hardware projects. A few years later, DCC Networks was
                founded as the communication division to offer corporate organisations VSAT, metropolitan,
                wide-area, and local area networks. In 1999, Expert Edge Software was purchased in order to
                focus on the needs that were developing in the area of software systems, training, and solutions.
            </div>
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="my-5 p-5 sm:p-10 management-statement-block">
        <div class="section-container bg-midnight-blue text-white">
            <div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
                <div class="management-block bg-pewter-blue">
                    <div class="management-img-wrapper relative">
                        <img src="/images/austin-okere.jpg" alt="Austin Okere" class="bg-img">
                    </div>
                    <div class="management-name-role p-[15px]">
                        <div class="text-[32px]">Austin Okere</div>
                        <div class="text-[16px]">Founder & Executive Vice Chairman, CWG Plc</div>
                    </div>
                </div>
    
                <div class="text-side text-[18px]">
                    <h2 class="sm:text-[64px] text-[38px] sm:leading-[77px] leading-[51px] mb-[40px]">
                        In founding CWG, we saw a clear problem calling for a unique solution. 
                    </h2>
                    <p class="text-[18px]">
                        The answer was a complete change of mindset in the way we perceived the customer
                        and the total value that we could give to him, beyond just our profit aspiration. One
                        of the most important attributes in any relationship, for us, is trust. Once we
                        developed that trust over a period of consistent performance, where you say what you
                        will do, and do what you say, the customers embraced us as a partner.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="my-5 p-5 sm:p-10 management-statement-block">
        <div class="section-container bg-pewter-blue text-white">
            <div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
                <div class="management-block bg-greyish-blue">
                    <div class="management-img-wrapper relative">
                        <img src="/images/james-agada.jpg" alt="James Agada" class="bg-img">
                    </div>
                    <div class="management-name-role p-[15px]">
                        <div class="text-[32px]">James Agada</div>
                        <div class="text-[16px]">Former CEO, CWG Plc</div>
                    </div>
                </div>
    
                <div class="text-side text-[18px]">
                    <h2 class="sm:text-[40px] text-[28px] sm:leading-[52px] leading-[40px] mb-[30px] sm:mb-[40px]">
                        When we started selling Finacle, we realised it required very big servers to run, and
                        sometimes the actual cost of servers was more than the cost of the software.
                    </h2>
                    <p class="text-[18px]">
                        So, guess what we did next. We moved from just selling laptops and desktops, to selling
                        big servers. We partnered with Sun and we became the major selling partner. And later, we
                        partnered also with IBM. We moved from selling these laptops and desktops PC service, to
                        selling enterprise servers. We also built support services to make sure the servers were
                        always running. CWG kept evolving from just selling, to providing services.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="section-container">
        <div class="text-[18px] lg:w-[90%] lg:m-auto">
            To better serve the needs of the larger West African region, further expansion led to the
            opening of a branch in Ghana in 2003. The three subsidiary firms (CWL, DCC, and Expert Edge)
            were coordinated and monitored by Computer Warehouse Group, which was established in 2005. This
            freed the Group Company to serve as the Head Office and manage shared resources for the Subsidiaries.
            In order to make the business more effective overall and customer-focused, this allowed it to
            coordinate operations from a single location.
        </div>
    </section>

    <section class="my-5 p-5 sm:p-10 management-statement-block">
        <div class="section-container bg-pewter-blue text-white">
            <div class="grid grid-box-1-2 lg:py-[32px] py-16px lg:items-center">
                <div class="management-block bg-greyish-blue">
                    <div class="management-img-wrapper relative">
                        <img src="/images/rasheed-salawu.jpg" alt="Rasheed Salawu" class="bg-img">
                    </div>
                    <div class="management-name-role p-[15px]">
                        <div class="text-[32px]">Rasheed Salawu</div>
                        <div class="text-[16px]">Former Business Director, CWG Plc</div>
                    </div>
                </div>
    
                <div class="text-side text-[18px]">
                    <h2 class="sm:text-[40px] text-[28px] sm:leading-[52px] leading-[40px] mb-[30px] sm:mb-[40px]">
                        The culture has absolutely been fantastic. We realised early enough that we were
                        providing services and so we saw ourselves as caregivers.
                    </h2>
                    <p class="text-[18px]">
                        And because we were caregivers, everything we did centred on the customer. We were
                        customer obsessed, and that customer obsession is very important. I was a motivational
                        factor for us in every other thing we did. And of course, beyond that we had a backbone
                        of good processes, procedures and a very good management team that provided all of that.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="pan-african-brand-section my-5 p-2">
        <div class="section-container grid-box-1-2">
            <h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px] mt-5">A Truly Pan-African Brand</h2>

            <div class="text-side relative bg-midnight-blue text-white text-[18px] p-[20px] sm:p-[30px] lg:px-[50px] lg:py-[30px]">
                <p class="my-5">
                    CWG Ghana, Cameroon and Uganda have been providing software as a service development to
                    clients in West, East, and Central Africa Regions for over 18 years at cost-effective
                    rates. We have the required expertise to enable our clients to take their software solutions
                    to a whole new level which will help you widen your reach and increase profitability. We also
                    cater to all the issues relating to integration with your internal tools and software, and
                    ensure strict compatibility checks through every round of deployment. Our team of software
                    engineers are trained to work on the latest tools and technologies and have the experience
                    of developing SaaS applications for Sales, CRM, Accounting, HRM, etc.
                </p>
                <p class="my-5">
                    CWG grew its operational footprint in order to realise its Pan-African Vision, and set up
                    additional regional offices in East and Central Africa, CWG Uganda Limited (2010) and CWG
                    Cameroon Limited (2012), respectively, to handle the commercial interest generated in these
                    regions. These Subsidiaries were amalgamated into Computer Warehouse Group in March 2012 and
                    no longer exist as separate companies, but rather as divisions.
                </p>
                <p class="my-5">
                    Abraaj Group, a renowned private equity firm, expressed interest in Computer Warehouse Group
                    in February 2008 after the company had already made numerous significant accomplishments.
                </p>
            </div>
        </div>
    </section>

    <section class="section-container my-20">
        <div class="relative quote-block pl-[40px] sm:pl-[60px] text-[24px] sm:w-[90%] sm:m-auto">
            <img src="/images/quote.svg" alt="quote" class="quote-icon">
            <div class="quote-text">
                The noteworthy milestone on our journey to listing was the spectacular returns to our
                investors. CWG’s returns on investments from inception 1992 to 2013 when we listed was
                2500-fold. Contextually, if you had invested just $10 with us in 1992, it would have
                been worth $25,000 in 2013. If you had invested $1000 your investment would have been
                worth $2,500,000 by 2013 when we listed. This is an achievement of which we remain
                deeply proud.”
            </div>
            <div class="text-pewter-blue mt-[40px]">
                – Austin Okere; Founder & Executive Vice Chairman, CWG Plc
            </div>
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="section-container grid md:grid-cols-2 gap-[30px] lg:gap-[50px] pb-0 sm:pb-10 p-10 pt-5">
        <div class="section-text-side text-[18px]">
            <p class="my-4">
                In order to transition from a Private Limited Company to a Public Company, Computer Warehouse
                Group listed its shares on the Nigerian Stock Exchange on November 15, 2013. The market
                capitalization of the NSE increased by approximately N14 billion as a result of this
                listing, elevating Computer Warehouse Group PLC to the position of most highly capitalised
                security in the ICT industry. With the listing of Computer Warehouse Group Plc, the X-Gen
                trading engine, which is also utilised on the NASDAQ, made its debut on the market.
            </p>
            <p class="my-4">
                As we grew, the corporation continually created and disseminated technology solutions that
                primarily served business demands, facilitating the expansion of conglomerates and SMEs. Due
                to our dedication, we have established ourselves as a powerful, yet discreet champion driving
                several enterprises by offering technology solutions that guarantee organisational success and
                efficiency.
            </p>
        </div>
        <div class="section-img-side order-first md:order-2">
            <h2 class="text-[40px] mb-[25px]">CWG Introduces Fifth Lab</h2>
            <VideoSide2 />
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="section-container my-20">
        <div class="relative quote-block pl-[40px] sm:pl-[60px] text-[24px] sm:w-[90%] sm:m-auto">
            <img src="/images/quote.svg" alt="quote" class="quote-icon">
            <div class="quote-text">
                Retail payment systems and financial services being digitised is now a top goal for economic
                growth. With a wider variety of financial services, it gives the chance to reach far more people
                at much lower costs and provide them with what they need to develop resilience and seize chances."
            </div>
            <div class="text-pewter-blue mt-[40px]">
                – Austin Okere; Founder & Executive Vice Chairman, CWG Plc
            </div>
        </div>
    </section>

    <hr class="gray-line my-[40px]">

    <section class="section-container my-[60px]">
        <div class="grid-box-1-2 items-center">
            <h2 class="sm:text-[64px] text-[52px] sm:leading-[77px] leading-[65px]">The Next 30…</h2>
            <div class="text-[18px]">
                <p class="mb-5">
                    CWG will continue to transform to meet the market requirements. As Andy Groove of Intel
                    said, only the paranoid survives. It is imperative to continuously reimagine and rediscover
                    your space through adoption, agility, focus and relentless execution. This makes transformation
                    journeys part and parcel of successful and sustainable companies.
                </p>
                <p class="my-5">
                    At every point in time, we pay close attention to the Austin’s Five forces Model for
                    Transformation, namely, Vision, Team, Time, Resources and Resolve. We have become adept at
                    this, and we continue to replicate the model to remain a trusted partner to our customers
                    and our communities.
                </p>
                <p class="my-5">As always, our best is yet to come.</p>

                <div class="text-pewter-blue mt-[24px] mt-[40px]">
                    – Austin Okere; Founder & Executive Vice Chairman, CWG Plc
                </div>
            </div>
        </div>
    </section>
    
    <hr class="gray-line my-[40px]">

    <section class="section-container my-15">
        <h2 class="text-[40px]">Events of the CWG@30</h2>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-[50px]">
            <EventsBlocks />
        </div>
    </section>
</main>

<style>
    header.header::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
		background-image: url('/images/pattern-bg-2.png');
        background-size: cover;
        background-position: center 20%;
        opacity: 0.05;
	}
    .header-text-wrapper {
        max-width: 420px;
    }

    .grid-box-1-2 {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 50px;
    }

    @media(max-width: 768px) {
        .grid-box-1-2 {
            grid-template-columns: 100%;
            gap: 30px;
        }
        .management-statement-block .section-container {
            padding: 0;
        }
        .management-statement-block .section-container .text-side {
            padding: 10px 32px 32px;
        }
        .pan-african-brand-section .section-container {
            padding: 20px 16px 60px;
        }
    }
</style>