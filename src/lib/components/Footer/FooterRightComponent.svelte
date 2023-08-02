<script lang="ts">
	import type { SocialMediaHandles } from '$lib/types/footer-types';
	import ArrowRightSolidIcon from '../Svgs/ArrowRightSolidIcon.svelte';
	import FooterLogo from '../Svgs/FooterLogo.svelte';
	import FooterSocials from './FooterSocials.svelte';

	export let socialLinks: SocialMediaHandles['data'];
</script>

<div class="lg:mx-19 pt-20 lg:pt-22 max-h-fit flex flex-col justify-between lg:pb-8">
	<div>
		<div class="flex flex-col items-center">
			<div class="mb-9">
				<a href="/">
					<FooterLogo />
				</a>
			</div>
		</div>

		<div class="flex flex-col items-center lg:mt-[182px]">
			<h6 class="text-headline-6 text-greyish-blue text-center">Stay updated</h6>
			<p class="mt-4 mb-6 text-body-s lg:max-w-[328.3px] text-white text-center">
				Subscribe to our newsletter and receive the latest technology insights and updates
				from the strides of CWG delivered straight to your inbox.
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
		</div>
	</div>

	<FooterSocials {socialLinks} />
</div>
