import { grapgqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { ImpactPage } from './types';

export const load: PageLoad = async (): Promise<{ impactPage: ImpactPage }> => {
	const res = await grapgqlClient({
		data: {
			query: `
            {
                impactPage {
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
                            }
                            section_one {
                                content
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
                            initiatives_section {
                                title
                                subtitle
                                cards {
                                    title
                                    content
                                    subtitle
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
                    }
                }
            }
            `
		}
	});

	return { impactPage: res.data.data.impactPage.data.attributes };
};
