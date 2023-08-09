import { graphqlClient } from '$lib/api';
import { CREATE_JOB_APPLICATION_MUTATION } from '$lib/mutations/create-job-application';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { AxiosError } from 'axios';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const data = {
			first_name: formData.get('first_name'),
			last_name: formData.get('last_name'),
			email: formData.get('email'),
			phone: formData.get('phone'),
			location: formData.get('location'),
			// cv: formData.get('cv'),
			// cover_letter: formData.get('cover_letter'),
			linkedin_profile: formData.get('linkedin_profile'),
			why_cwg: formData.get('why_cwg'),
			requires_sponsorship: formData.get('requires_sponsorship'),
			gender: formData.get('gender'),
			consent_given: formData.get('consent_given') === 'on'
		};

		try {
			const res = await graphqlClient({
				data: {
					query: CREATE_JOB_APPLICATION_MUTATION,
					variables: data
				}
			});

			console.log(JSON.stringify(res.data));

			if (res.data.errors) {
				return fail(400, {
					error: res.data.errors.flatMap((e: any) => e.message).join(', ')
				});
			}

			return { success: true };
		} catch (error) {
			console.log(JSON.stringify(error));
			const err = error as AxiosError;
			return fail(err.status ?? 400, { error: err.message });
		}
	}
};
