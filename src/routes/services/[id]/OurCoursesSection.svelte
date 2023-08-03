<script lang="ts">
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import ca from 'date-fns/locale/ca';
	import type { ComponentProductPageOurCoursesSection } from './types';

	export let content: ComponentProductPageOurCoursesSection;
</script>

<section class="section-container pt-10 pb-20">
	<div class="text-center mb-13 m-auto max-w-[800px] section-header">
		<h2 class="text-headline-2 mb-2">{content.title}</h2>
		<p class="text-body-l font-normal">
			{content.subtitle}
		</p>
	</div>

	<div class="courses-blocks-wrapper grid lg:grid-cols-4 sm:grid-cols-2">
		{#each content.cards as { content: card_content, title }}
			<div class="course-block pt-6 pb-10 px-5">
				<div class="course-block-header flex gap-1 justify-between text-[18px]">
					<span class="">{title}</span>
					<div class="arrow-right">
						<ArrowRightLong strokeClassName="stroke-blue" />
					</div>
				</div>
				<div class="course-list mt-6">
					{@html card_content}
				</div>
			</div>
		{/each}
	</div>
</section>
