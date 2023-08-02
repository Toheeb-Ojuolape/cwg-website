// export const prerender = true; TODO: uncomment this line to enable prerendering
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

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

	const footer = await graphqlClient({
		data: {
			query: `
			{
				footer {
					data {
						attributes {
							headOfficeAddress
							phoneNumber
							emailAddress
							copyright
							services_title
							sectors_title
							insight_title
							community_title
							policy_title
							office_title
							services {
								data {
									attributes {
										title
										slug
										image {
											data {
												attributes {
													alternativeText
													url
												}
											}
										}
										icon {
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
							sectors {
								data {
									attributes {
										title
										slug
									}
								}
							}
							company_title
							company_links {
								data {
									attributes {
										title
										slug
									}
								}
							}
							insight_links {
								data {
									attributes {
										title
										slug
									}
								}
							}
							community_links {
								data {
									attributes {
										title
										slug
									}
								}
							}
							policy_links {
								data {
									attributes {
										title
										slug
										file {
											data {
												attributes {
													alternativeText
													ext
													url
												}
											}
										}
									}
								}
							}
							office_links {
								data {
									attributes {
										title
										slug
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
		footer: footer.data.data.footer.data.attributes,
		moreAboutUs,
		oemPartners: oemPartners.data.data.oemPartners.data
	};
}) satisfies LayoutLoad;
