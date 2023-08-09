import { graphqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import { HOME_QUERY, SERVICES_QUERY } from './query';
import type { HomePageData, HomeService } from './types';

export const load: PageLoad = async (): Promise<{
	home: HomePageData;
	services: HomeService[];
}> => {
	const res = await graphqlClient({
		data: { query: HOME_QUERY }
	});

	const serviceResponse = await graphqlClient({
		data: { query: SERVICES_QUERY }
	});

	return {
		home: res.data.data.homePage.data.attributes,
		services: serviceResponse.data.data.services.data
	};
};
