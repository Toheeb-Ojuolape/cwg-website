import { graphqlClient } from '$lib/api';
import { CWG_30_QUERY } from '$lib/queries/insights-query';
import type { CWGAt30PageData } from './types';

export const load = async (): Promise<{ pageData: CWGAt30PageData }> => {
	const res = await graphqlClient({
		data: { query: CWG_30_QUERY }
	});
	return {
		pageData: res.data.data.cwgAt30Page.data.attributes
	};
};
