<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { MissionPage } from '$lib/types/mission-page';

	export let data: MissionPage['manifesto_section'];

	const { content, image, title, subtitle } = data;
</script>

<section
	class="box-container mx-auto border-t border-t-black-600 dark:border-t-black-900 flex flex-col lg:flex-row gap-8 lg:gap-10 lg:items-center"
>
	<div class="lg:flex-1 lg:h-[397px]">
		<img src={CMS_URL + image.data?.attributes.url} alt={title} />
	</div>
	<div class="px-5 lg:pl-0 lg:flex-1 lg:pr-8 2xl:pr-0">
		<h4 class="text-headline-4 mb-3">{title}</h4>
		<div class="text-body-m flex flex-col gap-5">
			{@html content}
		</div>
	</div>
</section>
