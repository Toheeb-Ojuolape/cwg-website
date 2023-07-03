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
		{ title: 'Airtime Vending', link: '/services/airtime-vending', icon: CallHospitalIcon },
		{ title: 'Payment Terminal Solution', link: '/services/payment-terminal-solution', icon: CardOutlineIcon },
		{ title: 'E-Gaming', link: '/services/e-gaming', icon: GameControllerIcon },
		{ title: 'Hardware Services', link: '/services/hardware-services', icon: BlockChainIcon },
		{ title: 'Managed Services', link: '/services/managed-services', icon: UsersIcon },
		{ title: 'Training', link: '/services/training', icon: BookAddIcon },
		{ title: 'Software Services', link: '/services/software-services', icon: CodeSlashIcon },
		{ title: 'IT Infrastructure', link: '/services/it-infrastructure', icon: CompassIcon },
		{ title: 'Support Hub', link: '/services/support-hub', icon: HeadphonesIcon },
		{ title: 'E-Government Solution', link: '/services/e-government-solution', icon: PieChartIcon },
		{ title: 'Colocation', link: '/services/colocation', icon: DataSetIcon },
		{ title: 'Cloud Services', link: '/services/cloud-services', icon: NeuralNetworkIcon },
		{ title: 'Metering', link: '/services/metering', icon: HomeFlashIcon },
		{ title: 'ATM Management', link: '/services/atm-management', icon: SmartKeyIcon }
	];
</script>

<div>
	<div
		class="link-container bg-white dark:bg-black-1000 lg:pt-10 grid lg:grid-cols-3 lg:pb-8 px-4 lg:px-8 lg:border lg:border-black-500 dark:lg:border-white/20 lg:rounded-10 max-w-[867px]"
	>
		{#each list as { link, title, icon }}
			<a
				class="text-body-medium-s lg:text-body-medium-l flex items-center gap-2 pb-3 lg:pb-4 lg:border-b-[0.5px] lg:border-b-pewter-blue dark:lg:border-b-white/30 hover:scale-110 transition-all duration-300"
				href={link}
				aria-label={title}
				><svelte:component this={icon} />
				{title}
			</a>
		{/each}
	</div>

	<div class="hidden lg:block caret left-14">
		<span />
	</div>
</div>

<style>
	.link-container {
		background-image: url(../../images/services_bg.svg);
		background-repeat: no-repeat;
		background-position: left top;
		background-attachment: fixed;
		row-gap: 20px;
		column-gap: 30px;
	}

	@media (max-width: 1024px) {
		.link-container {
			background-image: none;
			background-color: transparent;
			max-width: 100%;
			row-gap: 12px;
			column-gap: 0px;
		}
	}
</style>
