export const MAGAZINE_QUERY = `
query ($uuid: String) {
    magazines(filters: {uuid: {eq: $uuid}}) {
        data {
            attributes {
                title
                file {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                issue_date
                cover {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                description
                caption
            }
        }
    }
}`;
