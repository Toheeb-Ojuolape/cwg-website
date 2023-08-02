<script lang="ts">
	import '../services-styles.css';
	import type { PageData } from './$types';
	import ServiceHeader from './ServiceHeader.svelte';
	import { Position } from './types';
	import SupportSectionLeftImage from './SupportSectionLeftImage.svelte';
	import SectionTextWithImageLeft from './SectionTextWithImageLeft.svelte';
	import SectionTextWithImageRight from './SectionTextWithImageRight.svelte';
	import SectionWithTextLeft from './SectionWithTextLeft.svelte';
	import SectionWithTextRight from './SectionWithTextRight.svelte';
	import ProductSectionAtmServicesNumbers from './ProductSectionAtmServicesNumbers.svelte';
	import EsteemedClientsSection from './EsteemedClientsSection.svelte';
	import SectionWithCards from './SectionWithCards.svelte';
	import BlockQuoteSection from './BlockQuoteSection.svelte';
	import PaymentTerminalSectionWithCards from './PaymentTerminalSectionWithCards.svelte';
	import PaymentTerminalBlockQuoteSection from './PaymentTerminalBlockQuoteSection.svelte';
	import SupportSectionRightImage from './SupportSectionRightImage.svelte';
	import SupportChangingTheGame from './SupportChangingTheGame.svelte';
	import SupportDeliveryModelSection from './SupportDeliveryModelSection.svelte';
	import SupportServicesSection from './SupportServicesSection.svelte';
	import SectionWithImageOverlay from './SectionWithImageOverlay.svelte';
	import CwgAcademySection from './CwgAcademySection.svelte';
	import OurCoursesSection from './OurCoursesSection.svelte';
	import { CMS_URL } from '$lib/api';

	export let data: PageData;

	$: service = data.service;
</script>

{#each service.content as content}
	{#if content.__typename === 'ComponentGlobalPageHeader'}
		<ServiceHeader header={content} />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.right && service.slug === 'support-hub'}
		<hr class="gray-line" />
		<SupportSectionRightImage section={content} />
	{:else if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.right}
		<div>
			<SectionTextWithImageRight section={content} />
			<hr class="gray-line" />
		</div>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.left && service.slug === 'support-hub'}
		<SupportSectionLeftImage section={content} />
	{:else if content.__typename === 'ComponentGlobalSectionTextWithImage' && content.image_position === Position.left}
		<div>
			<SectionTextWithImageLeft section={content} />
			<hr class="gray-line" />
		</div>
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.left}
		<SectionWithTextLeft section={content} slug={service.slug} />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText' && content.title_position === Position.right}
		<SectionWithTextRight section={content} slug={service.slug} />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithText'}
		<hr class="gray-line" />
	{/if}

	{#if content.__typename === 'ComponentGlobalBlockQuote' && service.slug !== 'payment-terminal-solution'}
		<BlockQuoteSection {content} />
	{/if}

	{#if content.__typename === 'ComponentGlobalSectionWithCards' && service.slug === 'payment-terminal-solution' && !content.sectionWithCardsTitle}
		<PaymentTerminalSectionWithCards {content} />
	{:else if content.__typename === 'ComponentGlobalSectionWithCards'}
		<SectionWithCards {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageAtmServicesNumbers'}
		<ProductSectionAtmServicesNumbers {content} />
	{/if}

	{#if content.__typename === 'ComponentGlobalBlockQuote' && service.slug === 'payment-terminal-solution'}
		<PaymentTerminalBlockQuoteSection {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageChangingTheGameSection'}
		<SupportChangingTheGame {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageDeliveryModelSection'}
		<SupportDeliveryModelSection {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageSupportServicesSection'}
		<SupportServicesSection {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageSectionWithImageOverlay'}
		<SectionWithImageOverlay {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageCwgAcademySection'}
		<CwgAcademySection {content} />
	{/if}

	{#if content.__typename === 'ComponentProductPageOurCoursesSection'}
		<OurCoursesSection {content} />
	{/if}

	{#if content.__typename === 'ComponentGlobalImageList'}
		<section class="py-10">
			<div class="col s12 pad0 sect-contents marquee-content">
				{#each content.images.data as { attributes: { url } }}
					<div class="marquee-item">
						<img src={CMS_URL + url} alt="full-img-gallery" class="w-full" />
					</div>
				{/each}
			</div>
		</section>
	{/if}
{/each}

{#if service.should_show_esteemed_clients}
	<EsteemedClientsSection esteemedClients={service.esteemed_clients.data} />
{/if}
