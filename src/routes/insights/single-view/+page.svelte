<script>
	import PressRelease from "../PressRelease.svelte";

    let featuredURL = "https://cwg-website.netlify.app/insights/featured";
</script>

<style>
    .blog-title {
        letter-spacing: -2px;
    }
</style>

<section class="section-container pt-10">
    <a href="/insights" class="back-arr">
        <img src="/images/bright-blue-long-arrow.svg" alt="bright-blue-long-arrow">
    </a>

    <div class="tags flex flex-wrap gap-[15px] mt-[30px]">
        <span>CWG</span>
        <span>Hybrid</span>
        <span>Event</span>
        <span>Africa</span>
    </div>
    
    <h2 class="blog-title text-[48px] leading-[61px] sm:text-[64px] sm:leading-[77px]">Building Resilience in the Hybrid World</h2>

    <div class="text-[18px]">
        By CWG  •  <span class="text-bright-blue">July 28 2022</span>  •  3 mins
    </div>

    <div class="social-icon-wrapper flex gap-[20px] items-center my-[15px]">
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${featuredURL}`} target="_blank" rel="noopener noreferrer">
            <img src="/images/share-facebook.svg" alt="facebook" class="w-[12px]">
        </a>
        <a href={`https://www.linkedin.com/shareArticle?url=${featuredURL}`} target="_blank" rel="noopener noreferrer">
            <img src="/images/share-linkedin.svg" alt="linkedin" class="w-[24px]">
        </a>
        <a href={`https://twitter.com/intent/tweet?text=Your%20Text&url=${featuredURL}`} target="_blank" rel="noopener noreferrer">
            <img src="/images/share-twitter.svg" alt="twitter" class="w-[26px]">
        </a>
    </div>

    <div class="featured-img-wrapper py-[50px]">
        <img src="/images/featured-img.jpg" alt="featured-img">
    </div>

    <div class="featured-quoted-text bg-midnight-blue text-white px-[40px] py-[30px] text-[22px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. 
    </div>

    <div class="featured-text-content text-[22px]">
        <p class="my-5">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
        </p>
        <h2 class="text-bright-blue max-w-[603px] text-[32px] py-[20px] leading-[42px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        </h2>
        <p class="my-5">
            Managing the Integrated Management System at CWG is a responsibility that involves the implementation,
            maintenance, and continual improvement of our Business Continuity and Information Security Management
            Systems.
        </p>
        <p class="my-5">
            CWG is no doubt a resilient organization. Our existence and achievements in the last 30 years are proof
            of that. We rely on making intelligent and well-timed actions. Adversity is a part of business, and how
            we overcome it shapes the success of our company and workers. Disruption is everywhere, and businesses are
            facing it from all sides. However, It is phenomenal how we have been able to protect against, reduce the
            likelihood of the occurrence of, prepare for, respond to and recover from disruptions when they arise.
        </p>
        <p class="my-5">
            Being with CWG for 14 years, I have seen how we have weathered the storms (internal and external). From
            the global economic meltdown (The Great Recession) of 2008 to Occupy Nigeria of 2012, End SARS and the
            global pandemic of 2020, to mention a few. Our proactiveness contributed majorly to the success of our
            responses to these prominent disruptions.
        </p>
        <p class="my-5">
            It was easy for us to deliver our products and services during the 2020 pandemic because we started
            hybrid operations months before the pandemic. We activated our Work From Home Strategy days before
            government lockdowns kicked off in the countries where we operate. That is how proactive we are.
        </p>
        <p class="my-5">
            It is not a coincidence that we are the first to be certified by PECB to ISO22301:2019 in Nigeria. Our
            achievement of ISO 22301:2019, ISO/IEC 27001, and ISO 9001:2015 represents the commitment and dedication
            of the management and staff to differentiating ourselves, our zeal to sustain quality at all fronts, our
            innovation initiatives, and our ability to increase efficiency at all levels. I am proud to be a part of
            the success story. The CWG team is unbeatable.
        </p>
    </div>

    <hr class="gray-line mt-[50px] mb-[30px]" />

    <div class="about-cwg-section max-w-[690px]">
        <h3 class="text-bright-blue text-[24px] mb-[15px]">About CWG</h3>
        <p class="text-[18px]">
            CWG is a Pan-African systems solutions company which specializes in a wide array of IT services
            including: communications, and integration services, infrastructure services, managed and support
            services, cloud services, and software.
        </p>
    </div>
</section>

<section id="press" class="press-release pt-20 pb-10 section-container">
    <div class="">
        <h2 class="text-headline-2">Related stories</h2>
    </div>

    <div class="py-10">
        <PressRelease />
    </div>
</section>

