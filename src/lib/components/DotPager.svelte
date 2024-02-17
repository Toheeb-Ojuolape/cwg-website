<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let length: number;
	export let selected: number = 0;

	const dispatch = createEventDispatcher();

	function onSelectDot(i: number) {
		selected = i;
		dispatch('onSelectDot', { selected: i });
	}
</script>

<div class="flex gap-2">
	{#each Array(length) as _, i}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="Dot"
			class:Dot--selected={selected === i}
			class:Dot--unselected={selected !== i}
			on:click={() => onSelectDot(i)}
			on:keyup
		/>
	{/each}
</div>

<style>
	.Dot {
		height: 10px;
		width: 10px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s;
	}

	.Dot--selected {
		background-color: var(--color-midnight-blue);
	}

	.Dot--unselected {
		background-color: #d9d9d9;
	}
</style>
