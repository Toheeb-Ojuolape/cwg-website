export interface Sector {
	attributes: SectorAttributes;
}

export interface SectorAttributes {
	slug: string;
	header: Header;
	sections: Section[];
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	background_image: Image;
	right_image: Image;
}

export interface Image {
	data: Data | null;
}

export interface Data {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: null;
	url: string;
}

export interface Section {
	content?: string;
	image_position?: string;
	title?: null | string;
	image?: Image;
	swt_title?: string;
	swt_content?: string;
	swt_title_position?: string;
	swt_content_position?: string;
}
