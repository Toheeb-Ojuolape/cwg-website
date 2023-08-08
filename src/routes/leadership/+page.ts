import { graphqlClient } from '$lib/api';
import { MORE_ABOUT_US_QUERY } from '$lib/queries/more-about-us-query';
import type { LayoutLoad } from '../$types';
import type { LeadershipPage } from './leadership-types';

export const load = (async (): Promise<{
	leadershipPage: LeadershipPage;
}> => {
	const leaderhipRes = await graphqlClient({
		data: {
			query: `{
                leadershipPage {
                    data {
                        attributes {
                            header {
                                headline
                                title
                                description
                                right_image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            ${MORE_ABOUT_US_QUERY}
                        }
                    }
                }
            }`
		}
	});

	return {
		leadershipPage: leaderhipRes.data.data.leadershipPage.data
	};
}) satisfies LayoutLoad;
