<script lang="ts">
	import DividendArrow from '$lib/components/Svgs/DividendArrow.svelte';
	import type { AnnualResultBreakdown } from '$lib/types/common-types';
	import './investor-relations-styles.css';

	export let data: AnnualResultBreakdown['data'];
</script>

{#each data as { attributes: { comment, hasIncreased, percentage, title } }}
	<div class="dividend-block px-[20px] py-[40px]">
		<div class="text-[24px] mb-[10px]">{title}</div>
		<div class="flex gap-[5px] items-end">
			<span class="text-[64px] leading-[1]">{percentage}</span>
			<div class:decline={!hasIncreased}>
				<DividendArrow />
			</div>
		</div>
		<div class="mt-[80px]">
			<div class="text-vivid-burgundy">{@html comment}</div>
		</div>
	</div>
{/each}

<style>
	.dividend-block {
		border: 1px solid #ddd;
	}
</style>
