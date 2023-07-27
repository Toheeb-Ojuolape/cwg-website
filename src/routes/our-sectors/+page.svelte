<script>
    import '../services/services-styles.css';
    import './sectors-style.css'
    import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import SectorsWeServe from './SectorsWeServe.svelte';
	import CwgPolices from './CwgPolices.svelte';
</script>

<main>
    <header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">Our Sectors </h1>

				<p class="mb-9 header-title-desc">
					CWG has experience across many industries. Our group brings each client a combination
                    of deep industry knowledge, wide array of IT services and innovative solutions.
				</p>
			</div>
		</div>
	</header>

    <section class="section-container py-20 bg-whitish-blue dark:bg-dark-highlight">
        <div class="section-header">
            <h2 class="text-headline-2 mb-4">Sectors we serve</h2>
        </div>
        <div class="sectors-we-serve-wrapper grid md:grid-cols-2 gap-[30px] md:gap-[40px]">
            <SectorsWeServe />
        </div>
    </section>

    <section class="section-container py-20">
        <div class="section-header text-center">
            <h2 class="text-headline-2 mb-4">CWG’s Policies</h2>
        </div>
        <div class="cwg-policies-wrapper grid md:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[40px] mt-10">
            <CwgPolices />
        </div>
    </section>

    <MoreAboutUs />
</main>

<style>
	header.header {
		background-image: url('/images/sectors-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>