<script lang="ts">
	import type { CommunityLinks, FooterData } from '$lib/types/footer-types';
	import FooterLinks from './FooterLinks.svelte';
	import FooterRightComponent from './FooterRightComponent.svelte';
	import PolicyLinks from './PolicyLinks.svelte';

	export let footer: FooterData;

	function formatSlug(prefix: string, data: CommunityLinks['data']) {
		return data.map((val) => ({
			...val,
			attributes: {
				...val.attributes,
				slug: `${prefix}/${val.attributes.slug}`
			}
		}));
	}
</script>

<footer>
	<div class="bg-midnight-blue">
		<div class="w-full mx-auto flex flex-col section-container lg:flex-row">
			<div class="flex-1">
				<div class="grid grid-cols-2 gap-4 lg:gap-0 lg:grid-cols-4 pt-22 pb-4 lg:pb-8">
					<FooterLinks title={footer.company_title} list={footer.company_links.data} />
					<FooterLinks
						title={footer.services_title}
						list={formatSlug('services', footer.services.data)}
					/>
					<div>
						<FooterLinks
							title={footer.sectors_title}
							list={formatSlug('our-sectors', footer.sectors.data)}
						/>
						<div class="hidden lg:block lg:mt-11">
							<FooterLinks
								title={footer.community_title}
								list={formatSlug('community', footer.community_links.data)}
							/>
						</div>
					</div>
					<FooterLinks title={footer.insight_title} list={footer.insight_links.data} />
				</div>

				<div class="grid gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-4 mt-0 lg:mt-11">
					<div class="block lg:hidden">
						<FooterLinks
							title={footer.community_title}
							list={formatSlug('community', footer.community_links.data)}
						/>
					</div>
					<PolicyLinks title={footer.policy_title} list={footer.policy_links.data} />
					<FooterLinks title={footer.office_title} list={footer.office_links.data} />

					<div class="col-span-1 lg:col-span-2 pt-0 lg:pt-[50px] text-white">
						<div class="flex gap-6 items-start">
							<h5 class="hidden lg:block text-greyish-blue text-headline-5">A</h5>
							<p class="text-body-s mt-1">
								Head office<br />{footer.headOfficeAddress}
								<br /><a href="/" class="text-bright-blue">↘ Google map </a>
								<!--TODO: replace with map url-->
							</p>
						</div>

						<div class="flex gap-6 mt-4 items-start">
							<h5 class="hidden lg:block text-greyish-blue text-headline-5">T</h5>
							<a
								href={`tel:${footer.phoneNumber}`}
								rel="noreferrer"
								class="text-body-s mt-1">{footer.phoneNumber}</a
							>
						</div>

						<div class="flex gap-6 mt-4 lg:mt-6">
							<h5 class="hidden lg:block text-greyish-blue text-headline-5">E</h5>
							<a
								href={`mailto:${footer.emailAddress}`}
								rel="noreferrer"
								class="text-body-s mt-1">{footer.emailAddress}</a
							>
						</div>
					</div>
				</div>

				<p class="hidden lg:block text-body-s text-white mt-[30px] mb-[34px]">
					{footer.copyright}
				</p>
			</div>

			<div class="hidden lg:block w-[1.5px] bg-greyish-blue" />

			<FooterRightComponent socialLinks={footer.social_media_handles.data} />
			<p class="block lg:hidden text-center text-body-xs text-white mt-[30px] mb-[34px]">
				{footer.copyright}
			</p>
		</div>
	</div>
</footer>
