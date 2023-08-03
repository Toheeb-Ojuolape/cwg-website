<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { ComponentGlobalPageHeader } from './types';

	export let header: ComponentGlobalPageHeader;
</script>

<header
	class="header h-[300px] lg:h-[477px] text-white flex flex-col justify-center gap-[10px]"
	style={`background-image: url(${CMS_URL}${header.background_image.data?.attributes.url})`}
>
	<div class="section-container">
		<div class="header-text-wrapper">
			<div class="header-top-title uppercase">{header.headline}</div>
			<h1 class="text-headline-2 header-title lg:text-headline-1">{header.title}</h1>

			<p class="mb-9 header-title-desc">
				{header.description}
			</p>

			{#if header.action}
				<a href={`/${header.action.slug}`} class="flex items-center gap-2 header-link">
					<span>{header.action.title}</span>
					<img src="/images/small-arrow-right.svg" alt="small-arrow-right" />
				</a>
			{/if}
		</div>
	</div>
</header>

<style>
	header.header {
		background-size: cover;
		background-position: center 20%;
	}
</style>
