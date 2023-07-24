import type { DataImage } from '$lib/types/common-types';

export interface LeadershipType {
	attributes: LeadershipTypeAttributes;
}

export interface LeadershipTypeAttributes {
	title: string;
	key: string;
	leaderships: Leaderships;
}

export interface Leaderships {
	data: Leader[];
}

export interface Leader {
	attributes: DatumAttributes;
}

export interface DatumAttributes {
	name: string;
	position: string;
	excerpt: string;
	slug: string;
	image: Image;
	biography: string;
	social_media: SocialMedia[] | null;
	leadership_types: {
		data: {
			attributes: {
				key: string;
				title: string;
			};
		}[];
	};
}

export interface SocialMedia {
	link: string;
}

export interface Image {
	data: Data;
}

export interface Data {
	attributes: DataAttributes;
}

export interface DataAttributes {
	alternativeText: null;
	url: string;
}

export interface LeadershipPage {
	attributes: Attributes;
}

export interface Attributes {
	header: Header;
}

export interface Header {
	headline: string | null;
	title: string;
	description: string;
	background_image: DataImage;
	right_image: DataImage;
}
