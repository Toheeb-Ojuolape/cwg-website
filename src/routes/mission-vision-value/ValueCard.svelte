<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { MissionPage } from '$lib/types/mission-page';

	export let value: MissionPage['our_values_section']['values'][0];

	const { content, image, title, subtitle } = value;
</script>

<div class="pt-4 bg-whitish-blue dark:bg-dark-highlight h-[568px] flex flex-col">
	<div class="flex-1 px-5">
		<div class="h-[188px] w-full mb-4">
			<img
				src={CMS_URL + image.data?.attributes.url}
				alt={title}
				class="h-full w-full object-cover"
			/>
		</div>
		<h4 class="text-headline-4 mb-1">{title}</h4>
		<div class="text-body-m">
			<p class="mb-[30px]">{subtitle}</p>
			<p>{@html content}</p>
		</div>
	</div>

	<div class="h-[10px] w-full flex">
		<div class="flex-[2] h-full bg-naples-yellow" />
		<div class="flex-[1] h-full bg-midnight-blue" />
	</div>
</div>
