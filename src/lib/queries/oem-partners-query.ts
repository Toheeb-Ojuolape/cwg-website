export const OEM_PARTNERS_QUERY = `{
    oemPartners {
        data {
            attributes {
                name
                logo {
                    data {
                        attributes {
                            alternativeText
                            url
                        }
                    }
                }
                logo_dark {
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
}`;
