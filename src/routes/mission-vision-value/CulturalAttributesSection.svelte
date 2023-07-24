<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowDownIcon from '$lib/components/Svgs/ArrowDownIcon.svelte';
	import type { MissionPage } from '$lib/types/mission-page';

	export let image: MissionPage['culture_attributes_section_image'];
	export let section: MissionPage['culture_attributes_section_accordion'];

	let currentIndex: number | undefined;

	function onChangeCurrentIndex(index: number) {
		if (currentIndex === index) {
			currentIndex = undefined;
			return;
		}
		currentIndex = index;
	}
</script>

<section class="box-container mx-auto bg-black-300 dark:bg-dark-highlight flex items-center gap-19">
	<div class="flex-[3] pl-4 lg:pl-8">
		<h2 class="text-headline-2 mb-6">{section.title}</h2>

		<div class="flex flex-col gap-[10px]">
			{#each section.items as { content, title }, i}
				<div class="border-b border-b-black-600 dark:border-b-black-900 pb-8">
					<button
						on:click={() => onChangeCurrentIndex(i)}
						class="flex justify-between items-center w-full"
					>
						<h6 class="text-headline-6">{title}</h6>
						<div
							class="arrow-container"
							class:arrow-container--expanded={currentIndex === i}
						>
							<ArrowDownIcon />
						</div>
					</button>
					<div class="content" class:content--show={currentIndex === i}>
						<p
							class="text-body-l text-greyish-blue dark:text-black-700 overflow-hidden"
						>
							{@html content ?? ''}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex-[2] h-[600px]">
		<img src={CMS_URL + image.data?.attributes.url} alt="Our Cultural Attributes" />
	</div>
</section>

<style>
	.content {
		display: grid;
		grid-template-rows: 0fr;
		transition: all 0.5s;
		padding-top: 8px;
	}

	.content--show {
		grid-template-rows: 1fr;
	}

	.arrow-container {
		transition: all 0.5s;
	}

	.arrow-container--expanded {
		transform: rotate(180deg);
	}
</style>
