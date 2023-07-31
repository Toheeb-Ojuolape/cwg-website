import type { DataImage } from '$lib/types/common-types';

type StringOrNull = string | null;

type ActionOrNull = Action | null;

type ImageAttribute = {
	attributes: {
		alternativeText: string;
		url: string;
	};
};

export interface Service {
	title: string;
	slug: string;
	image: DataImage;
	icon: DataImage;
	content: ServiceContent[];
	images_section: { data: ImageAttribute[] };
	should_show_esteemed_clients: boolean;
	esteemed_clients: ServiceEsteemedClients;
}

type ServiceContent =
	| ComponentGlobalPageHeader
	| ComponentGlobalSectionTextWithImage
	| ComponentGlobalSectionWithText
	| ComponentGlobalSectionWithCards
	| ComponentGlobalBlockQuote;

interface Action {
	title: string;
	slug: string;
	icon: DataImage;
}

enum Position {
	right = 'right',
	left = 'left'
}

interface ServiceCard {
	title: string;
	content: string;
	subtitle: StringOrNull;
	link_slug: StringOrNull;
	link_title: StringOrNull;
	image: DataImage;
}

export interface ComponentGlobalPageHeader {
	__typename: 'ComponentGlobalPageHeader';
	headline: string;
	title: string;
	description: string;
	background_image: DataImage;
	right_image: DataImage;
	action: ActionOrNull;
}

export interface ComponentGlobalSectionTextWithImage {
	__typename: 'ComponentGlobalSectionTextWithImage';
	content: string;
	image_position: Position;
	title: string;
	image: DataImage;
	action: ActionOrNull;
}

export interface ComponentGlobalSectionWithText {
	__typename: 'ComponentGlobalSectionWithText';
	sectionWithTextTitle: string;
	sectionWithTextContent: string;
	title_position: Position;
	content_position: Position;
}

export interface ComponentGlobalSectionWithCards {
	__typename: 'ComponentGlobalSectionWithCards';
	sectionWithCardsTitle: string;
	subtitle: string;
	cards: ServiceCard[];
}

export interface ComponentGlobalBlockQuote {
	__typename: 'ComponentGlobalBlockQuote';
	content: string;
	title: StringOrNull;
	action: ActionOrNull;
}

interface ServiceEsteemedClients {
	data: EsteemedClientAttributes[];
}

interface EsteemedClientAttributes {
	attributes: {
		name: string;
		logo: DataImage;
		logo_dark: DataImage;
	};
}
