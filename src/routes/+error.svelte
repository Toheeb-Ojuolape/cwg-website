<script lang="ts">
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import { page } from '$app/stores';
</script>

<main id="error-page-wrapper" class="min-h-[600px] relative">
	<div class="error-details max-w-[580px] m-auto text-center">
		<h1 class="error-code text-[180px] leading-[177px]">{$page.status}</h1>
		<h3 class="error-title text-[32px] mb-[15px]">{$page.error?.message}</h3>
		<p class="text-[24px]">
			We’re sorry, {$page.status === 404
				? 'the page you requested could no be found'
				: 'something went wrong'}. <br />
			Please go back to the home page
		</p>

		<a
			href="/"
			class="flex gap-[10px] mt-[32px] text-[24px] items-center justify-center hover-scale"
		>
			<div class="arrow-left-long">
				<ArrowRightLong strokeClassName="stroke-midnight-blue dark:stroke-white" />
			</div>
			<span>Home page</span>
		</a>
	</div>
</main>

<style>
	main#error-page-wrapper {
		background-image: url(/images/error-page-bg.png);
		background-size: cover;
		background-position: center;
	}
	.arrow-left-long {
		transform: rotate(180deg);
	}
	.error-details {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
