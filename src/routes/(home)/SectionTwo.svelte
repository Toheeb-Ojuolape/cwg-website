<script>
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import VectorLineIcon from '$lib/components/Svgs/VectorLineIcon.svelte';
	import Home2 from '$lib/images/home_2.png';
</script>

<section class="box-container lg:mt-7 mb-9 grid grid-cols-1 lg:grid-cols-2 mx-auto">
	<div>
		<img class="h-full" src={Home2} alt="section two" />
	</div>

	<div
		class="bg-midnight-blue pl-4 lg:pl-[46px] py-[30px] flex flex-col gap-6 lg:gap-0 lg:flex-row text-white"
	>
		<div class="h-full flex flex-col flex-1">
			<div class="flex-1">
				<p class="text-body-m font-light lg:text-body-l">CWG:NL</p>
				<p class="text-headline-2 lg:text-headline-1 flex items-center">₦0.96</p>
			</div>
			<p class="text-body-l">Share Price • 26/03/2023</p>
		</div>

		<div class="hidden lg:block">
			<VectorLineIcon />
		</div>

		<div class="lg:pr-15 flex flex-col justify-between lg:pl-14">
			<p class="text-body-l">FY 2021 Highlights</p>

			<div class="grid grid-cols-2 gap-8">
				<div>
					<p class="text-headline-6 lg:text-headline-5">₦11.7b</p>
					<p class="text-body-xs text-burlywood">Revenue</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">₦616m</p>
					<p class="text-body-xs text-burlywood">Profit Before Tax</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">₦2.9b</p>
					<p class="text-body-xs text-burlywood">Gross Profit</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">₦497m</p>
					<p class="text-body-xs text-burlywood">Profit After Tax</p>
				</div>
			</div>

			<a href="/" class="arrow-button group">
				See annual reports
				<div class="arrow-right">
					<ArrowRightSolidIcon className="group-hover:fill-pewter-blue" />
				</div>
			</a>
		</div>
	</div>
</section>
