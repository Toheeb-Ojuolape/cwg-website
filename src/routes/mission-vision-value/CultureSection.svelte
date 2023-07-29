<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { MissionPage } from '$lib/types/mission-page';

	export let title: string;
	export let subtitle: string;
	export let body: MissionPage['culture_section_body'];
</script>

<section class="box-container mx-auto mt-[77px]">
	<div class="mb-11 text-center">
		<h2 class="text-headline-3 lg:text-headline-2 mb-2">{title}</h2>
		<p class="text-body-m font-light lg:text-body-l">{subtitle}</p>
	</div>

	<div class="flex bg-whitish-blue dark:bg-dark-highlight items-center gap-19">
		<div class="flex-1 h-[358px]">
			<img
				src={CMS_URL + body.image.data?.attributes.url}
				alt={title}
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="flex-1">
			<h4 class="text-headline-4 mb-5 max-w-[533px] w-full">
				{body.title}
			</h4>
			<p class="text-body-m max-w-[515px] w-full">
				{@html body.content}
			</p>
		</div>
	</div>
</section>
