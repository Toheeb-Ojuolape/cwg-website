import { graphqlClient } from '$lib/api';
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
