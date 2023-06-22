<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import HomeQualityPolicy from '$lib/images/home-quality-policy.png';
</script>

<section
	class="box-container mx-auto grid grid-cols-3 gap-[42px] w-full pl-4 lg:pl-8 2xl:pl-0 border-y-[1.5px] border-y-black-600 dark:border-y-white/10 mt-[71px]"
>
	<div class="h-full flex flex-col justify-center">
		<h2 class="text-headline-2 mb-6">Our Quality Policy</h2>
		<p class="text-body-l mb-6">
			CWG Plc shall deliver ICT Solutions that will add value to our customer’s operation,
			meet and exceed our customer’s expectation and we shall deliver them right first time
			and all the time
		</p>
		<a href="/">
			<button class="arrow-button group"
				>Learn more
				<div class="mt-1">
					<ArrowRightLong
						strokeClassName="stroke-midnight-blue group-hover:stroke-pewter-blue dark:stroke-white"
						fillClassName="fill-midnight-blue group-hover:stroke-pewter-blue"
					/>
				</div></button
			>
		</a>
	</div>

	<div class="col-span-2">
		<img class="h-[335px] w-full" src={HomeQualityPolicy} alt="home-quality-policy" />
	</div>
</section>
