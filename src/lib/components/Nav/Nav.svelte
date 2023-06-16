<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowDownIcon from '../Svgs/ArrowDownIcon.svelte';
	import ThemeToggleIcon from '../Svgs/ThemeToggleIcon.svelte';
	import CommunityDropdown from './CommunityDropdown.svelte';
	import CompanyDropdown from './CompanyDropdown.svelte';
	import NavLogo from './NavLogo.svelte';
	import ServicesDropdown from './ServicesDropdown.svelte';
	import { browser } from '$app/environment';

	type SeletedDrawer = 'company' | 'services' | 'community';

	let shouldRotate = false;
	let shouldHaveColor = false;

	let showDrawer = false;
	let showDrawerContainer = false;

	let selectedDrawer: SeletedDrawer | undefined;

	onMount(() => {
		shouldHaveColor = window.scrollY >= 18;
	});

	$: if (browser) {
		document.body.style.overflow = showDrawer ? 'hidden' : 'auto';
	}

	$: if (showDrawerContainer) showDrawer = true;

	function onWindowScroll() {
		shouldHaveColor = window.scrollY >= 18;
	}

	function closeDrawer() {
		showDrawer = false;
		setTimeout(() => {
			showDrawerContainer = false;
		}, 150);
	}

	function onSelectDrawerItem(item: SeletedDrawer) {
		if (item !== selectedDrawer) {
			selectedDrawer = item;
		} else {
			selectedDrawer = undefined;
		}
	}
</script>

<svelte:window on:scroll={onWindowScroll} />

<nav
	id="nav"
	class="pt-4 lg:pt-8 pb-4 fixed top-0 left-0 right-0 z-10"
	class:bg-transparent={!shouldHaveColor}
	class:Nav__scroll={shouldHaveColor || showDrawer}
>
	<div class="flex items-center justify-between px-4 lg:px-8 box-container mx-auto">
		<NavLogo />

		<ul
			class="hidden flex-1 lg:flex items-center justify-center gap-5 font-medium text-[17px] leading-[27px]"
		>
			<li>
				<span class="flex peer gap-1 items-center cursor-pointer">Company<ArrowDownIcon /></span>
				<div class="Nav__dropdown__container">
					<CompanyDropdown />
				</div>
			</li>

			<li>
				<a href="/" class="flex peer gap-1 items-center">Services<ArrowDownIcon /></a>
				<div class="Nav__dropdown__container">
					<ServicesDropdown />
				</div>
			</li>

			<li><a href="/">Our sectors</a></li>
			<li>
				<a href="/" class="flex peer gap-1 items-center">Community<ArrowDownIcon /></a>
				<div class="Nav__dropdown__container">
					<CommunityDropdown />
				</div>
			</li>
			<li><a href="/">Insights</a></li>
			<li><a href="/">Fifthlab</a></li>
		</ul>

		<button class="hidden lg:block" on:click={() => (shouldRotate = !shouldRotate)}>
			<div
				class:-scale-x-100={shouldRotate}
				class:scale-x-100={!shouldRotate}
				class="transition-all duration-500"
			>
				<ThemeToggleIcon />
			</div>
		</button>

		<button
			class="block lg:hidden"
			on:click={() => (showDrawerContainer ? closeDrawer() : (showDrawerContainer = true))}
		>
			<div class="Nav__menu-icon" class:Nav__menu-icon--visible={showDrawer}>
				<div />
				<div class:Nav__menu-icon--middle={showDrawer} />
				<div />
			</div>
		</button>
	</div>
</nav>

<div
	class="Nav__drawer z-50 fixed left-0 right-0 flex flex-col items-end lg:hidden"
	class:scale-0={!showDrawerContainer}
	class:scale-100={showDrawerContainer}
	on:click={closeDrawer}
	on:keyup
>
	<div
		class="h-full flex flex-col bg-white/80 w-[250px] transition origin-right duration-300"
		class:scale-x-0={!showDrawer}
		class:scale-x-100={showDrawer}
		on:click|stopPropagation={() => {}}
		on:keyup
	>
		<ul class="Nav__mobile__ul flex-1 overflow-y-auto">
			<li on:click={() => onSelectDrawerItem('company')} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					Company
					<div class="transition duration-500" class:rotate-180={selectedDrawer === 'company'}>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === 'company'}
				>
					<div class="overflow-hidden">
						<CompanyDropdown />
					</div>
				</div>
			</li>

			<li on:click={() => onSelectDrawerItem('services')} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					Services
					<div class="transition duration-500" class:rotate-180={selectedDrawer === 'services'}>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === 'services'}
				>
					<div class="overflow-hidden">
						<ServicesDropdown />
					</div>
				</div>
			</li>

			<li>
				<a href="/" class="">Our sectors</a>
			</li>

			<li on:click={() => onSelectDrawerItem('community')} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					Community
					<div class="transition duration-500" class:rotate-180={selectedDrawer === 'community'}>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === 'community'}
				>
					<div class="overflow-hidden">
						<CommunityDropdown />
					</div>
				</div>
			</li>

			<li><a href="/">Insights</a></li>
			<li><a href="/">Fifthlab</a></li>
		</ul>

		<button class="max-w-max p-5" on:click={() => (shouldRotate = !shouldRotate)}>
			<div
				class:-scale-x-100={shouldRotate}
				class:scale-x-100={!shouldRotate}
				class="transition-all duration-500"
			>
				<ThemeToggleIcon />
			</div>
		</button>
	</div>
</div>

<style>
	.Nav__scroll {
		background-color: rgba(255, 255, 255, 0.8);
		border-bottom: 1px solid var(--color-black-500);
		backdrop-filter: blur(5px);
	}

	.Nav__mobile__ul li {
		padding: 20px 0;
		border-bottom: 0.5px solid var(--color-pewter-blue);
		margin: 0 24px;
	}

	.Nav__drawer__item {
		display: grid;
		padding-top: 0px;
		grid-template-rows: 0fr;
		transition: all 0.5s;
	}

	.Nav__drawer__item--visible {
		padding-top: 16px;
		grid-template-rows: 1fr;
	}

	.Nav__drawer {
		height: calc(100vh - 101px);
		top: 101px;
		backdrop-filter: blur(5px);
	}

	.Nav__menu-icon {
		display: flex;
		gap: 4px;
		flex-direction: column;
	}

	.Nav__menu-icon--visible {
		gap: 0px;
	}

	.Nav__menu-icon div {
		height: 3px;
		width: 20px;
		border-radius: 2px;
		background-color: var(--color-midnight-blue);
		transition: all 0.5s;
	}

	.Nav__menu-icon--visible div:first-child {
		transform: translateY(3px) rotate(-45deg);
	}

	.Nav__menu-icon--visible div:nth-child(2) {
		opacity: 0;
	}

	.Nav__menu-icon--visible div:last-child {
		transform: translateY(-3px) rotate(45deg);
	}
</style>
