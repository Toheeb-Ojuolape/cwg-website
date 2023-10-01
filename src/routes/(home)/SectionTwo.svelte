<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import VectorLineIcon from '$lib/components/Svgs/VectorLineIcon.svelte';
	import type { HomePageData } from './types';
	import { format } from 'date-fns';

	export let data: HomePageData['shares_highlight'];
</script>

<section class="box-container lg:mt-7 mb-9 grid grid-cols-1 lg:grid-cols-2 mx-auto">
	<div>
		<img
			class="h-full w-full"
			src={CMS_URL + data.image.data?.attributes.url}
			alt="section two"
		/>
	</div>

	<div
		class="bg-midnight-blue pl-4 lg:pl-[46px] py-[30px] flex flex-col gap-6 lg:gap-0 lg:flex-row text-white"
	>
		<div class="h-full flex flex-col flex-1">
			<div class="flex-1">
				<p class="text-body-m font-light lg:text-body-l">{data.share_name}</p>
				<p class="text-headline-2 lg:text-headline-1 flex items-center">
					{data.share_currency}{data.share_unit_price}
				</p>
			</div>
			<p class="text-body-l">
				{data.share_price_title} •

				{data.share_price_date ? format(new Date(data.share_price_date), 'dd/MM/yyyy') : ''}
			</p>
		</div>

		<div class="hidden lg:block">
			<VectorLineIcon />
		</div>

		<div class="lg:pr-15 flex flex-col justify-between lg:pl-14">
			<p class="text-body-l">{data.fy_title}</p>

			<div class="grid grid-cols-2 gap-8">
				<div>
					<p class="text-headline-6 lg:text-headline-5">
						{data.share_currency}{data.revenue}
					</p>
					<p class="text-body-xs text-burlywood">Revenue</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">
						{data.share_currency}{data.profit_before_tax}
					</p>
					<p class="text-body-xs text-burlywood">Profit Before Tax</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">
						{data.share_currency}{data.gross_profit}
					</p>
					<p class="text-body-xs text-burlywood">Gross Profit</p>
				</div>

				<div>
					<p class="text-headline-6 lg:text-headline-5">
						{data.share_currency}{data.profit_after_tax}
					</p>
					<p class="text-body-xs text-burlywood">Profit After Tax</p>
				</div>
			</div>

			{#if data.fy_action}
				<a href={`/${data.fy_action.slug}`} class="arrow-button group">
					{data.fy_action.title}
					<div class="arrow-right">
						<ArrowRightSolidIcon className="group-hover:fill-pewter-blue" />
					</div>
				</a>
			{/if}
		</div>
	</div>
</section>
