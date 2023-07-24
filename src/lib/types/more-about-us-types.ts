export interface MoreAboutUs {
	title: string;
	createdAt: Date;
	updatedAt: Date;
	publishedAt: Date;
	content: Content[];
}

export interface Content {
	id: number;
	title: string;
	slug: string;
	image: Image;
}

export interface Image {
	data: Data;
}

export interface Data {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	name: string;
	alternativeText: null;
	caption: null;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: null;
	provider: string;
	provider_metadata: null;
	createdAt: Date;
	updatedAt: Date;
}

export interface Formats {
	thumbnail: Large;
	large?: Large;
	small?: Large;
	medium?: Large;
}

export interface Large {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: null;
	size: number;
	width: number;
	height: number;
}
