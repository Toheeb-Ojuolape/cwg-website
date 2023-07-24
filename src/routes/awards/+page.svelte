<script>
	import '../services/services-styles.css';
    import './awards-styles.css'
	import AwardsBlock from './AwardsBlock.svelte';
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">
                </h1>
				<p class="mb-9 header-title-desc">
                </p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<section class="mt-10 mb-20 section-container mx-auto">
			<div class="text-center mb-5 m-auto max-w-[550px] section-header">
				<h2 class="text-headline-2 mb-2">Awards</h2>
				<p class="text-body-l font-normal">
					We are an award winning pan African systems solutions company
				</p>
			</div>

            <div class="flex gap-[25px] flex-wrap justify-center">
                <img src="/images/wef.svg" alt="wef" class="awards-company dark:bg-white">
                <img src="/images/oracle.svg" alt="oracle" class="awards-company">
                <img src="/images/dell.svg" alt="dell" class="awards-company">
                <img src="/images/infosys.svg" alt="infosys" class="awards-company">
                <img src="/images/cisco.svg" alt="cisco" class="awards-company">
                <img src="/images/wincor-nixdorf.svg" alt="wincor-nixdorf" class="awards-company dark:bg-white">
                <img src="/images/intelsat.svg" alt="intelsat" class="awards-company">
            </div>
		</section>

        <section class="awards-blocks-wrapper section-container">
            <AwardsBlock />
        </section>
	</div>
</main>

<style>
	header.header {
		background-image: url('/images/awards-banner.jpg');
		background-size: inherit;
		background-position: center 20%;
	}
</style>
