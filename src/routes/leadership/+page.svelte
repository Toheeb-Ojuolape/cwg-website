<script lang="ts">
	import MoreAboutUs from '$lib/components/MoreAboutUs.svelte';
	import LeadershipCardList from './LeadershipCardList.svelte';

	let activeTab: 'directors' | 'management' = 'directors';

	$: arrayList = activeTab === 'directors' ? Array(9).fill(undefined) : Array(6).fill(undefined);

	$: leaders = [
		...arrayList.map((_) => ({
			name: 'Austin Okere',
			position: 'Non-Executive Director (Chairman, Risk Management and Audit Committee)',
			bio: 'string',
			image: '/images/leadership-hero.png'
		}))
	];

	const activeTabClasses =
		'bg-whitish-blue border-x border-t border-black-500 dark:border-black-900 dark:bg-dark-highlight';
</script>

<div>
	<header
		class="text-white box-container bg-midnight-blue mx-auto pl-4 lg:pl-8 flex items-center justify-between"
	>
		<div class="flex-1">
			<h1 class="text-headline-1">Our Leadership</h1>
			<p class="text-body-m max-w-[567px]">
				Our leadership team is comprised of committed, driven, and seasoned executives who
				collaborate with each other, leveraging their extensive expertise and experience
				along side other employees to create a positive impact for all our stakeholders.
			</p>
		</div>

		<div class="flex-1 bg-leadership bg-cover bg-no-repeat h-[477px]" />
	</header>

	<section class="box-container mx-auto lg:px-33 pt-16">
		<div class="flex -mb-[1px]">
			<button
				on:click={() => (activeTab = 'directors')}
				class:text-black-800={activeTab !== 'directors'}
				class={`text-headline-6 px-6 pb-5 pt-4 ${
					activeTab === 'directors' ? activeTabClasses : ''
				}`}>Board of Directors</button
			>
			<button
				on:click={() => (activeTab = 'management')}
				class:text-black-800={activeTab !== 'management'}
				class={`text-headline-6 px-6 pb-5 pt-4 ${
					activeTab === 'management' ? activeTabClasses : ''
				}`}
				class:activeTabClasses>Our Management</button
			>
		</div>
		<div
			class="bg-whitish-blue dark:bg-dark-highlight px-16 pt-21 pb-20 border border-black-500 dark:border-black-900"
		>
			<LeadershipCardList {leaders} />
		</div>
	</section>

	<MoreAboutUs />
</div>
