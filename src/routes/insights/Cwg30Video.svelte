<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { DataImage } from '$lib/types/common-types';
	import type { InsightsPageData } from './types';

	let showModal = false;
	let currentVideoId = '';

	export let videoId: InsightsPageData['event_section']['youtube_video_id'];
	export let thumbnail: DataImage;

	const openModal = () => {
		currentVideoId = videoId;
		showModal = true;
	};

	const closeModal = () => {
		currentVideoId = '';
		showModal = false;
	};
</script>

<div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="slider-img-wrapper" on:click={() => openModal()}>
		<img
			src={CMS_URL + thumbnail.data?.attributes.url}
			alt="Video Thumbnail"
			class="slider-img"
		/>
		<img src="/images/play-btn.svg" alt="play" class="play-icon" />
	</div>
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
	.slider-img-wrapper {
		width: 100%;
		position: relative;
		cursor: pointer;
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
