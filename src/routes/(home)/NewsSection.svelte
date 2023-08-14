<script lang="ts">
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import type { HomePageData } from './types';
	import PressRelease from '../insights/PressRelease.svelte';

	export let list: HomePageData['press_releases']['data'];
	export let title: string;
	export let sectionId: string;
</script>

<section id={sectionId} class="bg-whitish-blue dark:bg-white/10 pb-[50px] pt-18 mx-auto">
	<div class="section-container">
		<div class="flex items-center justify-between mb-10">
			<h2 class="text-headline-2">{title}</h2>
			<a
				class="mr-4 flex gap-11 items-center lg:mr-0 2xl:mr-0 text-bright-blue text-button-l transition-all duration-300 hover:scale-110"
				href="/insights#press"
			>
				View all articles
				<div class="mt-1">
					<ArrowRightSolidIcon className="fill-bright-blue" />
				</div>
			</a>
		</div>

		<PressRelease newsThumbails={list} autoplay={true} />
	</div>
</section>
