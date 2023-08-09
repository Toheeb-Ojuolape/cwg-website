export const CREATE_JOB_APPLICATION_MUTATION = `
mutation ($first_name: String!, $last_name: String! $email: String!, $phone: String!, $location: String!, $linkedin_profile: String!, $why_cwg: String!, $requires_sponsorship: String!, $gender: String!, $consent_given: Boolean) {
    createJobApplication(
        data: {first_name: $first_name, last_name: $last_name, email: $email, phone: $phone, location: $location, linkedin_profile: $linkedin_profile, why_cwg: $why_cwg, requires_sponsorship: $requires_sponsorship, gender: $gender, consent_given: $consent_given}
    ) {
        data {
            id
        }
    }
}
`;

// $cv: ID, $cover_letter: ID,

// cv: $cv, cover_letter: $cover_letter,
