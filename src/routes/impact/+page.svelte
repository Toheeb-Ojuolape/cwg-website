<script>
	import '../services/services-styles.css';
	import CwgInitiatives from './CwgInitiatives.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">Impact</h1>

				<p class="mb-9 header-title-desc">
					Unlocking Potential and Driving Positive Change through Technology
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					Empowering communities and shaping a brighter future through technology
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					At CWG, we believe in the transformative power of technology and its ability to
                    drive positive change in communities, industries, and lives. Through our impactful
                    initiatives, we are dedicated to unlocking the potential of individuals, empowering
                    communities, and shaping a brighter future.
				</p>
				<p class="text-body-s font-light lg:text-body-l my-2">
					With a rich legacy spanning over three decades, CWG has been at the forefront of driving
                    technological advancements in Africa. We have witnessed firsthand the profound impact that
                    technology can have on societies, economies, and the overall human experience. It is this
                    belief that fuels our passion to go beyond business success and contribute meaningfully to
                    the greater good.
				</p>
			</div>
			<div class="section-img-side pt-2">
				<img src="/images/people-working.jpg" alt="people-working" class="section-img" />
			</div>
		</section>

		<hr class="gray-line" />

		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-13 m-auto max-w-[882px] section-header">
				<h2 class="text-headline-2 mb-2">CWG Initiatives: Empowering Through Technology</h2>
				<p class="text-body-l font-normal">
					Transforming Minds, Fostering Innovation, and Building Communities
				</p>
			</div>

			<div
				class="grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[40px] gap-y-[60px] industries-wrapper"
			>
				<CwgInitiatives />
			</div>
		</section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/impact-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
