import { grapgqlClient } from '$lib/api';
import type { LayoutLoad } from '../$types';
import type { Leader, LeadershipPage, LeadershipType } from './leadership-types';

export const load = (async (): Promise<{
	leadershipTypes: LeadershipType[];
	allLeaders: Leader[];
	leadershipPage: LeadershipPage;
}> => {
	const res = await grapgqlClient({
		data: {
			query: `{
                leadershipTypes {
                    data {
                        attributes {
                            title
                            key
                              leaderships {
                            data {
                              attributes {
                                name
                                position
                                excerpt
                                slug
                                biography
                                leadership_types {
                                    data {
                                      attributes {
                                        key
                                        title
                                      }
                                    }
                                }
                                social_media {
                                    link
                                }
                                image {
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
                    }
                }
            }`
		}
	});

	const leaderhipRes = await grapgqlClient({
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
		leadershipTypes: res.data.data.leadershipTypes.data,
		allLeaders: res.data.data.leadershipTypes.data.flatMap(
			(item: LeadershipType) => item.attributes.leaderships.data
		),
		leadershipPage: leaderhipRes.data.data.leadershipPage.data
	};
}) satisfies LayoutLoad;
