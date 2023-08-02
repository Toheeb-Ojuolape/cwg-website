<script lang="ts">
	import type { ComponentGlobalBlockQuote } from './types';

	export let content: ComponentGlobalBlockQuote;
</script>

<section class="section-container px-10 pt-10">
	<div class="quote-box quote-box-2 m-auto p-3 pl-[30px] mb-[50px]">
		{@html content.content}
	</div>
</section>
