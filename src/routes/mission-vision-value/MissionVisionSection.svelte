<script>
	import LineIcon from '$lib/components/Svgs/LineIcon.svelte';
	import MissionCompass from '$lib/components/Svgs/MissionCompass.svelte';
	import VisionEye from '$lib/components/Svgs/VisionEye.svelte';
</script>

<section class="section-container">
	<div>
		<MissionCompass />
		<h5 class="text-headline-6 lg:text-headline-5">Mission</h5>
		<p>Positioning Africa to maximize the <br />Future</p>
	</div>

	<LineIcon />

	<div>
		<VisionEye />
		<h5 class="text-headline-6 lg:text-headline-5">Vision</h5>
		<p>
			Our vision is to be the most preferred technology<br /> solutions company out of Africa.
		</p>
	</div>
</section>

<style>
	.section-container {
		padding: 0 16px;
		margin-bottom: 32px;
		display: flex;
		flex-direction: column;
	}

	.section-container > div > p {
		font-size: 15px;
		line-height: 24px;
	}

	@media (min-width: 1024px) {
		.section-container {
			padding: 0 128px;
			margin-bottom: 75px;
			flex-direction: row;
			align-items: center;
			gap: 104px;
		}

		.section-container > div {
			flex: 1;
		}

		.section-container > div > h5 {
			margin-bottom: 20px;
			margin-top: 30px;
		}

		.section-container > div > p {
			font-size: 18px;
			line-height: 26px;
		}
	}
</style>
