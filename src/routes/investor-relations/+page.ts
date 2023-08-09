import { graphqlClient } from '$lib/api';
import type { PageLoad } from './$types';
import type { InvestorRelationPage } from './types';

export const load: PageLoad = async (): Promise<{ pageData: InvestorRelationPage }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                investorRelationPage {
                    data {
                        attributes {
                            header {
                                title
                                description
                                headline
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
                                title
                                content
                                title_position
                                content_position
                                link_id
                            }
                            press_release {
                                data {
                                    attributes {
                                        title
                                        cover_image {
                                            data {
                                                attributes {
                                                    alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        date_published
                                        read_duration_mins
                                        slug
                                        blog_type {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            upcoming_event {
                                data {
                                    attributes {
                                        title
                                        datetime
                                        video_link
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
                            upcoming_event_title
                            all_events_link {
                                title
                                slug
                            }
                            all_press_releases_link {
                                title
                                slug
                            }
                            contact_us_info
                            annual_result_breakdowns {
                                data {
                                    attributes {
                                        title
                                        percentage
                                        status
                                        comment
                                    }
                                }
                            }
                            company_years {
                                data {
                                    attributes {
                                        year
                                        presentations_and_videos {
                                            data {
                                                attributes {
                                                    title
                                                    file {
                                                        data {
                                                            attributes {
                                                                alternativeText
                                                                url
                                                            }
                                                        }
                                                    }
                                                    type
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            shares_highlight {
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                                share_price_title
                                share_price_date
                                share_name
                                share_currency
                                share_unit_price
                                fy_title
                                revenue
                                profit_before_tax
                                gross_profit
                                profit_after_tax
                            }
                        }
                    }
                }
            }`
		}
	});
	return {
		pageData: res.data.data.investorRelationPage.data.attributes
	};
};
