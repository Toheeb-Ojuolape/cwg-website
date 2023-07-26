export interface FifthlabResponse {
	header: Header;
	sections: Section[];
	product_section_title: string;
	product_section_description: string;
	fifthlab_products: FifthlabProducts;
}

export interface FifthlabProducts {
	data: Datum[];
}

export interface Datum {
	attributes: PurpleAttributes;
}

export interface PurpleAttributes {
	name: string;
	description: string;
	logo: Image;
	link: string;
	link_text: string;
	image: Image;
}

export interface Image {
	data: DAT;
}

export interface DAT {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alt: null;
	url: string;
}

export interface Header {
	title: string;
	sub_title: string;
	sub_headline: string;
	bg_image: BgImage;
	link_text: string;
	link: string;
}

export interface BgImage {
	data: DAT[];
}

export interface Section {
	content: string;
	title: null | string;
	image: Image;
	action: Action | null;
}

export interface Action {
	title: string;
	slug: string;
}
