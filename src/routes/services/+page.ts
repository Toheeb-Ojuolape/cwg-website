import { graphqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { ServicePageData } from './types';

export const load: PageLoad = async (): Promise<{ servicePage: ServicePageData }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                servicePage {
                    data {
                        attributes {
                            header {
                                title
                                description
                                background_image {
                                    data {
                                        attributes {
                                            url
                                        }
                                    }
                                }
                            }
                            services(pagination: {pageSize: 100}) {
                                data {
                                    attributes {
                                        image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        title
                                        slug
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
		servicePage: res.data.data.servicePage.data.attributes
	};
};
