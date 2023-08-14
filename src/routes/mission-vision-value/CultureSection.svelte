<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { MissionPage } from '$lib/types/mission-page';

	export let title: string;
	export let subtitle: string;
	export let body: MissionPage['culture_section_body'];
	export let sectionId: string | null;
</script>

<span id={sectionId} class="dummy-id" />
<section class="box-container mx-auto mt-[77px]">
	<div class="mb-11 text-center">
		<h2 class="text-headline-3 lg:text-headline-2 mb-2">{title}</h2>
		<p class="text-body-m font-light lg:text-body-l">{subtitle}</p>
	</div>

	<div
		class="flex flex-col gap-8 lg:flex-row bg-whitish-blue dark:bg-dark-highlight lg:items-center lg:gap-19"
	>
		<div class="lg:flex-1 lg:h-[358px]">
			<img
				src={CMS_URL + body.image.data?.attributes.url}
				alt={title}
				class="h-full w-full object-cover"
			/>
		</div>
		<div class="lg:flex-1 px-5 lg:px-0 pb-4 lg:pb-0">
			<h4 class="text-headline-4 mb-5 max-w-[533px] w-full">
				{body.title}
			</h4>
			<p class="text-body-m max-w-[515px] w-full">
				{@html body.content}
			</p>
		</div>
	</div>
</section>
