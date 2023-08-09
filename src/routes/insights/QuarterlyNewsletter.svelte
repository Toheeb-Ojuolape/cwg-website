<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';

	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import { CMS_URL } from '$lib/api';
	import { format } from 'date-fns';
	import type { CMSBlog } from '$lib/types/common-types';

	let carousel: any;
	export let newsletters: CMSBlog[];

	let currentPageIndex = 0;
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
			{#each newsletters as { attributes: { date_published, cover_image, title, slug } }}
				<a href={`/blog/${slug}`} class="slider bg-midnight-blue relative pb-10">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="slider-img-wrapper">
						<img
							src={CMS_URL + cover_image.data?.attributes.url}
							alt="Slide"
							class="slider-img"
						/>
					</div>
					<div class="slider-caption p-5">{title}</div>
					<div class="newsletter-date text-[14px] text-pewter-blue">
						{date_published ? format(new Date(date_published), 'MMM dd, yyyy') : ''}
					</div>
				</a>
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

	@media (max-width: 640px) {
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
