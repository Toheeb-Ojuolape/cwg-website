import { fail, type RequestEvent } from '@sveltejs/kit';
import type { AxiosError } from 'axios';
import { graphqlClient } from './api';
import { CREATE_NEWSLETTER_MUTATION } from './mutations/create-newsletter';

export const createNewsletterAction = async ({ request }: RequestEvent) => {
	const formData = await request.formData();
	const email = formData.get('email');
	const alerts = formData.get('alerts');

	if (typeof email !== 'string' || !email) {
		return fail(400, { error: 'Enter a valid email address' });
	}

	try {
		const res = await graphqlClient({
			data: {
				query: CREATE_NEWSLETTER_MUTATION,
				variables: { email, alerts }
			}
		});

		if (res.data.errors) {
			return fail(400, {
				error: res.data.errors.flatMap((e: { message: string }) => e.message).join(', ')
			});
		}

		return { success: true };
	} catch (error) {
		const err = error as AxiosError;
		return fail(err.status || 500, {
			error: err.message
		});
	}
};
