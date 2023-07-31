<script lang="ts">
    import { browser } from '$app/environment';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
    
    // @ts-ignore
	import Carousel from 'svelte-carousel';

    let carousel: any;

    let currentPageIndex = 0;
    let newsletters = [
        {
            image: '/images/newsletter-thumbnail-1.jpg',
            caption: 'Road to 30: Creating Sustainable Value Through Technology',
            date: 'Aug 28, 2022'
        },
        {
            image: '/images/newsletter-thumbnail-2.jpg',
            caption: 'VOL 2 – Positioning Africa to Maximize the Future',
            date: 'May 25, 2022'
        },
        {
            image: '/images/newsletter-thumbnail-3.jpg',
            caption: 'VOL 1 – Connecting the World From Africa',
            date: 'May 18, 2022'
        },
    ]
    let lastIndex = Math.round(newsletters.length / 3);

    if (browser) {
        lastIndex = Math.round(([...newsletters].length + 1) / 3);
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
            {#each newsletters as newsletter}
                <div class="slider bg-midnight-blue relative pb-10">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div class="slider-img-wrapper">
                        <img src={newsletter.image} alt="Slide" class="slider-img" />
                    </div>
                    <div class="slider-caption p-5">{newsletter.caption}</div>
                    <div class="newsletter-date text-[14px] text-pewter-blue">{newsletter.date}</div>
                </div>
            {/each}

            <div class="" />
            <div class="" />
        </Carousel>

        <button
            on:click={() => carousel.goToPrev()}
            class={`h-11 w-11 flex items-center justify-center rounded-full absolute left-5 lg:left-9 top-[35%] ${
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
            class={`h-11 w-11 flex items-center justify-center rounded-full absolute right-4 lg:right-8 top-[35%] ${
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

    .slider {
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    .slider-img-wrapper {
        width: 100%;
        height: 300px;
        position: relative;
        cursor: pointer;
    }
    img.slider-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .slider-caption {
      width: 100%;
      color: white;
      font-size: 18px;
      cursor: pointer;
    }

    .newsletter-date {
        position: absolute;
        bottom: 1.25rem;
        left: 1.25rem;
    }
</style>