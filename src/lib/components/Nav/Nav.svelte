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

	import Caret from '../Svgs/Caret.svelte';
	import '../OurRegions/regions.css';
	import RegionsWrapper from '../OurRegions/RegionsWrapper.svelte';
	import type { NavData } from '$lib/types/nav-type';
	import type { RegionData } from '$lib/types/region-types';

	export let nav: NavData;
	export let regions: RegionData[];

	let shouldHaveColor = false;

	let showDrawer = false;
	let showDrawerContainer = false;

	let selectedDrawer: string | undefined;

	$: isWhite = (shouldHaveColor || showDrawer) && $theme === 'light';
	$: isDark = (shouldHaveColor || showDrawer) && $theme === 'dark';
	$: useWhite = !shouldHaveColor && $page.url.pathname === '/';
	$: isHome = $page.url.pathname === '/';

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

	function onSelectDrawerItem(item: string) {
		if (item !== selectedDrawer) {
			selectedDrawer = item;
		} else {
			selectedDrawer = undefined;
		}
	}

	let displayRegion = false;

	function toggleDisplayRegion() {
		displayRegion = !displayRegion;
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
	<div class="flex items-center justify-between px-4 lg:px-8 2xl:px-0 box-container mx-auto">
		<NavLogo className="h-15 w-13 lg:h-[83px] lg:w-[68px]" useWhiteLogo={useWhite} />

		<ul
			class="hidden flex-1 lg:flex items-center justify-center gap-5 font-medium text-[17px] leading-[27px]"
		>
			<li>
				<span
					class="flex peer gap-1 items-center cursor-pointer"
					class:text-white={useWhite}>{nav.company_title}<ArrowDownIcon /></span
				>
				<div class="Nav__dropdown__container">
					<CompanyDropdown list={nav.company_links.data} />
				</div>
			</li>

			<li>
				<a href="/services" class="flex peer gap-1 items-center" class:text-white={useWhite}
					>{nav.services_title}<ArrowDownIcon /></a
				>
				<div class="Nav__dropdown__container">
					<ServicesDropdown list={nav.services_links.data} />
				</div>
			</li>

			<li>
				<a href={`/${nav.sectors_slug}`} class:text-white={useWhite}>{nav.sectors_title}</a>
			</li>
			<li>
				<div class="flex peer gap-1 items-center" class:text-white={useWhite}>
					{nav.community_title}<ArrowDownIcon />
				</div>
				<div class="Nav__dropdown__container">
					<CommunityDropdown list={nav.community_links.data} />
				</div>
			</li>
			<li>
				<a href={`/${nav.insight_slug}`} class:text-white={useWhite}>{nav.insight_title}</a>
			</li>
			<li>
				<a href={`/${nav.fifthlab_slug}`} class:text-white={useWhite}
					>{nav.fifthlab_title}</a
				>
			</li>
		</ul>

		<div class="hidden lg:flex gap-[50px] items-center">
			<div class="region-wrapper-trigger relative">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex items-center gap-[10px] cursor-pointer"
					on:click={toggleDisplayRegion}
				>
					<img src="/images/nigeria.svg" alt="Nigeria" class="country-flag" />
					<span class:text-white={useWhite}>Nigeria</span>
					<Caret />
				</div>
			</div>
			<ThemeSwitcher {useWhite} />
		</div>

		<button
			class="block lg:hidden"
			on:click={() => (showDrawerContainer ? closeDrawer() : (showDrawerContainer = true))}
		>
			<div class="Nav__menu-icon" class:Nav__menu-icon--visible={showDrawer}>
				<div
					class:bg-midnight-blue={!isHome || shouldHaveColor}
					class:bg-white={isHome && !shouldHaveColor}
					class="dark:bg-white"
				/>
				<div
					class:bg-white={isHome && !shouldHaveColor}
					class:bg-midnight-blue={!isHome || shouldHaveColor}
					class="bg-midnight-blue dark:bg-white"
					class:Nav__menu-icon--middle={showDrawer}
				/>
				<div
					class:bg-white={isHome && !shouldHaveColor}
					class:bg-midnight-blue={!isHome || shouldHaveColor}
					class="bg-midnight-blue dark:bg-white"
				/>
			</div>
		</button>
	</div>
</nav>

<RegionsWrapper {displayRegion} {regions} />

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
			class="[&_li]:py-5 [&_li]:cursor-pointer [&_li]:mx-6 [&_li]:border-b-[0.5px] [&_li]:border-b-pewter-blue dark:[&_li]:border-b-white/30 flex-1 overflow-y-auto"
		>
			<li on:click={() => onSelectDrawerItem(nav.company_title)} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					{nav.company_title}
					<div
						class="transition duration-500"
						class:rotate-180={selectedDrawer === nav.company_title}
					>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === nav.company_title}
				>
					<div class="overflow-hidden">
						<CompanyDropdown list={nav.company_links.data} />
					</div>
				</div>
			</li>

			<li on:click={() => onSelectDrawerItem(nav.services_title)} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					{nav.services_title}
					<div
						class="transition duration-500"
						class:rotate-180={selectedDrawer === nav.services_title}
					>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === nav.services_title}
				>
					<div class="overflow-hidden">
						<ServicesDropdown list={nav.services_links.data} />
					</div>
				</div>
			</li>

			<li>
				<a href={`/${nav.sectors_slug}`} class="">{nav.sectors_title}</a>
			</li>

			<li on:click={() => onSelectDrawerItem(nav.community_title)} on:keyup>
				<div class="flex peer gap-1 items-center justify-between">
					{nav.community_title}
					<div
						class="transition duration-500"
						class:rotate-180={selectedDrawer === nav.community_title}
					>
						<ArrowDownIcon />
					</div>
				</div>
				<div
					class="Nav__drawer__item"
					class:Nav__drawer__item--visible={selectedDrawer === nav.community_title}
				>
					<div class="overflow-hidden">
						<CommunityDropdown list={nav.community_links.data} />
					</div>
				</div>
			</li>

			<li><a href={`/${nav.insight_slug}`}>{nav.insight_title}</a></li>
			<li><a href={`/${nav.fifthlab_slug}`}>{nav.fifthlab_title}</a></li>
		</ul>

		<div class="flex items-center justify-between pb-13 mb-10 px-5">
			<div class="region-wrapper-trigger relative max-w-max">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex items-center gap-[10px] cursor-pointer"
					on:click={toggleDisplayRegion}
				>
					<img src="/images/nigeria.svg" alt="Nigeria" class="country-flag" />
					<span>Nigeria</span>
					<Caret />
				</div>
			</div>

			<button class="max-w-max">
				<ThemeSwitcher />
			</button>
		</div>
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

	@media (max-width: 1023px) {
		.Nav__drawer {
			height: calc(100vh - 93px);
			top: 93px;
		}
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
