<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import type { AboutPage } from '$lib/types/about-page';

	export let data: AboutPage['celebrating_30_section'];
</script>

<section
	class="box-container mx-auto px-4 lg:px-8 bg-midnight-blue text-white flex flex-col lg:flex-row pb-8 lg:pb-11 gap-14"
>
	<div class="flex-1">
		<div class="flex justify-center lg:justify-start">
			<img src={CMS_URL + data.title_image.data.attributes.url} alt="30 years" />
		</div>

		<h2 class="hidden lg:block text-headline-2 mb-5 mt-3">
			{data.title}
		</h2>

		<h2 class="block lg:hidden text-headline-4 text-center mb-5 mt-3">
			{data.title}
		</h2>

		<p class="text-body-s font-light text-center lg:text-left lg:text-body-l mb-8 lg:mb-12">
			{@html data.content}
		</p>

		<a href={data.link.slug} class="flex justify-center lg:justify-start">
			<button class="arrow-button group">
				{data.link.title}
				<div class="arrow-right">
					<ArrowRightSolidIcon className="fill-white group-hover:fill-pewter-blue" />
				</div>
			</button>
		</a>
	</div>

	<div class="flex-1">
		<img src={CMS_URL + data.right_images.data[0].attributes.url} alt="" />
	</div>
</section>
