<script lang="ts">
	import { type ActionResponse, createNewsletterAction } from '$lib/create-newsletter-action';
	import type { SocialMediaHandles } from '$lib/types/footer-types';
	import ArrowRightSolidIcon from '../Svgs/ArrowRightSolidIcon.svelte';
	import FooterLogo from '../Svgs/FooterLogo.svelte';
	import FooterSocials from './FooterSocials.svelte';

	export let socialLinks: SocialMediaHandles['data'];

	let email = '';
	let response: ActionResponse = { error: '', success: false };

	async function handleSubmitForm() {
		response = await createNewsletterAction({ email });
		if (response.success) {
			email = '';
		}
	}
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
			<form on:submit|preventDefault={handleSubmitForm} class="relative">
				<div class="mb-[82px]">
					<input
						class="mb-1 pl-4 pr-8 focus-within:outline focus-within:outline-white text-white peer h-11 w-[300px] bg-transparent border border-black-600 placeholder:text-pewter-blue placeholder:text-button-s"
						placeholder="My email..."
						type="email"
						bind:value={email}
					/>
					{#if response.error}
						<span class="text-error block text-body-s">{response.error}</span>
					{/if}

					{#if response.success}
						<span class="text-light-green block text-body-s"
							>Successfully signed up</span
						>
					{/if}
					<div class="absolute right-2 top-[10px]">
						<ArrowRightSolidIcon />
					</div>
				</div>
			</form>
		</div>
	</div>

	<FooterSocials {socialLinks} />
</div>
