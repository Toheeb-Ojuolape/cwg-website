import { graphqlClient } from '$lib/api/index.js';
import type { PressRelease } from '$lib/types/common-types.js';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({
	params
}): Promise<{ article: PressRelease['attributes'] }> => {
	const res = await graphqlClient({
		data: {
			query: `{
                articles(filters: {uuid: {eq: "${params.id}"}}) {
                    data {
                        attributes {
                            title
                            content
                            image {
                                data {
                                    attributes {
                                        url
                                    }
                                }
                            }
                            article_date
                            read_duration_mins
                            article_type {
                                data {
                                    attributes {
                                        title
                                    }
                                }
                            }
                            blog {
                                data {
                                    attributes {
                                        title
                                        cover_image {
                                            data {
                                                attributes {
                                                    url
                                                }
                                            }
                                        }
                                        blog_author {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                        preface
                                        slug
                                        date_published
                                        blog_categories {
                                            data {
                                                attributes {
                                                    name
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }`
		}
	});

	if (res.data.data.articles.data.length < 1) {
		throw error(404, 'Article not found');
	}

	return {
		article: res.data.data.articles.data[0].attributes
	};
};
