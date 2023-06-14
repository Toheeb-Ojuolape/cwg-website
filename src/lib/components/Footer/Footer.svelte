<script>
	import {
		community,
		company,
		industries,
		insights,
		offices,
		policies,
		products
	} from '$lib/constants/footer-content';
	import FooterLinks from './FooterLinks.svelte';
	import FooterRightComponent from './FooterRightComponent.svelte';
</script>

<footer class="bg-midnight-blue">
	<div class="box-container w-full mx-auto flex flex-col px-4 lg:px-8 lg:flex-row">
		<div class="flex-1">
			<div class="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4 pt-22 pb-4 lg:pb-8">
				<FooterLinks title="Company" list={company} />
				<FooterLinks title="Products" list={products} />
				<div>
					<FooterLinks title="Industries" list={industries} />
					<div class="hidden lg:block lg:mt-11">
						<FooterLinks title="Community" list={community} />
					</div>
				</div>
				<FooterLinks title="Insights" list={insights} />
			</div>

			<div class="grid gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-4 mt-0 lg:mt-11">
				<div class="block lg:hidden">
					<FooterLinks title="Community" list={community} />
				</div>
				<FooterLinks title="Policy" list={policies} />
				<FooterLinks title="Offices" list={offices} />

				<div class="col-span-1 lg:col-span-2 pt-0 lg:pt-[50px] text-white">
					<div class="flex gap-6 items-start">
						<h5 class="hidden lg:block text-greyish-blue text-headline-5">A</h5>
						<p class="text-body-s mt-1">
							Head office<br />Block 54A, Plot 10, Off Rufus Giwa Street, Off Adebayo Doherty Road,
							Off Admiralty Way, Lekki Phase 1, Lagos.
							<br /><a href="#map" class="text-bright-blue">↘ Google map </a>
						</p>
					</div>

					<div class="flex gap-6 mt-4 items-start">
						<h5 class="hidden lg:block text-greyish-blue text-headline-5">T</h5>
						<a href="tel:23412809800" rel="noreferrer" class="text-body-s mt-1">+234 (0)128 09800</a
						>
					</div>

					<div class="flex gap-6 mt-4 lg:mt-6">
						<h5 class="hidden lg:block text-greyish-blue text-headline-5">E</h5>
						<a href="mailto:info@cwg-plc.com" rel="noreferrer" class="text-body-s mt-1"
							>info@cwg-plc.com</a
						>
					</div>
				</div>
			</div>

			<p class="hidden lg:block text-body-s text-white mt-[30px] mb-[34px]">
				CWG PLC Copyright © 2023 All Rights Reserved.
			</p>
		</div>

		<div class="hidden lg:block w-[1.5px] bg-greyish-blue" />

		<FooterRightComponent />
		<p class="block lg:hidden text-center text-body-xs text-white mt-[30px] mb-[34px]">
			CWG PLC Copyright © 2023 All Rights Reserved.
		</p>
	</div>
</footer>
