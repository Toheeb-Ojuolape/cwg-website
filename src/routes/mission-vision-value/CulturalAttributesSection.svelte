<script lang="ts">
	import ArrowDownIcon from '$lib/components/Svgs/ArrowDownIcon.svelte';

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
		<h2 class="text-headline-2 mb-6">Our Cultural Attributes</h2>

		<div class="flex flex-col gap-[10px]">
			{#each Array(5) as _, i}
				<div class="border-b border-b-black-600 dark:border-b-black-900 pb-8">
					<button
						on:click={() => onChangeCurrentIndex(i)}
						class="flex justify-between items-center w-full"
					>
						<h6 class="text-headline-6">Change/Adaptability</h6>
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
							At CWG, listening to our people is important, and we want everyone to
							feel like they are heard, and that their opinion matters. We also want
							to ensure that everyone understands that the work they do is valued. We
							go the extra mile to get to know our teams on a personal level, and
							build a foundation of trust.
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<div class="flex-[2] h-[600px] bg-burlywood" />
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
