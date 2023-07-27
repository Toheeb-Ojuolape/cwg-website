<script lang="ts">
	import type { AboutPage } from '$lib/types/about-page';

	export let data: AboutPage['section_one'];
</script>

<section
	class="section-container flex text-center lg:text-left gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between pt-8 lg:pt-13 pb-8"
>
	<h2 class="text-headline-4 lg:text-headline-2 flex-1">
		<span class="lg:max-w-[497px] w-full lg:block">{data.title}</span>
	</h2>
	<p class="text-body-s font-light lg:text-body-l flex-1">
		{@html data.content}
	</p>
</section>
