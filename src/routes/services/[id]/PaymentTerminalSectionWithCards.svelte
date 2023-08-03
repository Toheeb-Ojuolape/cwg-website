<script lang="ts">
	import PortfolioCards from './PortfolioCards.svelte';
	import type { ComponentGlobalSectionWithCards } from './types';

	export let content: ComponentGlobalSectionWithCards;
</script>

<div>
	<section class="section-container pb-10">
		<div
			class="pts-portfolio-wrapper grid lg:grid-cols-3 sm:grid-cols-2 gap-x-[20px] gap-y-[40px] mb-12"
		>
			<PortfolioCards cards={content.cards} />
		</div>
	</section>
	<hr class="gray-line" />
</div>
