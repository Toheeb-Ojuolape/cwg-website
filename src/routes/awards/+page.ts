import { graphqlClient } from '$lib/api';
import type { AwardsPage } from '$lib/types/awards-page';
import type { PageLoad } from './$types';
import type { Awards } from './types';

export const load = (async (): Promise<{ awardsPage: AwardsPage; awards: Awards['data'] }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                awardsPage {
                    data {
                        attributes {
                            page_title
                            page_subtitle
                            header {
                                background_image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                                title
                                description
                            }
                            awards {
                                data {
                                    attributes {
                                        title
                                        description
                                        uuid
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            award_companies {
                                data {
                                    attributes {
                                        name
                                        logo {
                                            data {
                                                attributes {
                                                    url
                                                    provider
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

	const awardRes = await graphqlClient({
		data: {
			query: `{
                awards(pagination: {pageSize: 100}) {
                    data {
                        attributes {
                            title
                            description
                            image {
                                data {
                                    attributes {
                                        url
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
		awardsPage: res.data.data.awardsPage.data.attributes,
		awards: awardRes.data.data.awards.data
	};
}) satisfies PageLoad;
