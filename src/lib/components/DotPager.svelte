<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let length: number;
	let selected = 0;

	const dispatch = createEventDispatcher();

	function onSelectDot(i: number) {
		selected = i;
		dispatch('onSelectDot', { selected: i });
	}
</script>

<div class="flex gap-2">
	{#each Array(length) as _, i}
		<div
			class="Dot"
			class:Dot--selected={i === selected}
			class:Dot--unselected={i !== selected}
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
