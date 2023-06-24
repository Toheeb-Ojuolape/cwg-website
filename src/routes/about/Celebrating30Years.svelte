<script>
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import ThirtyYearsLogo from '$lib/components/Svgs/ThirtyYearsLogo.svelte';
</script>

<section class="box-container mx-auto px-4 lg:px-8 bg-midnight-blue text-white flex pb-11 gap-14">
	<div class="flex-1">
		<ThirtyYearsLogo />

		<h2 class="text-headline-2 mb-5 mt-3">
			Celebrating 30 Years of<br />positioning Africa to Maximise<br />the Future
		</h2>

		<p class="text-body-l mb-12">
			CWG started life through our founder Mr. Austin Okere as Computer Warehouse Group in
			1992, relatively unknown with normal challenges typical with new business. Some 30 years
			later, CWG is now listed on the Nigerian Stock Exchange, now operational in about 17
			countries in the world and has witnessed the emergence of 2 non-founder CEOs.
		</p>

		<a href="/">
			<button class="arrow-button group">
				Read more
				<div class="arrow-right">
					<ArrowRightSolidIcon className="fill-white group-hover:fill-pewter-blue" />
				</div>
			</button>
		</a>
	</div>

	<div class="flex-1 flex gap-4 justify-end pt-8">
		<div class="Frame">
			<div />
			<div />
		</div>

		<div class="Frame">
			<div />
			<div />
			<div />
		</div>

		<div class="Frame">
			<div />
			<div />
			<div />
		</div>
	</div>
</section>

<style>
	.Frame {
		height: 100%;
		width: 210px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.Frame > div {
		height: 134px;
		width: 100%;
		background-color: #ffffff;
	}

	.Frame:nth-child(1) {
		justify-content: center;
	}

	.Frame:nth-child(2) {
		justify-content: center;
	}

	@media (min-width: 1536px) {
		.Frame:nth-child(2) {
			justify-content: flex-end;
		}
	}
</style>
