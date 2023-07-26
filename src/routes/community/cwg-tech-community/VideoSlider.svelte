<script lang="ts">
	import { onMount } from 'svelte';
	import type { CWGCommunity } from './types';
	import { CMS_URL } from '$lib/api';

	let currentIndex = 0;
	export let videos: CWGCommunity['videos_section']['video_links'];

	let showModal = false;
	let currentVideoId = '';

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % videos.length;
	};

	const openModal = (videoId: string) => {
		currentVideoId = videoId;
		showModal = true;
	};

	const closeModal = () => {
		currentVideoId = '';
		showModal = false;
	};

	onMount(() => {
		const interval = setInterval(nextSlide, 5000);
		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="slider">
	{#each videos as { slug, thumbnail, title }, i}
		<div>
			{#if i === currentIndex}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="slider-img-wrapper" on:click={() => openModal(slug)}>
					<img
						src={CMS_URL + thumbnail.data?.attributes.url}
						alt={thumbnail.data?.attributes.alternativeText}
						class="slider-img"
					/>
					<img src="/images/play-btn.svg" alt="play" class="play-icon" />
				</div>
				<div class="slider-caption bg-midnight-blue p-5">{title}</div>
				<div class="indicators">
					{#each videos as _, j}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="indicator {j === currentIndex ? 'active' : ''}"
							on:click={() => (currentIndex = j)}
						/>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
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
	.slider img.slider-img {
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
		/* position: absolute;
      bottom: 10px;
      left: 10px; */
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
