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
	| ComponentGlobalBlockQuote
	| ComponentProductPageAtmServicesNumbers
	| ComponentProductPageCwgAcademySection
	| ComponentProductPageOurCoursesSection
	| ComponentProductPageChangingTheGameSection
	| ComponentProductPageDeliveryModelSection
	| ComponentProductPageSupportServicesSection
	| ComponentProductPageCwgHardwareSection
	| ComponentProductPageSectionWithImageOverlay
	| ComponentGlobalImageList;

interface Action {
	title: string;
	slug: string;
	icon: DataImage;
}

export enum Position {
	right = 'right',
	left = 'left'
}

export interface ServiceCard {
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

export interface ComponentProductPageAtmServicesNumbers {
	__typename: 'ComponentProductPageAtmServicesNumbers';
	title: string;
	service_numbers: ServiceNumber[];
}

interface ServiceNumber {
	title: StringOrNull;
	content: StringOrNull;
	subtitle: StringOrNull;
	link_slug: StringOrNull;
	link_title: StringOrNull;
	image: DataImage;
}

export interface ComponentProductPageCwgAcademySection {
	__typename: 'ComponentProductPageCwgAcademySection';
	title: StringOrNull;
	body: StringOrNull;
	carousel: Carousel[];
}

interface Carousel {
	title: StringOrNull;
	content: StringOrNull;
	subtitle: StringOrNull;
	link_slug: StringOrNull;
	link_title: StringOrNull;
	image: DataImage;
}

export interface ComponentProductPageOurCoursesSection {
	__typename: 'ComponentProductPageOurCoursesSection';
	title: StringOrNull;
	subtitle: StringOrNull;
	cards: ServiceCard[];
}

export interface ComponentProductPageChangingTheGameSection {
	__typename: 'ComponentProductPageChangingTheGameSection';
	title: StringOrNull;
	content: StringOrNull;
	image: DataImage;
}

export interface ComponentProductPageDeliveryModelSection {
	__typename: 'ComponentProductPageDeliveryModelSection';
	title: StringOrNull;
	content: StringOrNull;
	cards: ServiceCard[];
}

export interface ComponentProductPageSupportServicesSection {
	__typename: 'ComponentProductPageSupportServicesSection';
	title: StringOrNull;
	content: StringOrNull;
	cards: ServiceCard[];
}

interface ComponentProductPageCwgHardwareSection {
	__typename: 'ComponentProductPageCwgHardwareSection';
	title: StringOrNull;
	cards: ServiceCard[];
}

export interface ComponentProductPageSectionWithImageOverlay {
	__typename: 'ComponentProductPageSectionWithImageOverlay';
	title: StringOrNull;
	left_body: StringOrNull;
	right_body: StringOrNull;
	underlay_image: DataImage;
}

export interface ComponentGlobalImageList {
	__typename: 'ComponentGlobalImageList';
	images: {
		data: {
			attributes: {
				alternativeText: StringOrNull;
				url: string;
			};
		}[];
	};
}

export interface ServiceEsteemedClients {
	data: EsteemedClientAttributes[];
}

interface EsteemedClientAttributes {
	attributes: {
		name: string;
		logo: DataImage;
		logo_dark: DataImage;
	};
}
