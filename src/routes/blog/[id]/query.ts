export const BLOG_QUERY = `query ($slug: String){
    blogs(filters: {slug: {eq: $slug}}) {
        data {
            attributes {
                title
                blog_categories {
                    data {
                        attributes {
                            name
                        }
                    }
                }
                blog_author {
                    data {
                        attributes {
                            name
                            description
                        }
                    }
                }
                cover_image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                read_duration_mins
                content
                preface
                slug
                date_published
                related_stories {
                    data {
                        attributes {
                            title
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            article_date
                            read_duration_mins
                            uuid
                            article_type {
                                data {
                                    attributes {
                                        title
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
