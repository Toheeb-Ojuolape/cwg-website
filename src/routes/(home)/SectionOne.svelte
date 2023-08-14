<script lang="ts">
	import { CMS_URL } from '$lib/api';
	import type { HomeSection } from './types';

	export let data: HomeSection;
</script>

<section
	class="pt-10 lg:pb-11 section-container grid gap-5 lg:gap-[75px] lg:flex lg:flex-row lg:items-center lg:justify-between"
>
	<div class="text-body-m font-light lg:text-body-l flex-1">
		<p class="mb-4 lg:mb-6">{@html data.content}</p>
	</div>

	<div class="flex-1 row-start-1 lg:row-start-auto">
		<img src={CMS_URL + data.image.data?.attributes.url} alt="home_1" />
	</div>
</section>
