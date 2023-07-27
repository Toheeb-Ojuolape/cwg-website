<script lang="ts">
    import { browser } from '$app/environment';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
    
    // @ts-ignore
	import Carousel from 'svelte-carousel';

    let carousel: any;

    let currentPageIndex = 0;
    // let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let newsThumbails = [
        {
            image: "/images/press-release-1.jpg",
            caption: "COVID-19: CWG to leverage digital product offerings to boost financial fortune in 2021",
            date: "February 22, 2021",
            readingLength: "3 mins"
        },
        {
            image: "/images/press-release-2.jpg",
            caption: "How Smart utilities can power Nigeria’s future smart cities",
            date: "February 7, 2021",
            readingLength: "4 mins"
        },
        {
            image: "/images/press-release-3.jpg",
            caption: "CWG posts N11.8 billion revenue in 2020 financial year",
            date: "February 1, 20213",
            readingLength: "3 mins"
        },
        {
            image: "/images/press-release-1.jpg",
            caption: "COVID-19: CWG to leverage digital product offerings to boost financial fortune in 2021",
            date: "February 22, 2021",
            readingLength: "3 mins"
        },
        {
            image: "/images/press-release-2.jpg",
            caption: "How Smart utilities can power Nigeria’s future smart cities",
            date: "February 7, 2021",
            readingLength: "4 mins"
        },
        {
            image: "/images/press-release-3.jpg",
            caption: "CWG posts N11.8 billion revenue in 2020 financial year",
            date: "February 1, 20213",
            readingLength: "3 mins"
        },
    ]
    let lastIndex = Math.round(newsThumbails.length / 3);

    if (browser) {
        lastIndex = Math.round(([...newsThumbails].length + 1) / 3);
    }

    function onPageChange(event: { detail: number }) {
        currentPageIndex = event.detail;
    }
</script>

<div class="relative">
    {#if browser}
        <Carousel
            on:pageChange={onPageChange}
            bind:this={carousel}
            arrows={false}
            infinite={false}
            dots={false}
            particlesToShow={3}
            particlesToScroll={2}
        >
            {#each newsThumbails as newsThumbail, index}
                <a
                    href="/"
                    class:Carousel__item1={index === 0}
                    class="block group w-[calc(100%/3)] ml-[72px]"
                >
                    <div class="bg-neon-blue pt-[70%] relative w-full mb-[30px] overflow-hidden">
                        <img
                            src={newsThumbail.image}
                            alt="News"
                            class="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 bg-img"
                        />
                    </div>
                    <div class="flex flex-col sm:flex-row gap-7 mb-9">
                        <h6 class="text-headline-6 sm:min-h-[93px] flex-1">
                            {newsThumbail.caption}
                        </h6>
                        <ArrowRightLong
                            fillClassName="fill-midnight-blue dark:fill-white"
                            strokeClassName="stroke-midnight-blue dark:stroke-white"
                        />
                    </div>
                    <p class="text-body-l">
                        <span class="text-bright-blue">Press release</span> • {newsThumbail.date} •
                        <span class="text-bright-blue">{newsThumbail.readingLength}</span>
                    </p>
                </a>
            {/each}

            <div class="" />
            <div class="" />
        </Carousel>

        <button
            on:click={() => carousel.goToPrev()}
            class={`h-11 w-11 flex items-center justify-center rounded-full absolute left-5 lg:left-9 top-1/2 ${
                currentPageIndex === 0 ? 'bg-white/10' : 'bg-midnight-blue'
            }`}
            disabled={currentPageIndex === 0}
        >
            <div class="rotate-180">
                <ArrowRightSolidIcon className="fill-white" />
            </div>
        </button>

        <button
            on:click={() => carousel.goToNext()}
            class={`h-11 w-11 flex items-center justify-center rounded-full absolute right-4 lg:right-8 top-1/2 ${
                lastIndex === currentPageIndex
                    ? 'bg-black-800 dark:bg-white/10'
                    : 'bg-midnight-blue'
            }`}
            disabled={lastIndex === currentPageIndex}
        >
            <ArrowRightSolidIcon className="fill-white" />
        </button>
    {/if}
</div>

<div class="mt-15 sm:w-[80%] mx-auto h-[1.5px] bg-black-600">
    <div
        class="h-[1.5px] bg-bright-blue transition-[width] duration-300"
        style={`width: calc(100% / ${lastIndex + 1 - currentPageIndex})`}
    />
</div>

<style>
    .Carousel__item1 {
		margin-left: 16px;
	}

	@media (min-width: 1024px) {
		.Carousel__item1 {
			margin-left: 32px;
		}
	}

	@media (min-width: 1536px) {
		.Carousel__item1 {
			margin-left: 0px;
		}
	}

    @media(max-width: 640px) {
        .text-headline-6 {
            font-size: 20px;
        }
    }
</style>