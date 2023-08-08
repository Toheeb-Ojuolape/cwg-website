import { fail, type RequestEvent } from '@sveltejs/kit';
import type { AxiosError } from 'axios';
import { graphqlClient } from './api';
import { CREATE_NEWSLETTER_MUTATION } from './mutations/create-newsletter';

export const createNewsletterAction = async ({ request }: RequestEvent) => {
	const formData = await request.formData();
	const email = formData.get('email');

	if (typeof email !== 'string' || !email) {
		return fail(400, { error: 'Enter a valid email address' });
	}

	try {
		await graphqlClient({
			data: {
				query: CREATE_NEWSLETTER_MUTATION,
				variables: { email }
			}
		});
		return { success: true };
	} catch (error) {
		const err = error as AxiosError;
		return fail(err.status || 500, {
			error: err.message
		});
	}
};
