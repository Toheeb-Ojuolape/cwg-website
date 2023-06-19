<script>
	import DotPager from '$lib/components/DotPager.svelte';
	import { fade, slide, scale, fly } from 'svelte/transition';
	import {
		backInOut,
		bounceInOut,
		circInOut,
		cubicInOut,
		elasticInOut,
		expoInOut,
		quadInOut,
		quintInOut,
		quartInOut,
		sineInOut,
		linear,
		cubicIn
	} from 'svelte/easing';
	import { inview } from 'svelte-inview';

	let shouldShowSlide = false;

	let currentSlide = 0;
</script>

<section
	use:inview
	on:change={(e) => {
		if (e.detail.inView) {
			shouldShowSlide = true;
		}
	}}
	class="section-container mt-[105.65px]"
>
	<h2 class="text-headline-1 text-center mb-16">Industries we dominate</h2>

	<div class="min-h-[324px] mb-[72px]">
		{#each [1, 2, 3] as _, i}
			{#if currentSlide === i}
				<div
					in:slide={{ duration: 1000, delay: 1000, axis: 'x' }}
					out:slide={{ duration: 1000, axis: 'x' }}
					class="grid grid-cols-2 gap-[55.25px]"
				>
					<div class="h-[324px] bg-burlywood" />

					<div class="flex flex-col justify-center">
						<h3 class="text-headline-3 mb-[37.5px]">Financial Service Institutions</h3>
						<p class="text-body-l max-w-[532px] overflow-hidden">
							Globally, Financial Services Institutions are constantly undergoing
							technological upgrades. CWG supports this drive in Financial Technology
							platforms and provides cloud services and software solutions to about
							60% of all financial institutions in Nigeria and has successfully
							implemented and supported Finacle which is the foremost core banking
							application in Nigerian banking system.
						</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>

	<div class="flex justify-center">
		<DotPager length={3} on:onSelectDot={(e) => (currentSlide = e.detail.selected)} />
	</div>
</section>
