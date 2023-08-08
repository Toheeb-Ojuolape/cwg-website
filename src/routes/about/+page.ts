import { graphqlClient } from '$lib/api';
import { MORE_ABOUT_US_QUERY } from '$lib/queries/more-about-us-query';
import type { AboutPage } from '$lib/types/about-page';
import type { PageLoad } from './$types';

export const load = (async (): Promise<{ aboutPage: AboutPage }> => {
	const res = await graphqlClient({
		data: {
			query: `{
            aboutPage {
                data {
                    attributes {
                        journey_section_title
                        pan_african_title
                        pan_african_content
                        ${MORE_ABOUT_US_QUERY}
                        pan_african_link {
                            title
                            slug
                        }
                        celebrating_30_section {
                            title
                            content
                            link {
                                title
                                slug
                            }
                            right_images {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            title_image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        header {
                            title
                            sub_title
                            link
                            background_color
                            sub_headline
                            link_text
                            bg_image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                        }
                        section_one {
                            title
                            content
                            title_position
                            content_position
                        }
                        explore_cwg {
                            content
                            link_title
                            links {
                                title
                                slug
                            }
                        }
                        history_section {
                            title
                            histories {
                                title
                                year
                                content
                            }
                        }
                        journey_section_table {
                            id
                            table_row {
                                id
                                journey_date
                                achievement_title
                                achievement_subtitle
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
                }
            }
        }`
		}
	});

	return { aboutPage: res.data.data.aboutPage.data.attributes };
}) satisfies PageLoad;
