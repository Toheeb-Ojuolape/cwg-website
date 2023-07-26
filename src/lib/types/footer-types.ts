export interface Footer {
	headOfficeAddress: string;
	phoneNumber: string;
	emailAddress: string;
	copyright: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	services_title: string;
	sectors_title: string;
	company_title: string;
	insight_title: string;
	community_title: string;
	policy_title: string;
	office_title: string;
	services: Links;
	sectors: Links;
	company_links: Links;
	insight_links: Links;
	community_links: Links;
	policy_links: Links;
	office_links: Links;
}

export interface Links {
	data: Datum[];
}

export interface Datum {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	title: string;
	slug: string;
	subtitle?: null | string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	should_show_esteemed_clients?: null;
}
