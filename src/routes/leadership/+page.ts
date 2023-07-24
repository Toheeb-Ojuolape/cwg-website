import { grapgqlClient } from '$lib/api';

export const load = async () => {
	const res = await grapgqlClient({
		data: {
			query: `
            {
                leaderships(filters: {leadership_types: {key: {eq: "board-of-directors"}}}) {
                   data {
                    attributes {
                      name
                      position
                      leadership_types {
                        data {
                          attributes {
                            title
                          }
                        }
                      }
                    }
                  }
                }
              }`
		}
	});

	return { leaderships: res.data.data.leaderships.data };
};
