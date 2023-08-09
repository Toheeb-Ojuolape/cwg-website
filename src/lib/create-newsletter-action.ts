import type { AxiosError } from 'axios';
import { graphqlClient } from './api';
import { CREATE_NEWSLETTER_MUTATION } from './mutations/create-newsletter';

type Payload = {
	email: string;
	alerts?: Record<string, boolean>;
};

export type ActionResponse = {
	error?: string;
	success?: boolean;
};

export const createNewsletterAction = async (
	data: Payload
): Promise<{ error?: string; success?: boolean }> => {
	try {
		const res = await graphqlClient({
			data: {
				query: CREATE_NEWSLETTER_MUTATION,
				variables: data
			}
		});

		if (res.data.errors) {
			return {
				error: res.data.errors.flatMap((e: { message: string }) => e.message).join(', ')
			};
		}

		return { success: true };
	} catch (error) {
		const err = error as AxiosError;
		return { error: err.message };
	}
};
