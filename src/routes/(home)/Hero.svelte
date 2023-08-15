<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import Countup from '$lib/components/Countup.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import PlayIcon from '$lib/components/Svgs/PlayIcon.svelte';
	import SoundWaveIcon from '$lib/components/Svgs/SoundWaveIcon.svelte';
	import type { DataImageAttributes } from '$lib/types/common-types';
	import { onDestroy, onMount } from 'svelte';
	import type { HomeCounter } from './types';

	let selectedBanner = 1;

	let showModal = false;
	let currentVideoId = '';
	let interval: NodeJS.Timer;

	export let title: string;
	export let subtitle: string;
	export let images: DataImageAttributes[];
	export let counter: HomeCounter[];

	$: heroImageUrl = images[selectedBanner - 1].attributes.url;

	const openModal = (videoId: string) => {
		currentVideoId = videoId;
		showModal = true;
	};

	const closeModal = () => {
		currentVideoId = '';
		showModal = false;
	};

	const startBannerInterval = () => {
		interval = setInterval(() => {
			if (selectedBanner === 3) {
				selectedBanner = 1;
			} else {
				selectedBanner += 1;
			}
		}, 5000);
	};

	const onChangeBanner = (index: number) => {
		clearInterval(interval);
		selectedBanner = index + 1;
		startBannerInterval();
	};

	onMount(function () {
		startBannerInterval();
	});

	onDestroy(function () {
		clearInterval(interval);
	});
</script>

<header>
	<div
		class="hero transition-all duration-300"
		style={`background-image: url("${CMS_URL}${heroImageUrl}")`}
	>
		<div class="bg-black/50 h-full">
			<div class="mx-auto h-full box-container px-4 pb-4 lg:px-8 2xl:px-0 flex flex-col">
				<div class="h-[116px]" />

				<div class="flex-1 hero-content-wrapper">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="text-white flex justify-end gap-[14px] cursor-pointer"
						on:click={() => openModal('gBOxaKoezBA')}
					>
						<p class="text-body-l">The CWG story</p>
						<PlayIcon />
						<div>
							<SoundWaveIcon />
							<p class="text-body-xxs text-right">SOUND<br />ON</p>
						</div>
					</div>

					<div class="w-full lg:max-w-[645px] text-white text-center lg:text-left">
						<h1 class="text-headline-2 lg:text-headline-1 font-medium mb-7">
							{title}
						</h1>
						<p class="mb-9">{subtitle}</p>
					</div>
				</div>

				<div
					class="hidden relative lg:flex lg:flex-col lg:items-end text-body-list-m text-white gap-4"
				>
					{#each images.slice(0, 3) as _, index}
						<p
							class="transition duration-300 hover:text-pewter-blue cursor-pointer"
							class:text-pewter-blue={selectedBanner === index + 1}
							on:click={() => onChangeBanner(index)}
							on:keypress
						>
							{index + 1}
						</p>
					{/each}

					<div
						class="line h-[2px] bg-pewter-blue w-7 absolute right-8 transition-all duration-500"
						class:translate-y-3={selectedBanner === 1}
						class:translate-y-13={selectedBanner === 2}
						class:translate-y-23={selectedBanner === 3}
					/>
				</div>

				<div
					class="max-w-[1065px] mx-auto w-full text-burlywood grid grid-cols-2 [&>div]:text-center lg:flex lg:flex-row lg:justify-between"
				>
					{#each counter as { suffix, title, value }}
						<div>
							<p class="text-headline-2 lg:text-headline-1">
								<Countup {value} {suffix} />
							</p>
							<p class="text-body-s font-light lg:text-body-l">{title}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</header>

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
	.hero {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 800px;
		width: 100%;
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
	@media (min-width: 1024px) {
		.hero-content-wrapper {
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			justify-content: space-between;
		}
		.hero-content-wrapper > .cursor-pointer {
			position: relative;
			top: 94px;
		}
	}

	@media (max-width: 1024px) {
		.hero {
			height: auto;
		}
	}
</style>
