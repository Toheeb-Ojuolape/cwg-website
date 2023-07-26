import { grapgqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { TExcellence } from './types';

export const load: PageLoad = async (): Promise<{ pageData: TExcellence }> => {
	const res = await grapgqlClient({
		data: {
			query: `{
            texcellenceConferencePage {
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
                        marquee_text
                        section_one {
                            left_title
                            left_body
                            right_body
                            right_image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                        speakers_section_title
                        speakers {
                            data {
                                attributes {
                                    title
                                    first_name
                                    last_name
                                    position
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
                        speakers_section_body
                        count_up_section_image {
                            data {
                                attributes {
                                    alternativeText
                                    url
                                }
                            }
                        }
                        count_up {
                            title
                            suffix
                            value
                        }
                        conference_section {
                            title
                            description
                        }
                        conference_topics(pagination: {pageSize: 20}) {
                            data {
                                attributes {
                                    title
                                    image {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                    topic_type
                                    arrow_direction
                                    date
                                }
                            }
                        }
                        pitch_transformation_section {
                            left_title
                            center_content
                            left_action {
                                title
                                slug
                            }
                            right_image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                        texcellence_festival {
                            title
                            content
                            subtitle
                            link_slug
                            link_title
                            image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                        }
                        featured_artists_section_title
                        featured_artists {
                            data {
                                attributes {
                                    name
                                    artist_type
                                    uuid
                                    image {
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
                        past_conference_title
                        past_conference_description
                        past_conference_image {
                            data {
                                attributes {
                                    alternativeText
                                    url
                                }
                            }
                        }
                        actions {
                            title
                            slug
                        }
                    }
                }
            }
        }
        `
		}
	});

	return { pageData: res.data.data.texcellenceConferencePage.data.attributes };
};
