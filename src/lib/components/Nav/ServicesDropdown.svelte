<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { NavData } from '$lib/types/nav-type';

	export let list: NavData['services_links']['data'] = [];
</script>

<div>
	<div
		class="link-container bg-white dark:bg-black-1000 lg:pt-10 grid lg:grid-cols-3 lg:pb-8 px-4 lg:px-8 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10 max-w-[867px]"
	>
		{#each list as { attributes: { title, slug, icon } }}
			<a
				class="text-body-medium-s lg:text-body-medium-l flex items-center gap-2 pb-3 lg:pb-4 lg:border-b-[0.5px] lg:border-b-pewter-blue dark:lg:border-b-white/30 hover:scale-110 transition-all duration-300"
				href={`/services/${slug}`}
				aria-label={title}
			>
				<img
					src={CMS_URL + icon.data.attributes.url}
					alt={title}
					class="dark:brightness-0 dark:invert h-6 w-6"
				/>
				{title}
			</a>
		{/each}
	</div>

	<div class="hidden lg:block caret left-14">
		<span />
	</div>
</div>

<style>
	.link-container {
		background-image: url(../../images/services_bg.svg);
		background-repeat: no-repeat;
		background-position: left top;
		background-attachment: fixed;
		row-gap: 20px;
		column-gap: 30px;
	}

	@media (max-width: 1024px) {
		.link-container {
			background-image: none;
			background-color: transparent;
			max-width: 100%;
			row-gap: 12px;
			column-gap: 0px;
		}
	}
</style>
