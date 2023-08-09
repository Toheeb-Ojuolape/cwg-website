import { graphqlClient } from '$lib/api';
import { ALL_POSTS_QUERY } from '$lib/queries/blogs-query';
import { INSIGHTS_PAGE_QUERY } from '$lib/queries/insights-query';
import type { CMSBlog } from '$lib/types/common-types';
import type { InsightsPageData } from './types';

export const load = async (): Promise<{ insightsPage: InsightsPageData; posts: CMSBlog[] }> => {
	const res = await graphqlClient({
		data: {
			query: INSIGHTS_PAGE_QUERY
		}
	});

	const allBlogs = await graphqlClient({
		data: { query: ALL_POSTS_QUERY }
	});

	return {
		insightsPage: res.data.data.insightsPage.data.attributes,
		posts: allBlogs.data.data.blogs.data
	};
};
