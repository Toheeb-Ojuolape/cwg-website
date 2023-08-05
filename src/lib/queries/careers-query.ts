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
