import { apiClient } from '$lib/api';
import { fail, type Actions, ActionFailure } from '@sveltejs/kit';
import type { AxiosError } from 'axios';
import { z } from 'zod';

export const actions: Actions = {
	contactForm: async ({ request }): Promise<ActionFailure<ReturnType> | ReturnType> => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		const safeParse = contactFormSchema.safeParse(data);

		if (!safeParse.success) {
			const errors: FormErrors<ContactForm> = Object.fromEntries(
				Object.entries(safeParse.error.flatten().fieldErrors).map(([key, value]) => [
					key,
					value[0]
				])
			);
			return fail(400, { success: false, errors });
		}

		try {
			await apiClient.post(
				'pitch-for-transformation-contact-us-forms',
				{ data: { ...data, consent: data.consent === 'on' } },
				{
					headers: { 'Content-Type': 'application/json' }
				}
			);

			return { success: true };
		} catch (error) {
			const err = error as AxiosError;
			const errorResponse = err.response?.data as { error?: { message: string } };
			return fail(err.response?.status ?? 400, {
				success: false,
				errors: { form: errorResponse.error?.message ?? err.message }
			});
		}
	}
};

type ReturnType = { success: boolean; errors?: FormErrors<ContactForm> & { form?: string } };

const contactFormSchema = z.object({
	first_name: z.string().min(1, 'First name is required'),
	last_name: z.string().min(1, 'Last name is required'),
	email: z.string().email('Please enter a valid email address'),
	phone_number: z.string().refine((value) => value.length >= 11, {
		message: 'Please enter a valid phone number'
	}),
	subject: z.string().min(1, 'Subject is required'),
	message: z.string().optional(),
	consent: z.union([z.literal('on'), z.literal('off')]).refine((value) => value === 'on', {
		message: 'Please accept the terms and conditions'
	})
});

type ContactForm = z.infer<typeof contactFormSchema>;

type FormErrors<T = object> = { [K in keyof T]?: string };
