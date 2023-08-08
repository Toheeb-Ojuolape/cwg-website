import type { Actions } from './$types';

import { createNewsletterAction } from '$lib/create-newsletter-action';

export const actions: Actions = {
	default: createNewsletterAction
};
