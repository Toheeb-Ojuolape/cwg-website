import { graphqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { CWGCommunity } from './types';

export const load: PageLoad = async (): Promise<{ pageData: CWGCommunity }> => {
	const res = await graphqlClient({
		data: {
			query: `
            {
                cwgTechCommunityPage {
                    data {
                        attributes {
                            header {
                                headline
                                title
                                description
                                background_image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                right_image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                action {
                                    title
                                    slug
                                }
                            }
                            videos_section {
                                title
                                video_links {
                                    title
                                    slug
                                    thumbnail {
                                        data {
                                            attributes {
                                                alternativeText
                                                url
                                            }
                                        }
                                    }
                                }
                                description
                            }
                            section_one {
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
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            section_two {
                                content
                                image_position
                                title
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                action {
                                    title
                                    slug
                                }
                            }
                            register_section {
                                title
                                share_text
                                enquiries_phone
                                location_text
                                description
                                location
                                action {
                                    title
                                    slug
                                }
                            }
                        }
                    }
                }
            }
            `
		}
	});

	return { pageData: res.data.data.cwgTechCommunityPage.data.attributes };
};
