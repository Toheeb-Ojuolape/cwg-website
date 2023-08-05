export const FOOTER_QUERY = `
{
    footer {
        data {
            attributes {
                headOfficeAddress
                phoneNumber
                emailAddress
                copyright
                services_title
                sectors_title
                insight_title
                community_title
                policy_title
                office_title
                services {
                    data {
                        attributes {
                            title
                            slug
                            image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                            icon {
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
                sectors {
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                company_title
                company_links {
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                insight_links {
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                community_links {
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                policy_links {
                    data {
                        attributes {
                            title
                            slug
                            file {
                                data {
                                    attributes {
                                        alternativeText
                                        ext
                                        url
                                    }
                                }
                            }
                        }
                    }
                }
                office_links {
                    data {
                        attributes {
                            title
                            slug
                        }
                    }
                }
                social_media_handles {
                    data {
                        attributes {
                            link
                            name
                            icon {
                                data {
                                    attributes {
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
}`;
