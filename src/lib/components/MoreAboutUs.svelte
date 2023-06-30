<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import AboutImage from '$lib/images/about-hero.png';
</script>

<section class="section-container mt-8 lg:mt-15 mb-15 lg:mb-[114px]">
	<div class="flex items-center gap-6 mb-8 lg:mb-11">
		<h3 class="text-headline-5 lg:text-headline-3">More in About us</h3>
		<hr class="border-t mt-3 border-t-black-600 dark:border-t-black-900 flex-1" />
	</div>

	<div class="flex flex-col lg:flex-row gap-8 lg:gap-10">
		<a href="/" class="w-full lg:w-[380px] group">
			<div class="h-[180px] overflow-hidden mb-3 lg:mb-7">
				<img src={AboutImage} alt="About us" class="AboutImage__block" />
			</div>
			<div
				class="text-body-l font-medium lg:font-normal lg:text-headline-6 flex items-center justify-between"
			>
				Our policies and sectors
				<ArrowRightLong strokeClassName="stroke-midnight-blue dark:stroke-white" />
			</div>
		</a>

		<a href="/mission-vision-value" class="flex-1 group">
			<div class="h-[180px] overflow-hidden mb-3 lg:mb-7">
				<img src={AboutImage} alt="About us" class="AboutImage__block" />
			</div>
			<div
				class="text-body-l font-medium lg:font-normal lg:text-headline-6 flex items-center justify-between"
			>
				Mission, Vision, Value and Culture
				<ArrowRightLong strokeClassName="stroke-midnight-blue dark:stroke-white" />
			</div>
		</a>

		<a href="/" class="w-full lg:w-[380px] group">
			<div class="h-[180px] overflow-hidden mb-3 lg:mb-7">
				<img src={AboutImage} alt="About us" class="AboutImage__block" />
			</div>
			<div
				class="text-body-l font-medium lg:font-normal lg:text-headline-6 flex items-center justify-between"
			>
				Our Partners
				<ArrowRightLong strokeClassName="stroke-midnight-blue dark:stroke-white" />
			</div>
		</a>
	</div>
</section>

<style>
	.AboutImage__block {
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: all 0.3s;
	}

	.group:hover .AboutImage__block {
		transform: scale(1.25);
	}
</style>
