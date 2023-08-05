import { graphqlClient } from '$lib/api/index.js';
import { JOBS_BY_UUID_QUERY } from '$lib/queries/careers-query';
import { error } from '@sveltejs/kit';
import type { CareerJob } from '../types.js';

export const load = async ({ params }): Promise<{ role: CareerJob }> => {
	const jobs = await graphqlClient({
		data: {
			query: JOBS_BY_UUID_QUERY,
			variables: { uuid: params.roleId }
		}
	}).then((val) => val.data.data.jobs.data);

	if (!jobs || jobs.length === 0) {
		throw error(404, 'Role not found');
	}

	return {
		role: jobs[0]
	};
};
