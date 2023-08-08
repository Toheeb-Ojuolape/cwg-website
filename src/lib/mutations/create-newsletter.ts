export const CREATE_NEWSLETTER_MUTATION = `
    mutation($email: String!) {
        createNewsletterEmail(data: {email: $email}) {
            data {
                attributes {
                    email
                }
            }
        }
    }
`;
