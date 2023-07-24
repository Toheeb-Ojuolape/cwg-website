<script lang="ts">
	import type { Nav } from '$lib/types/nav-type';

	export let list: Nav['services_links']['data'];
</script>

<div>
	<div
		class="link-container bg-white dark:bg-black-1000 lg:pt-9 grid lg:grid-cols-3 lg:pb-8 px-4 lg:px-8 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10"
	>
		{#each list as { attributes: { title, subtitle, slug } }}
			<a
				class="text-body-medium-s lg:text-body-medium-l hover:scale-110 transition-all duration-300"
				href={'/' + slug}
				aria-label={title}
			>
				<p>{title}</p>
				<p class="text-body-xs text-pewter-blue">{subtitle}</p>
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
		row-gap: 12px;
		column-gap: 30px;
		max-width: 787px;
	}

	@media (max-width: 1024px) {
		.link-container {
			background-image: none;
			background-color: transparent;
			max-width: 100%;
			column-gap: 0px;
		}
	}
</style>
