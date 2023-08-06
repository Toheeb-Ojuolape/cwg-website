import { graphqlClient } from '$lib/api';
import { INSIGHTS_PAGE_QUERY } from '$lib/queries/insights-query';
import type { InsightsPageData } from './types';

export const load = async (): Promise<{ pageData: InsightsPageData }> => {
	const res = await graphqlClient({
		data: {
			query: INSIGHTS_PAGE_QUERY
		}
	});

	return { pageData: res.data.data.insightsPage.data.attributes };
};
