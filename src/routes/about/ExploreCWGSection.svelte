<script lang="ts">
	import DirectionRightIcon from '$lib/components/Svgs/DirectionRightIcon.svelte';
	import type { AboutPage } from '$lib/types/about-page';

	export let data: AboutPage['explore_cwg'];
</script>

<section
	class="box-container mx-auto grid lg:flex lg:flex-row lg:items-center py-8 lg:py-0 lg:gap-13 pl-4 pr-4 lg:pr-0 lg:pl-8 2xl:pl-0 border-y-[1.5px] border-y-black-600 dark:border-y-black-900"
>
	<div
		class="text-body-s font-light lg:text-body-l text-center lg:text-left flex flex-col gap-4 flex-1"
	>
		{@html data.content}
	</div>

	<div
		class="py-[10px] row-start-1 mb-5 lg:mb-0 lg:row-start-auto pr-4 lg:pr-8 bg-whitish-blue dark:bg-white/10 flex flex-col items-center lg:items-end lg:w-[354px]"
	>
		<h2 class="mb-4 lg:mb-8 text-headline-4 lg:text-headline-2">Explore CWG</h2>
		<div class="flex flex-col gap-[10px] items-center lg:items-end">
			{#each data.links as { slug, title }, i}
				<a
					href={slug}
					class="flex text-button-s py-[10px] items-center gap2 hover:scale-110 transition-all duration-300`"
					class:link={i !== data.links.length - 1}
					>{title}
					<div class="mt-[2px]"><DirectionRightIcon /></div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.link {
		border-bottom: 1px solid var(--color-black-600);
	}
</style>
