<script>
	import ArrowDownIcon from '../Svgs/ArrowDownIcon.svelte';
	import ThemeToggleIcon from '../Svgs/ThemeToggleIcon.svelte';
	import CommunityDropdown from './CommunityDropdown.svelte';
	import CompanyDropdown from './CompanyDropdown.svelte';
	import NavLogo from './NavLogo.svelte';
	import ServicesDropdown from './ServicesDropdown.svelte';

	let shouldRotate = false;
</script>

<nav class="pt-8 pb-4">
	<div class="flex items-center justify-between px-4 lg:px-8 box-container mx-auto">
		<NavLogo />

		<ul
			class="flex-1 flex items-center justify-center gap-5 font-medium text-[17px] leading-[27px]"
		>
			<li>
				<a href="/company" class="flex peer gap-1 items-center">Company<ArrowDownIcon /></a>
				<div class="Nav__dropdown__container">
					<CompanyDropdown />
				</div>
			</li>

			<li>
				<a href="/services" class="flex peer gap-1 items-center">Services<ArrowDownIcon /></a>
				<div class="Nav__dropdown__container">
					<ServicesDropdown />
				</div>
			</li>

			<li><a href="/sectors">Our sectors</a></li>
			<li>
				<a href="/community" class="flex peer gap-1 items-center">Community<ArrowDownIcon /></a>
				<div class="Nav__dropdown__container">
					<CommunityDropdown />
				</div>
			</li>
			<li><a href="/insight">Insights</a></li>
			<li><a href="/fifthlab">Fifthlab</a></li>
		</ul>

		<button on:click={() => (shouldRotate = !shouldRotate)}>
			<div
				class:-scale-x-100={shouldRotate}
				class:scale-x-100={!shouldRotate}
				class="transition-all duration-500"
			>
				<ThemeToggleIcon />
			</div>
		</button>
	</div>
</nav>
