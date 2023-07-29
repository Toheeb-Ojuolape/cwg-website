export interface NavData {
	company_title: string;
	services_title: string;
	sectors_title: string;
	sectors_slug: string;
	community_title: string;
	insight_title: string;
	insight_slug: string;
	fifthlab_title: string;
	fifthlab_slug: string;
	services_links: ServicesLinks;
	community_links: ComyLinks;
	company_links: ComyLinks;
}

export interface ComyLinks {
	data: CommunityLinksDatum[];
}

export interface CommunityLinksDatum {
	id: number;
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	title: string;
	slug: string;
	subtitle: string;
}

export interface ServicesLinks {
	data: ServicesLinksDatum[];
}

export interface ServicesLinksDatum {
	id: number;
	attributes: FluffyAttributes;
}

export interface FluffyAttributes {
	title: string;
	slug: string;
	should_show_esteemed_clients: boolean | null;
	icon: Icon;
}

export interface Icon {
	data: Data;
}

export interface Data {
	id: number;
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: string | null;
	url: string;
}
