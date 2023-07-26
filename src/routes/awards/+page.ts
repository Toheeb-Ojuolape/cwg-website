import { graphqlClient } from '$lib/api';
import type { AwardsPage } from '$lib/types/awards-page';
import type { PageLoad } from './$types';

export const load = (async (): Promise<{ awardsPage: AwardsPage }> => {
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

	return { awardsPage: res.data.data.awardsPage.data.attributes };
}) satisfies PageLoad;
