<script lang="ts">
	import { ArrowLeftCircle, ArrowRightCircle, Icon } from 'svelte-hero-icons';
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte';

	let emblaApi: EmblaCarouselType;

	let scrollValue = 0;

	function onEmblaScroll() {
		scrollValue = emblaApi.selectedScrollSnap();
	}

	$: if (emblaApi) {
		emblaApi.on('select', () => {
			onEmblaScroll();
		});
	}
</script>

<div class="flex-1 flex flex-col justify-center">
    <div
        class="overflow-hidden w-full"
        use:emblaCarouselSvelte={{
            options: { containScroll: 'trimSnaps', align: 'start' },
            plugins: []
        }}
        on:emblaInit={(ev) => (emblaApi = ev.detail)}
    >
        <div class="flex">
            <div class="flex w-full min-w-full flex-col gap-5 pr-8 pb-5 relative testimony-block">
                <img src="/images/quote.svg" alt="quote" class="quote-icon">
                <div class="text-body-m relative text-2xl z-10 mt-[25px] testimony-text">
                    "CWG Academy is top-notch! The instructors are fantastic, the curriculum is
                    practical, and the emphasis on problem-solving is invaluable. Highly
                    recommended for anyone looking to advance their tech skills and career."
                </div>
                <div class="testifier sm:text-lg">
                    Olajide Adebowale - Yaounde  Cameroon 
                </div>
            </div>
            <div class="flex w-full min-w-full flex-col gap-5 pr-8 pb-5 relative testimony-block">
                <img src="/images/quote.svg" alt="quote" class="quote-icon">
                <div class="text-body-m relative text-2xl z-10 mt-[25px] testimony-text">
                    "Working at CWG is a blast! I get to code with the best, laugh a lot, and
                    enjoy delicious food. It's an amazing workplace that values diversity and
                    promotes inclusivity. I feel like I belong and can thrive here."
                </div>
                <div class="testifier sm:text-lg">
                    Jide Folarin - BOWEN University 
                </div>
            </div>
        </div>
    </div>

    <div class="flex items-center gap-3 mt-14">
        <button on:click={() => emblaApi.scrollPrev()}
            ><Icon src={ArrowLeftCircle} solid={scrollValue > 0} class="h-10 w-10" /></button
        >
        <button on:click={() => emblaApi.scrollNext()}
            ><Icon
                src={ArrowRightCircle}
                solid={Array(2).length - 1 > scrollValue}
                class="h-10 w-10"
            /></button
        >
    </div>
</div>