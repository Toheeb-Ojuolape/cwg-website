<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { SectorsPage } from './types';

	export let policies: SectorsPage['policies']['data'];
</script>

{#each policies as { attributes: { title, icon, subtitle } }}
	<a href="#!" download="" class="policies-item sm:p-10 p-5">
		<div class="flex flex-col justify-between h-full">
			<div>
				<img src={CMS_URL + icon.data.attributes.url} alt="premium" class={title} />
				<h5 class="pt-5 pb-3 my-[20px]">{subtitle}</h5>
			</div>

			<div class="flex justify-between">
				<span>Download PDF</span>
				<ArrowRightLong strokeClassName="stroke-blue" />
			</div>
		</div>
	</a>
{/each}
