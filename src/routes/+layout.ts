// export const prerender = true; TODO: uncomment this line to enable prerendering

import { apiClient } from '$lib/api';

import type { LayoutLoad } from './$types';

export const load = (async () => {
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

	return {
		nav,
		footer,
		moreAboutUs
	};
}) satisfies LayoutLoad;
