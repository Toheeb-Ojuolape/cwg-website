<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import type { HomePageData } from './types';

	export let content: HomePageData['quality_policy_section'];
</script>

<section
	id={content.link_id}
	class="box-container mx-auto grid lg:grid-cols-3 gap-8 lg:gap-[42px] w-full pl-4 pr-4 lg:pr-0 pt-8 lg:pt-0 lg:pl-8 2xl:pl-0 border-y-[1.5px] border-y-black-600 dark:border-y-white/10 mt-[71px]"
>
	<div class="h-full flex flex-col justify-center">
		<h2 class="text-headline-3 lg:text-headline-2 mb-4 lg:mb-6">{content.title}</h2>
		<p class="text-body-m font-light lg:text-body-l mb-4 lg:mb-6">{@html content.content}</p>
		<a href={`/${content.action?.slug}`}>
			<button class="arrow-button group"
				>{content.action?.title}
				<div class="mt-1">
					<ArrowRightLong
						strokeClassName="stroke-midnight-blue group-hover:stroke-pewter-blue dark:stroke-white"
						fillClassName="fill-midnight-blue group-hover:stroke-pewter-blue"
					/>
				</div></button
			>
		</a>
	</div>

	<div class="col-span-2">
		<img
			class="h-[335px] w-full"
			src={CMS_URL + content.image.data?.attributes.url}
			alt={content.image.data?.attributes.alternativeText}
		/>
	</div>
</section>
