<script lang="ts">
	import { applyAction, deserialize, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import type { SocialMediaHandles } from '$lib/types/footer-types';
	import ArrowRightSolidIcon from '../Svgs/ArrowRightSolidIcon.svelte';
	import FooterLogo from '../Svgs/FooterLogo.svelte';
	import FooterSocials from './FooterSocials.svelte';

	export let socialLinks: SocialMediaHandles['data'];

	let error: string | undefined;
	let success = false;

	async function handleSubmit(event: any) {
		error = undefined;
		success = false;

		// @ts-ignore
		const data = new FormData(this);

		// @ts-ignore
		const response = await fetch(this.action, {
			method: 'POST',
			body: data
		});

		const result = deserialize(await response.text());

		if (result.type !== 'success') {
			// @ts-ignore
			error = result.data.error;
		}

		if (result.type === 'success') {
			success = true;
			await invalidateAll();
		}

		applyAction(result);
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
			<form
				method="POST"
				action="/insights"
				on:submit|preventDefault={handleSubmit}
				class="relative"
				use:enhance
			>
				<div class="mb-[82px]">
					<input
						class="mb-1 pl-4 pr-8 focus-within:outline focus-within:outline-white text-white peer h-11 w-[300px] bg-transparent border border-black-600 placeholder:text-pewter-blue placeholder:text-button-s"
						placeholder="My email..."
						type="email"
						name="email"
					/>
					{#if error}
						<span class="text-error block text-body-s">{error}</span>
					{/if}

					{#if success}
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
