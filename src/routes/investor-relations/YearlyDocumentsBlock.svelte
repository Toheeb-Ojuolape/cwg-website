<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { PresentationAndVideo } from './types';

	export let list: PresentationAndVideo[];

	$: reports = list.filter((item) => item.attributes.type === 'reports');
	$: presentations = list.filter((item) => item.attributes.type === 'presentationsAndVideos');
</script>

<div class="py-5">
	<div class="text-[24px] mb-5">Year end</div>

	<div class="documents-block-wrapper grid sm:grid-cols-2 lg:gap-x-[60px] gap-y-[25px]">
		{#each reports as { attributes: { title, file } }}
			<a
				href={CMS_URL + file.data?.attributes.url}
				download={CMS_URL + file.data?.attributes.url}
				target="_blank"
				class="document-item p-3 flex gap-[20px] justify-between bg-[#F3F3F3] dark:bg-dark-highlight"
			>
				<img src="/images/file-pdf.svg" alt="file-icon" class="document-type-icon" />
				<span class="document-name flex-1">{title}</span>
				<img src="/images/download-icon.svg" alt="download" class="download-icon" />
			</a>
		{/each}
	</div>
</div>

{#if presentations.length > 0}
	<div class="py-5">
		<div class="text-[24px] mb-5">Presentations and Videos</div>

		<div class="documents-block-wrapper grid sm:grid-cols-2 lg:gap-x-[60px] gap-y-[25px]">
			{#each presentations as { attributes: { title, file } }}
				<a
					href={CMS_URL + file.data?.attributes.url}
					download={CMS_URL + file.data?.attributes.url}
					target="_blank"
					class="document-item p-3 flex gap-[20px] justify-between bg-[#F3F3F3] dark:bg-dark-highlight"
				>
					<img src="/images/file-video.svg" alt="file-icon" class="document-type-icon" />
					<span class="document-name flex-1">
						{title}
					</span>
					<img src="/images/download-icon.svg" alt="download" class="download-icon" />
				</a>
			{/each}
		</div>
	</div>
{/if}
