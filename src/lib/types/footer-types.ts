export interface FooterData {
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
	services: CommunityLinks;
	sectors: Sectors;
	company_links: CommunityLinks;
	insight_links: CommunityLinks;
	community_links: CommunityLinks;
	policy_links: CommunityLinks;
	office_links: CommunityLinks;
}

export interface CommunityLinks {
	data: CommunityLinksDatum[];
}

export interface CommunityLinksDatum {
	id: number;
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	title: string;
	slug: string;
	subtitle?: null | string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	should_show_esteemed_clients?: null;
}

export interface Sectors {
	data: SectorsDatum[];
}

export interface SectorsDatum {
	id: number;
	attributes: FluffyAttributes;
}

export interface FluffyAttributes {
	title: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	description: string;
	content: string;
}
