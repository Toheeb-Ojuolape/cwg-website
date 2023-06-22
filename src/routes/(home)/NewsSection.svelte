<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import Home2 from '$lib/images/home_2.png';
	// @ts-ignore
	import Carousel from 'svelte-carousel';

	let carousel: any;

	let currentPageIndex = 0;
	let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let lastIndex = Math.round(array.length / 3);

	if (browser) {
		lastIndex = Math.round(([...array].length + 1) / 3);
	}

	$: console.log({ lastIndex, currentPageIndex }, array.length / 3);

	function onPageChange(event: { detail: number }) {
		currentPageIndex = event.detail;
	}
</script>

<section class="box-container bg-whitish-blue dark:bg-white/10 pb-[50px] pt-18 mx-auto">
	<div class="flex items-center justify-between mb-17">
		<h2 class="text-headline-2">News</h2>
		<a
			class="mr-4 flex gap-11 items-center lg:mr-8 2xl:mr-0 text-bright-blue text-button-l transition-all duration-300 hover:scale-110"
			href="/"
		>
			View all articles
			<div class="mt-1">
				<ArrowRightSolidIcon className="fill-bright-blue" />
			</div>
		</a>
	</div>

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
				{#each array as _, index}
					<a
						href="/"
						class:Carousel__item1={index === 0}
						class="block group w-[calc(100%/3)] ml-[72px]"
					>
						<div class="bg-neon-blue h-[358.81px] w-full mb-[30px] overflow-hidden">
							<img
								src={Home2}
								alt="News"
								class="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
							/>
						</div>
						<div class="flex gap-7 mb-9">
							<h6 class="text-headline-6">
								CWG Explains how ‘Work from Home’ Initiative Aided its 2020
								Financial Results {index}
							</h6>
							<ArrowRightLong
								fillClassName="fill-midnight-blue dark:fill-white"
								strokeClassName="stroke-midnight-blue dark:stroke-white"
							/>
						</div>
						<p class="text-body-l">
							<span class="text-bright-blue">Press release</span> • March 13, 2023 •
							<span class="text-bright-blue">3 mins</span>
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

	<div class="mt-15 ml-32 h-[1.5px] bg-black-600">
		<div
			class="h-[1.5px] bg-bright-blue transition-[width] duration-300"
			style={`width: calc(100% / ${lastIndex + 1 - currentPageIndex})`}
		/>
	</div>
</section>

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
</style>
