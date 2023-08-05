export const COUNTRIES_QUERY = `{
    countries {
        data {
            attributes {
                name
                logo {
                    data {
                        attributes {
                            url
                        }
                    }
                }
            }
        }
    }
}`;

export const REGIONS_QUERY = `{
    regions {
        data {
            attributes {
                image {
                    data {
                        attributes {
                            url
                        }
                    }
                }
                name
                email
                address
                content
                region_phone_numbers {
                    data {
                        attributes {
                            phone_number
                            extension
                        }
                    }
                }
            }
        }
    }
}`;
