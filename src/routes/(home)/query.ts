export const HOME_QUERY = `{
    homePage {
        data {
            attributes {
                hero_title
                hero_subtitle
                counter {
                    title
                    suffix
                    value
                    id
                }
                hero_images {
                    data {
                        attributes {
                            alternativeText
                            url
                        }
                    }
                }
                section_one {
                    content
                    id
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
                shares_highlight {
                    id
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
                    fy_action {
                        title
                        slug
                        id
                    }
                    image {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                }
                home_highlight_cards {
                    title
                    content
                    subtitle
                    link_slug
                    link_title
                    id
                    image {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                }
                industries_we_dominate_section {
                    title
                    subtitle
                    cards {
                        title
                        content
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
                quality_policy_section {
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
                    link_id
                    action {
                        title
                        slug
                    }
                }
                press_release_section_title
                press_release_section_id
                press_releases {
                    data {
                        attributes {
                            title
                            date_published
                            read_duration_mins
                            cover_image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            slug
                            blog_type {
                                data {
                                    attributes {
                                        name
                                        key
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
`;

export const SERVICES_QUERY = `{
    services {
        data {
            attributes {
                title
                slug
                image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                icon {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                description
                content {
                    __typename
                    ... on ComponentGlobalPageHeader {
                        headline
                        title
                        description
                    }
                }
            }
        }
    }
}`;
