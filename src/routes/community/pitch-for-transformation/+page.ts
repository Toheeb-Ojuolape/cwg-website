import { graphqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { PitchForTransformation } from './types';

export const load: PageLoad = async (): Promise<{ pageData: PitchForTransformation }> => {
	const res = await graphqlClient({
		data: {
			query: `
            {
                pitchForTransformationPage {
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
                                description
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
                                section_link {
                                    title
                                    slug
                                }
                            }
                            judges_panel_title
                            judges_panel_subtitle
                            panel_of_judges {
                                data {
                                    attributes {
                                        first_name
                                        last_name
                                        uuid
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
                            transformation_champion_section {
                                title
                                body
                                action {
                                    title
                                    slug
                                }
                                cards {
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
                            }
                            evaluation_criteria_section {
                                title
                                subtitle
                                cards {
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
                            }
                            application_procedure_section {
                                title
                                content
                                title_position
                                content_position
                                section_link {
                                    title
                                    slug
                                }
                            }
                            block_quote {
                                content
                                title
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

	return { pageData: res.data.data.pitchForTransformationPage.data.attributes };
};
