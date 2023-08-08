<script lang="ts">
	import '../services/services-styles.css';
	import '../community/community-styles.css';
	import './partners-styles.css';
	import EsteemedClientsLogo from './EsteemedClientsLogo.svelte';
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import OemPartnersLogos from './OemPartnersLogos.svelte';
	import type { PageData } from './$types';
	import { CMS_URL } from '$lib/api';
	import { theme } from '$lib/stores/theme-store';

	export let data: PageData;

	const { partnersPage, oemPartners } = data;
</script>

<main>
	<header
		class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
		style={`background-image: url(${CMS_URL}${partnersPage.header.background_image.data?.attributes.url})`}
	>
		<div class="section-container">
			<div class="header-text-wrapper">
				<h1 class="text-headline-2 header-title lg:text-headline-1">
					{partnersPage.header.title}
				</h1>

				<p class="mb-9 header-title-desc">
					{partnersPage.header.description}
				</p>
			</div>
		</div>
	</header>

	<div id="sections-wrapper" class="py-5">
		<!--=== CWG-PWC Section ===-->
		<section id="cwg-pwc-section" class="section-container grid-content-box p-10">
			<div class="section-text-side">
				<p class="text-body-s font-light lg:text-body-l my-2">
					{@html partnersPage.section_one_content}
				</p>
			</div>
			<div class="flex items-center justify-center logo-div-wrapper">
				{#if $theme === 'light'}
					{#each partnersPage.section_one_images.data as { attributes: { url, alternativeText } }}
						<div class="logo-div p-5 cwg-img-wrapper">
							<img src={CMS_URL + url} alt={alternativeText} />
						</div>
					{/each}
				{:else}
					{#each partnersPage.section_one_images_dark.data as { attributes: { alternativeText, url } }}
						<div class="logo-div p-5 cwg-img-wrapper">
							<img src={CMS_URL + url} alt={alternativeText} />
						</div>
					{/each}
				{/if}
			</div>
		</section>
		<!--=== end of CWG-PWC Section ===-->

		<!--=== OEM-Partners Section ===-->
		<section class="section-container py-20">
			<div class="text-center mb-13 m-auto max-w-[800px] section-header">
				<h2 class="text-headline-2 mb-2">{partnersPage.oem_partner_section_title}</h2>
				<p class="text-body-l font-normal">
					{partnersPage.oem_partner_section_subtitle}
				</p>
			</div>

			<div class="oem-partners-wrapper relative pb-20">
				<OemPartnersLogos logos={oemPartners} />
			</div>
		</section>
		<!--=== end of OEM-Partners Section ===-->

		<!--=== ATM-Support-Coverage Section ===-->
		<section
			class="section-container mx-auto pt-20 pb-15 bg-whitish-blue dark:bg-dark-highlight"
		>
			<div class="text-center mb-13 m-auto max-w-[818px] section-header">
				<h2 class="text-headline-2 mb-2">{partnersPage.support_coverage_section_title}</h2>
			</div>
			<div
				class="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-5 pt-2 management-items-wrapper"
			>
				{#each partnersPage.support_coverage_section_cards as { title, subtitle, image }}
					<div class="management-item sm:p-10 p-5">
						<img
							src={CMS_URL + image.data?.attributes.url}
							alt={title}
							class="management-item-img"
						/>
						<h5 class="text-headline-3 lg:text-headline-1 pt-5 pb-3">{title}</h5>
						<p>{subtitle}</p>
					</div>
				{/each}
			</div>
		</section>
		<!--=== end of ATM-Support-Coverage Section ===-->

		<!--=== Esteemed-Clients Section ===-->
		<section class="esteemed-clients-section section-container grid-content-box-3 pt-20 pb-10">
			<div class="section-text-side">
				<h2 class="text-headline-4 lg:text-headline-2">
					{partnersPage.esteemed_client_section_title}
				</h2>
				<p class="text-body-s font-light lg:text-body-l my-2">
					{partnersPage.esteemed_client_section_subtitle}
				</p>
			</div>
			<div class="section-img-side pt-2 pb-15 relative">
				<EsteemedClientsLogo esteemedClients={partnersPage.esteemed_clients.data} />
			</div>
		</section>
		<!--=== end of Esteemed-Clients Section ===-->

		<!--=== More-About-Us Section ===-->
		<MoreAboutUs content={partnersPage.more_about_us} />
		<!--=== end of More-About-Us Section ===-->
	</div>
</main>

<style>
	header.header {
		background-size: inherit;
		background-position: center 20%;
	}
	#cwg-pwc-section {
		background-image: url(/images/pattern-bg.png);
	}
</style>
