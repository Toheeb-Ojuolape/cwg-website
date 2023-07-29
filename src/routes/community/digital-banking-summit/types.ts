import type { DataImage } from '$lib/types/common-types';

export interface DigitalSummit {
	header: Header;
	videos_section: VideosSection;
	banking_summit_section: BankingSummitSection;
	conference_image: ConferenceImage;
	registration_section: RegistrationSection;
}

export interface BankingSummitSection {
	title: string;
	images: Images;
	content: string;
}

export interface Images {
	data: DAT[] | null;
}

export interface DAT {
	attributes: Attributes;
}

export interface Attributes {
	alternativeText: null;
	url: string;
}

export interface ConferenceImage {
	data: DAT;
}

export interface Header {
	headline: string;
	title: string;
	description: string;
	right_image: DataImage;
	action: Action;
}

export interface Action {
	title: string;
	slug: string;
}

export interface RegistrationSection {
	title: string;
	action: Action;
	share_text: string;
	enquiries_phone: string;
	location_text: string | null;
	description: null;
	location: string | null;
}

export interface VideosSection {
	title: string;
	video_links: {
		title: string;
		slug: string;
		thumbnail: DataImage;
	}[];
	description: string;
}
