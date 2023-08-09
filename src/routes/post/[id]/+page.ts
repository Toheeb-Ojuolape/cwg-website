import { graphqlClient } from '$lib/api/index.js';
import { error } from '@sveltejs/kit';
import { BLOG_QUERY } from './query.js';
import type { PageLoad } from './$types.js';
import type { CMSBlog } from '$lib/types/common-types.js';

export const load: PageLoad = async ({ params }): Promise<{ blog: CMSBlog['attributes'] }> => {
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
