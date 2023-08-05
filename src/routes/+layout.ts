// export const prerender = true; TODO: uncomment this line to enable prerendering
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

import { apiClient, graphqlClient } from '$lib/api';
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

interface LayoutResponseData {
	oemPartners: OEMPartner[];
	nav: NavData;
	footer: FooterData;
	moreAboutUs: MoreAboutUs;
	regions: RegionData[];
	countries: Country[];
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

	return {
		nav,
		footer: footer.data.data.footer.data.attributes,
		moreAboutUs,
		oemPartners: oemPartners.data.data.oemPartners.data,
		regions: regions.data.data.regions.data,
		countries: countries.data.data.countries.data
	};
}) satisfies LayoutLoad;
