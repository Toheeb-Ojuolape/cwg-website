import { grapgqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { FifthlabResponse } from './types';

export const load: PageLoad = async (): Promise<{ fifthlab: FifthlabResponse }> => {
	const res = await grapgqlClient({
		data: {
			query: `
            {
                fifthlab {
                    data {
                        attributes {
                            header {
                                title
                                sub_title
                                sub_headline
                                link_text
                                link
                                bg_image {
                                    data {
                                        attributes {
                                            alt: alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            sections {
                                content
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
                            product_section_title
                            product_section_description
                            fifthlab_products {
                                data {
                                    attributes {
                                        name
                                        description
                                        logo {
                                            data {
                                                attributes {
                                                    alt: alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        link
                                        link_text
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
                    }
                }
            }`
		}
	});

	return {
		fifthlab: res.data.data.fifthlab.data.attributes
	};
};
