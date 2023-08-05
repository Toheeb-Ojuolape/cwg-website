<script lang="ts">
	import ArrowRightLong from '$lib/components/Svgs/ArrowRightLong.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let overview: string;

	function onApplyClick() {
		dispatch('onApplyClick');
	}
</script>

<div
	class="overview [&_p]:text-[15px] [&_p]:leading-[24px] [&_h4]:text-[24px] [&_h4]:mt-10 [&_h4]:mb-5 [&_h4]:sm:text-[32px]"
>
	{@html overview}
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button
	on:click={onApplyClick}
	class="text-bright-blue text-[18px] flex items-center my-10 cursor-pointer"
>
	<span>Apply now</span>
	<ArrowRightLong strokeClassName="stroke-bright-blue" />
</button>
