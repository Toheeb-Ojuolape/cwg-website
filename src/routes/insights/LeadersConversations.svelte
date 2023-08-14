<script lang="ts">
	import { browser } from '$app/environment';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';

	// @ts-ignore
	import Carousel from 'svelte-carousel';
	import type { InsightsPageData } from './types';
	import { CMS_URL } from '$lib/api';
	import { onMount } from 'svelte';

	let carousel: any;

	let currentPageIndex = 0;
	export let conversationsThumbails: InsightsPageData['podcast_section']['podcasts']['data'];
	let lastIndex = Math.round(conversationsThumbails.length / 3);

	function onPageChange(event: { detail: number }) {
		currentPageIndex = event.detail;
	}

	let showModal = false;
	let currentVideoId = '';
	let innerWidth = 0;

	$: if (innerWidth <= 768) lastIndex = conversationsThumbails.length;

	const openModal = (videoId: string) => {
		currentVideoId = videoId;
		showModal = true;
	};

	const closeModal = () => {
		currentVideoId = '';
		showModal = false;
	};

	function onWindowResize(ev: any) {
		innerWidth = ev.target?.innerWidth ?? 0;
	}

	onMount(function () {
		innerWidth = window.innerWidth;
	});
</script>

<svelte:window on:resize={onWindowResize} />

<div class="relative">
	{#if browser}
		<Carousel
			on:pageChange={onPageChange}
			bind:this={carousel}
			arrows={false}
			infinite={false}
			dots={false}
			particlesToShow={innerWidth <= 768 ? 1 : 3}
			particlesToScroll={innerWidth <= 768 ? 1 : 2}
		>
			{#each conversationsThumbails as { attributes: { thumbnail, title, uuid, youtube_video_id } }}
				<div class="slider bg-midnight-blue">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="slider-img-wrapper" on:click={() => openModal(youtube_video_id)}>
						<img
							src={CMS_URL + thumbnail.data?.attributes.url}
							alt={title}
							class="slider-img"
						/>
						<img src="/images/play-btn.svg" alt="play" class="play-icon" />
					</div>
					<div class="slider-caption p-5">{title}</div>
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

{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal" on:click={closeModal}>
		<iframe
			src={`https://www.youtube.com/embed/${currentVideoId}`}
			title="Video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
{/if}

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
	img.play-icon {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: transform 1.2s;
	}
	.slider-img-wrapper:hover img.play-icon {
		transform: translate(-50%, -50%) scale(1.1);
	}

	.slider-caption {
		width: 100%;
		color: white;
		font-size: 18px;
		cursor: pointer;
	}

	.indicators {
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		z-index: 1;
		margin-top: 20px;
	}

	.indicator {
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background-color: #d1d1d1;
		margin: 0 3px;
		cursor: pointer;
	}

	.indicator.active {
		background-color: var(--color-midnight-blue);
		width: 26px;
		border-radius: 12px;
	}

	.modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 999;
		padding: 10px;
	}

	.modal iframe {
		width: 100%;
		max-width: 800px;
		height: 450px;
	}
</style>
