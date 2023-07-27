<script lang="ts">
	import Countup from '$lib/components/Countup.svelte';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import type { AboutPage } from '$lib/types/about-page';

	export let title: AboutPage['pan_african_title'];
	export let link: AboutPage['pan_african_link'];
	export let content: AboutPage['pan_african_content'];
</script>

<section
	class="box-container mx-auto pt-8 lg:pt-0 pl-4 lg:pl-8 pr-4 lg:pr-0 2xl:pl-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-23 pb-8 lg:pb-0"
>
	<div class="flex-1">
		<h2 class="text-headline-4 text-center lg:text-left lg:text-headline-2 mb-7">
			{title}
		</h2>
		<div
			class="text-body-s font-light text-center lg:text-left lg:text-body-l flex flex-col gap-4 mb-12"
		>
			{@html content}
		</div>
		<a href={link.slug} class="flex justify-center lg:justify-start"
			><button class="arrow-button group"
				>{link.title}
				<div class="arrow-right">
					<ArrowRightSolidIcon
						className="fill-midnight-blue dark:fill-white group-hover:fill-pewter-blue"
					/>
				</div></button
			></a
		>
	</div>

	<div
		class="w-full lg:w-[537px] h-[300px] lg:h-[490px] bg-pewter-blue flex flex-col items-center justify-center"
	>
		<div class="flex mb-22 justify-between gap-22">
			<div>
				<p class="text-headline-3 lg:text-headline-1"><Countup value={4} /></p>
				<p class="text-body-s font-light lg:text-body-l">Operation Hubs</p>
			</div>

			<div>
				<p class="text-headline-3 lg:text-headline-1"><Countup value={50} suffix="+" /></p>
				<p class="text-body-s font-light text-body-l">Awards</p>
			</div>
		</div>

		<div class="flex gap-[114px]">
			<div>
				<p class="text-headline-3 lg:text-headline-1"><Countup value={13} /></p>
				<p class="text-body-s font-light text-body-l">Partnerships</p>
			</div>

			<div>
				<p class="text-headline-3 lg:text-headline-1"><Countup value={26} suffix="+" /></p>
				<p class="text-body-s font-light text-body-l">Countries</p>
			</div>
		</div>
	</div>
</section>
