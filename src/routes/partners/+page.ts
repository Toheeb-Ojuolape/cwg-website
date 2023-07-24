import { grapgqlClient } from '$lib/api';
import type { PageLoad } from './$types';

export const load = (async () => {
	return { name: 'Mi' };
}) satisfies PageLoad;
