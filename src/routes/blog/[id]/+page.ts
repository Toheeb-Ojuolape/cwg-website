import { graphqlClient } from '$lib/api/index.js';
import { error } from '@sveltejs/kit';
import type { Blog } from '../../insights/types.js';
import { BLOG_QUERY } from './query.js';

export const load = async ({ params }): Promise<{ blog: Blog['attributes'] }> => {
	const res = await graphqlClient({
		data: {
			query: BLOG_QUERY,
			variables: { slug: params.id }
		}
	});

	if (res.data.data.blogs.data.length < 1) {
		throw error(404, 'Blog not found');
	}

	return {
		blog: res.data.data.blogs.data[0].attributes
	};
};
