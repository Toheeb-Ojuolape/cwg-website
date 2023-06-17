<script>
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import VectorLineIcon from '$lib/components/Svgs/VectorLineIcon.svelte';
	import Home2 from '$lib/images/home_2.png';
</script>

<section class="box-container mt-7 mb-9 grid grid-cols-2 mx-auto">
	<div>
		<img class="h-full" src={Home2} alt="section two" />
	</div>

	<div class="bg-midnight-blue pl-[46px] py-[30px] flex text-white">
		<div class="h-full flex flex-col flex-1">
			<div class="flex-1">
				<p class="text-body-l">CWG:NL</p>
				<p class="text-headline-1 flex items-center">
					<svg
						width="49"
						height="47"
						viewBox="0 0 49 47"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4.992 46.4317V27.8717H0V24.0317H4.992V18.0157H0V14.1757H4.992V0.991699H9.728L18.88 14.1757H35.072V0.991699H40.32V14.1757H48.128V18.0157H40.32V24.0317H48.128V27.8717H40.32V46.4317H35.584L22.656 27.8717H10.24V46.4317H4.992ZM10.24 14.1757H13.12L10.24 10.0157V14.1757ZM10.24 24.0317H19.968L15.808 18.0157H10.24V24.0317ZM25.792 24.0317H35.072V18.0157H21.568L25.792 24.0317ZM35.072 37.4077V27.8717H28.416L35.072 37.4077Z"
							fill="white"
						/>
					</svg>
					0.96
				</p>
			</div>
			<p class="text-body-l">Share Price • 26/03/2023</p>
		</div>

		<VectorLineIcon />

		<div class="pr-15 flex flex-col justify-between pl-14">
			<p class="text-body-l">FY 2021 Highlights</p>

			<div class="grid grid-cols-2 gap-8">
				<div>
					<p class="text-headline-5">₦11.7b</p>
					<p class="text-body-xs text-burlywood">Revenue</p>
				</div>

				<div>
					<p class="text-headline-5">₦616m</p>
					<p class="text-body-xs text-burlywood">Profit Before Tax</p>
				</div>

				<div>
					<p class="text-headline-5">₦2.9b</p>
					<p class="text-body-xs text-burlywood">Gross Profit</p>
				</div>

				<div>
					<p class="text-headline-5">₦497m</p>
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
