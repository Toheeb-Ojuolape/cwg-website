import { graphqlClient } from '$lib/api';
import { MORE_ABOUT_US_QUERY } from '$lib/queries/more-about-us-query';
import type { PageLoad } from './$types';
import type { SectorsPage } from './types';

export const load: PageLoad = async (): Promise<{ sectorsPage: SectorsPage }> => {
	const res = await graphqlClient({
		data: {
			query: `
            {
                sectorPage {
                    data {
                        attributes {
                            header {
                                title
                                sub_title
                                bg_image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                sub_headline
                            }
                            ${MORE_ABOUT_US_QUERY}
                            sectors_section_title
                            sectors {
                                data {
                                    attributes {
                                        title
                                        content
                                        image {
                                            data {
                                                attributes {
                                                    alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        slug
                                        description
                                    }
                                }
                            }
                            policies_section_title
                            policies {
                                data {
                                    attributes {
                                        title
                                        slug
                                        subtitle
                                        icon {
                                            data {
                                                attributes {
                                                    alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        file {
                                            data {
                                                attributes {
                                                    url
                                                    mime
                                                    ext
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            `
		}
	});

	return { sectorsPage: res.data.data.sectorPage.data.attributes };
};
