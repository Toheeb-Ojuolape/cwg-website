<script>
	import ArrowRightSolidIcon from '../Svgs/ArrowRightSolidIcon.svelte';
	import FooterLogo from '../Svgs/FooterLogo.svelte';
	import GlobeIcon from '../Svgs/GlobeIcon.svelte';
	import FooterSocials from './FooterSocials.svelte';
</script>

<div class="mx-19 pt-22 max-h-fit flex flex-col justify-between pb-8">
	<div class="flex flex-col items-center">
		<div class="mb-9">
			<FooterLogo />
		</div>
		<button
			class="text-button-l flex gap-11 items-center h-[46px] border border-white px-7 mx-auto text-white transition duration-500 hover:scale-110 active:bg-white/10"
			>English
			<GlobeIcon />
		</button>
	</div>

	<div class="flex flex-col items-center">
		<h6 class="text-headline-6 text-greyish-blue text-center">Stay updated</h6>
		<p class="mt-4 mb-6 text-body-s max-w-[328.3px] text-white text-center">
			Subscribe to our newsletter and receive the latest technology insights and updates from the
			strides of CWG delivered straight to your inbox.
		</p>
		<div class="relative">
			<input
				class="mb-[82px] pl-4 pr-8 focus-within:outline focus-within:outline-white text-white peer h-11 w-[300px] bg-transparent border border-black-600 placeholder:text-pewter-blue placeholder:text-button-s"
				placeholder="My email..."
				type="email"
			/>
			<div class="absolute right-2 top-[10px]">
				<ArrowRightSolidIcon />
			</div>
		</div>
		<FooterSocials />
	</div>
</div>
