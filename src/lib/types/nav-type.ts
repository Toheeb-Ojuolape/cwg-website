export type Nav = {
	company_title: string;
	services_title: string;
	sectors_title: string;
	sectors_slug: string;
	community_title: string;
	insight_title: string;
	insight_slug: string;
	fifthlab_title: string;
	fifthlab_slug: string;
	company_links: NavigationLinkData;
	services_links: NavigationLinkData;
	community_links: NavigationLinkData;
};

export type NavigationLink = {
	title: string;
	slug: string;
	subtitle: string;
};

export type NavigationLinkData = {
	data: { attributes: NavigationLink }[];
};
