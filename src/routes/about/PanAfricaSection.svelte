<script>
	import Countup from '$lib/components/Countup.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
</script>

<section class="box-container mx-auto pl-4 lg:pl-8 2xl:pl-0 flex items-center gap-23">
	<div class="flex-1">
		<h2 class="text-headline-2 mb-7">We Are Pan African</h2>
		<div class="text-body-l flex flex-col gap-4 mb-12">
			<p>
				Our Footprint spans across West, East, and Central Africa Regions. CWG provides
				resources for level 1-4 management across all countries, and partners with IT
				services organizations to deliver level 1& 2 resources in other African countries.
			</p>

			<p>
				In 2016, Deloitte worked with CWG Plc to build an ecosystem of Service Providers in
				Sub-Saharan Africa under its PAN Africa Initiative – to help its numerous clients in
				addressing the challenges in the new converged arena and to help service providers
				to provide the best of the breed services for their subscribers. In 2018 CWG
				reorganized its services business under the CWG Support hub to consolidate various
				support services and strengthen its PAN Africa support.
			</p>
		</div>
		<a href="/"
			><button class="arrow-button group"
				>Learn more about our partners
				<div class="arrow-right">
					<ArrowRightSolidIcon
						className="fill-midnight-blue dark:fill-white group-hover:fill-pewter-blue"
					/>
				</div></button
			></a
		>
	</div>

	<div class="w-[537px] h-[490px] bg-pewter-blue flex flex-col items-center justify-center">
		<div class="flex mb-22 justify-between gap-22">
			<div>
				<p class="text-headline-1"><Countup value={4} /></p>
				<p class="text-body-l">Operation Hubs</p>
			</div>

			<div>
				<p class="text-headline-1"><Countup value={50} suffix="+" /></p>
				<p class="text-body-l">Awards</p>
			</div>
		</div>

		<div class="flex gap-[114px]">
			<div>
				<p class="text-headline-1"><Countup value={13} /></p>
				<p class="text-body-l">Partnerships</p>
			</div>

			<div>
				<p class="text-headline-1"><Countup value={26} suffix="+" /></p>
				<p class="text-body-l">Countries</p>
			</div>
		</div>
	</div>
</section>
