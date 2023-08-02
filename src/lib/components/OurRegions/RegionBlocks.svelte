<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { RegionData } from '$lib/types/region-types';
	import ArrowRightLong from '../Svgs/ArrowRightLong.svelte';
	import Connection from '../Svgs/Connection.svelte';
	import Pin from '../Svgs/Pin.svelte';

	let showModal = false;
	export let regions: RegionData[];

	let selectedRegion: RegionData['attributes'] | undefined;

	const openModal = (region: RegionData['attributes']) => {
		selectedRegion = region;
		showModal = true;
	};
	const closeModal = () => {
		showModal = false;
	};
</script>

{#each regions as { attributes: region }}
	<div class="region-block relative bg-whitish-blue dark:bg-black">
		<div class="region-block-img h-[185px] w-full relative">
			<img
				src={CMS_URL + region.image.data?.attributes.url}
				alt={region.name}
				class="bg-img"
			/>
		</div>
		<div class="bg-midnight-blue text-white px-[30px] py-[15px]">
			<div class="region-name text-[18px]">{region.name}</div>
			<a href={`mailto:${region.email}`} class="region-email text-[14px] text-pewter-blue"
				>{region.email}</a
			>
		</div>
		<div class="more-region-details text-[15px] pt-5 pb-20 px-3">
			<div class="flex gap-[5px] pb-5">
				<div class="mrd-icon-wrapper">
					<Pin />
				</div>
				<div class="text-deep-blue dark:text-white">
					{region.address}
				</div>
			</div>
			<div class="flex gap-[5px] pb-5">
				<div class="mrd-icon-wrapper">
					<Connection />
				</div>
				<div>
					{region.region_phone_numbers.data
						.map((item) => item.attributes.phone_number)
						.join(', ')}
				</div>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="read-more-div text-[18px] flex justify-between"
				on:click={() => openModal(region)}
			>
				<span>Read more</span>
				<ArrowRightLong strokeClassName="stroke-blue" />
			</div>
		</div>
	</div>
{/each}

<!--=== Region-Modal ====-->
{#if showModal}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="modal" on:click={closeModal}>
		<div
			class="modal-content relative overflow-auto max-h-[80%] w-[90%] sm:w-[80%] max-w-[920px] p-5 pt-20 lg:p-10 lg:pr-15 bg-whitish-blue dark:bg-black"
		>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img src="/images/close.svg" alt="close" class="close" on:click={closeModal} />

			<div class="modal-region-contents grid lg:grid-cols-2 gap-[30px]">
				<div class="modal-region-img-side lg:flex lg:flex-col">
					<div class="region-block-img h-[185px] w-full relative flex-1">
						<img
							src={CMS_URL + selectedRegion?.image.data?.attributes.url}
							alt={selectedRegion?.name}
							class="bg-img"
						/>
					</div>
					<div class="bg-midnight-blue text-white px-[30px] py-[15px]">
						<div class="region-name text-[18px]">CWG Nigeria</div>
						<a
							href={`mailto:${selectedRegion?.email}`}
							class="region-email text-[14px] text-pewter-blue"
							>{selectedRegion?.email}</a
						>
					</div>
				</div>
				<div class="modal-region-txt-side text-[15px]">
					<p class="pb-2">{@html selectedRegion?.content}</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.region-block {
		border-bottom: 10px solid var(--color-midnight-blue);
		position: relative;
	}
	.region-block::before {
		position: absolute;
		content: '';
		width: 35%;
		height: 10px;
		bottom: -10px;
		right: 0;
	}
	.region-block:nth-child(4n + 1)::before {
		background-color: var(--color-light-green);
	}
	.region-block:nth-child(4n + 2)::before {
		background-color: var(--color-vivid-burgundy);
	}
	.region-block:nth-child(4n + 3)::before {
		background-color: var(--color-naples-yellow);
	}
	.region-block:nth-child(4n + 4)::before {
		background-color: var(--color-burlywood);
	}

	.read-more-div {
		cursor: pointer;
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
	.modal img.close {
		right: 20px;
		top: 20px;
		width: 55px;
	}
</style>
