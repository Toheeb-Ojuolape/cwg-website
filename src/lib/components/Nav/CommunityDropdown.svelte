<script lang="ts">
	import type { NavData } from '$lib/types/nav-type';

	export let list: NavData['community_links']['data'];
</script>

<div>
	<div
		class="lg:py-8 flex flex-col gap-2 px-4 lg:px-6 lg:bg-white dark:lg:bg-black-1000 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10"
	>
		{#each list as { attributes: { title, subtitle, slug } }}
			<a
				href={slug}
				class="transition duration-300 pb-3 lg:pb-5 lg:border-b-[0.5px] lg:border-b-pewter-blue dark:lg:border-b-white/30 last:border-b-0 last:pb-0 hover:scale-110"
			>
				<p class="text-body-medium-s lg:text-body-medium-l">{title}</p>
				<p class="text-body-xs text-pewter-blue">{subtitle}</p>
			</a>
		{/each}
	</div>
	<div class="hidden lg:block caret left-20">
		<span />
	</div>
</div>
