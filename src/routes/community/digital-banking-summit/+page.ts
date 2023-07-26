import { graphqlClient } from '$lib/api';
import type { DigitalSummit } from './types';

export const load = async (): Promise<{ pageData: DigitalSummit }> => {
	const res = await graphqlClient({
		data: {
			query: `
            {
                digitalBankingSummitPage {
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
                            banking_summit_section {
                                title
                                images {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                content
                            }
                            conference_image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                            registration_section {
                                title
                                action {
                                    title
                                    slug
                                }
                                share_text
                                enquiries_phone
                                location_text
                                description
                                location
                            }
                        }
                    }
                }
            }
            `
		}
	});
	return { pageData: res.data.data.digitalBankingSummitPage.data.attributes };
};
