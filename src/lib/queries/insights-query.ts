export const INSIGHTS_PAGE_QUERY = `{
    insightsPage {
        data {
            attributes {
                header {
                    headline
                    title
                    description
                    background_image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                featured_section_title
                featured_blog {
                    data {
                        attributes {
                            title
                            preface
                            slug
                            date_published
                            blog_author {
                                data {
                                    attributes {
                                        name
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
                        }
                    }
                }
                insights_tab_list {
                    name
                    link_to_section
                }
                blogs_section {
                    section_id
                    title
                    description
                    blogs {
                        data {
                            attributes {
                                title
                                blog_author {
                                    data {
                                        attributes {
                                            name
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
                                blog_categories {
                                    data {
                                        attributes {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                event_section {
                    section_id
                    left_title
                    left_link
                    right_content
                    right_caption
                    youtube_video_id
                    video_thumbnail {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                press_release_section {
                    section_id
                    title
                    description
                    articles {
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
                                article_type {
                                    data {
                                        attributes {
                                            title
                                        }
                                    }
                                }
                                uuid
                            }
                        }
                    }
                }
                podcast_section {
                    section_id
                    title
                    description
                    podcasts {
                        data {
                            attributes {
                                title
                                youtube_video_id
                                uuid
                                thumbnail {
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
                magazine_section {
                    section_id
                    title
                    description
                    content {
                        data {
                            attributes {
                                title
                                uuid
                                issue_date
                                cover {
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
                newsroom_section {
                    section_id
                    title
                    description
                    content {
                        data {
                            attributes {
                                title
                                uuid
                                date
                                image {
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
                media_section {
                    section_id
                    title
                    description
                    content {
                        data {
                            attributes {
                                title
                                uuid
                                content {
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
                }
                send_newsletter_section {
                    section_id
                    title
                    description
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    socials {
                        data {
                            attributes {
                                name
                                link
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
    }
}
`;

export const CWG_30_QUERY = `{
    cwgAt30Page {
        data {
            attributes {
                header {
                    title
                    sub_title
                    link
                    background_color
                    sub_headline
                    link_text
                    right_image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                    bg_image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                road_to_30_section {
                    title
                    content
                    title_position
                    content_position
                    link_id
                }
                journey_section_title
                journey_text
                md_section {
                    middle_content
                    right_content
                    leadership {
                        data {
                            attributes {
                                name
                                position
                                image {
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
                first_30_section {
                    title
                    content
                    title_position
                    content_position
                    link_id
                }
                founder_section {
                    title
                    content
                    leadership {
                        data {
                            attributes {
                                name
                                position
                                image {
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
                former_ceo {
                    name
                    position
                    content
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                random_content
                former_business_director {
                    name
                    position
                    content
                    image {
                        data {
                            attributes {
                                url
                            }
                        }
                    }
                }
                pan_african_section {
                    content
                    image_position
                    title
                    link_id
                    image {
                        data {
                            attributes {
                                url
                                alternativeText
                            }
                        }
                    }
                    action {
                        title
                        slug
                    }
                }
                founder_quote {
                    content
                    title
                    source
                }
                fifth_lab_section {
                    title
                    content
                    title_position
                    content_position
                    link_id
                }
                founder_quote_2 {
                    content
                    title
                    source
                }
                next_30_section {
                    title
                    content
                    title_position
                    content_position
                    link_id
                }
                cwg_30_events {
                    data {
                        attributes {
                            title
                            date
                            link_one {
                                title
                                slug
                                thumbnail {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            link_two {
                                title
                                slug
                                thumbnail {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            uuid
                        }
                    }
                }
                fifthlab_youtube {
                    title
                    video_id
                    thumbnail {
                        data {
                            attributes {
                                alternativeText
                                url
                            }
                        }
                    }
                }
                road_to_30_youtube {
                    title
                    video_id
                    thumbnail {
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
}`;
