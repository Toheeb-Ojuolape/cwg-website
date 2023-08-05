import { graphqlClient } from '$lib/api';
import type { LayoutLoad } from '../$types';
import type { CareersPage } from './types';

export const load: LayoutLoad = async (): Promise<{ careersPage: CareersPage }> => {
	const res = await graphqlClient({
		data: {
			query: `
            {
                careersPage {
                    data {
                        attributes {
                            header {
                                headline
                                title
                                description
                                right_image {
                                    data {
                                        attributes {
                                            alt: alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            explore_opportunity_title
                            explore_opportunity_subtitle
                            opportunities {
                                data {
                                    attributes {
                                        title
                                        slug
                                        image {
                                            data {
                                                attributes {
                                                    alt: alternativeText
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            departments(pagination: {pageSize: 100}) {
                                data {
                                    attributes {
                                        title
                                        slug
                                        icon {
                                            data {
                                                attributes {
                                                    alt: alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        jobs {
                                            data {
                                                attributes {
                                                    uuid
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            our_regions_section {
                                content
                                image_position
                                title
                                action {
                                    title
                                    slug
                                }
                                image {
                                    data {
                                        attributes {
                                            alt: alternativeText
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
		careersPage: res.data.data.careersPage.data.attributes
	};
};
