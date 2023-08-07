import { error } from '@sveltejs/kit';

export const load = async ({ params, parent }) => {
	const leaders = (await parent()).allLeaders;
	const leader = leaders.find((leader) => leader.attributes.slug === params.id);

	if (!leader) throw error(404, 'Leader not found');

	return {
		leader
	};
};
