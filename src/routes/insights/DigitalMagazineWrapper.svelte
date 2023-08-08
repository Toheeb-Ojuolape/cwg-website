<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { InsightsPageData } from './types';

	export let magazineCovers: InsightsPageData['magazine_section']['content']['data'];
</script>

<div class="magazine-wrapper grid sm:grid-cols-2 lg:grid-cols-4 gap-[30px] lg:gap-[50px]">
	{#each magazineCovers as { attributes: { title, cover, issue_date, uuid } }}
		<a
			href={`/insights/digital-magazine/${uuid}`}
			class="magazine-block bg-whitish-blue dark:bg-dark-highlight hover-scale"
		>
			<div class="magazine-img-wrapper">
				<img
					src={CMS_URL + cover.data?.attributes.url}
					alt={title}
					class="magazine-cover"
				/>
			</div>
			<div class="magazine-cover-details py-[15px] px-[20px]">
				<b class="text-midnight-blue dark:text-white">{title}</b>
				<span class="text-greyish-blue">{issue_date}</span>
			</div>
		</a>
	{/each}
</div>
