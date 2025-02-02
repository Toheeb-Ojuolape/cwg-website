import { apiClient, getCmsData, graphqlClient } from '$lib/api';
import type { MoreAboutUs } from '$lib/types/more-about-us-types';
import type { FooterData } from '$lib/types/footer-types';
import type { NavData } from '$lib/types/nav-type';
import type { OEMPartner } from '$lib/types/oem-partner';

import type { LayoutLoad } from './$types';
import type { RegionData } from '$lib/types/region-types';
import { COUNTRIES_QUERY, REGIONS_QUERY } from '$lib/queries/countries-query';
import { OEM_PARTNERS_QUERY } from '$lib/queries/oem-partners-query';
import { FOOTER_QUERY } from '$lib/queries/footer-query';
import type { Country } from '$lib/types/common-types';
import type { Leader, LeadershipType } from './leadership/leadership-types';

interface LayoutResponseData {
	oemPartners: OEMPartner[];
	nav: NavData;
	footer: FooterData;
	moreAboutUs: MoreAboutUs;
	regions: RegionData[];
	countries: Country[];
	leadershipTypes: LeadershipType[];
	allLeaders: Leader[];
}

export const load = (async (): Promise<LayoutResponseData> => {
	const data = await getCmsData('/nav?populate[0]=services_links.icon&populate[1]=community_links&populate[2]=company_links')

	const nav = data?.data.attributes

	// const moreAboutUs = await apiClient
	// 	.get('more-about-us?populate[0]=content.image')
	// 	.then((res) => res.data.data.attributes);

	const aboutUs = await getCmsData('/more-about-us?populate[0]=content.image')
	const moreAboutUs = aboutUs?.data.attributes

	console.log("moreAboutUs", moreAboutUs)

	const countries = await graphqlClient({
		data: { query: COUNTRIES_QUERY }
	});

	const oemPartners = await graphqlClient({
		data: { query: OEM_PARTNERS_QUERY }
	});

	const footer = await graphqlClient({
		data: { query: FOOTER_QUERY }
	});

	const regions = await graphqlClient({
		data: { query: REGIONS_QUERY }
	});

	const res = await graphqlClient({
		data: {
			query: `{
                leadershipTypes {
                    data {
                        attributes {
                            title
                            key
                            leaderships {
                            data {
                              attributes {
                                name
                                position
                                excerpt
                                slug
                                biography
                                leadership_types {
                                    data {
                                      attributes {
                                        key
                                        title
                                      }
                                    }
                                }
                                social_media_handles {
									name
									link
									icon {
										data {
											attributes {
												url
											}
										}
									}
								}
                                image {
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
		oemPartners: oemPartners.data.data.oemPartners.data,
		regions: regions.data.data.regions.data,
		countries: countries.data.data.countries.data,
		leadershipTypes: res.data.data.leadershipTypes.data,
		allLeaders: res.data.data.leadershipTypes.data.flatMap(
			(item: LeadershipType) => item.attributes.leaderships.data
		)
	};
}) satisfies LayoutLoad;
