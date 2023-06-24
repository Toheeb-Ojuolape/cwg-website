<script lang="ts">
	export let index: number;
	export let isLastItem: boolean;
	export let isFirstItem: boolean;

	const color = [
		'bg-pewter-blue',
		'bg-light-green',
		'bg-naples-yellow',
		'bg-vivid-burgundy',
		'bg-burlywood'
	];

	$: bgColor = color[recurse(index)];

	function recurse(value: number) {
		if (value <= 4) return value;

		return recurse(value - 5);
	}
</script>

<div
	class="min-w-[350px] lg:min-w-[405px] w-full"
	class:last-card={isLastItem}
	class:first-card={isFirstItem}
>
	<div class="bg-whitish-blue dark:bg-white/10 h-[400px] lg:h-[460px] pt-7 pl-6 pr-8">
		<div class="mb-4 flex items-center justify-between">
			<h4 class="text-headline-6 lg:text-headline-4">CWG Founded</h4>
			<div class="text-body-s lg:text-body-m">→ 1992</div>
		</div>
		<p class="text-body-s lg:text-body-m">
			We commenced operations in Nigeria on September 26th, 1992, as Computer Warehouse
			Limited principally catering to Computer hardware projects. Few years later, DCC
			Networks was established as the Communication arm; to provide VSAT, Metropolitan, Wide
			Area and Local Area Networks to Corporate Organizations. In order to concentrate on the
			demands emerging in the area of Software systems, training and solutions; Expert Edge
			Software was acauired in 1999.
		</p>
	</div>
	<div class="h-5 w-full flex">
		<div class="flex-[2] bg-midnight-blue" />
		<div class={`flex-1 ${bgColor}`} />
	</div>
</div>

<style>
	.first-card {
		margin-left: 32px;
	}

	.last-card {
		margin-right: 16px;
	}

	@media (min-width: 1024px) {
		.first-card {
			margin-left: 128px;
		}

		.last-card {
			margin-right: 32px;
		}
	}

	@media (min-width: 1536px) {
		.last-card {
			margin-right: 0px;
		}
	}
</style>
