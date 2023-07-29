import { grapgqlClient } from '$lib/api';
import type { MissionPage } from '$lib/types/mission-page';

export const load = async (): Promise<{ missionPage: MissionPage }> => {
	const res = await grapgqlClient({
		data: {
			query: `
            {
                missionVisionPage {
                    data {
                        attributes {
                            header {
                                title
                                description
                                background_image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            mission_vision_section {
                                title
                                content
                                subtitle
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            visions_section {
                                title
                                content
                                subtitle
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            manifesto_section {
                                title
                                image_position
                                content
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            our_values_section {
                                title
                                subtitle
                                values {
                                    title
                                    content
                                    subtitle
                                    image {
                                        data {
                                            attributes {
                                                alternativeText
                                                url
                                            }
                                        }
                                    }
                                }
                            }
                            culture_section_title
                            culture_section_subtitle
                            culture_section_body {
                                content
                                title
                                image_position
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            culture_attributes_section_accordion {
                                title
                                items {
                                    title
                                    content
                                }
                            }
                            culture_attributes_section_image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                            why_cwg_section_image {
                                data {
                                    attributes {
                                        alternativeText
                                        url
                                    }
                                }
                            }
                            why_cwg_section_carousel {
                                title
                                content
                                subtitle
                                image {
                                    data {
                                        attributes {
                                            alternativeText
                                            url
                                        }
                                    }
                                }
                            }
                            policy_section_title
                            policy_section_items {
                                data {
                                    attributes {
                                        title
                                        subtitle
                                        icon {
                                            data {
                                                attributes {
                                                    alternativeText
                                                    url
                                                }
                                            }
                                        }
                                        file {
                                            data {
                                                attributes {
                                                    url
                                                    mime
                                                    ext
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

	return { missionPage: res.data.data.missionVisionPage.data.attributes };
};
