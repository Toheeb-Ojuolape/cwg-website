export const ALL_POSTS_QUERY = `{
    blogs(pagination: {pageSize: 100}) {
        data {
            attributes {
                title
                blog_author {
                    data {
                        attributes {
                            name
                            uuid
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
                slug
                date_published
                read_duration_mins
                blog_type {
                    data {
                        attributes {
                            name
                            key
                        }
                    }
                }
                blog_categories {
                    data {
                        attributes {
                            name
                            uuid
                        }
                    }
                }
            }
        }
    }
}
`;
