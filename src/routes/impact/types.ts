export interface ImpactPage {
	header: Header;
	section_one: SectionOne;
	initiatives_section: InitiativesSection;
}

export interface Header {
	headline: string | null;
	title: string;
	description: string;
	background_image: Image;
}

export interface Image {
	data: Data;
}

export interface Data {
	attributes: Attributes;
}

export interface Attributes {
	alternativeText: null;
	url: string;
}

export interface InitiativesSection {
	title: string;
	subtitle: string;
	cards: Card[];
}

export interface Card {
	title: string;
	content: string;
	subtitle: null;
	image: Image;
}

export interface SectionOne {
	content: string;
	image: Image;
	title: string;
}
