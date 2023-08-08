export const MORE_ABOUT_US_QUERY = `
more_about_us {
    title
    cards {
        title
        slug
        image {
            data {
                attributes {
                    url
                    alternativeText
                }
            }
        }
    }
}`;
