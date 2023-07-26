<script lang="ts">
	import ArrowRightSolidIcon from '$lib/components/Svgs/ArrowRightSolidIcon.svelte';
	import PlusIcon from '$lib/components/Svgs/PlusIcon.svelte';
	import type { Leader } from './leadership-types';

	export let leader: Leader;
</script>

<div class="h-[393px] relative cursor-pointer group Person">
	<div class="h-full overflow-hidden">
		<img src={leader.image} alt={leader.name} class="w-full h-full object-cover" />
	</div>

	<div class="absolute right-0 top-0 left-0 h-full flex flex-col justify-end">
		<div
			class="h-[74px] bg-midnight-blue pt-3 pr-3 pl-8 text-white peer flex flex-col items-start"
		>
			<p class="flex text-button-l items-center justify-between w-full">
				{leader.name}
				<PlusIcon />
			</p>
			<p class="text-body-medium-xxs leading-[13px] text-left">
				{leader.position}
			</p>
		</div>

		<div
			class="bg-[#0D2C65] text-white grid grid-rows-[0] overflow-hidden transition-[flex] duration-1000 group-active:flex-1 group-hover:flex-1 group-active:grid-rows-1 group-hover:grid-rows-1"
		>
			<div
				class="pt-7 px-8 pb-[30px] flex opacity-0 flex-col justify-between group-hover:opacity-100"
			>
				<p class="text-body-xxs leading-[13px]">
					Abiodun Fawunmi is a highly experienced technology expert who, in his
					professional career, has led multi-cultural professional teams to high levels of
					effectiveness in a variety of competitive industries and fast-paced
					environments.
				</p>

				<a
					href={`/leadership/${leader.name}`}
					class="text-button-l self-end hover:scale-110 transition-all duration-300 flex"
				>
					Read full profile <div class="-rotate-45">
						<ArrowRightSolidIcon className="fill-white" />
					</div></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.Person {
		border: 1px solid rgba(125, 167, 187, 0.1);
	}
</style>
