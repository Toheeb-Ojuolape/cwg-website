import { graphqlClient } from '$lib/api/index.js';
import type { Magazine } from '../../types.js';
import { MAGAZINE_QUERY } from './query.js';

export const load = async ({ params }): Promise<{ magazine: Magazine['attributes'] }> => {
	const res = await graphqlClient({
		data: { query: MAGAZINE_QUERY, variables: { uuid: params.id } }
	});

	return {
		magazine: res.data.data.magazines.data[0].attributes
	};
};
