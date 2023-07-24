export interface PartnersPage {
	header: Header;
	section_one_content: string;
	section_one_images: SectionOneImages;
	section_one_images_dark: SectionOneImages;
	oem_partner_section_title: string;
	oem_partner_section_subtitle: string;
	oem_partners: null;
	support_coverage_section_title: string;
	support_coverage_section_cards: SupportCoverageSectionCard[];
	esteemed_client_section_title: string;
	esteemed_client_section_subtitle: string;
	esteemed_clients: EsteemedClients;
}

export interface EsteemedClients {
	data: Datum[];
}

export interface Datum {
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	logo: BackgroundImage;
	logo_dark: BackgroundImage;
	name: string;
}

export interface BackgroundImage {
	data: DAT | null;
}

export interface DAT {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: null;
	url: string;
}

export interface Header {
	headline: null;
	title: string;
	description: string;
	background_image: BackgroundImage;
}

export interface SectionOneImages {
	data: DAT[];
}

export interface SupportCoverageSectionCard {
	title: string;
	subtitle: null | string;
	image: BackgroundImage;
}
