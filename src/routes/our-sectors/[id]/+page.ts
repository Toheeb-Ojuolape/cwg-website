import { grapgqlClient } from '$lib/api';
import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import type { Sector } from './types';

export const load: PageLoad = async ({ params }) => {
	const res = await grapgqlClient({
		data: {
			query: `
            {
                sectors {
                    data {
                        attributes {
                            slug
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
                            }
                            sections {
                                ... on ComponentGlobalSectionTextWithImage {
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
                                }
                                ... on ComponentGlobalSectionWithText {
                                    swt_title: title
                                    swt_content: content
                                    swt_title_position: title_position
                                    swt_content_position: content_position
                                }
                            }
                        }
                    }
                }
            }
            `
		}
	});

	const sectors = res.data.data.sectors.data as Sector[];
	const slug = params.id;

	const sector = sectors.find((sector) => sector.attributes.slug === slug);

	if (!sector) {
		throw error(404, 'Sector not found');
	}

	return { sector: sector };
};
