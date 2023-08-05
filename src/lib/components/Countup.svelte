<script lang="ts">
	import { inview } from 'svelte-inview';

	export let initial = 0;
	export let value: number;
	export let duration = 1000;
	export let step = 1;
	export let suffix = '';
	export let prefix = '';
	let interval: NodeJS.Timeout;
</script>

<span
	use:inview
	on:change={(event) => {
		//@ts-ignore
		const { inView } = event.detail;

		if (inView && interval === undefined) {
			interval = setInterval(() => {
				if (initial < value) {
					initial += step;
				} else {
					clearInterval(interval);
				}
			}, duration / (value / step));
		}
	}}>{prefix}{initial < 10 ? `0${initial}` : initial}{suffix ?? ''}</span
>
