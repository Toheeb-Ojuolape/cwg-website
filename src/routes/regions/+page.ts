import { graphqlClient } from '$lib/api';
import type { PageHeader } from '$lib/types/common-types';

export const load = async (): Promise<{ regionPageData: { header: PageHeader } }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                regionsPage {
                    data {
                        attributes {
                            header {
                                title
                                description
                                background_image {
                                    data {
                                        attributes {
                                            url
                                            alternativeText
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

	return { regionPageData: res.data.data.regionsPage.data.attributes };
};
