<script lang="ts">
	import type { ComponentGlobalBlockQuote } from './types';

	export let content: ComponentGlobalBlockQuote;
</script>

<section class="section-container p-10 pb-20">
	<div class="quote-box max-w-[1180px] md:w-[85%] m-auto p-3 pl-[30px]">
		{@html content.content}
	</div>
</section>
