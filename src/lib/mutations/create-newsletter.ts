export const CREATE_NEWSLETTER_MUTATION = `
    mutation($email: String!, $alerts: JSON) {
        createNewsletterEmail(data: {email: $email, alerts: $alerts}) {
            data {
                attributes {
                    email
                }
            }
        }
    }
`;
