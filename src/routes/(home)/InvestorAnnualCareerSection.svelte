<script>
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
</script>

<section class="box-container mx-auto grid lg:grid-cols-3">
	<div class="Section__card">
		<div>
			<div class="Section__card__header">
				<p class="text-headline-3 lg:text-headline-2">Investor Relations</p>
				<ArrowRightLong />
			</div>
			<p class="text-body-m font-light lg:text-body-l">
				Today’s CWG has defined a clear strategy to lead in the era of information
				technology.
			</p>
		</div>
	</div>

	<div class="Section__card">
		<div>
			<div class="Section__card__header">
				<p class="text-headline-3 lg:text-headline-2">Annual Reports</p>
				<ArrowRightLong />
			</div>
			<p class="text-body-m font-light lg:text-body-l">
				Audited financials for the year showcasing record improvement in organic sales
				growth and profitability
			</p>
		</div>
	</div>

	<div class="Section__card">
		<div>
			<div class="Section__card__header">
				<p class="text-headline-3 lg:text-headline-2">Careers at CWG</p>
				<ArrowRightLong />
			</div>
			<p class="text-body-m font-light lg:text-body-l">
				Discover more about our employees and explore the possibility of joining our
				successful brand.
			</p>
		</div>
	</div>
</section>

<style>
	.Section__card {
		height: 384px;
		background-position: center;
		background-size: cover;
		position: relative;
		color: white;
	}

	.Section__card:first-child {
		background-image: url(../../lib/images/investor-relations.png);
	}

	.Section__card:nth-child(2) {
		background-image: url(../../lib/images/annual-reports.png);
	}

	.Section__card:last-child {
		background-image: url(../../lib/images/cwg-careers.png);
	}

	.Section__card > div {
		height: 100%;
		padding: 84.84px 33.5px 44.16px 33.5px;
	}

	.Section__card__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 129px;
	}

	@media (max-width: 1024px) {
		.Section__card {
			height: 250px;
		}

		.Section__card > div {
			padding: 20px 16px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.Section__card__header {
			margin-bottom: 0px;
		}
	}
</style>
