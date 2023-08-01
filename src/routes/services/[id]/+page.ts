import { graphqlClient } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Service } from './types';

export const load: PageLoad = async ({ params }): Promise<{ service: Service }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                services(filters: {slug: {eq: "${params.id}"}}) {
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
                            icon {
                                data {
                                    attributes {
                                        alt: alternativeText
                                        url
                                    }
                                }
                            }
                            content {
                                ... on ComponentGlobalSectionWithCards {
                                    __typename
                                    sectionWithCardsTitle: title
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
                                                    alt: alternativeText
                                                    url
                                                }
                                            }
                                        }
                                    }
                                }
                                ... on ComponentGlobalSectionWithText {
                                    __typename
                                    sectionWithTextTitle: title
                                    sectionWithTextContent: content
                                    title_position
                                    content_position
                                }
                                ... on ComponentGlobalSectionTextWithImage {
                                    __typename
                                    content
                                    image_position
                                    title
                                    image {
                                        data {
                                            attributes {
                                                alt: alternativeText
                                                url
                                            }
                                        }
                                    }
                                    action {
                                        title
                                        slug
                                    }
                                }
                                ... on ComponentProductPageAtmServicesNumbers {
                                    __typename
                                    id
                                    title
                                    service_numbers {
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
                                ... on ComponentProductPageCwgAcademySection {
                                    __typename
                                    title
                                    body
                                    carousel {
                                        title
                                        content
                                        subtitle
                                        link_slug
                                        link_title
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
                                ... on ComponentProductPageOurCoursesSection {
                                    __typename
                                    title
                                    subtitle
                                    courses {
                                        data {
                                            attributes {
                                                name
                                                uuid
                                                course_catergory {
                                                    data {
                                                        attributes {
                                                            name
                                                            uuid
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                ... on ComponentProductPageChangingTheGameSection {
                                    __typename
                                    title
                                    content
                                    image {
                                        data {
                                            attributes {
                                                alt: alternativeText
                                                url
                                            }
                                        }
                                    }
                                }
                                ... on ComponentProductPageDeliveryModelSection {
                                    __typename
                                    title
                                    content
                                    cards {
                                        title
                                        content
                                        subtitle
                                        link_slug
                                        link_title
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
                                ... on ComponentProductPageSupportServicesSection {
                                    __typename
                                    title
                                    content
                                    cards {
                                        title
                                        content
                                        subtitle
                                        link_slug
                                        link_title
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
                                ... on ComponentProductPageCwgHardwareSection {
                                    __typename
                                    title
                                    cards {
                                        title
                                        content
                                        subtitle
                                        link_slug
                                        link_title
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
                                ... on ComponentGlobalPageHeader {
                                    __typename
                                    headline
                                    title
                                    description
                                    background_image {
                                        data {
                                            attributes {
                                                alt: alternativeText
                                                url
                                            }
                                        }
                                    }
                                    right_image {
                                        data {
                                            attributes {
                                                alt: alternativeText
                                                url
                                            }
                                        }
                                    }
                                    action {
                                        title
                                        slug
                                        icon
                                    }
                                }
                                ... on ComponentGlobalBlockQuote {
                                    __typename
                                    content
                                    title
                                    action {
                                        title
                                        slug
                                    }
                                }
                            }
                            images_section {
                                data {
                                    attributes {
                                        alt: alternativeText
                                        url
                                    }
                                }
                            }
                            should_show_esteemed_clients
                            esteemed_clients(pagination: {pageSize: 100}) {
                                data {
                                    attributes {
                                        name
                                        logo {
                                            data {
                                                attributes {
                                                    alt: alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        logo_dark {
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
                    }
                }
            }`
		}
	});

	if (!res || res.data.data.services.data.length <= 0) {
		throw error(404, 'Page not found');
	}

	return {
		service: res.data.data.services.data[0].attributes
	};
};
