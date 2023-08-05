export const CAREER_DEPARTMENT_PAGE_QUERY = `{
    careersDepartmentPage {
        data {
            attributes {
                header {
                    headline
                    title
                    description
                }
                career_testimonials {
                    data {
                        attributes {
                            name
                            position
                            location
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            comment
                        }
                    }
                }
            }
        }
    }
}`;

export const ALL_JOBS_QUERY = `{
    jobs {
        data {
            attributes {
                uuid
                title
                department {
                    data {
                        attributes {
                            slug
                        }
                    }
                }
                countries {
                    data {
                        attributes {
                            name
                        }
                    }
                }
            }
        }
    }
}`;

export const JOBS_BY_UUID_QUERY = `query ($uuid: String) {
    jobs(filters: {uuid: {eq: $uuid}}) {
        data {
            attributes {
                title
                description
                overview
                role_type {
                    data {
                        attributes {
                            title
                            uuid
                        }
                    }
                }
                can_apply
                uuid
                countries {
                    data {
                        attributes {
                            name
                        }
                    }
                }
            }
        }
    }
}`;
