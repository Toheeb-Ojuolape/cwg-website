<script lang="ts">
	import { onMount } from 'svelte';
	import ArrowDownIcon from '../Svgs/ArrowDownIcon.svelte';
	import CommunityDropdown from './CommunityDropdown.svelte';
	import CompanyDropdown from './CompanyDropdown.svelte';
	import NavLogo from './NavLogo.svelte';
	import ServicesDropdown from './ServicesDropdown.svelte';
	import { browser } from '$app/environment';
	import ThemeSwitcher from '../ThemeSwitcher.svelte';
	import { theme } from '$lib/stores/theme-store';
	import { page } from '$app/stores';

	type SeletedDrawer = 'company' | 'services' | 'community';

	let shouldHaveColor = false;

	let showDrawer = false;
	let showDrawerContainer = false;

	let selectedDrawer: SeletedDrawer | undefined;

	$: isWhite = (shouldHaveColor || showDrawer) && $theme === 'light';
	$: isDark = (shouldHaveColor || showDrawer) && $theme === 'dark';
	$: useWhite = !shouldHaveColor && $page.url.pathname === '/';

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
	class:Nav__scroll={isWhite}
	class:Nav__scroll--dark={isDark}
>
	<div class="flex items-center justify-between px-4 lg:px-8 box-container mx-auto">
		<NavLogo useWhiteLogo={useWhite} />

		<ul
			class="hidden flex-1 lg:flex items-center justify-center gap-5 font-medium text-[17px] leading-[27px]"
		>
			<li>
				<span class="flex peer gap-1 items-center cursor-pointer" class:text-white={useWhite}
					>Company<ArrowDownIcon /></span
				>
				<div class="Nav__dropdown__container">
					<CompanyDropdown />
				</div>
			</li>

			<li>
				<a href="/" class="flex peer gap-1 items-center" class:text-white={useWhite}
					>Services<ArrowDownIcon /></a
				>
				<div class="Nav__dropdown__container">
					<ServicesDropdown />
				</div>
			</li>

			<li><a href="/" class:text-white={useWhite}>Our sectors</a></li>
			<li>
				<a href="/" class="flex peer gap-1 items-center" class:text-white={useWhite}
					>Community<ArrowDownIcon /></a
				>
				<div class="Nav__dropdown__container">
					<CommunityDropdown />
				</div>
			</li>
			<li><a href="/" class:text-white={useWhite}>Insights</a></li>
			<li><a href="/" class:text-white={useWhite}>Fifthlab</a></li>
		</ul>

		<div class="hidden lg:block">
			<ThemeSwitcher {useWhite} />
		</div>

		<button
			class="block lg:hidden"
			on:click={() => (showDrawerContainer ? closeDrawer() : (showDrawerContainer = true))}
		>
			<div class="Nav__menu-icon" class:Nav__menu-icon--visible={showDrawer}>
				<div class="bg-midnight-blue dark:bg-white" />
				<div class="bg-midnight-blue dark:bg-white" class:Nav__menu-icon--middle={showDrawer} />
				<div class="bg-midnight-blue dark:bg-white" />
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
		class="h-full flex flex-col bg-white/[.85] dark:bg-black/[.85] w-[250px] transition origin-right duration-300"
		class:scale-x-0={!showDrawer}
		class:scale-x-100={showDrawer}
		on:click|stopPropagation={() => {}}
		on:keyup
	>
		<ul
			class="[&_li]:py-5 [&_li]:mx-6 [&_li]:border-b-[0.5px] [&_li]:border-b-pewter-blue dark:[&_li]:border-b-white/30 flex-1 overflow-y-auto"
		>
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

		<button class="max-w-max p-5">
			<ThemeSwitcher />
		</button>
	</div>
</div>

<style>
	.Nav__scroll {
		background-color: rgba(255, 255, 255, 0.85);
		border-bottom: 1px solid var(--color-black-500);
		backdrop-filter: blur(7px);
	}

	.Nav__scroll--dark {
		background-color: rgba(0, 0, 0, 0.85);
		border-bottom: 1px solid rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(7px);
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
		backdrop-filter: blur(7px);
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
