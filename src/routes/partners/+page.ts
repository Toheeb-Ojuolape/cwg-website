import { graphqlClient } from '$lib/api';
import type { PartnersPage } from '$lib/types/partners-page';
import type { PageLoad } from './$types';

export const load = (async (): Promise<{ partnersPage: PartnersPage }> => {
	const res = await graphqlClient({
		data: {
			query: `
			{
				ourPartnersPage {
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
							section_one_content
							section_one_images {
								data {
									attributes {
										alternativeText
										url
									}
								}
							}
							section_one_images_dark {
								data {
									attributes {
										alternativeText
										url
									}
								}
							}
							oem_partner_section_title
							oem_partner_section_subtitle
							oem_partners {
								data {
									attributes {
										logo {
											data {
												attributes {
													alternativeText
													url
												}
											}
										}
										logo_dark {
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
							support_coverage_section_title
							support_coverage_section_cards {
								title
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
							esteemed_client_section_title
							esteemed_client_section_subtitle
							esteemed_clients {
								data {
									attributes {
										logo {
											data {
												attributes {
													alternativeText
													url
												}
											}
										}
										logo_dark {
											data {
												attributes {
													alternativeText
													url
												}
											}
										}
										name
									}
								}
							}
						}
					}
				}
			}`
		}
	});

	return { partnersPage: res.data.data.ourPartnersPage.data.attributes };
}) satisfies PageLoad;
