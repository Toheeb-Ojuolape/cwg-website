<script lang="ts">
	import type { Leader } from '../leadership-types';

	export let leader: Leader;
</script>

<section
	class="box-container px-4 lg:pl-50 lg:pr-32 pb-8 pt-4 mx-auto bg-whitish-blue dark:bg-dark-highlight"
>
	<h2 class="text-headline-3 lg:text-headline-2 mb-5 lg:mb-8">
		About {leader.attributes.name.trim().split(' ')[0]}
	</h2>
	<div class="flex flex-col gap-4 text-body-m font-light lg:text-body-l">
		{@html leader.attributes.biography}
	</div>
</section>
