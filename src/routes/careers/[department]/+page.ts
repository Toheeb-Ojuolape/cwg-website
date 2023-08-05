import { graphqlClient } from '$lib/api';
import { ALL_JOBS_QUERY, CAREER_DEPARTMENT_PAGE_QUERY } from '$lib/queries/careers-query';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { CareerJob, CareersDepartmentPage } from './types';

export const load = (async ({
	params,
	parent
}): Promise<{ pageData: CareersDepartmentPage; jobs?: CareerJob[] }> => {
	const departments = (await parent()).careersPage.departments.data;

	if (
		params.department !== 'all' &&
		!departments.some((department) => department.attributes.slug === params.department)
	) {
		throw error(404, 'Department not found');
	}

	const page = await graphqlClient({
		data: {
			query: CAREER_DEPARTMENT_PAGE_QUERY
		}
	});

	const jobs = await graphqlClient({
		data: {
			query: ALL_JOBS_QUERY
		}
	}).then((res) => res.data.data.jobs.data);

	return {
		pageData: page.data.data.careersDepartmentPage.data.attributes,
		jobs
	};
}) satisfies PageLoad;
