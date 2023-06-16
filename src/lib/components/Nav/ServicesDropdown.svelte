<script lang="ts">
	import BlockChainIcon from '../Svgs/BlockChainIcon.svelte';
	import BookAddIcon from '../Svgs/BookAddIcon.svelte';
	import CallHospitalIcon from '../Svgs/CallHospitalIcon.svelte';
	import CardOutlineIcon from '../Svgs/CardOutlineIcon.svelte';
	import CodeSlashIcon from '../Svgs/CodeSlashIcon.svelte';
	import CompassIcon from '../Svgs/CompassIcon.svelte';
	import DataSetIcon from '../Svgs/DataSetIcon.svelte';
	import GameControllerIcon from '../Svgs/GameControllerIcon.svelte';
	import HeadphonesIcon from '../Svgs/HeadphonesIcon.svelte';
	import HomeFlashIcon from '../Svgs/HomeFlashIcon.svelte';
	import NeuralNetworkIcon from '../Svgs/NeuralNetworkIcon.svelte';
	import PieChartIcon from '../Svgs/PieChartIcon.svelte';
	import SmartKeyIcon from '../Svgs/SmartKeyIcon.svelte';
	import UsersIcon from '../Svgs/UsersIcon.svelte';

	const list = [
		{ title: 'Airtime Vending', link: '/', icon: CallHospitalIcon },
		{ title: 'Payment Terminal Solution', link: '/', icon: CardOutlineIcon },
		{ title: 'E-Gaming', link: '/', icon: GameControllerIcon },
		{ title: 'Hardware Services', link: '/', icon: BlockChainIcon },
		{ title: 'Managed Services', link: '/', icon: UsersIcon },
		{ title: 'Training', link: '/', icon: BookAddIcon },
		{ title: 'Software Services', link: '/', icon: CodeSlashIcon },
		{ title: 'IT Infrastructure', link: '/', icon: CompassIcon },
		{ title: 'Support Hub', link: '/', icon: HeadphonesIcon },
		{ title: 'E-Government Solution', link: '/', icon: PieChartIcon },
		{ title: 'Colocation', link: '/', icon: DataSetIcon },
		{ title: 'Cloud Services', link: '/', icon: NeuralNetworkIcon },
		{ title: 'Metering', link: '/', icon: HomeFlashIcon },
		{ title: 'ATM Management', link: '/', icon: SmartKeyIcon }
	];
</script>

<div>
	<div
		class="link-container pt-10 grid grid-cols-3 pb-8 px-8 border border-black-500 rounded-10 max-w-[867px]"
	>
		{#each list as { link, title, icon }}
			<a
				class="text-body-medium-l flex items-center gap-2 pb-[10px] border-b-[0.5px] border-b-pewter-blue hover:scale-110 transition-all duration-300"
				href={link}
				aria-label={title}
				><svelte:component this={icon} />
				{title}
			</a>
		{/each}
	</div>

	<div class="caret left-14">
		<span />
	</div>
</div>

<style>
	.link-container {
		background-color: white;
		background-image: url(../../images/services_bg.svg);
		background-repeat: no-repeat;
		background-position: left top;
		background-attachment: fixed;
		row-gap: 20px;
		column-gap: 30px;
	}
</style>
