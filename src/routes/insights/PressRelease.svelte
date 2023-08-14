<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';

	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { CMS_URL } from '$lib/api';
	import { format } from 'date-fns';
	import type { CMSBlog } from '$lib/types/common-types';
	import { onMount } from 'svelte';

	let carousel: any;

	export let newsThumbails: CMSBlog[];
	export let autoplay = false;

	let currentPageIndex = 0;

	let lastIndex = Math.round(newsThumbails.length / 3);

	let innerWidth = 0;
	let isMobile = true;

	$: if (innerWidth <= 768) lastIndex = newsThumbails.length - 1;
	$: isMobile = innerWidth <= 768;

	function onWindowResize(ev: any) {
		innerWidth = ev.target?.innerWidth ?? 0;
	}

	function onPageChange(event: { detail: number }) {
		currentPageIndex = event.detail;
	}

	onMount(function () {
		if (window.innerWidth <= 768) {
			lastIndex = newsThumbails.length - 1;
		}
		isMobile = window.innerWidth <= 768;
	});
</script>

<svelte:window on:resize={onWindowResize} />

<div class="relative">
	{#if browser}
		<Carousel
			on:pageChange={onPageChange}
			bind:this={carousel}
			autoplay={isMobile && autoplay}
			arrows={false}
			infinite={isMobile && autoplay}
			dots={false}
			particlesToShow={isMobile ? 1 : 3}
			particlesToScroll={isMobile ? 1 : 2}
		>
			{#each newsThumbails as { attributes: { date_published, blog_type, cover_image, read_duration_mins, title, slug } }, index}
				<a
					href={`/post/${slug}`}
					class:Carousel__item1={index === 0}
					class="block group w-[calc(100%/3)] lg:ml-[72px]"
				>
					<div class="bg-neon-blue pt-[70%] relative w-full mb-[30px] overflow-hidden">
						<img
							src={CMS_URL + cover_image.data?.attributes.url}
							alt={title}
							class="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110 bg-img"
						/>
					</div>
					<div class="flex flex-col sm:flex-row gap-7 mb-9">
						<h6 class="text-headline-6 sm:min-h-[93px] flex-1">
							{title}
						</h6>
						<ArrowRightLong
							fillClassName="fill-midnight-blue dark:fill-white"
							strokeClassName="stroke-midnight-blue dark:stroke-white"
						/>
					</div>
					<p class="text-body-l">
						<span class="text-bright-blue">{blog_type.data?.attributes.name ?? ''}</span
						>
						• {date_published ? format(new Date(date_published), 'MMMM dd, yyyy') : ''} •
						<span class="text-bright-blue">{read_duration_mins} mins</span>
					</p>
				</a>
			{/each}

			{#if !isMobile}
				<div class="" />
				<div class="" />
			{/if}
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

	@media (max-width: 640px) {
		.text-headline-6 {
			font-size: 20px;
		}
	}
</style>
