// export const prerender = true; TODO: uncomment this line to enable prerendering
import { apiClient, graphqlClient } from '$lib/api';
import type { MoreAboutUs } from '$lib/types/more-about-us-types';
import type { FooterData } from '$lib/types/footer-types';
import type { NavData } from '$lib/types/nav-type';
import type { OEMPartner } from '$lib/types/oem-partner';

import type { LayoutLoad } from './$types';

interface LayoutResponseData {
	oemPartners: OEMPartner[];
	nav: NavData;
	footer: FooterData;
	moreAboutUs: MoreAboutUs;
}

export const load = (async (): Promise<LayoutResponseData> => {
	const nav = await apiClient
		.get(
			'/nav?populate=*&populate[0]=services_links.icon&populate[1]=community_links&populate[2]=company_links'
		)
		.then((res) => res.data.data.attributes);

	const footer = await apiClient
		.get('/footer?populate=*')
		.then((res) => res.data.data.attributes);

	const moreAboutUs = await apiClient
		.get('more-about-us?populate[0]=content.image')
		.then((res) => res.data.data.attributes);

	const oemPartners = await graphqlClient({
		data: {
			query: `{
				oemPartners {
					data {
						attributes {
							name
							logo {
								data {
									attributes {
										alternativeText
										url
									}
								}
							}
							logo_dark {
								data {
									attributes {
										alternativeText
										url
									}
								}
							}
						}
					}
				}
			}`
		}
	});

	return {
		nav,
		footer,
		moreAboutUs,
		oemPartners: oemPartners.data.data.oemPartners.data
	};
}) satisfies LayoutLoad;
