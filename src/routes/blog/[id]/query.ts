export const BLOG_QUERY = `query ($slug: String){
    blogs(filters: {slug: {eq: $slug}}) {
        data {
            attributes {
                title
                read_duration_mins
                date_published
                slug
                cover_image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
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
                content
                preface
                blog_author {
                    data {
                        attributes {
                            name
                            uuid
                            description
                        }
                    }
                }
                related_stories {
                    data {
                        attributes {
                            title
                        }
                    }
                }
            }
        }
    }
    
}`;
